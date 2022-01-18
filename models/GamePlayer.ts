class GamePlayer {
    id: number
    playerId: number
    gameId: number
    remainingShots: number
    score: number
    rank: number
    ordre: number
    inGame: boolean
    createdAt: Date
  
    constructor(_id: number, _playerId: number, _gameId: number, _remainingShots: number, _score: number, _rank: number, _ordre: number, _inGame: boolean, _createdAt: Date) {
      this.id = _id
      this.playerId = _playerId
      this.gameId = _gameId
      this.remainingShots = _remainingShots
      this.score = _score
      this.rank = _rank
      this.ordre = _ordre
      this.inGame = _inGame
      this.createdAt = _createdAt
    }
  }
  
  export { GamePlayer }