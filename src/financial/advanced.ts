import { Complex } from "../complex/Complex";

/**
 * Net Present Value (NPV) calculate karta hai.
 * @param rate Discount rate.
 * @param cashFlows Cash flows ka array (index 0 initial investment, usually negative).
 * @returns NPV value.
 */
export function npv(rate: number, cashFlows: number[]): number {
  if (rate <= -1) {
    throw new Error("Discount rate must be greater than -1");
  }
  return cashFlows.reduce((acc, cf, t) => acc + cf / Math.pow(1 + rate, t), 0);
}

/**
 * Complex number ka exponentiation (e^z).
 * @param z Complex number.
 * @returns e^z as a Complex number.
 */
export function exp(z: Complex): Complex {
  const magnitude = Math.exp(z.real);
  const real = magnitude * Math.cos(z.imag);
  const imag = magnitude * Math.sin(z.imag);
  return new Complex(real, imag);
}

/**
 * Complex number ka natural logarithm.
 * @param z Complex number.
 * @returns ln(z) as a Complex number.
 * @throws Error agar z zero ho.
 */
export function log(z: Complex): Complex {
  if (z.real === 0 && z.imag === 0) {
    throw new Error("Logarithm of zero is undefined");
  }
  const real = Math.log(z.magnitude());
  const imag = z.phase();
  return new Complex(real, imag);
}

/**
 * Complex number ka sine.
 * @param z Complex number.
 * @returns sin(z) as a Complex number.
 */
export function sin(z: Complex): Complex {
  // sin(z) = (e^iz - e^-iz) / 2i
  const iz = new Complex(-z.imag, z.real); // i*z
  const negIz = new Complex(z.imag, -z.real); // -i*z
  const eIz = exp(iz);
  const eNegIz = exp(negIz);
  return eIz.subtract(eNegIz).divide(new Complex(0, 2));
}
