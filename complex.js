
class Complex {
	constructor(a,b) {
		this.re = a;
		this.im = b;
	}

	add(c) {
		let re = this.re + c.re;
		let im = this.im + c.im;
		let z = new Complex(re, im);
		return z;
	}

	mult(c) {
		let re = this.re * c.re - this.im * c.im;
		let im = this.re * c.im + this.im * c.re;
		let z = new Complex(re,im);
		return z; 
	}

	scalar_mult(m) {
		this.re = this.re * m;
		this.im = this.im * m;
	}

	mag() {
		let x = sqrt(this.re * this.re + this.im * this.im);
		return x;
	}

}