/**
 * Simple interest nikal ke batata hai—sidha saada hisaab!
 * @param principal Initial amount, jo tune lagaya.
 * @param rate Interest rate per period, kitna badhna hai.
 * @param time Number of periods (years assumed), kitne din tak.
 * @returns Total amount after simple interest.
 */
export function simpleInterest(
  principal: number,
  rate: number,
  time: number
): number {
  if (principal < 0 || rate < 0 || time < 0) {
    throw new Error("Negative daalega toh gharwale daantenge!");
  }
  return principal * (1 + rate * time);
}

/**
 * Compound interest nikal ke dikhata hai—paisa badhne ka asli tareeka!
 * @param principal Initial amount, jo tune lagaya.
 * @param rate Interest rate per period, kitna badhna hai.
 * @param time Number of periods (years assumed), kitne din tak.
 * @param n Compounding frequency per period (default 1), kitni baar badhega.
 * @returns Total amount after compound interest.
 */
export function compoundInterest(
  principal: number,
  rate: number,
  time: number,
  n: number = 1
): number {
  if (principal < 0 || rate < 0 || time < 0 || n <= 0) {
    throw new Error("Bhai, galat input mat daal!");
  }
  return principal * Math.pow(1 + rate / n, n * time);
}
