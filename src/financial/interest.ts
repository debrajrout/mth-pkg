/**
 * Simple interest calculate karta hai.
 * @param principal Initial amount.
 * @param rate Interest rate per period.
 * @param time Number of periods (years assumed).
 * @returns Total amount after simple interest.
 */
export function simpleInterest(
  principal: number,
  rate: number,
  time: number
): number {
  if (principal < 0 || rate < 0 || time < 0) {
    throw new Error("Negative values are not allowed");
  }
  return principal * (1 + rate * time);
}

/**
 * Compound interest calculate karta hai.
 * @param principal Initial amount.
 * @param rate Interest rate per period.
 * @param time Number of periods (years assumed).
 * @param n Compounding frequency per period (default 1).
 * @returns Total amount after compound interest.
 */
export function compoundInterest(
  principal: number,
  rate: number,
  time: number,
  n: number = 1
): number {
  if (principal < 0 || rate < 0 || time < 0 || n <= 0) {
    throw new Error("Invalid input values");
  }
  return principal * Math.pow(1 + rate / n, n * time);
}
