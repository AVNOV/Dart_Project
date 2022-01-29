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
  for (let i = 0; i < names.length; i++) {
    names[i] = names[i].trim()
    if (names[i] == "") {
      names.splice(i)
    }
  }
  if (names.length < 2) {
    console.log("Vous devez être au moins 2 joueurs pour jouer !")
    rl.close()
  }
  rl.question('Veuillez choisir le mode de jeu : \n 1. Le 301 \n 2. Le tour du Monde \n 3. Le Cricket\n', function (number: string) {
    switch (number) {
      case '1':
        const game301 = new Game301(1, Date.now(), names)
        console.log(`Vous avez choisi le jeu : ${game301.getName()}`)
        game301.start(names)
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
