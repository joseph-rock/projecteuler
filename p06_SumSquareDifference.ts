/**
 * The sum of the squares of the first ten natural numbers is,
 *
 * 1² + 2² + ... + 10² = 385
 *
 * The square of the sum of the first ten natural numbers is,
 *
 * (1 + 2 + ... + 10)² = 55² = 3025
 *
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is
 *
 * 3025 - 385 = 2640
 *
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

function firstHundred(): number[] {
  return [...Array(100).keys()].map((n) => n + 1);
}

const squareSum: number = firstHundred().map((n) => n * n).reduce((sum, value) => sum + value);
const sumSquared: number = Math.pow(firstHundred().reduce((sum, value) => sum + value), 2);
console.log(sumSquared - squareSum);
