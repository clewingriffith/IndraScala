package clewin.scala

/**
 * Mobius transform matrix of form [ a b ] [ c d ] where a,b,c,d are Complex
 * numbers.
 *
 * @author clewin
 */

class Mobius(val a:Complex, val b:Complex, val c:Complex, val d:Complex) {

	def determinant:Complex = a*d - b*c

  def *(o:Mobius):Mobius = {
    new Mobius(a= (a*o.a + b*o.c), b=(a*o.b + b*o.d),
      c=(c*o.a + d*o.c), d=(c*o.b + d*o.d))
  }


	def times(other:Mobius):Mobius = {
		// a * o.a + b * o.c, a * o.b + b * o.d,
		// c * o.a + d * o.c, c * o.b + d * o.d)
		this*other
	};

	def inverse():Mobius = {
		// [ d/D -b/D ]
		// [ -c/D a/D ]
		val D = this.determinant

		new Mobius( //
				a=d/D, //
				b=(-b)/D, //
				c=(-c)/D, //
				d=a/D //
		);
	};

	def normalized():Mobius = {
		val rootD = this.determinant.sqrt

		return new Mobius( //
				a/rootD, //
				b/rootD, //
				c/rootD, //
				d/rootD //
		);
	};

	def trace = a+d

	// transform a Complex point by the matrix
	def transformPoint(z:Complex):Complex = {
		if (z.isInfinite) {
			if (c.abs() != 0.0) {
				a/c;
			} else {
				Complex.infinity;
			}
		} else {
			val numerator = a*z+b
      val denominator = c*z+d
			if (denominator.abs() == 0.0) {
				Complex.infinity
			} else {
				numerator/denominator
			}
		}
	};

  def apply(z:Complex):Complex = {
    this.transformPoint(z)
  }

  def apply(C:Circle):Circle = {
    val z = C.z - Complex(C.radius*C.radius)/(((d/c) + C.z).conjugate)
    val newCenter = this.apply(z)
    new Circle(newCenter, (newCenter - this.apply(C.z+Complex(C.radius))).abs)
  }

	//return the fixed points of the transformation
	//as an array of two Complex numbers. Note 3.3, p78
	def fixedPoints() = {
		val Tr = this.trace
    val root = (Tr*Tr - 4.0).sqrt
		//Complex[] points = new Complex[2];
		val aminusd = a-d
    val twoc = c * new Complex(2.0,0.0)

		val k = (Tr+root)/(Tr-root);
		if(k.abs()>1.0) {
      (((a-d + root)/(c*2)), ((a-d-root)/(c*2)))
		} else {
      ((a-d - root)/(c*2), (a-d+root)/(c*2))
		}
	}

	override def toString =
    "a:"+this.a.toString()+" b:"+this.b.toString()+"\n"+
		"c:"+this.c.toString()+" d:"+this.d.toString();

}

case class MobiusGenerator(a:Mobius, b:Mobius)
