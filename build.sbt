enablePlugins(ScalaJSPlugin)

name := "Indras Pearls"
scalaVersion := "2.12.6" // or any other Scala version >= 2.10.2
libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "0.9.6"
// libraryDependencies += "org.singlespaced" %%% "scalajs-d3" % "0.3.4"
// This is an application with a main method
scalaJSUseMainModuleInitializer := false

// scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.ESModule) }
//scalaJSModuleKind in Compile := ModuleKind.ESModule

//Compile/mainClass := Some("clewin.AppoloniusWebApp")

