class Turn {
  constructor(players, turnCount) {
    this.players = players;
    this.turnCount = turnCount;
  }

  playerPick(players) {
    let random = Math.floor(Math.random() * players.length);
    let randomPlayer = players[random];
    console.log(`It is time for ${ randomPlayer.name } to play`);
    return randomPlayer;
  }

  playerAliveAndHaventPlayed(playerstocheck) {
    return playerstocheck.filter(player => player.hasplayed === false && player.status !== "looser");
  }

  eachPlayersTurn(players) {
    while (this.playerAliveAndHaventPlayed(players).length !== 0) {
      let currentPlayer = this.playerPick(this.playerAliveAndHaventPlayed(players));
      players = newGame.alivePlayers();
      this.playerTurn(players, currentPlayer);
    }
  }

  playerTurn(players, currentPlayer) {
    let askAction = prompt('What do you want to do ? Press [X] to attack or [Y] to use your power');
    while (askAction !== "X" && askAction !== "Y") {
      askAction = prompt('Looks like someone mispelled a command. Press [X] to attack or [Y] to use your power');
    }
    console.log(players);
    let askVictim = prompt('Write down the name of the player you want to attack');
    let victim = players.filter(player => {
      return player.name === askVictim ;
    });
    victim = victim[0];
    console.log(`${currentPlayer.name} attacks ${victim.name}`);

    if (askAction === 'X') {
      currentPlayer.dealDamage(victim);
    } else {
      console.log('Power action is still to be coded');
      console.log(`He deals him ${currentPlayer.dmg} damages`);
    }
    console.log(`${victim.name} has ${victim.hp} lifepoints left`);
    victim.isDead();
    currentPlayer.hasplayed = true ;
    console.log('');
  }
  



  startTurn() {
    console.log(`>>>>>>>>>> It is turn n°${this.turnCount + 1} <<<<<<<<<<`);
    console.log('');
  }


}
