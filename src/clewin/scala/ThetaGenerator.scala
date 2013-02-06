package clewin.scala

/**
 * 
 */

object ThetaGenerator {
  def apply(theta: Double): MobiusGenerator = {
    val cosTheta: Double = scala.math.cos(theta)
    val cosecTheta: Double = 1.0 / scala.math.sin(theta)
    val a: Mobius = new Mobius(Complex(cosecTheta), Complex(0.0, -1.0 * cosecTheta * cosTheta), Complex(0.0, cosecTheta * cosTheta), Complex(cosecTheta, 0.0))
    val b: Mobius = new Mobius(Complex(cosecTheta), Complex(cosecTheta * cosTheta, 0.0), Complex(cosecTheta * cosTheta, 0.0), Complex(cosecTheta, 0.0))
    new MobiusGenerator(a, b)
  }
}