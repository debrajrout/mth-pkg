/**
 * Ek complex number ko represent karta hai jisme real aur imaginary parts hote hain.
 */
export class Complex {
  /**
   * Ek naya complex number banata hai.
   * @param real Real part.
   * @param imag Imaginary part.
   */
  constructor(public real: number, public imag: number) {}

  /**
   * Do complex numbers ko add karta hai.
   * @param other Dusra complex number.
   * @returns Naya complex number jo sum hai.
   */
  add(other: Complex): Complex {
    return new Complex(this.real + other.real, this.imag + other.imag);
  }

  /**
   * Ek complex number ko dusre se subtract karta hai.
   * @param other Dusra complex number.
   * @returns Naya complex number jo difference hai.
   */
  subtract(other: Complex): Complex {
    return new Complex(this.real - other.real, this.imag - other.imag);
  }

  /**
   * Do complex numbers ka multiplication.
   * @param other Dusra complex number.
   * @returns Naya complex number jo product hai.
   */
  multiply(other: Complex): Complex {
    const real = this.real * other.real - this.imag * other.imag;
    const imag = this.real * other.imag + this.imag * other.real;
    return new Complex(real, imag);
  }

  /**
   * Ek complex number ko dusre se divide karta hai.
   * @param other Dusra complex number.
   * @returns Naya complex number jo quotient hai.
   * @throws Error agar zero se divide karne ki koshish ho.
   */
  divide(other: Complex): Complex {
    if (other.real === 0 && other.imag === 0) {
      throw new Error("Division by zero");
    }
    const denom = other.real * other.real + other.imag * other.imag;
    const real = (this.real * other.real + this.imag * other.imag) / denom;
    const imag = (this.imag * other.real - this.real * other.imag) / denom;
    return new Complex(real, imag);
  }

  /**
   * Complex number ka conjugate return karta hai.
   * @returns Naya complex number jo conjugate hai.
   */
  conjugate(): Complex {
    return new Complex(this.real, -this.imag);
  }

  /**
   * Complex number ka magnitude calculate karta hai.
   * @returns Magnitude.
   */
  magnitude(): number {
    return Math.sqrt(this.real * this.real + this.imag * this.imag);
  }

  /**
   * Complex number ka phase (argument) radians mein.
   * @returns Phase radians mein.
   */
  phase(): number {
    return Math.atan2(this.imag, this.real);
  }

  /**
   * Complex number ko polar form mein convert karta hai.
   * @returns Magnitude aur phase ka object.
   */
  toPolar(): { magnitude: number; phase: number } {
    return { magnitude: this.magnitude(), phase: this.phase() };
  }

  /**
   * Polar coordinates se complex number banata hai.
   * @param magnitude Magnitude.
   * @param phase Phase radians mein.
   * @returns Naya complex number.
   */
  static fromPolar(magnitude: number, phase: number): Complex {
    const real = magnitude * Math.cos(phase);
    const imag = magnitude * Math.sin(phase);
    return new Complex(real, imag);
  }

  /**
   * Complex number ki string representation.
   * @returns String format mein complex number.
   */
  toString(): string {
    return `${this.real} + ${this.imag}i`;
  }
}
