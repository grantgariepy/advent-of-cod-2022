const input = await Deno.readTextFile("day8.ts");

const s = input.strip();

const g = s.split("\n").map((x) => x.map((y) => parseInt(y, 10)));
const n = g.length;
const m = g[0].length;

const vis = new Set<[number, number]>();
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    let isviz = false;
    for (const [dx, dy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
      let ni = i + dx;
      let nj = j + dy;
      let v = true;
      while (ni >= 0 && ni < n && nj >= 0 && nj < m) {
        if (g[ni][nj] >= g[i][j]) {
          v = false;
          break;
        }
        ni += dx;
        nj += dy;
      }
      if (v) {
        isviz = true;
        break;
      }
    }
    if (isviz) {
      vis.add([i, j]);
    }
  }
}

console.log(vis.size);

let r = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    const vd = [];
    for (const [dx, dy] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
      let ni = i + dx;
      let nj = j + dy;
      let c = 0;
      let v = true;
      while (ni >= 0 && ni < n && nj >= 0 && nj < m) {
        if (g[ni][nj] >= g[i][j]) {
          v = false;
          break;
        }
        ni += dx;
        nj += dy;
        c += 1;
      }
      vd.push(c + (ni >= 0 && ni < n && nj >= 0 && nj < m ? 1 : 0));
    }
    r = Math.max(r, vd[0] * vd[1] * vd[2] * vd[3]);
  }
}

console.log(r);
