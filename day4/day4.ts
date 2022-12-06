const results = await Deno.readTextFile("./day4.txt")
const allAssignments = results.split("\n")
let count1 = 0
let count2 = 0
for (const assignment in allAssignments){
  const splitAssignment = allAssignments[assignment].split(',')
  const firstAssignmentSplit = splitAssignment[0].split('-')
  const secondAssignmentSplit = splitAssignment[1].split('-')
  if (Number(firstAssignmentSplit[0]) <= Number(secondAssignmentSplit[0]) 
      && Number(firstAssignmentSplit[1]) >= Number(secondAssignmentSplit[1])
      || Number(secondAssignmentSplit[0]) <= Number(firstAssignmentSplit[0])
      && Number(secondAssignmentSplit[1]) >= Number(firstAssignmentSplit[1])){
    count1++
  }
  if (Number(firstAssignmentSplit[0]) <= Number(secondAssignmentSplit[0]) 
      && Number(firstAssignmentSplit[1]) >= Number(secondAssignmentSplit[0])
      || Number(secondAssignmentSplit[0]) <= Number(firstAssignmentSplit[0])
      && Number(secondAssignmentSplit[1]) >= Number(firstAssignmentSplit[0])){
    count2++
  }
}
console.log("part1:",count1,"part2:",count2)