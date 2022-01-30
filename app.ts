import fastify from 'fastify'
import { Players } from './routes/players'
import { Games } from './routes/games'

const server = fastify();
const players = new Players();
const games = new Games();
const sqlite3 = require('sqlite3').verbose();
const db_name = "data/app.db";
const sql_create_gameShot = `CREATE TABLE IF NOT EXISTS GameShot (
  Id INTEGER PRIMARY KEY AUTOINCREMENT,
  Game_id INTEGER,
  Player_id INTEGER,
  Multiplicator INTEGER,
  Sector INTEGER,
  Created_at TEXT DEFAULT CURRENT_TIMESTAMP
);`
const sql_create_gamePlayer = `CREATE TABLE IF NOT EXISTS GamePlayer (
  Id INTEGER PRIMARY KEY AUTOINCREMENT,
  Player_id INTEGER,
  Game_id INTEGER,
  Remaining_shots INTEGER,
  Score INTEGER,
  Rank INTEGER,
  Ordre INTEGER,
  In_game INTEGER,
  Created_at TEXT DEFAULT CURRENT_TIMESTAMP
);`
const sql_create_player = `CREATE TABLE IF NOT EXISTS Player (
  Id INTEGER PRIMARY KEY AUTOINCREMENT,
  Name TEXT,
  Email TEXT,
  Game_win INTEGER,
  Game_lost INTEGER,
  Created_at TEXT DEFAULT CURRENT_TIMESTAMP
);` 
const sql_create_game = `CREATE TABLE IF NOT EXISTS Game (
  Id INTEGER PRIMARY KEY AUTOINCREMENT,
  Mode TEXT,
  Name TEXT,
  Current_player_ids TEXT,
  Status TEXT,
  Created_at TEXT DEFAULT CURRENT_TIMESTAMP
);`

// DATABASE
const db = new sqlite3.Database(db_name, (err: Error) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connexion réussie à la base de données 'app.db'");
});
db.run(sql_create_game, (err: Error) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Création réussie de la table 'Game'");
});
db.run(sql_create_gameShot, (err: Error) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Création réussie de la table 'GameShot'");
});
db.run(sql_create_player, (err: Error) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Création réussie de la table 'Player'");
});
db.run(sql_create_gamePlayer, (err: Error) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Création réussie de la table 'GamePlayer'");
});

// PLAYERS
players.get(server, db);
players.post(server, db);
players.getId(server, db);
players.patch(server, db);
players.delete(server, db);

// GAMES 
games.get(server, db);
games.post(server, db);
games.getId(server, db);
games.patch(server, db);
games.delete(server, db);
games.getGamePlayers(server, db);
games.postGamePlayers(server, db);
games.deleteGamePlayers(server, db);
games.postPlayerShot(server, db);
games.deletePreviousShot(server, db);

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
})
