import { GameMode } from "../gamemode";

class AroundTheWorld extends GameMode {
  protected name: string;
  protected status: string;

  constructor(id: number, createdAt: number, currentPlayers: Array<string>) {
    super(id, createdAt, currentPlayers);
    this.name = "Le tour du Monde";
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
    
    let i = 0;
    let throwedDart = 1;
    let finish = false;
    let playersList = [];
    const zoneToHit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    for (let toList = 0; toList < this.getPlayers().length; toList++) {
      playersList.push({ name: this.getPlayers()[toList], score: 0 });
    }
    console.log(`Le joueur 1 va commencer, ${playersList[i].name} soit prêt`);

    while (!finish) {
      if (i === (playersList.length + 1)) {
        i = 0;
      }
      console.log('\n');
      console.log('\n');
      console.log(`${playersList[i].name} à toi de faire t'es 3 lancés !`);
      throwedDart = 1;
      while (throwedDart <= 3) {
        console.log('')
        console.log(`${i} tir :`)
        console.log('Tu tire...')
        let random = Math.floor(Math.random() * zoneToHit.length);
        let targetHit = zoneToHit[random];
        let score = targetHit;
        if (score == (playersList[i].score + 1)) {
          console.log(`Bien joué ${playersList[0].name}  as touché la bonne cible.`);
          playersList[i].score = score;
          if (playersList[i].score === 20) {
            console.log(`BRAVO ${playersList[0].name} ! as gagné la partie !`);
            finish = true;
            throwedDart = 4;
            break;
          }
          ++i;
          break;
        }
        else if (score != (playersList[i].score + 1)) {
          if (throwedDart === 3) {
            console.log(`${playersList[i].name} n'as plus de fléchette et as raté son tour !`);
            ++i;
            break;
          }
          console.log(`Cible raté, retente ta change ! Tu dois toucher la zone ${playersList[i].score + 1}`);
          ++throwedDart;
        }
      }
    }
  }
}

export { AroundTheWorld }
