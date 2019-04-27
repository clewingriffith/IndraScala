package clewin

import java.io.{PrintStream, FileOutputStream, BufferedOutputStream, File}

import clewin.scala._

/**
 * 
 */

object AppoloniusApp {


    def main(args:Array[String]) {
      val gen:MobiusGenerator = AppoloniusGenerator()

      val lines: List[Segment] = new RecursiveLinePlot(gen, 140, 0.01).apply
      val bb = BoundingBox(lines)
      Console.out.println(bb)

      val renderer = new RibRenderer("appolonius")
      renderer.apply(lines)
      //renderer.close()
    }
}