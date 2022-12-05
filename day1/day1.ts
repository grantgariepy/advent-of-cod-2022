export const x = "";

const results = await Deno.readTextFile("./day1.txt")

const caloriesByElf = results.split("\n\n")

const totals = caloriesByElf.map(calories => {
  return calories.split('\n').reduce((acc,x) => Number(acc) + Number(x), 0)
})

const topThreeElves = totals.sort((a,b)=> a-b).slice(totals.length - 3)

const grandTotal = topThreeElves.reduce((acc, x) => acc + x, 0)

console.log("Part1:",totals.sort((a,b)=> a-b)[totals.length -1], "Part2:", grandTotal)