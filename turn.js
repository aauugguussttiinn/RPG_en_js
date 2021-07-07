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
      this.playerChoice(players, currentPlayer);
    }
  }

  playerChoice(players, currentPlayer) {
    let copyOfPlayers = [...players];
    let askAction = prompt('What do you want to do ? Press [X] to attack or [Y] to use your power');
    while (askAction !== "X" && askAction !== "Y") {
      askAction = prompt('Looks like someone mispelled a command. Press [X] to attack or [Y] to use your power');
    }
    if (askAction === 'X') {
      let askVictim = prompt('Write down the name of the player you want to attack');
      let victim = copyOfPlayers.filter(target => {
        return target.name == askVictim ;
      })
      console.log(`${currentPlayer} attacks ${victim}`);
      currentPlayer.dealDamage(victim[0]);
    } else {
      let askVictim = prompt('Write down the name of the player against who you want to use your power');
      console.log('You choose to ');
    }
    console.log(victim[0].hp);
    console.log(victim[0].hp);
  }


  startTurn(turnCount, players) {
    console.log(`It is turn n°${turnCount + 1}`);
    console.log('');
    this.playersPlaying(players);
  }


}
