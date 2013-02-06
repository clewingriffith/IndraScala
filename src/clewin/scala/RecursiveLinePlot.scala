package clewin.scala

import scala.collection.mutable.ArrayBuffer
import scala.collection.JavaConversions._

/**
*
*/

class RecursiveLinePlot(generator:MobiusGenerator, val levmax:Int, val minLineLength:Double) {

  val gens = Array(generator.a, generator.b, generator.a.inverse(), generator.b.inverse())
  val fix = gens.map(x => x.fixedPoints()._1)
  val a=0; val b=1; val A=2; val B=3;

  def rightHand(i:Int):Mobius = {
     gens(mod4(i+1))*gens(mod4(i+2))*gens(mod4(i+3))*gens(mod4(i+4))
  }
  def leftHand(i:Int):Mobius = {
     gens(mod4(i-1))*gens(mod4(i-2))*gens(mod4(i-3))*gens(mod4(i-4))
  }

  def createBegPt(i:Int):Complex = {
       rightHand(i).fixedPoints()._1
  }
  def createEndPt(i:Int):Complex = {
       leftHand(i).fixedPoints()._1
  }

  val begpt = Array.tabulate(4)(i => createBegPt(i))

  val endpt = Array.tabulate(4)(i => createBegPt(i))


  def genRepet(i:Int, j:Int) = {
    j match {
      case 0 => rightHand(i)
      case 1 => gens(i)
      case 2 => leftHand(i)
    }
  }

  val repetFP = Array.tabulate(4)(i => Array.tabulate(3)(j => genRepet(i,j).fixedPoints()._1))


  def apply():List[Segment] = {
    //val outputPoints = new ArrayBuffer[Complex]

    //First point
    //val g:Mobius = gens(0)*gens(3)*gens(2)*gens(1)
    //val g:Mobius = gens(a)

    var finalOutput:List[Complex] = Nil
    //outputPoints += g.fixedPoints()._1
    var segList:List[Segment] = Nil

      for(k <- 0 until 4) {
        Console.out.println("Root:"+k)
        val outputPoints = new ArrayBuffer[Complex]
        outputPoints += begpt(k)

        segList = explore_tree(gens(k), k, 0/*, outputPoints*/) ::: segList;
        Console.out.println("numLines:"+segList.length)
        //finalOutput = outputPoints.toList ::: finalOutput
      }


    return segList
    //return scala.collection.JavaConversions.bufferAsJavaList(final)
  }

    /**
   * Correct implementation of mod 4 that works for negative numbers
   * @param x
   * @return
   */
  def mod4(x:Int):Int = {
    return ((x % 4) + 4) % 4;
  };

  def explore_tree(X:Mobius, l:Int, lev:Int/*, outputPoints:ArrayBuffer[Complex]*/):List[Segment] = {

        var segList:List[Segment] = Nil

        for(k <- l-1 to l+1) {
          val Y = X*gens(mod4(k))
          //val oldpoint:Complex = outputPoints(outputPoints.size-1);
          //val newpoint:Complex = Y.transformPoint(endpt(mod4(k)))
          //val newpoint:Complex = Y.transformPoint(fix(mod4(k)));

          //test to see if we can use screen distance
          //Point newscrpt = displayMatrix.apply(newpoint);
          //var oldscrpt = displayMatrix.apply(outputLines[outputLines.length-1]);
          //var dx = newscrpt[0]-oldscrpt[0];
          //var dy = newscrpt[1]-oldscrpt[1];
          //val dist:Double = (newpoint-oldpoint).abs

          val z0 = Y.transformPoint(repetFP(mod4(k))(0))
          val z1 = Y.transformPoint(repetFP(mod4(k))(1))
          val z2 = Y.transformPoint(repetFP(mod4(k))(2))

          val dist1:Double = (z1-z0).abs
          val dist2:Double = (z2-z1).abs

          /*if(lev+1 >= this.levmax || (dist < minLineLength)/*|| newpoint.minus(outputLines[outputLines.length-1]).abs() < 0.001*/ ) {
            outputPoints += newpoint
          } */
          if(lev+1 >= this.levmax || (dist1 < this.minLineLength && dist2 < this.minLineLength)/*|| newpoint.minus(outputLines[outputLines.length-1]).abs() < 0.001*/ ) {
            //outputPoints += newpoint
            //outputPoints += z0
            //outputPoints += z1
            //outputPoints += z2
            segList = new Segment(z0, z1, lev) :: segList
            segList = new Segment(z1, z2, lev) :: segList
          }
          else {
            segList = explore_tree(Y,k,lev+1) ::: segList;
          }
        }
        return segList
      };

}