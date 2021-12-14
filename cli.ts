import { Cricket } from './engine/gamemodes/cricket';
import { Game301 } from './engine/gamemodes/301';
import { AroundTheWorld } from './engine/gamemodes/around-the-world';

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Entrez le nom des joueurs avec des "," entre chaque nom :\n`, function (name: string) {
  let names = name.split(',')
  rl.question('Veuillez choisir le mode de jeu : \n 1. Le 301 \n 2. Le tour du Monde \n 3. Le Cricket\n', function (number: string) {
    switch (number) {
      case '1':
        const game301 = new Game301(1, Date.now(), names)
        console.log(`Vous avez choisi le jeu : ${game301.getName()}`)
        break;
      case '2':
        const aroundtheworld = new AroundTheWorld(1, Date.now(), names)
        console.log(`Vous avez choisi le jeu : ${aroundtheworld.getName()}`)
        break;
      case '3':
        const cricket = new Cricket(1, Date.now(), names)
        console.log(`Vous avez choisi le jeu : ${cricket.getName()}`)
        break;
      default:
        console.log("Veuillez recommencer et entrer un chiffre correct")
        rl.close()
    }
  })
})

rl.on("close", function () {
  process.exit(0);
});
