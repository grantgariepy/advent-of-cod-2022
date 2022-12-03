export const x = "";

const results = await Deno.readTextFile("./day2.txt")
const games = results.split("\n")

let score1 = 0
let score2 = 0


// console.log(games)
for(const game of games){

  switch(game){
    case "A X":
      score1 += 4
      score2 += 3
      break;
    case "A Y":
      score1 += 8
      score2 += 4
      break;
    case "A Z":
      score1 += 3
      score2 += 8
      break;
    case "B X":
      score1 += 1
      score2 += 1
      break;
    case "B Y":
      score1 += 5
      score2 += 5
      break;
    case "B Z":
      score1 += 9
      score2 += 9
      break;
    case "C X":
      score1 += 7
      score2 += 2
      break;
    case "C Y":
      score1 += 2
      score2 += 6
      break;
    case "C Z":
      score1 += 6
      score2 += 7
  }
}

console.log('score1:', score1, 'score2:', score2)