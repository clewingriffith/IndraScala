package clewin.scala

/**
 * 
 */

case class BoundingBox(val xmin:Double, val ymin:Double, val xmax:Double, val ymax:Double) {
  val dx = xmax-xmin
  val dy = ymax-ymin
  val scale = math.sqrt(dx*dx+dy*dy)
  def smallScale(resolution:Int) = scale/resolution
}

object BoundingBox {
    def apply(segments: List[Segment]):BoundingBox = {
      var xmin = Double.MaxValue
      var ymin = Double.MaxValue
      var xmax = Double.MinValue
      var ymax = Double.MinValue
      for(seg <- segments) {
         xmin = if(seg.start.x < xmin) seg.start.x else xmin
         xmin = if(seg.end.x < xmin) seg.end.x else xmin
         ymin = if(seg.start.y < ymin) seg.start.y else ymin
         ymin = if(seg.end.y < ymin) seg.end.y else ymin
         xmax = if(seg.start.x > xmax) seg.start.x else xmax
         xmax = if(seg.end.x > xmax) seg.end.x else xmax
         ymax = if(seg.start.y > ymax) seg.start.y else ymax
         ymax = if(seg.end.y > ymax) seg.end.y else ymax
      }
      new BoundingBox(xmin, ymin, ymax, ymax)
    }
}