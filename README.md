# Langtons_Ant

Langton's ant is a two-dimensional universal Turing machine with a very simple set of rules but complex emergent behavior. It was invented by Chris Langton in 1986 and runs on a square lattice.

Squares on a plane are colored variously either black or white. We arbitrarily identify one square as the "ant". The ant can travel in any of the four cardinal directions at each step it takes. The "ant" moves according to the rules below:

1. At a white square, turn 90° clockwise, flip the color of the square, move forward one unit
2. At a black square, turn 90° counter-clockwise, flip the color of the square, move forward one unit

These simple rules lead to complex behavior. Three distinct modes of behavior are apparent, when starting on a completely white grid.

1. Simplicity. During the first few hundred moves it creates very simple patterns which are often symmetric.
2. Chaos. After a few hundred moves, a large, irregular pattern of black and white squares appears. The ant traces a pseudo-random path until around 10,000 steps.
3. Emergent order. Finally the ant starts building a recurrent "highway" pattern of 104 steps that repeats indefinitely.

Ref : https://en.wikipedia.org/wiki/Langton%27s_ant

To open up the html file above you can use : https://harishupadhyaya.github.io/Langtons_Ant/ant.html

Yet to do: 
At a future date, probably make a data set of intitial conditions and the coordinate (x,y) at which it becomes regular (or the direction of the highway) and see if it can be made predictive with a nueral network.
