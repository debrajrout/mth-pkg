import { Complex } from "../src/complex/Complex";

describe("Complex Number Operations", () => {
  // Basic Operations
  test("should add two complex numbers correctly", () => {
    const c1 = new Complex(1, 2);
    const c2 = new Complex(3, 4);
    const result = c1.add(c2);
    expect(result.real).toBe(4);
    expect(result.imag).toBe(6);
  });

  test("should subtract two complex numbers correctly", () => {
    const c1 = new Complex(5, 6);
    const c2 = new Complex(3, 4);
    const result = c1.subtract(c2);
    expect(result.real).toBe(2);
    expect(result.imag).toBe(2);
  });

  test("should multiply two complex numbers correctly", () => {
    const c1 = new Complex(1, 2);
    const c2 = new Complex(3, 4);
    const result = c1.multiply(c2);
    expect(result.real).toBe(-5); // (1*3 - 2*4)
    expect(result.imag).toBe(10); // (1*4 + 2*3)
  });

  test("should divide two complex numbers correctly", () => {
    const c1 = new Complex(1, 2);
    const c2 = new Complex(1, 1);
    const result = c1.divide(c2);
    expect(result.real).toBeCloseTo(1.5); // (1*1 + 2*1)/(1*1 + 1*1)
    expect(result.imag).toBeCloseTo(0.5); // (2*1 - 1*1)/(1*1 + 1*1)
  });

  // Edge Case: Division by Zero
  test("should throw error when dividing by zero", () => {
    const c1 = new Complex(1, 2);
    const c2 = new Complex(0, 0);
    expect(() => c1.divide(c2)).toThrow("Division by zero");
  });

  // Conjugate
  test("should calculate conjugate correctly", () => {
    const c = new Complex(1, 2);
    const result = c.conjugate();
    expect(result.real).toBe(1);
    expect(result.imag).toBe(-2);
  });

  // Magnitude
  test("should calculate magnitude correctly", () => {
    const c = new Complex(3, 4);
    const result = c.magnitude();
    expect(result).toBe(5); // sqrt(3^2 + 4^2) = 5
  });

  // Phase
  test("should calculate phase correctly", () => {
    const c = new Complex(1, 1);
    const result = c.phase();
    expect(result).toBeCloseTo(Math.PI / 4); // atan2(1, 1) = 45 degrees
  });

  // Polar Form
  test("should convert to polar form correctly", () => {
    const c = new Complex(3, 4);
    const result = c.toPolar();
    expect(result.magnitude).toBe(5);
    expect(result.phase).toBeCloseTo(Math.atan2(4, 3));
  });

  test("should create complex number from polar form correctly", () => {
    const c = Complex.fromPolar(5, Math.PI / 4);
    expect(c.real).toBeCloseTo(5 * Math.cos(Math.PI / 4));
    expect(c.imag).toBeCloseTo(5 * Math.sin(Math.PI / 4));
  });

  // toString
  test("should return string representation correctly", () => {
    const c = new Complex(1, 2);
    expect(c.toString()).toBe("1 + 2i");
  });

  test("should handle negative imaginary part in string", () => {
    const c = new Complex(1, -2);
    expect(c.toString()).toBe("1 + -2i");
  });
});
