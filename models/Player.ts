class Player {
  id: number
  name: String
  email: String
  gameWin: number
  gameLost: number
  createdAt: Date

  constructor(_id: number, _name: string, _email: string, _gameWin: number, _gameLost: number, _createdAt: Date) {
    this.id = _id
    this.name = _name
    this.email = _email
    this.gameWin = _gameWin
    this.gameLost = _gameLost
    this.createdAt = _createdAt
  }
}

export { Player }