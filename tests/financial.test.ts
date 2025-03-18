import { Complex } from "../src/complex/Complex";
import {
  simpleInterest,
  compoundInterest,
  npv,
  exp,
  log,
  sin,
} from "../src/financial";

describe("Financial and Advanced Mathematical Functions", () => {
  // Simple Interest
  test("should calculate simple interest correctly", () => {
    const result = simpleInterest(1000, 0.05, 2);
    expect(result).toBe(1100); // 1000 * (1 + 0.05 * 2)
  });

  test("should throw error for negative inputs in simple interest", () => {
    expect(() => simpleInterest(-1000, 0.05, 2)).toThrow(
      "Negative values are not allowed"
    );
    expect(() => simpleInterest(1000, -0.05, 2)).toThrow(
      "Negative values are not allowed"
    );
    expect(() => simpleInterest(1000, 0.05, -2)).toThrow(
      "Negative values are not allowed"
    );
  });

  // Compound Interest
  test("should calculate compound interest correctly", () => {
    const result = compoundInterest(1000, 0.05, 2);
    const expected = 1000 * Math.pow(1 + 0.05, 2);
    expect(result).toBeCloseTo(expected); // ~1102.5
  });

  test("should handle compound interest with custom frequency", () => {
    const result = compoundInterest(1000, 0.05, 2, 2); // Semi-annual
    const expected = 1000 * Math.pow(1 + 0.05 / 2, 2 * 2);
    expect(result).toBeCloseTo(expected);
  });

  test("should throw error for invalid inputs in compound interest", () => {
    expect(() => compoundInterest(-1000, 0.05, 2)).toThrow(
      "Invalid input values"
    );
    expect(() => compoundInterest(1000, 0.05, 2, 0)).toThrow(
      "Invalid input values"
    );
  });

  // Net Present Value (NPV)
  test("should calculate NPV correctly", () => {
    const cashFlows = [-1000, 300, 400, 500];
    const result = npv(0.1, cashFlows);
    const expected =
      -1000 + 300 / 1.1 + 400 / Math.pow(1.1, 2) + 500 / Math.pow(1.1, 3);
    expect(result).toBeCloseTo(expected);
  });

  test("should throw error for invalid discount rate in NPV", () => {
    expect(() => npv(-1.5, [100, 200])).toThrow(
      "Discount rate must be greater than -1"
    );
  });

  // Complex Exponentiation
  test("should calculate exp correctly for pure imaginary number", () => {
    const result = exp(new Complex(0, Math.PI));
    expect(result.real).toBeCloseTo(-1); // e^(iπ) = -1
    expect(result.imag).toBeCloseTo(0);
  });

  test("should calculate exp correctly for complex number", () => {
    const result = exp(new Complex(1, Math.PI / 2));
    const magnitude = Math.exp(1);
    expect(result.real).toBeCloseTo(0);
    expect(result.imag).toBeCloseTo(magnitude); // e^(1 + iπ/2) = e * i
  });

  // Complex Logarithm
  test("should calculate log correctly", () => {
    const c = new Complex(1, 1);
    const result = log(c);
    expect(result.real).toBeCloseTo(Math.log(Math.sqrt(2))); // ln(sqrt(2))
    expect(result.imag).toBeCloseTo(Math.PI / 4); // atan2(1, 1)
  });

  test("should throw error for log of zero", () => {
    expect(() => log(new Complex(0, 0))).toThrow(
      "Logarithm of zero is undefined"
    );
  });

  // Complex Sine
  test("should calculate sin correctly for pure imaginary number", () => {
    const result = sin(new Complex(0, 1));
    const expectedImag = (Math.exp(1) - Math.exp(-1)) / 2; // sinh(1)
    expect(result.real).toBeCloseTo(0);
    expect(result.imag).toBeCloseTo(expectedImag);
  });

  test("should calculate sin correctly for complex number", () => {
    const result = sin(new Complex(Math.PI / 2, 0));
    expect(result.real).toBeCloseTo(1); // sin(π/2) = 1
    expect(result.imag).toBeCloseTo(0);
  });
});
