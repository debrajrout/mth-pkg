import { Complex } from "../src/complex/Complex";
import {
  simpleInterest,
  compoundInterest,
  npv,
  exp,
  log,
  sin,
} from "../src/financial";

describe("Financial aur Advanced Math - Paisa aur Jadoo!", () => {
  // Simple Interest
  test("simple interest nikalna - sidha saada hisaab!", () => {
    const result = simpleInterest(1000, 0.05, 2);
    expect(result).toBe(1100); // 1000 * (1 + 0.05 * 2)
  });

  test("negative input pe error - gharwale daantenge!", () => {
    expect(() => simpleInterest(-1000, 0.05, 2)).toThrow(
      "Negative daalega toh gharwale daantenge!"
    );
    expect(() => simpleInterest(1000, -0.05, 2)).toThrow(
      "Negative daalega toh gharwale daantenge!"
    );
    expect(() => simpleInterest(1000, 0.05, -2)).toThrow(
      "Negative daalega toh gharwale daantenge!"
    );
  });

  // Compound Interest
  test("compound interest nikalna - paisa badha diya!", () => {
    const result = compoundInterest(1000, 0.05, 2);
    const expected = 1000 * Math.pow(1 + 0.05, 2);
    expect(result).toBeCloseTo(expected); // ~1102.5
  });

  test("custom frequency ke saath compound interest - aur mazaa!", () => {
    const result = compoundInterest(1000, 0.05, 2, 2); // Semi-annual
    const expected = 1000 * Math.pow(1 + 0.05 / 2, 2 * 2);
    expect(result).toBeCloseTo(expected);
  });

  test("galat input pe error - bhai ne bola!", () => {
    expect(() => compoundInterest(-1000, 0.05, 2)).toThrow(
      "Bhai, galat input mat daal!"
    );
    expect(() => compoundInterest(1000, 0.05, 2, 0)).toThrow(
      "Bhai, galat input mat daal!"
    );
  });

  // Net Present Value (NPV)
  test("NPV nikalna - paisa kitna kaam ka hai!", () => {
    const cashFlows = [-1000, 300, 400, 500];
    const result = npv(0.1, cashFlows);
    const expected =
      -1000 + 300 / 1.1 + 400 / Math.pow(1.1, 2) + 500 / Math.pow(1.1, 3);
    expect(result).toBeCloseTo(expected);
  });

  test("galat discount rate pe error - -1 se kam nahi!", () => {
    expect(() => npv(-1.5, [100, 200])).toThrow(
      "Bhai, discount rate -1 se kam nahi chalega!"
    );
  });

  // Complex Exponentiation
  test("exp pure imaginary ke liye - math ka jadoo!", () => {
    const result = exp(new Complex(0, Math.PI));
    expect(result.real).toBeCloseTo(-1); // e^(iπ) = -1
    expect(result.imag).toBeCloseTo(0);
  });

  test("exp complex number ke liye - ekdum sahi!", () => {
    const result = exp(new Complex(1, Math.PI / 2));
    const magnitude = Math.exp(1);
    expect(result.real).toBeCloseTo(0);
    expect(result.imag).toBeCloseTo(magnitude); // e^(1 + iπ/2) = e * i
  });

  // Complex Logarithm
  test("log nikalna - gahra math wala kaam!", () => {
    const c = new Complex(1, 1);
    const result = log(c);
    expect(result.real).toBeCloseTo(Math.log(Math.sqrt(2))); // ln(sqrt(2))
    expect(result.imag).toBeCloseTo(Math.PI / 4); // atan2(1, 1)
  });

  test("zero ka log pe error - bhai ne mana kiya!", () => {
    expect(() => log(new Complex(0, 0))).toThrow(
      "Zero ka log nahi hota, bhai!"
    );
  });

  // Complex Sine
  test("sin pure imaginary ke liye - trigonometry ka boss!", () => {
    const result = sin(new Complex(0, 1));
    const expectedImag = (Math.exp(1) - Math.exp(-1)) / 2; // sinh(1)
    expect(result.real).toBeCloseTo(0);
    expect(result.imag).toBeCloseTo(expectedImag);
  });

  test("sin complex number ke liye - ekdum perfect!", () => {
    const result = sin(new Complex(Math.PI / 2, 0));
    expect(result.real).toBeCloseTo(1); // sin(π/2) = 1
    expect(result.imag).toBeCloseTo(0);
  });
});
