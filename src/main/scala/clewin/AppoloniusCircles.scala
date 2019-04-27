package clewin

import clewin.scala._

/**
 *
 */

object AppoloniusCircles {
  def main(args: Array[String]) {
    val gen: MobiusGenerator = AppoloniusGenerator()

    val circles: List[Circle] = new RecursiveCirclePlot(gen, new Circle(new Point(0,-0.2), 0.1),  new Circle(new Point(-1,-1), 1), 1, 0.01).apply
    circles.foreach(println)
    //val bb = BoundingBox(lines)
    //Console.out.println(bb)

    val renderer = new RibRenderer("appoloniusCircle")
    renderer.renderCircles(circles)
    //renderer.close()
  }
}