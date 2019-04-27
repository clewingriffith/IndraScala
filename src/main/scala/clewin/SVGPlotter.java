package clewin;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;


import clewin.scala.Complex;
import clewin.scala.Mobius;
import clewin.scala.MobiusGenerator;
import clewin.scala.GrandmaGenerator;
import clewin.scala.RecursiveLinePlot;
import clewin.scala.AppoloniusGenerator;
import clewin.scala.Segment;
import clewin.scala.BoundingBox;

public class SVGPlotter {
	public static void main(String[] args) throws IOException {
		
		//args[0] i
		// s the svg file to plot to
		
		int numFrames = 2;

		
		//Create a set of 20 frames interpolating parameters
		/*Complex[] keyframe2 = new Complex[] {new Complex(1.90,-0.04), new Complex(1.91,0.2)};
		Complex[] keyframe1 = new Complex[] {new Complex(1.94,-0.0449408), new Complex(1.91,0.2)};
		  */

             Complex[] keyframe2 = new Complex[] {new Complex(1.889,0.05), new Complex(2.0,0.0)};
		Complex[] keyframe1 = new Complex[] {new Complex(1.887,0.05), new Complex(2.0,0.0)};

		Complex[][] frameParameters = new Complex[numFrames][2];
		for(int f=0; f<numFrames; f++) {
			Complex t = new Complex((double)f/(numFrames-1), 0.0);
			frameParameters[f] = new Complex[] { //
					keyframe1[0].plus(t.times(keyframe2[0].minus(keyframe1[0]))), //
					keyframe1[1].plus(t.times(keyframe2[1].minus(keyframe1[1])))};
			System.out.println(frameParameters[f][0]);
			System.out.println(frameParameters[f][1]);
			
		}
		
		if(args[0].endsWith("svg")) {
		//	plotSVGPath(out, points);
		}



		for(int f=0; f<numFrames; f++) {

            String frameFilename = args[0].replace(".rib", String.format("%04d.rib", f));
            File outputFile = new File(frameFilename);
		BufferedOutputStream bs = new BufferedOutputStream(new FileOutputStream(outputFile), 1024*1024);

		PrintStream out = new PrintStream(bs);
             plotRIBheader(out);
			//MobiusGenerator gen = RealSchottkyGenerator.appolonius();
           /*
            //MobiusGenerator gen =     AppoloniusGenerator.apply();
            MobiusGenerator gen = GrandmaGenerator.apply(frameParameters[f][0], frameParameters[f][1]);

			System.out.println("Calculating for generator: "+gen);
			//List<Segment> lines = new RecursiveLinePlot(gen, 40, 0.0006).apply();
			System.out.println("Calculated "+lines.size()+" lines");

			System.out.println("Plotting to file "+frameFilename);

			out.println("FrameBegin "+f);
			plotRIBframe(out, lines);
			out.println("FrameEnd");
                 out.close();
		bs.close();*/
		}

		System.out.println("done.");

	}
		
	
	/*private static class BoundingBox {
		public final double xmin,xmax,ymin,ymax;
		public BoundingBox(List<Complex> points) {
			double xmin=Double.MAX_VALUE;
			double xmax=-1.0*Double.MAX_VALUE;
			double ymin=Double.MAX_VALUE;
			double ymax=-1.0*Double.MAX_VALUE;
			for(Complex z : points) {
				if(z.re() > xmax) xmax=z.re();
				if(z.re() < xmin) xmin=z.re();
				if(z.im() > ymax) ymax=z.im();
				if(z.im() < ymin) ymin=z.im();
			}
			this.xmin=xmin;
			this.xmax=xmax;
			this.ymin = ymin;
			this.ymax = ymax;
		}
	} */
	
	public static void plotSVGPath(PrintStream out, List<Complex> points) throws FileNotFoundException {

		int numpoints = points.size();
		int progresspoints = numpoints/10;
		//out.println()"image/svg+xml");
		//document.open("text/plain");
		
		//BoundingBox bb = BoundingBox.apply(points);
		//String viewbox = "viewBox=\""+bb.xmin() + " " + bb.ymin() + " " + (bb.xmax()-bb.xmin()) + " " + (bb.ymax()-bb.ymin()) +"\"";
		out.println("<?xml version=\"1.0\"?>");
		out.println("<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">");
		//out.println("<svg width=\"100%\" height=\"100%\" "+viewbox+" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">");
		
		//move to the first point
		int i=0;
		Iterator<Complex> iter = points.iterator();
		Complex p0 = iter.next(); 
		out.print("<path d=\"");
		out.print(String.format("M%f %f ", p0.re(), p0.im()));

		//now do all the rest
		while(iter.hasNext()) {
			i+=1;
			if(i % progresspoints == 0) {
				System.out.print(10*i/progresspoints+"% ");
				System.out.flush();
			}
			Complex z = iter.next();
			out.println(String.format("L%f %f ", z.re(), z.im()));
		}
		out.print("\" ");
        out.println("style=\"stroke:none\"/>");
        
		out.println("</svg>");
	}
	
	public static void plotRIBheader(PrintStream out) {
		out.println("Display \"test_#4f.tiff\" \"file\" \"rgb\"\r\n" +
				"Format 1000 1000 1.0\r\n" + 
				"PixelSamples 5 5\r\n" +
				"Orientation \"lh\"\r\n" + 
				"Projection \"perspective\" \"fov\" [ 90 ]\r\n");
	}
	

    private static void plotLineSegments(PrintStream out, List<Segment> lineSegments) {
              out.print("Curves \"linear\" [");
        for(Segment s : lineSegments) {
              out.print(" 2");
        }
        out.println("]");
		out.println("\"nonperiodic\"");
		out.print(" \"P\" [ ");

		int numpoints = 2*lineSegments.size();
		int progresspoints = lineSegments.size()/10;
		int i=0;
		for(Segment s : lineSegments) {

			if(i % progresspoints == 0) {
				System.out.print(10*i/progresspoints+"% ");
				System.out.flush();
			}
			i+=1;
			out.println(s.start().x() + " " + s.start().y() + " " + 0.0 + " " + s.end().x() + " " + s.end().y() + 0.0);
		}

		out.println(" ]");
		out.println("\"constantwidth\" [0.001]");
    }
	
	public static void plotRIBframe(PrintStream out, List<Segment> lineSegments) {
		//BoundingBox bb = new BoundingBox(points);
		
		//plotRIBheader(out);
		out.println(
				//"FrameBegin\r\n" +
                "Display \"test_#4f.tiff\" \"file\" \"rgb\"\r\n" +
				"WorldBegin\r\n" + 
				"  LightSource \"ambientlight\" 0\r\n" + 
				"  Color 1.0 1.0 1.0\r\n" + 
				"  AttributeBegin\r\n" + 
				"    Surface \"plastic\"\r\n" + 
				"    Translate 0 0 1\r\n");



        plotLineSegments(out, lineSegments);


		out.println("AttributeEnd");
		out.println("WorldEnd");
		//out.println("FrameEnd");

	}
}
