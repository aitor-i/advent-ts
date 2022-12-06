interface Box {
  l: number;
  w: number;
  h: number;
}

interface BoxWithVolume extends Box {
  volume: number;
}

export function fitsInOneBox(boxes: Box[]) {
  let fitsIn = true;
  const sortCriteria = (a: BoxWithVolume, b: BoxWithVolume) => {
    return a.volume - b.volume;
  };

  const sortedBoxesWithVolume: BoxWithVolume[] = boxes
    .map((box) => ({
      ...box,
      volume: box.l * box.h * box.w,
    }))
    .sort(sortCriteria);

  sortedBoxesWithVolume.forEach((box, index) => {
    if (index == sortedBoxesWithVolume.length - 1) return;
    if (box.volume >= sortedBoxesWithVolume[index + 1].volume) fitsIn = false;
    if (box.l >= sortedBoxesWithVolume[index + 1].l) fitsIn = false;
    if (box.h >= sortedBoxesWithVolume[index + 1].h) fitsIn = false;
    if (box.w >= sortedBoxesWithVolume[index + 1].w) fitsIn = false;
  });
  return fitsIn;
}
