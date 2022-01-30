import { FastifyInstance } from 'fastify'

class Players {

  get(server: FastifyInstance, db: any) {
    server.get('/players', async (request, reply) => {
      const sql = "SELECT * FROM Player"
      db.all(sql, [], (err: Error, rows: any) => { reply.send({ "Players": rows }) })
    })
  }

  getId(server: FastifyInstance, db: any) {
    server.get('/players/:id', async (request, reply) => {
      const req = JSON.stringify(request.params)
      const id = JSON.parse(req).id
      const sql = `SELECT * FROM Player WHERE Id = ?`
      db.all(sql, id, (err: Error, rows: any) => { reply.send({ Player: rows[0] }) })
    })
  }

  post(server: FastifyInstance, db: any) {
    server.post('/players', async (request, reply) => {
      const body = JSON.stringify(request.body)
      const { name, email, Game_win, Game_lost } = JSON.parse(body)
      const sql = "INSERT INTO Player (Name, Email, Game_win, Game_lost) VALUES (?, ?, ?, ?)"
      db.run(sql, [name, email, Game_win, Game_lost], (err: Error) => {
        if (err) {
          console.log(err)
        }
        reply.redirect("/players")
      })
    })
  }

  patch(server: FastifyInstance, db: any) {
    server.patch('/players/:id', async (request, reply) => {
      const req = JSON.stringify(request.params)
      const id = JSON.parse(req).id
      const body = JSON.stringify(request.body)
      const { name, email, Game_win, Game_lost } = JSON.parse(body)
      const data = [name, email, Game_win, Game_lost, id]
      const sql = "UPDATE Player SET name = ?, email = ?, Game_win = ?, Game_lost = ? WHERE Id = ?"
      db.run(sql, data, (err: Error) => { reply.redirect("/players"); })
    })
  }

  delete(server: FastifyInstance, db: any) {
    server.delete('/players/:id', async (request, reply) => {
      const req = JSON.stringify(request.params)
      const id = JSON.parse(req).id
      const sql = 'DELETE FROM Player WHERE Id = ?';
      db.run(sql, id, (err: Error) => { reply.redirect("/players") });
    })
  }
}

export { Players }
