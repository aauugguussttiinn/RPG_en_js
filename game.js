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

  watchStats(alivePlayers) {
    alivePlayers.map(player => {
      console.log(`Here are ${player.name} details`)
      console.log(`Name : ${player.name}`);
      console.log(`Status : ${player.status}`);
      console.log(`Healthpoints : ${player.hp}`);
      console.log(`Damage : ${player.dmg}`);
      console.log('');
    });
  }

}


