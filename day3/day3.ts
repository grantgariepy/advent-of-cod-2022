export const x = "";

const results = await Deno.readTextFile("./day3.txt")
const ruckSacks = results.split("\n")

// part 1
const letterArray: never[] = []

function findMatch(first:string, second:string, letterArray: string[]) {
  for (let i=0; i<first.length; i++){
    if(second.includes(first[i])){
      letterArray.push(second[second.indexOf(first[i])])
      return
    }
  }
}

for(const halfSack of ruckSacks){
  const halfIndex = Math.floor(halfSack.length / 2)
  const first = halfSack.slice(0, halfIndex);
  const second = halfSack.slice(halfIndex);
  findMatch(first, second, letterArray);
}

const pointsArray: number[] = []

letterArray.forEach(convert)

function convert(s:string){
  if(s == s.toLowerCase()){
    const alphaVal = s.toLowerCase().charCodeAt(0) - 96
    pointsArray.push(alphaVal)
  }else{
    const alphaVal = s.toLowerCase().charCodeAt(0) - 96 + 26
    pointsArray.push(alphaVal)
  }
}

let total1 = 0

for (const k of pointsArray){
  total1 += k
}
// part 2
const thirdMatchArray: never[] = []
function findMatchThird(first:string, second:string, third:string, thirdMatchArray:string[]){
  for (let i=0; i<first.length;i++){
    if (second.includes(first[i])){
      if(third.includes(second[second.indexOf(first[i])])){
        thirdMatchArray.push(third[third.indexOf(first[i])])
        return
      }
    }
  }
}

for (let i=0; i<ruckSacks.length; i+=3){
  const first = ruckSacks[i]
  const second = ruckSacks[i+1]
  const third = ruckSacks[i+2]
  findMatchThird(first, second, third, thirdMatchArray)
}
const pointsArrayPartTwo: number[] = []

thirdMatchArray.forEach(convertThird)

function convertThird(s:string){
  if(s == s.toLowerCase()){
    const alphaVal = s.toLowerCase().charCodeAt(0) - 96
    pointsArrayPartTwo.push(alphaVal)
  }else{
    const alphaVal = s.toLowerCase().charCodeAt(0) - 96 + 26
    pointsArrayPartTwo.push(alphaVal)
  }
}

let total2 = 0

for (const p of pointsArrayPartTwo){
  total2 +=p
}
console.log("Part1:",total1, "Part2:",total2)