export default function getRandomInt (min: number, max:number): number {  // max not included
  return Math.floor(Math.random() * max + min);
}
