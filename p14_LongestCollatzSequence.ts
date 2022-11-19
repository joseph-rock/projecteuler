import { last, prop, range, sortBy } from "./deps.ts";

/**
 * The following iterative sequence is defined for the set of positive integers:
 *
 * n → n/2 (n is even)
 * n → 3n + 1 (n is odd)
 *
 * Using the rule above and starting with 13, we generate the following sequence:
 * 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 *
 * It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
 *
 * Which starting number, under one million, *produces the longest chain?
 *
 * NOTE: Once the chain starts the terms are allowed to go above one million.
 */

function even(num: number): number {
  return num / 2;
}

function odd(num: number): number {
  return num * 3 + 1;
}

function apply(num: number): number {
  return num % 2 === 0 ? even(num) : odd(num);
}

function chain(num: number[]): number[] {
  if (last(num) === 1) {
    return num;
  }

  num.push(apply(last(num)));
  return chain(num);
}

function longestChainInRange(start: number, end: number): number[] {
  const list = range(start, end)
    .map((num: number) => [num, chain([num]).length]);

  const sortBySecondItem = sortBy(prop(1));
  return last(sortBySecondItem(list));
}

console.log(longestChainInRange(1, 1_000_000));
