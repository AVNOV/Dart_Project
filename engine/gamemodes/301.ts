import { GameMode } from "../gamemode";
import $ from 'jquery';
import { setInterval } from "timers";

class Game301 extends GameMode {
  protected name: string;
  protected status: string;

  constructor(id: number, createdAt: number, currentPlayers: Array<string>) {
    super(id, createdAt, currentPlayers);
    this.name = "Le 301";
    this.status = "Brouillon"
  }

  getId(): number {
    return this.id
  }

  getName(): string {
    return this.name
  }

  getDate(): number {
    return this.createdAt
  }

  getStatus(): string {
    return this.status
  }

  setStatus(status: string): void {
    this.status = status
  }

  getPlayers(): Array<string> {
    return this.currentPlayers
  }

  setPlayers(players: Array<string>) {
    this.currentPlayers = players
  }

  public start(playersTab: Array<string>) {
    this.setStatus("start")
    this.setPlayers(playersTab)
    let players = []
    for (let i = 0; i < this.getPlayers().length; i++) {
      players.push({ name: this.getPlayers()[i], score: 301 })
    }
    console.log(`Le jouer 1 va commencer, ${players[0].name} soit prêt`)
    let finish = false
    const nbDart = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 50];
    let playerStart = 1
    while (!finish) {
      console.log('\n')
      console.log('\n')
      playerStart === 1 ? console.log(`${players[0].name} à toi de faire t'es 3 lancés`) : console.log(`${players[1].name} à toi de faire t'es 3 lancés`)
      for (let i = 1; i < 4; i++) {
        console.log('')
        console.log(`${i} tir :`)
        console.log('Tu tire...')
        let random = Math.floor(Math.random() * nbDart.length);
        let targetHit = nbDart[random];
        let multi = Math.floor(Math.random() * (3 - 1)) + 1
        let score = targetHit * multi
        console.log(`Félicitation tu as marqué ${score} points`)
        if (playerStart === 1) {
          if (players[0].score - score < 0) {
            console.log('Malheureusement, tu as dépassé 0, retente ta change 😉')
          } else {
            players[0].score = players[0].score - score
            if (players[0].score === 0) {
              i = 4
            } else {
              console.log(`Voici ton score total : ${players[0].score}`)
            }
          }
        } else {
          if (players[1].score - score < 0) {
            console.log('Malheureusement, tu as dépassé 0, retente ta change 😉')
          } else {
            players[1].score = players[0].score - score
            if (players[1].score === 0) {
              i = 4
            } else {
              console.log(`Voici ton score total : ${players[1].score}`)
            }
          }
        }
      }
      playerStart === 1 ? playerStart = 2 : playerStart = 1
      players.forEach((player) => {
        if (player.score === 0) {
          console.log(`Félications ${player.name} tu as gagné 🎆🎆🎆`)
          finish = true
        }
      })
    }
  }
}

export { Game301 }
