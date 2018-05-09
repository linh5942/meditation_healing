//there is both a socket IO server and a socket IO client
//This is my client code


let controlSpeed = 10;

let cirPath = [];
let triPath = [];
let spacing = 10;
let theta = 0;

let alpha = 0;
let alpha2 = 0;
let alpha3 = 0;

var vid;




function polarToCartesian(r, angle){
	return createVector(r*cos(angle), r*sin(angle));
}



function setup()
{
	
	var myCanvas = createCanvas(600, 500);
	myCanvas.parent('myContainer');
	//load video
	vid = createVideo("assets/healing.mp4");
	vid.hide();
	vid.loop();




	angleMode(DEGREES);
	let radius = 70;
	let startA = 0;
	let endA = 120;

	//start vector and end vector
	//let start = createVector(radius*cos(startA), radius*sin(startA));
    //let end = createVector(radius*cos(endA), radius*sin(endA));
    let start = polarToCartesian(radius, startA);
    let end = polarToCartesian(radius, endA);


	for(let a = startA; a < 360; a += spacing){
		// a/n degrees, a is angle
		let x = radius * cos(a);
		let y = radius * sin(a);
		//circle vector
		//let cv = createVector(x, y);
		let cv = polarToCartesian(radius, a);
		cirPath.push(cv);

		//morPath.push(cv);

		//the amount of lerp
		let amt = (a % 120) / (endA - startA);
		let tv = p5.Vector.lerp(start, end, amt);
		triPath.push(tv);


		if((a + spacing) % 120 == 0){
			startA = startA + 120;
			endA = endA + 120;
			start = polarToCartesian(radius, startA);
    		end = polarToCartesian(radius, endA);
		}

	}

	

}




function draw(){
	background(0);

	// call the video by image
	image(vid, 0, 0, 600, 500);

	stroke(255);
	strokeWeight(3);
	noFill();

	//amount for lerp function
	//sin function gives value -1~1
	//but i only want 0-1
	let amt = (sin(theta)+1)/2; 
    let shapeSpeed = 0.1;
	theta += shapeSpeed;





	push();
	translate(300, 150);

	let rotateSpeed = 10;
    alpha += rotateSpeed;
	rotate(alpha);




	beginShape();
	for(let i=0; i<cirPath.length; i++){
		let cv = cirPath[i];
		let tv = triPath[i];
		//let v = morPath[i];

		let x = lerp(cv.x, tv.x, amt);
		let y = lerp(cv.y, tv.y, amt);
		vertex(x, y);
	}
	endShape(CLOSE);



	translate(5, 5);
	beginShape();
	for(let i=0; i<cirPath.length; i++){
		let cv = cirPath[i];
		let tv = triPath[i];
		//let v = morPath[i];

		let x = lerp(cv.x, tv.x, amt);
		let y = lerp(cv.y, tv.y, amt);
		vertex(x, y);
	}
	endShape(CLOSE);

	pop();



	
	push();
	translate(200, 350);
	let rotateSpeed2 = 10;
    alpha2 += rotateSpeed2;
	rotate(alpha2);

	beginShape();
	for(let i=0; i<cirPath.length; i++){
		let cv = cirPath[i];
		let tv = triPath[i];
		//let v = morPath[i];

		let x = lerp(cv.x, tv.x, amt);
		let y = lerp(cv.y, tv.y, amt);
		vertex(x, y);
	}
	endShape(CLOSE);


	translate(5,5);
	beginShape();
	for(let i=0; i<cirPath.length; i++){
		let cv = cirPath[i];
		let tv = triPath[i];
		//let v = morPath[i];

		let x = lerp(cv.x, tv.x, amt);
		let y = lerp(cv.y, tv.y, amt);
		vertex(x, y);
	}
	endShape(CLOSE);

	pop();




	push();
	translate(400, 350);

	let rotateSpeed3 = 10;
    alpha3 += rotateSpeed3;
	rotate(alpha3);

	beginShape();
	for(let i=0; i<cirPath.length; i++){
		let cv = cirPath[i];
		let tv = triPath[i];
		//let v = morPath[i];

		let x = lerp(cv.x, tv.x, amt);
		let y = lerp(cv.y, tv.y, amt);
		vertex(x, y);
	}
	endShape(CLOSE);

	translate(5, 5);
	beginShape();
	for(let i=0; i<cirPath.length; i++){
		let cv = cirPath[i];
		let tv = triPath[i];
		//let v = morPath[i];

		let x = lerp(cv.x, tv.x, amt);
		let y = lerp(cv.y, tv.y, amt);
		vertex(x, y);
	}
	endShape(CLOSE);

	pop();



}

