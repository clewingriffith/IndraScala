package clewin.scala

import org.junit.Test

/**
 * 
 */



class ParameterSearchTest {
   @Test def testSearchWithoutInterpolation() {
       val p = new ParameterSearch(new Complex(0.0,0.0), new Complex(1.0, 1.0))
      val items = p.search(numSearchPoints = 5, interPointsBetweenSearches=0)

      items.foreach(println)
     assert(items.size == 5)
   }

   @Test def testSearchWithSinglePointInterpolation() {
     println()
       val p = new ParameterSearch(new Complex(0.0,0.0), new Complex(1.0, 1.0))
      val items = p.search(numSearchPoints = 5, interPointsBetweenSearches=1)

      items.foreach(println)
     assert(items.size == 9)
   }
}
