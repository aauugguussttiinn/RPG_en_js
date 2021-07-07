class Game {
  constructor(turnLeft, players) {
      this.turnLeft = turnLeft;
      this.players = players
  }

  newTurn() {
    this.turnLeft > 0 ?  this.turnLeft - 1 : console.log("Game Over")
    if (this.turnLeft === 0) {
      Character.map (function (character) {
        character.status = "winner" ;
        console.log(`${character.name} is a winner`);
      });
    }
    return this.turnLeft
  }

  alivePlayers(players) {
    let stillPlaying = players.filter( player => {
      player.status === "alive"
    })
    return stillPlaying
  }

}

const players = [];

console.log(`So you want to play a game ?`);
console.log(`To begin, each player has to pick up a character`);
console.log('');

const player1 = new Fighter("Grace");
players.push(player1)
const player2 = new Paladin("Ulder");
players.push(player2)
const player3 = new Monk("Moana");
players.push(player3)
const player4 = new Berzerker("Draven");
players.push(player4)
const player5 = new Assassin("Carl");
players.push(player5)


console.log(`Let's start!`);
const newGame = new Game(10, players);

console.log(`Here are our players :`);
console.log(newGame.players);

newGame.newTurn();
console.log('');

const newTurn = new Turn(alivePlayers(players), -1);
newTurn.startTurn(-1, players) ;

