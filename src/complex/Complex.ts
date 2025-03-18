/**
 * Ek complex number ka boss, jisme real aur imaginary dono hote hain—bilkul zindagi ke ups aur downs jaisa!
 */
export class Complex {
  /**
   * Ek naya complex number banata hai, jaise nayi kahani shuru karna.
   * @param real Real part, jo zindagi ka sach hai.
   * @param imag Imaginary part, jo sapne jaisa hai.
   */
  constructor(public real: number, public imag: number) {}

  /**
   * Do complex numbers ko jodta hai, bilkul do bhaiyon ka reunion!
   * @param other Dusra complex number.
   * @returns Naya complex number jo inka total hai.
   */
  add(other: Complex): Complex {
    return new Complex(this.real + other.real, this.imag + other.imag);
  }

  /**
   * Ek complex number se dusra ghatata hai—jaise budget me kharcha kam karna.
   * @param other Dusra complex number.
   * @returns Naya complex number jo fark hai.
   */
  subtract(other: Complex): Complex {
    return new Complex(this.real - other.real, this.imag - other.imag);
  }

  /**
   * Do complex numbers ka guna, bilkul business me profit badhane jaisa.
   * @param other Dusra complex number.
   * @returns Naya complex number jo product hai.
   */
  multiply(other: Complex): Complex {
    const real = this.real * other.real - this.imag * other.imag;
    const imag = this.real * other.imag + this.imag * other.real;
    return new Complex(real, imag);
  }

  /**
   * Ek complex number ko dusre se bhag karta hai—par zero se ladne mat bolna!
   * @param other Dusra complex number.
   * @returns Naya complex number jo quotient hai.
   * @throws Error agar zero se divide karne ki koshish ki.
   */
  divide(other: Complex): Complex {
    if (other.real === 0 && other.imag === 0) {
      throw new Error("Bhai, zero se kyun ladne laga?");
    }
    const denom = other.real * other.real + other.imag * other.imag;
    const real = (this.real * other.real + this.imag * other.imag) / denom;
    const imag = (this.imag * other.real - this.real * other.imag) / denom;
    return new Complex(real, imag);
  }

  /**
   * Complex number ka conjugate, jaise mirror me apna ulta chehra dekhna.
   * @returns Naya complex number jo conjugate hai.
   */
  conjugate(): Complex {
    return new Complex(this.real, -this.imag);
  }

  /**
   * Complex number ka magnitude—iska power dikha deta hai!
   * @returns Magnitude.
   */
  magnitude(): number {
    return Math.sqrt(this.real * this.real + this.imag * this.imag);
  }

  /**
   * Complex number ka phase (argument) radians mein—direction batata hai.
   * @returns Phase radians mein.
   */
  phase(): number {
    return Math.atan2(this.imag, this.real);
  }

  /**
   * Complex number ko polar form me badalta hai—style me present karne ke liye.
   * @returns Magnitude aur phase ka object.
   */
  toPolar(): { magnitude: number; phase: number } {
    return { magnitude: this.magnitude(), phase: this.phase() };
  }

  /**
   * Polar coordinates se complex number banata hai—jaise recipe se khana.
   * @param magnitude Magnitude, power kitna hai.
   * @param phase Phase radians mein, direction kya hai.
   * @returns Naya complex number.
   */
  static fromPolar(magnitude: number, phase: number): Complex {
    const real = magnitude * Math.cos(phase);
    const imag = magnitude * Math.sin(phase);
    return new Complex(real, imag);
  }

  /**
   * Complex number ki string representation—sabko samajh aane wala style.
   * @returns String format mein complex number.
   */
  toString(): string {
    return `${this.real} + ${this.imag}i`;
  }
}
