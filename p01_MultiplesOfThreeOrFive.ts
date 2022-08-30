import { range } from "https://deno.land/x/ramda@v0.27.2/mod.ts";

/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

const nums: number[] = range(3, 1000)
  .filter((n: number) => n % 3 == 0 || n % 5 == 0);
const sumOfMultiples = nums.reduce((total, num) => total + num);

console.log(sumOfMultiples);
