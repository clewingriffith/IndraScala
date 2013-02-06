package clewin.scala

/**
 *
 */

import scala.collection.mutable.StringBuilder
import java.io.{FileOutputStream, BufferedOutputStream, File, PrintStream}

class RibRenderer(val filenamePrefix: String, val resolution: Int = 1000) {

  //var bs: BufferedOutputStream
  //var out:PrintStream

  def renderCircles(circles: List[Circle], frameNo: Int = -1) {
    //val boundingBox = BoundingBox(lineSegments)
    renderFile(render(_, circles), new BoundingBox(-1,-1,1,1), frameNo)
  }

  def apply(lineSegments: List[Segment], frameNo: Int = -1) {
    val boundingBox = BoundingBox(lineSegments)
    renderFile(render(_, lineSegments), boundingBox, frameNo)
  }

  def renderFile(renderFunction: (PrintStream) => Unit, boundingBox: BoundingBox, frameNo: Int = -1) {
    val frameNoSuffix = if (frameNo == -1) "" else frameNo formatted "%04d"
    val outputFile = new File("output/" + filenamePrefix + frameNoSuffix + ".rib")
    val bs = new BufferedOutputStream(new FileOutputStream(outputFile), 1024 * 1024)
    val out = new PrintStream(bs)

    //out.println("Display \"" + filenamePrefix+frameNoSuffix+".tiff\" \"file\" \"rgb\"")


    val headerTemplate: String = """|Display "%s.tiff" "file" "rgb"
                             |Format %d %d 1.0
                             |Orientation "lh"
                             |Projection "orthographic"
                             |ScreenWindow %s""".stripMargin

    //Console.println(headerTemplate)

    out.println(headerTemplate.format(filenamePrefix + frameNoSuffix, resolution, resolution,
      List(boundingBox.xmin, boundingBox.xmax, boundingBox.ymin, boundingBox.ymax).mkString(" ")))

    out.println("WorldBegin")
    out.println("  LightSource \"ambientlight\" 0")
    out.println("  Color 1.0 1.0 1.0")
    out.println("  AttributeBegin")
    out.println("    Surface \"plastic\"")
    out.println("    Translate 0 0 1")

    renderFunction(out)

    out.println("AttributeEnd")
    out.println("WorldEnd")
    out.close
    bs.close
  }

  /*def header(out:PrintStream, frameNo:Int=0, boundingBox:BoundingBox) {



      out.println("Format %d1000 1000 1.0")
      out.println("PixelSamples 5 5")
      out.println("Orientation \"lh\"")
      out.println("Projection \"orthographic\"")
      out.println("ScreenWindow "+List(boundingBox.xmin,boundingBox.xmax,boundingBox.ymin,boundingBox.ymax).mkString(" "))
  } */

  /* def renderFrame(out:PrintStream, lineSegments: List[Segment], boundingBox:BoundingBox) {

    //header(out, boundingBox)


    render(out, lineSegments, lineWidth=boundingBox.smallScale(resolution))

  }*/

  def render(out: PrintStream, lineSegments: List[Segment], lineWidth: Double = 0.1) {


    out.println("Curves \"linear\" [")
    for (s <- lineSegments) {
      out.print(" 2")
    }
    out.println("]\n")
    out.println("\"nonperiodic\"")
    out.print(" \"P\" [ ")
    var numpoints: Int = 2 * lineSegments.size
    var progresspoints: Int = lineSegments.size / 10
    var i: Int = 0
    for (s <- lineSegments) {
      if (i % progresspoints == 0) {
        System.out.print(10 * i / progresspoints + "% ")
        System.out.flush
      }
      i += 1
      out.println(s.start.x + " " + s.start.y + " " + 0.0 + " " + s.end.x + " " + s.end.y + 0.0)
    }
    out.println(" ]")
    //colors
    out.println(" \"Cs\" [")

    for (s <- lineSegments) {
      //(red,green,blue) = colorMapper(value)
      val red = (s.value % 4) / 3.0
      val green = (s.value % 8) / 7.0
      val blue = (s.value % 12) / 11.0
      out.println(List(red, green, blue, red, green, blue).mkString(" "))

      //out.println(red " " + green + " " + blue + " " + red + " " + green + " " blue)
    }
    out.println(" ]")

    out.println("\"constantwidth\" [" + lineWidth.toString() + "]")
  }

  def render(out: PrintStream, circles: List[Circle]) {
    for (c <- circles if c.radius.isInfinite()==false) {
      out.println("TransformBegin")
      out.println("Translate " + c.center.x + " " + c.center.y + " 0")
      out.println("Disk 0 " + c.radius + " 360")
      out.println("TransformEnd")
    }
  }


}