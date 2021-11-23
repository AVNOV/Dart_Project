import fastify from 'fastify'
import { Players } from './routes/players'
import { Games } from './routes/games'

const server = fastify();
const players = new Players();
const games = new Games();

// PLAYERS
players.get(server);
players.post(server);
players.getId(server);
players.patch(server);
players.delete(server);

// GAMES 
games.get(server);
games.post(server);
games.getId(server);
games.patch(server);
games.delete(server);
games.getGamePlayers(server);
games.postGamePlayers(server);
games.deleteGamePlayers(server);
games.postPlayerShot(server);
games.deletePreviousShot(server);

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
})
