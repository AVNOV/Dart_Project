"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const players_1 = require("./routes/players");
const games_1 = require("./routes/games");
const server = (0, fastify_1.default)();
const players = new players_1.Players();
const games = new games_1.Games();
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
});
