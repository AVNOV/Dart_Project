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
exports.Players = void 0;
class Players {
    get(server) {
        server.get('/players', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return 'players\n';
        }));
    }
    getId(server) {
        server.get('/players/:id', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            reply.send(request.params);
        }));
    }
    post(server) {
        server.post('/players', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return 'Post players\n';
        }));
    }
    patch(server) {
        server.patch('/players/:id', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            reply.send(request.params);
        }));
    }
    delete(server) {
        server.delete('/players/:id', (request, reply) => __awaiter(this, void 0, void 0, function* () {
            reply.send(request.params);
        }));
    }
}
exports.Players = Players;
