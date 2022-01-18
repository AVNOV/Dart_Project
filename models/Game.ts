class Game {
  id: number
  mode: String
  name: String
  currentPlayerIds: string
  status: String
  createdAt: Date

  constructor(_id: number, _mode: string, _name: string, _currentPlayerIds: string, _status: String, _createdAt: Date) {
    this.id = _id
    this.mode = _mode
    this.name = _name
    this.currentPlayerIds = _currentPlayerIds
    this.status = _status
    this.createdAt = _createdAt
  }
}

export { Game }