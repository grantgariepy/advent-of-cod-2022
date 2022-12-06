const results = await Deno.readTextFile("./day5.txt")
const directions = results.split('\n')

const megaArray = [
  ['W', 'B', 'D','N','C','F','J'],
  ['P', 'Z', 'V','Q','L','S','T'],
  ['P','Z','B','G','J','T'],
  ['D','T','L','J','Z','B','H','C'],
  ['G','V','B','J','S'],
  ['P','S','Q'],
  ['B', 'V', 'D', 'F','L', 'M','P','N'],
  ['P', 'S', 'M', 'F','B','D','L','R'],
  ['V','D','T','R']
]
// part1
function repeatPush(times:number, fromArray:any, toArray:any){
  for(let i = 0; i < times; i++){
    const lastElement = fromArray.length - 1;
    toArray.push(fromArray[lastElement])
    fromArray.pop()
  }
}
// part2
// function repeatPush(times:number, fromArray:any, toArray:any){
//     const sliceSpot = fromArray.length - times
//     const tempArray = fromArray.slice(-times, fromArray.length )
//     toArray.push(...tempArray)
//     fromArray.splice(sliceSpot, times)
// }

for(const movement in directions){
  const amount = directions[movement].split(' ')
  const times = Number(amount[1])
  const from = Number(amount[3]) - 1
  const to = Number(amount[5]) - 1
  const fromArray = megaArray[from]
  const toArray = megaArray[to]

  repeatPush(times, fromArray, toArray)
}
console.log(megaArray)


