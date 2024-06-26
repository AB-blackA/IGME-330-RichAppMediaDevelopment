/* Author: Professor Andrew Wheeland (note from student Andrew Black, I just followed his tutorial!)
 * Since: unknown, utilized by Andrew Black 2/26/24
 * Purpose: utils.ts is all about giving our other functions ways to utilize randomization and the ability to go fullscreen
 */

/* MakeColor: returns a RGB value based on params
 * Params: red, green, blue, alpha: values for RGBA color creation (alpha defaults to 1 if not specified);
 * Returns: string used for the canvas that utlizes those values
 */
const makeColor = (red: number, green: number, blue: number, alpha: number = 1): string => {
  return `rgba(${red},${green},${blue},${alpha})`;
};

/* GetRandom: returns a random number based on a min and max
 * Params: min, max: the minimum and maxmium values used in calculation
 * Returns: number
 */
const getRandom = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

/* GetRandomColor: returns a random RGBA value
 * Returns: string used for the canvas that utlizes those values
 */
const getRandomColor = (): string => {
  // so that colors are not too bright or too dark 
  const floor = 35;
  const getByte = (): number => getRandom(floor, 255 - floor);
  return `rgba(${getByte()},${getByte()},${getByte()},1)`;
};

/* GetLinearGradient: returns linear gradient for the canvas
 * Params: ctx: the canvas; startX, startY, endX, endY: the X/Y positions for beginning and end of gradient creation,
 * colorStops: the percentage of color we'd like at each stop (e.g., [{ percent: .8, color: "black" }, { percent: 1, color: "white" }])
 * Returns: linear gradient object
 */
const getLinearGradient = (ctx: CanvasRenderingContext2D, startX: number, startY: number, endX: number, endY: number, colorStops: { percent: number; color: string }[]): CanvasGradient => {
  let lg = ctx.createLinearGradient(startX, startY, endX, endY);
  for (let stop of colorStops) {
    lg.addColorStop(stop.percent, stop.color);
  }
  return lg;
};

/* GoFullScreen: allows the web page to utilize a fullscreen function
 * Better understanding at: https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
*/
const goFullscreen = (element: HTMLElement): void => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } 
  // .. and do nothing if the method is not supported
};

export { makeColor, getRandomColor, getLinearGradient, goFullscreen };
