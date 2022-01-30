# Dart_Project

## Bienvenue sur le projet Dart voici les informations à savoir : 
Pour commencer pour installer le jeu voici la commande après avoir cloné le repo `npm install`

Il suffit ensuite de faire `npm start` pour mettre en démarrer l'API et `node ./js/cli.js` pour démarrer le CLI. 

## Voici maintenant les différentes routes pour comprendre le fonctionnement de l'API : 

`/players`

**GET** : 
Permet de récupérer tous les joueurs inscrits.

**POST** :
Permet d'inscrire un joueur.

------------
`/players/:id`

**GET** :
Permet de récupérer un joueur en particulier.

**PATCH** :
Permet de modifier un joueur.

**DELETE** :
Permet de supprimer un joueur.

------------
`/games`

**GET** :
Permet de récupérer toutes les parties.

**POST** :
Permet de créer une partie.

------------
`/games/:id`

**GET** :
Permet de récupérer une partie en particulier.

**PATCH** :
Permet de modifier une partie.

**DELETE** :
Permet de supprimer une partie.

------------
`/games/:id/players`

**GET** :
Permet de récupérer les joueurs d'une partie.

**POST** :
Permet d'ajouter un joueur à une partie.

**DELETE** :
Permet de supprimer un joueur d'une partie.

------------
`/games/:id/shots`

**POST** :
Permet de tirer une fléchette.

------------
`/games/:id/shots/previous`

**DELETE** :
Permet d'annuler le tire précédent.





