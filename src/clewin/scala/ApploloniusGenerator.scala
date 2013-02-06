package clewin.scala

/**
 * 
 */

object AppoloniusGenerator {
  def apply() = {

		val a = new Mobius( //
				new Complex(1.0, 0.0), //
	            new Complex(0.0, 0.0), //
	            new Complex(0.0, -2.0), //
	            new Complex(1.0, 0.0));


		val b = new Mobius( //
				new Complex(1.0, -1.0), //
                new Complex(1.0, 0.0), //
                new Complex(1.0, 0.0), //
                new Complex(1.0, 1.0));


		new MobiusGenerator(a, b);
	};
}