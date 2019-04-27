package clewin

import scala._
import scala.BoundingBox._

/**
 * 
 */

object GrandmaAnimation {

   def main(args:Array[String]) {
     val searcherA = new ParameterSearch(new Complex(1.8,-0.1), new Complex(1.99,-0.01))
     val searcherB = new ParameterSearch(new Complex(1.89, 0.16), new Complex(1.95, 0.24))

     val aTraces:List[Complex] = searcherA.search(15*5,1)
     val bTraces:List[Complex] = searcherB.search(15*5,1)

     //val gen:MobiusGenerator = GrandmaGenerator.apply(new Complex(1.90,-0.04), new Complex(1.91,0.2))


      //val coarseLines: List[Segment] = new RecursiveLinePlot(gen, 20, 1).apply
      //val coarseBB = BoundingBox(coarseLines)

      //val lines = new RecursiveLinePlot(gen, 120, coarseBB.smallScale(resolution=1000)).apply
      //val bb = BoundingBox(lines)
      //Console.out.println(bb)

      val renderer = new RibRenderer("randomSearchAnimation", resolution=500)

      var frameNo = 0
      for((ta,tb) <- aTraces zip bTraces) {
        println("Frame " + frameNo +" with traces " + (ta,tb))
        val gen = GrandmaGenerator(ta,tb)
        val lines = new RecursiveLinePlot(gen, 10, 0.1).apply
        //val bb = BoundingBox(lines)
        renderer.apply(lines, frameNo)
        frameNo += 1
      }


      //renderer.close()
   }
}