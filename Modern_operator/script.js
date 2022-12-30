'use strict'

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
//1
  const [player1,player2]=game.players;
  console.log(player1,player2);


  //2
  const [gk1,...fieldPlayers1]=player1;
  console.log(gk1,fieldPlayers1);

  const [gk2,...fieldPlayers2]=player2;
  console.log(gk2,fieldPlayers2);

  //3

  const allPlayers=[...player1,...player2];
  console.log(allPlayers);

//4
  const players1Final=[...player1,'Thiago','Coutinho','Perisic'];
  console.log(players1Final);
//5
//   const {team1,x:draw,team2}=game.odds;  
  //5.2
  const {odds:{team1,x:draw,team2}}=game;

  console.log(team1,draw,team2);

  //6

  const printGoals=function(...players){
    console.log(players);
    console.log(`${players.length} goals scored.`);
  }

  printGoals(...game.scored);

//   const {team1,x,team2}=game.odds;
      team1 < team2 && console.log('team 1 likely win');

// 1
      for(const [i,player] of game.scored.entries()){
        // console.log(score);
        console.log(`Goal ${i +1}: ${player}`)
      }

// 2 
let avarage=0;
for(const value of Object.values(game.odds)){
    avarage +=value/Object.values(game.odds).length;   
}

console.log(avarage);

// 3
// Odd of victory Bayern Munich: 1.33



for(const [team,odd] of  Object.entries(game.odds)){
    const teamStr= team=== 'x' ? 'draw' : `Victory ${game[team]}`
    console.log(`Odd of victory ${teamStr}: ${odd}`);
}

const scorers={

}

for(const player of game.scored){
    scorers[player] ? scorers[player]++ : scorers[player]=1;
    console.log(scorers);

}
console.log(scorers);