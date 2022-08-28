/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *
 * a² + b² = c²
 *
 * For example, 3² + 4² = 9 + 16 = 25 = 5².
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

function squares(num = 2, list: number[] = []): number[] {
  list.push(num * num);

  if (list.length < 1000) {
    return squares(num + 1, list);
  }

  return list;
}

function pythagoreanTriplet(): number[] {
  const list: number[] = squares();

  for (let a = 2; a < 500; a++) {
    for (let b = 2; b < 500; b++) {
      if (
        list.includes((a * a) + (b * b)) &&
        a + b + Math.sqrt((a * a) + (b * b)) == 1000
      ) {
        return [a, b, Math.sqrt((a * a) + (b * b))];
      }
    }
  }

  return [];
}

console.log(pythagoreanTriplet().reduce((acc, e) => acc * e));
