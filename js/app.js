"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const players_1 = require("./routes/players");
const server = (0, fastify_1.default)();
const players = new players_1.Players();
// PLAYERS
players.get(server);
players.post(server);
players.getId(server);
players.patch(server);
players.delete(server);
server.listen(8080, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
