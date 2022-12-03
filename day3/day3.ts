export const x = "";

const results = await Deno.readTextFile("./day3.txt")
const ruckSacks = results.split("\n")

const array1: never[] = []
function findMatch(first:string, second:string, arrayOfMatches: string[]) {
  for (let i=0; i<first.length; i++){
    if(second.includes(first[i])){
      arrayOfMatches.push(second[second.indexOf(first[i])])
      return
    }
  }
}

for(const halfSack of ruckSacks){
  const halfIndex = Math.floor(halfSack.length / 2)
  const first = halfSack.slice(0, halfIndex);
  const second = halfSack.slice(halfIndex);
  findMatch(first, second, array1);
}

const pointsArray: number[] = []

array1.forEach(convert)

function convert(s:string){
  if(s == s.toLowerCase()){
    const alphaVal = s.toLowerCase().charCodeAt(0) - 96
    pointsArray.push(alphaVal)
  }else{
    const alphaVal = s.toLowerCase().charCodeAt(0) - 96 + 26
    pointsArray.push(alphaVal)
  }
}

let total = 0

for (const k of pointsArray){
  total+= k
}

console.log("Part1:",total)

