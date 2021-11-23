"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Games = void 0;
class Games {
    get(server) {
        server.get('/games', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            reply.send('games\n');
        }));
    }
    getId(server) {
        server.get('/games/:id', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            reply.send(request.params);
        }));
    }
    post(server) {
        server.post('/games', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            reply.send('Post games\n');
        }));
    }
    patch(server) {
        server.patch('/games/:id', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            reply.send(request.params);
        }));
    }
    delete(server) {
        server.delete('/games/:id', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            reply.send(request.params);
        }));
    }
    getGamePlayers(server) {
        server.get('/games/:id/players', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            reply.send('players');
        }));
    }
    postGamePlayers(server) {
        server.post('/games/:id/players', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            reply.send('Post games players\n');
        }));
    }
    deleteGamePlayers(server) {
        server.delete('/games/:id/players', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            reply.send("delete");
        }));
    }
    postPlayerShot(server) {
        server.post('/games/:id/shots', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            reply.send('Post player Shot pts\n');
        }));
    }
    deletePreviousShot(server) {
        server.delete('/games/:id/shots/previous', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            reply.send("delete previous Shot");
        }));
    }
}
exports.Games = Games;
