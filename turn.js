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

  playersPlaying(players) {
    let copyOfPlayers = [...players];
    while (copyOfPlayers.length !== 0) {
      let currentPlayer = this.playerPick(copyOfPlayers);
      copyOfPlayers = copyOfPlayers.filter(function(player) {
        return player !== currentPlayer ;
      });
      this.playerTurn(players, currentPlayer);
    }
  }

  playerTurn(players, currentPlayer) {
    let copyOfPlayers = [...players];
    let askAction = prompt('What do you want to do ? Press [X] to attack or [Y] to use your power');
    while (askAction !== "X" && askAction !== "Y") {
      askAction = prompt('Looks like someone mispelled a command. Press [X] to attack or [Y] to use your power');
    }
    let askVictim = prompt('Write down the name of the player you want to attack');
    let victim = copyOfPlayers.filter(target => {
      return target.name == askVictim ;
    });
    victim = victim[0];
    console.log(`${currentPlayer.name} attacks ${victim.name}`);
    if (askAction === 'X') {
      currentPlayer.dealDamage(victim);
      console.log(`He deals him ${currentPlayer.dmg} damages`);
    } else {
      console.log('Power action is still to be coded');
      console.log(`He deals him ${currentPlayer.dmg} damages`);
    }
    console.log(`${victim.name} has ${victim.hp} lifepoints left`);
    victim.isDead();
    console.log('');
  }


  startTurn(turnCount, players) {
    console.log(`>>>>>>>>>> It is turn n°${turnCount + 1} <<<<<<<<<<`);
    console.log('');
    this.playersPlaying(players);
  }


}
