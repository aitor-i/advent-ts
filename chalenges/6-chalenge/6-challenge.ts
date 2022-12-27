export function createCube(size: number) {
  const space = " ";
  const breakLine = "\n";
  const middleTop = "/\\";
  const middleBottom = "\\/";

  let baseCubeTop = "/\\_\\";
  let baseCubeMedium = breakLine;
  let baseCubeBottom = "\\/_/";

  baseCubeTop += "_\\".repeat(size - 1);
  baseCubeBottom += "_/".repeat(size - 1);

  for (let i = 1; i < size; i++) {
    baseCubeMedium +=
      space.repeat(size - i - 1) +
      middleTop.repeat(i) +
      baseCubeTop +
      breakLine;
  }

  for (let i = size - 1; i > 0; i--) {
    baseCubeMedium +=
      space.repeat(size - i - 1) +
      middleBottom.repeat(i) +
      baseCubeBottom +
      breakLine;
  }

  let cube =
    space.repeat(size - 1) +
    baseCubeTop +
    baseCubeMedium +
    space.repeat(size - 1) +
    baseCubeBottom;

  console.log(
    "  /\\_\\_\\_\\\n /\\/\\_\\_\\_\\\n/\\/\\/\\_\\_\\_\\\n\\/\\/\\/_/_/_/\n \\/\\/_/_/_/\n  \\/_/_/_/"
  );
  console.log(cube);

  return cube;
}
