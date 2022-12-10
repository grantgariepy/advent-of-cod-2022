const k = (p: number[]): string => "_" + p.join("_");

const dirs: any = {
  R: [1, 0],
  L: [-1, 0],
  U: [0, -1],
  D: [0, 1],
};

const input = await Deno.readTextFile("day9.txt");

const simulate = (knots: number): number => {
  const rope = Array.from({ length: knots }, () => [0, 0]);
  const visited: any = {};

  input.split("\n").map((l) => {
    const [dir, steps] = l.split(" ");
    let stopNum = Number(steps);

    while (stopNum--) {
      // advance head
      rope[0] = rope[0].map((v, d) => v + dirs[dir][d]);
      // console.log(rope);
      // advance ith point of rope based on (i-1)th point
      for (let i = 1; i < knots; i++) {
        if (rope[i - 1].some((v, d) => Math.abs(v - rope[i][d]) > 1)) {
          rope[i] = rope[i].map((v, d) => v + Math.sign(rope[i - 1][d] - v));
        }
      }
      // mark tail
      visited[k(rope[knots - 1])] = 1;
    }
  });

  return Object.keys(visited).length;
};

console.log(simulate(2));
console.log(simulate(10));
