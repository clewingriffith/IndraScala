package clewin.scala

import collection.mutable.ArrayBuffer

/**
 * 
 */

class RecursiveCirclePlot(generator:MobiusGenerator, CA:Circle, CB:Circle, val levmax:Int, val minLineLength:Double) {

  val gens = Array(generator.a, generator.b, generator.a.inverse(), generator.b.inverse())
  val circ:Array[Circle] = Array(CA, CB, generator.a(CA), generator.b(CB))

  def mod4(x:Int):Int = {
    ((x % 4) + 4) % 4
  }

  def apply():List[Circle] = {
    var finalOutput:List[Circle] = Nil


    for(k <- 0 until 4) {
        Console.out.println("Root:"+k)

        finalOutput = explore_tree(gens(k), k, 0) ::: finalOutput;
      }


    return finalOutput
  }

  def explore_tree(X:Mobius, l:Int, lev:Int):List[Circle] = {

        var segList:List[Circle] = Nil

        for(k <- l-1 to l+1) {
          val Y = X*gens(mod4(k))


          val circ:Circle = Y.apply(this.circ(mod4(k)))
          segList = circ::segList


          if(lev+1 < this.levmax && circ.radius>this.minLineLength) {
            segList = explore_tree(Y,k,lev+1) ::: segList;
          }
        }
        return segList
  };

}