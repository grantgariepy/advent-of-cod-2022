const input = await Deno.readTextFile("day10.txt");

const lines = input.split("\n");

let x = 1;
let cycle = 0;
const strengths: number[] = [];
const screen = Array(6).fill("").map((_e) => Array(40).fill(" "));

const draw = (pos: number, char: string) => {
  screen[Math.floor(pos / 40)][pos % 40] = char;
};
const cycleCount = () => {
  cycle++;
  if ((cycle - 20) % 40 == 0) {
    strengths.push(x * cycle);
  }
  draw(cycle - 1, Math.abs(((cycle - 1) % 40) - x) <= 1 ? "█" : " ");
};

lines.forEach((line) => {
  const tempArray = line.split(" ");
  cycleCount();
  if (tempArray[0] == "addx") {
    cycleCount();
    x += Number(tempArray[1]);
  }
});
console.log("Part1:", strengths.reduce((a, v) => a + v));
console.log("Part2:");
console.log(screen.map((e) => e.join("")).join("\n"));
