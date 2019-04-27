package clewin.scala

/**
 * 
 */
import scala.util.Random

class ParameterSearch(val zmin:Complex, val zmax:Complex) {
  val scale:Complex = zmax - zmin
  //  val (minRe,maxRe,minIm,maxIm) = (zmin.re,zmax.re,zmin.im,zmax.im)
  val random = new Random()

  def randomComplex() = {
    zmin + Complex(scale.re * random.nextDouble(), scale.im*random.nextDouble())
  }

  def interpolate(start:Complex, end:Complex, t:Double) = {
     start + (end-start)*t
  }

  def interpolatedRange(start:Complex, end:Complex, numPoints:Int):List[Complex] = {
    val maxNum:Double = numPoints - 1
    List.tabulate(numPoints)(n => interpolate(start, end, n/maxNum))
  }

  def search(numSearchPoints:Int, interPointsBetweenSearches:Int):List[Complex] = {
     val searchPoints:List[Complex] = for(i <- List.range(0,numSearchPoints)) yield randomComplex()
     val searchPairs = searchPoints zip searchPoints.tail
     searchPoints.head :: (for((z0,z1) <- searchPairs) yield interpolatedRange(z0,z1,2+interPointsBetweenSearches).tail).flatten
  }
}