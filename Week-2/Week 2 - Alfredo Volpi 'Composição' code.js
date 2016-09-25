/**
* Kevin's comments:  Make sure you call createCanvas inside setup, not draw.
* Otherwise you will be creating an entirely new canvas each time draw is looped.
*/
//Howard Park
//Creative Coding
//Week 2
//Alfredo Volpi c. 1958 "Composição"

function setup(){

}

function draw(){
	createCanvas(500,500);
	background('#F7E9C3');
	
	fill(color('#5E2929'));
	beginShape();
	vertex(0,500);
	vertex(90,0);
	vertex(210,120);
	vertex(100,500);
	endShape(CLOSE);
}
