let scaling_factor = 5;
let w; 
let h; 
let stepCounter = 0;
// 0 is black, 1 is white 
let grid;

let ant; 

let dir; 

function setup() 
{
	createCanvas(floor(600),floor(600));
	background(0);
	w = floor(width / scaling_factor);
	h = floor(height/ scaling_factor);

	//Sets the entire grid to black 
	grid = nj.zeros([w,h]);

	//Creates ant at the center of the canvas
	ant  = new Complex(floor(w/2), floor(h/2));

	//Sets the direction of ant to leftwards
	dir = new Complex(0, 1);
}

function draw() {

	scale(scaling_factor);
	// frameRate(1);

	//Moves the ant 

	let x = ant.re;
	let y = ant.im;
	
	// If the ant is on a black square
	if(grid.get(x, y) === 0) {
		 
		// Change colour of the black box to white
		grid.set(x,y,1); 

		// Turn 90 degrees anticlockwise
		dir = dir.mult(new Complex(0, -1)); 
					
		} else if (grid.get(x, y) === 1) {  //If the ant is on a white square


			// Change colour of the white box to black 
			grid.set(x, y, 0); 

			// Turn 90 degrees clockwise 
			dir = dir.mult(new Complex(0, 1)); 				 
		}

			let col = grid.get(x,y)*255;
			noStroke();
			fill(col);
			rectMode(CENTER);
			rect(x,y,1,1);

			ant = ant.add(dir);	
			stepCounter += 1; 


		//Draws the ant 
		fill(255,0,0);
		noStroke();
		ellipse(ant.re,ant.im,0.7);
		
		if(stepCounter > 12000) {
			noLoop();
		}


		


		

	

}




