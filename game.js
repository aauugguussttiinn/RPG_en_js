class Game {
  constructor(turnLeft, players) {
      this.turnLeft = turnLeft;
      this.players = players
  }

  newTurn(players) {
    if (this.turnLeft < 10) {
      this.turnLeft + 1
      return this.turnLeft
    } else {
      console.log("Game Over")
      players.map( player => {
        console.log(`${player.name} is a winner`);
      });
    }
  }

  alivePlayers() {
    let stillPlaying = this.players.filter(player => player.status === "playing")
    return stillPlaying ;
  }

}


