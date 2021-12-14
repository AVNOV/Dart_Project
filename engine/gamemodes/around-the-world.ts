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
}

export { AroundTheWorld }
