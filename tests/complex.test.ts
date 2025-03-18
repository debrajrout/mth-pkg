import { Complex } from "../src/complex/Complex";

describe("Complex Number Operations - Bhai ke Style Mein", () => {
  // Basic Operations
  test("do complex numbers ko jodna - ekdum perfect!", () => {
    const c1 = new Complex(1, 2);
    const c2 = new Complex(3, 4);
    const result = c1.add(c2);
    expect(result.real).toBe(4);
    expect(result.imag).toBe(6);
  });

  test("do complex numbers ka ghataav - budget cut jaisa!", () => {
    const c1 = new Complex(5, 6);
    const c2 = new Complex(3, 4);
    const result = c1.subtract(c2);
    expect(result.real).toBe(2);
    expect(result.imag).toBe(2);
  });

  test("do complex numbers ka guna - profit badha diya!", () => {
    const c1 = new Complex(1, 2);
    const c2 = new Complex(3, 4);
    const result = c1.multiply(c2);
    expect(result.real).toBe(-5); // (1*3 - 2*4)
    expect(result.imag).toBe(10); // (1*4 + 2*3)
  });

  test("do complex numbers ka bhag - zero se door raho!", () => {
    const c1 = new Complex(1, 2);
    const c2 = new Complex(1, 1);
    const result = c1.divide(c2);
    expect(result.real).toBeCloseTo(1.5); // (1*1 + 2*1)/(1*1 + 1*1)
    expect(result.imag).toBeCloseTo(0.5); // (2*1 - 1*1)/(1*1 + 1*1)
  });

  // Edge Case: Division by Zero
  test("zero se bhag karne pe error - bhai ne mana kiya!", () => {
    const c1 = new Complex(1, 2);
    const c2 = new Complex(0, 0);
    expect(() => c1.divide(c2)).toThrow("Bhai, zero se kyun ladne laga?");
  });

  // Conjugate
  test("conjugate nikalna - mirror me ulta chehra!", () => {
    const c = new Complex(1, 2);
    const result = c.conjugate();
    expect(result.real).toBe(1);
    expect(result.imag).toBe(-2);
  });

  // Magnitude
  test("magnitude nikalna - power check!", () => {
    const c = new Complex(3, 4);
    const result = c.magnitude();
    expect(result).toBe(5); // sqrt(3^2 + 4^2) = 5
  });

  // Phase
  test("phase nikalna - direction batata hai!", () => {
    const c = new Complex(1, 1);
    const result = c.phase();
    expect(result).toBeCloseTo(Math.PI / 4); // atan2(1, 1) = 45 degrees
  });

  // Polar Form
  test("polar form me badalna - style me present!", () => {
    const c = new Complex(3, 4);
    const result = c.toPolar();
    expect(result.magnitude).toBe(5);
    expect(result.phase).toBeCloseTo(Math.atan2(4, 3));
  });

  test("polar se complex banana - recipe se khana!", () => {
    const c = Complex.fromPolar(5, Math.PI / 4);
    expect(c.real).toBeCloseTo(5 * Math.cos(Math.PI / 4));
    expect(c.imag).toBeCloseTo(5 * Math.sin(Math.PI / 4));
  });

  // toString
  test("string me badalna - sabko samajh aaye!", () => {
    const c = new Complex(1, 2);
    expect(c.toString()).toBe("1 + 2i");
  });

  test("negative imaginary ke saath string - sahi dikhna chahiye!", () => {
    const c = new Complex(1, -2);
    expect(c.toString()).toBe("1 + -2i");
  });
});
