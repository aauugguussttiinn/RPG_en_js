class Game {
  constructor(turnLeft, players) {
      this.turnLeft = turnLeft;
      this.players = players
  }

  newTurn(players) {
    if (players.length === 1 || this.turnLeft === 10) {
      console.log("Game Over");
      players.map( player => {
        console.log(`${player.name} is a winner`);
      });
      return false
    } else {
      this.turnLeft + 1 ;
      return true
    }
  }


  alivePlayers() {
    let stillPlaying = this.players.filter(player => player.status === "playing")
    return stillPlaying ;
  }

}


