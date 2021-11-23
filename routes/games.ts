import { FastifyInstance } from 'fastify'

class Games {

  get(server: FastifyInstance) {
    server.get('/games', async (request, reply) => {
      reply.send('games\n');
    })
  }

  getId(server: FastifyInstance) {
    server.get('/games/:id', async (request, reply) => {
      reply.send(request.params)
    })
  }

  post(server: FastifyInstance) {
    server.post('/games', async (request, reply) => {
      reply.send('Post games\n');
    })
  }

  patch(server: FastifyInstance) {
    server.patch('/games/:id', async (request, reply) => {
      reply.send(request.params)
    })
  }

  delete(server: FastifyInstance) {
    server.delete('/games/:id', async (request, reply) => {
      reply.send(request.params)
    })
  }

  getGamePlayers(server: FastifyInstance) {
    server.get('/games/:id/players', async (request, reply) => {
      reply.send('players')
    })
  }

  postGamePlayers(server: FastifyInstance) {
    server.post('/games/:id/players', async (request, reply) => {
      reply.send('Post games players\n');
    })
  }

  deleteGamePlayers(server: FastifyInstance) {
    server.delete('/games/:id/players', async (request, reply) => {
      reply.send("delete")
    })
  }

  postPlayerShot(server: FastifyInstance) {
    server.post('/games/:id/shots', async (request, reply) => {
      reply.send('Post player Shot pts\n');
    })
  }

  deletePreviousShot(server: FastifyInstance) {
    server.delete('/games/:id/shots/previous', async (request, reply) => {
      reply.send("delete previous Shot")
    })
  }
}

export { Games }
