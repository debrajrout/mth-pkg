# pro-complex-math

A professional, optimized, and TypeScript-based package for performing complex number operations and advanced mathematical functions. This package provides a robust set of tools for developers working with complex numbers, financial calculations, and mathematical computations.

## Features

- Full support for complex number operations (addition, subtraction, multiplication, division, etc.).
- Financial calculations like simple and compound interest.
- Advanced mathematical functions for complex numbers (exponentiation, logarithm, sine, etc.).
- TypeScript support with IntelliSense for autocompletion and documentation in IDEs.
- Comprehensive error handling for edge cases.

## Installation

Install the package via npm:

```bash
npm install pro-complex-math
```

## Usage

Below are examples and detailed descriptions of all available functions and methods.

### Complex Number Operations

The Complex class provides methods for manipulating complex numbers.

#### `new Complex(real, imag)`

Creates a new complex number with real and imaginary parts.

**Parameters:**

- `real` (number): The real part.
- `imag` (number): The imaginary part.

**Example:**

```javascript
const { Complex } = require("pro-complex-math");
const c = new Complex(1, 2); // 1 + 2i
console.log(c.toString()); // "1 + 2i"
```

#### `add(other)`

Adds two complex numbers.

**Parameters:**

- `other` (Complex): The complex number to add.

**Returns:** A new Complex instance representing the sum.

**Example:**

```javascript
const c1 = new Complex(1, 2);
const c2 = new Complex(3, 4);
const sum = c1.add(c2);
console.log(sum.toString()); // "4 + 6i"
```

#### `subtract(other)`

Subtracts one complex number from another.

**Parameters:**

- `other` (Complex): The complex number to subtract.

**Returns:** A new Complex instance representing the difference.

**Example:**

```javascript
const c1 = new Complex(5, 6);
const c2 = new Complex(3, 4);
const diff = c1.subtract(c2);
console.log(diff.toString()); // "2 + 2i"
```

#### `multiply(other)`

Multiplies two complex numbers.

**Parameters:**

- `other` (Complex): The complex number to multiply with.

**Returns:** A new Complex instance representing the product.

**Example:**

```javascript
const c1 = new Complex(1, 2);
const c2 = new Complex(3, 4);
const product = c1.multiply(c2);
console.log(product.toString()); // "-5 + 10i"
```

#### `divide(other)`

Divides one complex number by another.

**Parameters:**

- `other` (Complex): The divisor complex number.

**Returns:** A new Complex instance representing the quotient.

**Throws:** Error if dividing by zero (0 + 0i).

**Example:**

```javascript
const c1 = new Complex(1, 2);
const c2 = new Complex(1, 1);
const quotient = c1.divide(c2);
console.log(quotient.toString()); // "1.5 + 0.5i"
```

#### `conjugate()`

Returns the complex conjugate.

**Returns:** A new Complex instance with the imaginary part negated.

**Example:**

```javascript
const c = new Complex(1, 2);
const conj = c.conjugate();
console.log(conj.toString()); // "1 + -2i"
```

#### `magnitude()`

Calculates the magnitude (absolute value) of the complex number.

**Returns:** A number representing the magnitude.

**Example:**

```javascript
const c = new Complex(3, 4);
console.log(c.magnitude()); // 5
```

#### `phase()`

Calculates the phase (argument) of the complex number in radians.

**Returns:** A number representing the phase.

**Example:**

```javascript
const c = new Complex(1, 1);
console.log(c.phase()); // ~0.785 (π/4 radians)
```

#### `toPolar()`

Converts the complex number to polar form.

**Returns:** An object with magnitude and phase properties.

**Example:**

```javascript
const c = new Complex(3, 4);
const polar = c.toPolar();
console.log(polar); // { magnitude: 5, phase: ~0.927 }
```

#### `Complex.fromPolar(magnitude, phase)`

Creates a complex number from polar coordinates.

**Parameters:**

- `magnitude` (number): The magnitude.
- `phase` (number): The phase in radians.

**Returns:** A new Complex instance.

**Example:**

```javascript
const c = Complex.fromPolar(5, Math.PI / 4);
console.log(c.toString()); // "~3.536 + 3.536i"
```

#### `toString()`

Returns a string representation of the complex number.

