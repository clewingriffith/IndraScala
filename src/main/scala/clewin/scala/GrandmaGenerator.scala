package clewin.scala

import scala.scalajs.js.annotation._
import scala.scalajs.js
/**
 * 
 */

@JSExportTopLevel("GrandmaGenerator")
object GrandmaGenerator {


    @JSExport("build")
		def build(ta:js.Array[Double], tb:js.Array[Double]) = {
			apply(new Complex(ta(0),ta(1)), new Complex(tb(0),tb(1)))
		}
	  @JSExport("apply")
    def apply(ta:Complex, tb:Complex) = {

		// coefficients of quadratic x^2 - ta tb x + ta^2+tb^2 = 0
		val negqb = ta*tb
		val qc = ta*ta + (tb*tb)

		val root = (negqb*negqb - (qc*4)).sqrt
		val x = Complex(0.5)*(negqb-root)

		val tab = x;

		val half = Complex(0.5);
		val two = Complex(2.0);

		val twoi = new Complex(0.0, 2.0);


		val z0_num = (tab-2.0)*tb;
    val z0_den = tb*tab- ta*2.0 + twoi*tab
		val z0 = z0_num/z0_den

		val a = new Mobius( //
			half*ta, //
			(ta*tab-tb*2 +new Complex(0.0,4.0)) / ((tab*2 + new Complex(4.0,0.0))*z0), //
			(ta*tab-tb*2 -new Complex(0.0, 4.0)).times(z0).divide(two.times(tab).minus(new Complex(4.0,0.0))), //
			half*ta);

		val b = new Mobius( //
				half*(tb-twoi), //
				half*tb, //
				half*tb, //
				half*(tb+twoi));


		new MobiusGenerator(a, b);
	};
}