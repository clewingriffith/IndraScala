package clewin.scala

/**
 *
 */

object RealSchottkyGenerator {

  def apply(s: Double, t: Double): MobiusGenerator = {
    val a = new Mobius(a = Complex(s + t), //
      b = Complex(-2.0 * s * t), //
      c = Complex(-2.0), //
      d = Complex(s + t))

    val b = new Mobius(a = Complex(s + t),
      b = Complex(2.0),
      c = Complex(2.0 * s * t),
      d = Complex(s + t))

    new MobiusGenerator(a, b)
  }



}