import { FastifyInstance } from 'fastify'

class Games {

  get(server: FastifyInstance, db: any) {
    server.get('/games', async (request, reply) => {
      const sql = "SELECT * FROM Game"
      db.all(sql, [], (err: Error, rows: any) => { reply.send({ "Games": rows }) })
    })
  }

  getId(server: FastifyInstance, db: any) {
    server.get('/games/:id', async (request, reply) => {
      const req = JSON.stringify(request.params)
      const id = JSON.parse(req).id
      const sql = `SELECT * FROM Game WHERE Id = ?`
      db.all(sql, id, (err: Error, rows: any) => { reply.send({ Game: rows[0] }) })
    })
  }

  post(server: FastifyInstance, db: any) {
    server.post('/games', async (request, reply) => {
      const body = JSON.stringify(request.body)
      const { mode, name, current_player_ids, status } = JSON.parse(body)
      const sql = "INSERT INTO Game (Mode, Name, Current_player_ids, Status) VALUES (?, ?, ?, ?)"
      db.run(sql, [mode, name, current_player_ids, status], (err: Error) => {
        if (err) {
          console.log(err)
        }
        reply.redirect("/games")
      })
    })
  }

  patch(server: FastifyInstance, db: any) {
    server.patch('/games/:id', async (request, reply) => {
      const req = JSON.stringify(request.params)
      const id = JSON.parse(req).id
      const body = JSON.stringify(request.body)
      const { mode, name, current_player_ids, status } = JSON.parse(body)
      const data = [mode, name, current_player_ids, status, id]
      const sql = "UPDATE Game SET Mode = ?, Name = ?, Current_player_ids = ?, Status = ? WHERE Id = ?"
      db.run(sql, data, (err: Error) => { reply.redirect(`/games/${id}`); })
    })
  }

  delete(server: FastifyInstance, db: any) {
    server.delete('/games/:id', async (request, reply) => {
      const req = JSON.stringify(request.params)
      const id = JSON.parse(req).id
      const sql = 'DELETE FROM Game WHERE Id = ?';
      db.run(sql, id, (err: Error) => { reply.redirect("/games") });
    })
  }

  getGamePlayers(server: FastifyInstance, db: any) {
    server.get('/games/:id/players', async (request, reply) => {
      reply.send('players')
    })
  }

  postGamePlayers(server: FastifyInstance, db: any) {
    server.post('/games/:id/players', async (request, reply) => {
      reply.send('Post games players\n');
    })
  }

  deleteGamePlayers(server: FastifyInstance, db: any) {
    server.delete('/games/:id/players', async (request, reply) => {
      reply.send("delete")
    })
  }

  postPlayerShot(server: FastifyInstance, db: any) {
    server.post('/games/:id/shots', async (request, reply) => {
      reply.send('Post player Shot pts\n');
    })
  }

  deletePreviousShot(server: FastifyInstance, db: any) {
    server.delete('/games/:id/shots/previous', async (request, reply) => {
      reply.send("delete previous Shot")
    })
  }
}

export { Games }
