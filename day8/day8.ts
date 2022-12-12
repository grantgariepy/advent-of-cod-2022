const input = await Deno.readTextFile("day8.txt");

const map = input.split("\n").map((l) => l.split("").map(Number));
const size = map.length;
const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

const part1 = (vmap: number[][]) => {
  const markDir = (
    x: number,
    y: number,
    vx: number,
    vy: number,
    max = map[y][x],
  ) => {
    vmap[y][x] = 1; // mark also the starting point
    while (x >= 0 && y >= 0 && x < size && y < size) {
      if (map[y][x] > max) vmap[y][x] = 1;
      max = Math.max(max, map[y][x]);
      x += vx;
      y += vy;
    }
  };
  // run visibility check from all the sides
  map.forEach((_r, n) =>
    dirs.forEach((d) =>
      markDir(
        !d[0] ? n : (d[0] == 1 ? 0 : size - 1),
        !d[1] ? n : (d[1] == 1 ? 0 : size - 1),
        ...d,
      )
    )
  );

  return vmap.flat().length;
};

const visDir = (
  x: number,
  y: number,
  vx: number,
  vy: number,
  h = map[y][x],
  res = 0,
) => {
  x += vx;
  y += vy;
  while (x >= 0 && y >= 0 && x < size && y < size) {
    res++;
    if (map[y][x] >= h) break;
    x += vx;
    y += vy;
  }
  return res;
};

const part2 = () => {
  Math.max(
    ...map.map((r, y) =>
      r.map((_v, x) => dirs.reduce((a, d) => a * visDir(x, y, ...d), 1))
    ).flat(),
  );
};

console.log(part1(Array.from({ length: size }, () => [])));
console.log(part2());
