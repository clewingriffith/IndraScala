package clewin.scala


/**
 * 
 */

class Complex(val re:Double, val im:Double) {

   def canEqual(other:Any):Boolean =
    other.isInstanceOf[Complex]

	 override def hashCode():Int = {
    val prime = 31;
    prime * (prime * re.hashCode()) + im.hashCode()
	}

	override def equals(other:Any):Boolean = {
    other match {
      case that:Complex =>
        (that canEqual  this) &&
        re == that.re &&
        im == that.im
      case _ => false
    }
	}

  def +(other: Complex):Complex = {
		new Complex(this.re + other.re, this.im + other.im)
	}

	def plus(other: Complex):Complex = {
		this + other
	}

  def -(other: Complex):Complex = {
       new Complex(this.re - other.re, this.im - other.im)
  }

	def minus(other:Complex) = {
		this - other
	}

  def -(other:Double) = new Complex(re-other, im)

  def unary_-():Complex =
    new Complex(-1.0*this.re, -1.0*this.im)

  def *(other:Double):Complex = this * new Complex(other, 0.0)

  def *(other:Complex) = {
      new Complex(this.re * other.re - this.im * other.im, this.re
				* other.im + this.im * other.re)
  }

	def times(other:Complex):Complex = {
    this * other
	};

  def /(other:Complex):Complex = {
    val den:Double = other.re * other.re + other.im * other.im;

		if (den == 0.0) {
			Complex.infinity
		} else if (den.isInfinite || den.isNaN) {
			new Complex(0.0, 0.0);
		} else {
			val r = (this.re * other.re + this.im * other.im) / den;
			val i = (this.im * other.re - this.re * other.im) / den;
			new Complex(r, i);
		}
  }

  def divide(other:Complex):Complex = {
		this / other
	}

	def abs():Double = {
    math.sqrt(this.re * this.re + this.im * this.im)
	}

	def isInfinite:Boolean = {
		(re.isInfinite  || im.isInfinite || re.isNaN || im.isNaN)
	}

	def conjugate:Complex =
    new Complex(this.re, -1.0 * this.im)

	def arg:Double =
    scala.math.atan2(this.im, this.re)

	def sqrt:Complex = {
		if (this.im == 0.0) {
			if (this.re < 0.0) {
				new Complex(0.0, scala.math.sqrt(-1.0 * this.re));
			} else {
				new Complex(scala.math.sqrt(this.re), 0.0);
			}
		} else {
			val U2 = 0.5 * (this.re + this.abs());
			val u = scala.math.sqrt(U2);
			val v = this.im / (2.0 * u);
			new Complex(u, v);
		}

	}

	override def toString =
    "(" + this.re + "," + this.im + ")"

  //implicit def doubleToComplex(d:Double):Complex = new Complex(d,0.0)

}

object Complex {
  def apply(d:Double) = new Complex(d,0.0)
  def apply(re:Double, im:Double) = new Complex(re,im)
  def infinity = new Complex(Double.PositiveInfinity, Double.PositiveInfinity)
}