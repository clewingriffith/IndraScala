IndraScala
==========

Scala experimentation of the algorithms in Indras Pearls by David Mumford, Caroline Series and David Wright.

The original algorithms were written in scala, but I've added scala-js to the mix and exposed some of the
classes to javascript so that they can be controlled from an
Observable Notebook here: https://observablehq.com/d/daabedebdac5219b

To build the scala-js requires sbt

```
sbt
>fastOptJS
```
This will transpile the scala to javascript in `target/scala-2.12/indras-pearls-fastopt.js`

This can be imported into an observable notebook like this
```
ip = import('https://clewingriffith.github.io/IndraScala/target/scala-2.12/indras-pearls-fastopt.js')
```
