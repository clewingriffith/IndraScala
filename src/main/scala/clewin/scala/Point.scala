package clewin.scala

/**
 * 
 */

class Point(val x:Double, val y:Double) {

}

object Point {
    implicit def complexToPoint(c:Complex) = new Point(x=c.re, y=c.im)
}

//define a line from start to end. value is just some value associated with the line.
class Segment(val start:Point, val end:Point, val value:Int=0)

class Circle(val center:Point, val radius:Double) {
    implicit def complexToPoint(c:Complex) = new Point(x=c.re, y=c.im)
  implicit def pointToComplex(p:Point) = new Complex(p.x, p.y)
  def z:Complex = center
}

object Circle {

}
