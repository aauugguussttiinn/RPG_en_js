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
    players.map(player => player.hasplayed = false);
  }

  playerTurn(players, currentPlayer) {
    this.playersinfo(players, currentPlayer);

    let askVictim = prompt('Write down the name of the player you want to target');
    let victim = players.filter(player => {
      return player.name === askVictim ;
    });
    victim = victim[0];
    console.log(`${currentPlayer.name} targets ${victim.name}`);

    let askAction = prompt('What do you want to do ? Press [X] to attack or [Y] to use your power');
    while (askAction !== "X" && askAction !== "Y") {
      askAction = prompt('Looks like someone mispelled a command. Press [X] to attack or [Y] to use your power');
    }

    if (askAction === 'X') {
      if (victim instanceof Fighter && victim.useddarkVision === true) {
        victim.takeDamage(currentPlayer);
      } else {
        currentPlayer.dealDamage(victim);
      }
    } else {
      if (currentPlayer.manaCheckForSuper() === true ) {
        currentPlayer.usesSuper(currentPlayer, victim);
      } else {
        console.log('Sorry, not enough mana to use magic. You will simply attack your target');
        currentPlayer.dealDamage(victim);
      }
    }

    console.log(`${victim.name} has ${victim.hp} lifepoints left`);
    victim.isDead();
    currentPlayer.hasplayed = true ;
    console.log('');
  }
  
  playersinfo(players, currentPlayer) {
    let seeDetails = prompt(`Hi ${currentPlayer.name} ! Do you want to see a player details ? ? If so, enter [Y], else enter [N]`);
    while (seeDetails !== "N" && seeDetails !== "Y") {
      seeDetails = prompt('Looks like someone mispelled a command. Just type [Y] to see a player details or [N] to skip');
    }
    while (seeDetails === "Y") {
      console.log(players.map(player => player.name));
      let askPlayer = prompt('Write down the name of the player you want to know more about');
      let selectedPlayer = players.filter(player => {
        return player.name === askPlayer ;
      });
      selectedPlayer = selectedPlayer[0];
      newGame.watchStats(selectedPlayer);
      seeDetails = prompt('Do you want to see a player details ? ? If so, enter [Y], else enter [N]');
    }
  }

  startTurn() {
    console.log(`>>>>>>>>>> It is turn n°${this.turnCount + 1} <<<<<<<<<<`);
    console.log('');
  }

  resetdarkVisionProtection(alivePlayers) {
    alivePlayers.map(player => {
      if (player instanceof Fighter) {
        player.useddarkVision = false ;
      }
    });
  }


}
