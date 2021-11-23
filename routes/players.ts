import { FastifyInstance } from 'fastify'

class Players {

  get(server: FastifyInstance) {
    server.get('/players', async (request, reply) => {
      return 'players\n';
    })
  }

  getId(server: FastifyInstance) {
    server.get('/players/:id', async (request, reply) => {
      reply.send(request.params)
    })
  }

  post(server: FastifyInstance) {
    server.post('/players', async (request, reply) => {
      return 'Post players\n';
    })
  }

  patch(server: FastifyInstance) {
    server.patch('/players/:id', async (request, reply) => {
      reply.send(request.params)
    })
  }

  delete(server: FastifyInstance) {
    server.delete('/players/:id', async (request, reply) => {
      reply.send(request.params)
    })
  }

}

export { Players }
