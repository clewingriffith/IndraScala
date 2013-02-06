package clewin

import clewin.scala._

/**
 * 
 */

object Spirally {
   def main(args:Array[String]) {
      val gen:MobiusGenerator = GrandmaGenerator.apply(new Complex(1.90,-0.04), new Complex(1.91,0.2))


      val coarseLines: List[Segment] = new RecursiveLinePlot(gen, 20, 1).apply
      val coarseBB = BoundingBox(coarseLines)

      val lines = new RecursiveLinePlot(gen, 120, coarseBB.smallScale(resolution=1000)).apply
      val bb = BoundingBox(lines)
      Console.out.println(bb)

      val renderer = new RibRenderer("spirally")
      renderer.apply(lines)
      //renderer.close()
    }
}