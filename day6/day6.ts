const data = await Deno.readTextFile("./day6.txt");

let marker: number | null = null;

function getMarker(sliceLength: number) {
  for (let i = 0; i <= data.length - sliceLength; i++) {
    const sliceEnd = i + sliceLength;
    const total = new Set([...data.slice(i, sliceEnd)]).size;
    if (total < sliceLength) continue;
    marker = sliceEnd;
    break;
  }
  console.log(marker);
}

getMarker(4);
getMarker(14);
