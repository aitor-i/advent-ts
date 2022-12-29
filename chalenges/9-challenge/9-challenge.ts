export function countTime(leds: number[]) {
  let steps = 0;
  let ledsAux = leds;
  const length = ledsAux.length;
  let onLeds = ledsAux.reduce((accumulator, led) => accumulator + led, 0);

  while (onLeds < length) {
    ledsAux = ledsAux.map((led, index) => {
      const prevLed = index == 0 ? ledsAux[length - 1] : ledsAux[index - 1];

      if (prevLed == 1) return 1;
      if (led == 1) return 1;
      return 0;
    });
    steps++;
    onLeds = ledsAux.reduce((accumulator, led) => accumulator + led, 0);
    console.log("onLeds3", onLeds);
    console.log("ledsAux", ledsAux);
    console.log("steps", steps);
  }

  return steps * 7;
}
