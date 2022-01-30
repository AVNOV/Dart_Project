class GamePlayer {
    id: number
    gameId: number
    playerId: number
    multiplicator: number
    sector: number
    createdAt: Date
  
    constructor(_id: number, _playerId: number, _gameId: number, _multiplicator: number, _sector: number , _createdAt: Date) {
      this.id = _id
      this.playerId = _playerId
      this.gameId = _gameId
      this.multiplicator = _multiplicator
      this.sector = _sector
      this.createdAt = _createdAt
    }
  }
  
  export { GamePlayer }