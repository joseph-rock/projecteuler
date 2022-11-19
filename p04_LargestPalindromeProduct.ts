import { equals, reverse } from "./deps.ts";

/**
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is
 * 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

function isPalindrome(num: number): boolean {
  const numString: string[] = num.toString().split("");
  return equals(numString, reverse(numString));
}

function isThreeDigits(num: number): boolean {
  return num > 99 && num < 1000;
}

function nextLargestPalindrome(num: number): number {
  do {
    num--;
  } while (!isPalindrome(num));

  return num;
}

function findFactors(num: number): [number, number] {
  if (!isPalindrome(num)) {
    num = nextLargestPalindrome(num);
  }

  for (let i = 999; i > 99; i--) {
    if (num % i == 0 && isThreeDigits(num / i)) {
      return [i, num / i];
    }
  }

  return findFactors(num - 1);
}

const largestNum = 999 * 999;
const ans: [number, number] = findFactors(largestNum);
console.log(ans[0] * ans[1]);
console.log(ans);

// console.log(isPalindrome(121));
