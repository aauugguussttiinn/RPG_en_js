
console.log(`So you want to play a game ?`);
console.log(`To begin, each player has to pick up a character`);
console.log('');

const Grace = new Fighter("Grace");
const Ulder = new Paladin("Ulder");
const Moana = new Monk("Moana");
const Draven = new Berzerker("Draven");
const Carl = new Assassin("Carl");
let players = [Grace, Ulder, Moana, Draven, Carl];


console.log(`Let's start!`);
const newGame = new Game(0, players);
const startTurn = new Turn(newGame.alivePlayers(), newGame.turnLeft);

console.log(`Here are our players :`);
console.log(newGame.players);
console.log('');


while (newGame.newTurn(newGame.alivePlayers())) {
  startTurn.startTurn();
  startTurn.eachPlayersTurn(newGame.alivePlayers());
  startTurn.turnCount += 1 ;
  startTurn.resetdarkVisionProtection(newGame.alivePlayers());
}



