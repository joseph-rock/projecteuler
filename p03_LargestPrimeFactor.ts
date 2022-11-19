import { last } from "./deps.ts";

/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143 ?
 */

function primeFactor(num: number): number {
  const truncatedNum: number = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= truncatedNum; i++) {
    if (num % i == 0) {
      return i;
    }
  }
  return 0;
}

function factorTree(seed: number): number[] {
  const factors: number[] = [];

  while (primeFactor(seed) > 0) {
    factors.push(primeFactor(seed));
    seed = seed / primeFactor(seed);
  }
  factors.push(seed);

  return factors;
}

const target = 600851475143;
console.log(last(factorTree(target)));