**Returns:** A string in the format "real + imagi".

**Example:**

```javascript
const c = new Complex(1, -2);
console.log(c.toString()); // "1 + -2i"
```

### Financial and Mathematical Functions

#### `simpleInterest(principal, rate, time)`

Calculates simple interest.

**Parameters:**

- `principal` (number): Initial amount.
- `rate` (number): Interest rate per period.
- `time` (number): Number of periods.

**Returns:** Total amount after simple interest.

**Throws:** Error if any input is negative.

**Example:**

```javascript
const { simpleInterest } = require("pro-complex-math");
console.log(simpleInterest(1000, 0.05, 2)); // 1100
```

#### `compoundInterest(principal, rate, time, n)`

Calculates compound interest.

**Parameters:**

- `principal` (number): Initial amount.
- `rate` (number): Interest rate per period.
- `time` (number): Number of periods.
- `n` (number, optional): Compounding frequency per period (default: 1).

**Returns:** Total amount after compound interest.

**Throws:** Error if inputs are negative or n is zero/negative.

**Example:**

```javascript
const { compoundInterest } = require("pro-complex-math");
console.log(compoundInterest(1000, 0.05, 2)); // ~1102.5
console.log(compoundInterest(1000, 0.05, 2, 2)); // ~1103.8 (semi-annual)
```

#### `npv(rate, cashFlows)`

Calculates the Net Present Value (NPV) of a series of cash flows.

**Parameters:**

- `rate` (number): Discount rate.
- `cashFlows` (number[]): Array of cash flows (negative for investment).

**Returns:** NPV value.

**Throws:** Error if discount rate is ≤ -1.

**Example:**

```javascript
const { npv } = require("pro-complex-math");
const cashFlows = [-1000, 300, 400, 500];
console.log(npv(0.1, cashFlows)); // ~62.09
```

#### `exp(z)`

Computes the exponential of a complex number (e^z).

**Parameters:**

- `z` (Complex): The complex number.

**Returns:** A new Complex instance representing e^z.

**Example:**

```javascript
const { exp, Complex } = require("pro-complex-math");
const result = exp(new Complex(0, Math.PI));
console.log(result.toString()); // "-1 + 0i" (e^(iπ) = -1)
```

#### `log(z)`

Computes the natural logarithm of a complex number.

**Parameters:**

- `z` (Complex): The complex number.

**Returns:** A new Complex instance representing ln(z).

**Throws:** Error if z is zero (0 + 0i).

**Example:**

```javascript
const { log, Complex } = require("pro-complex-math");
const result = log(new Complex(1, 1));
console.log(result.toString()); // "~0.346 + 0.785i"
```

#### `sin(z)`

Computes the sine of a complex number.

**Parameters:**

- `z` (Complex): The complex number.

**Returns:** A new Complex instance representing sin(z).

**Example:**

```javascript
const { sin, Complex } = require("pro-complex-math");
const result = sin(new Complex(Math.PI / 2, 0));
console.log(result.toString()); // "1 + 0i"
```

## Installation Requirements

- Node.js v14 or higher.
- TypeScript (optional for IntelliSense support).

## Development

To contribute or modify:

Clone the repository:

```bash
git clone https://github.com/yourusername/pro-complex-math.git
```

Install dependencies:

```bash
npm install
```

Build the package:

```bash
npm run build
```

Run tests:

```bash
npm test
```

## License

MIT License - see LICENSE for details.

## Author

Sun - [@debrajrout28]

---

### Key Highlights

1. **Introduction**: Package ka overview aur features.
2. **Installation**: Simple install command.
3. **Usage**: Har function/method ka:
   - Description
   - Parameters
   - Return value
   - Error cases (agar applicable)
   - Code example
4. **Development**: Developers ke liye contribution guide.
5. **License**: MIT license (tu change kar sakta hai).

---

### Action

1. Apne project folder mein `README.md` file bana.
2. Upar wala content copy-paste kar de.
3. Apne hisaab se customize kar:
   - `name` agar alag hai toh change kar.
   - `author` mein apna GitHub ya email add kar.
   - `repository` URL daal agar GitHub pe host kar raha hai.

Fir build aur publish karne ke liye:

```bash
npm run build
npm test
npm login
npm publish --access public
```
