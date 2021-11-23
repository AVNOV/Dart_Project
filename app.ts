import fastify from 'fastify'
import { Players } from './routes/players'

const server = fastify();
const players = new Players();

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
})
