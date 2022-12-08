const input = await Deno.readTextFile("day7.txt");

const files: Map<string, number> = new Map();
const folders: Set<string> = new Set();

let cur: string[] = [];

for (const cmd of input.split("\n")) {
  if (cmd.startsWith("$")) {
    if (cmd.startsWith("$ cd")) {
      const r = cmd.slice(5);
      if (r === "..") {
        if (cur.length > 0) {
          cur.pop();
        }
      } else if (r === "/") {
        cur = [];
      } else {
        cur.push(...r.split("/"));
      }
    }
  } else {
    const [size, name] = cmd.split(" ");
    if (size === "dir") {
      continue;
    }
    const fileSize = parseInt(size, 10);
    files.set(`${cur.join("/")}/${name}`, fileSize);
  }
  folders.add(cur.join("/"));
}
// console.log(folders);

let r = 0;
const fsizes: Map<string, number> = new Map();
for (const folder of folders) {
  let fsize = 0;
  for (const [file, fileSize] of files) {
    if (file.startsWith(folder)) {
      fsize += fileSize;
    }
  }
  if (fsize <= 100000) {
    r += fsize;
  }
  fsizes.set(folder, fsize);
}
// console.log(fsizes);
console.log("Part1: ", r);

console.log(
  "Part2: ",
  Math.min(
    ...Array.from(fsizes.values()).filter(
      (v) => 70000000 - fsizes.get("")! + v >= 30000000,
    ),
  ),
);
