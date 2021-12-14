abstract class GameMode {
  constructor(protected id: number, protected createdAt: number, protected currentPlayers: Array<string>) {}
}

export { GameMode }
