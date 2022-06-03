// images
let sl_fitness;
let robinhood_clone;
let v_portfolio;
let d_portfolio;
let react_logo;
let node_logo;
let firebase_logo;
let test;
// projects
let projects = [];
let sarahLizFitness;
let robinhoodClone;
let videoPortfolio;
let developerPortfolio;
// scrolling behavior
let d = 0;
let scroll = 0;
let count = 0;
// fonts
let myFont;

function preload() {
	// sl_fitness = loadImage("Images/sarahliz_fitness.png");
	sl_fitness = loadImage(PROJECTS[0].img);
	robinhood_clone = loadImage(PROJECTS[1].img);
	v_portfolio = loadImage(PROJECTS[2].img);
	d_portfolio = loadImage(PROJECTS[3].img);
	react_logo = loadImage(PROJECTS[0].tech1);
	node_logo = loadImage(PROJECTS[0].tech2);
	firebase_logo = loadImage(PROJECTS[1].tech2);

	myFont = loadFont('./assets/fonts/Digital_tech.otf');
	// exo = loadFont('assets/Exo.otf');
}

function setup() {
	mCreateCanvas(windowWidth, windowHeight, WEBGL);
	mCamera(0, 0, 4500, 0, 0, 0, -0.5, 1, 0);

	//   var options = {
	//     preventDefault: true,
	//   };

	//   let hammer = new Hammer(document.body, options);
	//   hammer.get("swipe").set({
	//     direction: Hammer.DIRECTION_ALL,
	//   });

	// hammer.on("swipeup swipedown", swiped);

	// let backg = canvas.elt.getContext("webgl").texImage2D;
	sarahLizFitness = new Project(PROJECTS[0], sl_fitness);

	robinhoodClone = new Project(PROJECTS[1], robinhood_clone);
	videoPortfolio = new Project(PROJECTS[2], v_portfolio);
	developerPortfolio = new Project(PROJECTS[3], d_portfolio);

	// console.log(backg)

	projects.push(
		sarahLizFitness,
		robinhoodClone,
		videoPortfolio,
		developerPortfolio
	);

	// let burst = map(speed,0,10,)

	// starG.show()
}

function draw() {
	mBackground(0, 0, 200, 10);
	mReset();

	// increases depth of view
	let eyeZ = height / 2 / tan(PI / 6);
	mPerspective(PI / 3, width / height, eyeZ / 10, 10000);

	mRotateY(scroll);

	//messing around with lighting
	// let dirX = (mouseX / width - 0.5) * 2;
	// let dirY = (mouseY / height - 0.5) * 2;
	// ambientLight(mouseX, mouseY, 255)
	// directionalLight(250, 0, 250, -dirX, -dirY, -1);
	// mLights();

	// Adds projects to orbit and
	//  assign object id based on own index in array
	for (let project of projects) {
		// console.log(project.name)
		project.show(project.id);
	}

	//rainbow
	//   push();
	//   normalMaterial();
	//   translate(0, 0, -4000);
	//   // rotateY(millis() / 200);
	//   sphere((height + width / 4) / 8, 25, 25);
	//   pop();

	if (objectAtMouse() > 0) {
		cursor(HAND);
	} else {
		cursor(ARROW);
	}
}

// function mouseWheel(event) {
//   scroll += event.delta / 480;
//   console.log(event.delta);
//   speed = map(event.delta, -50, 50, -40, 40, true);
// }

function mouseDragged(event) {
	// print(event.movementY/100)
	scroll += event.movementY / 480;
	speed = map(event.movementY, -50, 50, -40, 40, true);
	// scroll += 0.02
}

// function mousePressed() {
//   for (let project of projects){
//     console.log('hello')
//      if (objectAtMouse() == project.x) fill(0, 200, 0);
//     }
// }

// function mousePressed(){
//        switch(objectAtMouse()){
//       case 1:
//         object.fill(0, 200, 0)
//         break;
//     }

// }

// let eventCount = 0;
// let scrolled = false;
// let scrollTimeout;

// function mouseWheel(event) {
//   // print(event)
//   // print(eventCount++)
//   event.preventDefault();
//   if (!scrolled) {
//     scrolled = true;
//     if (d == 0) {
//       count = 0;
//       if (event.delta > 0) {
//         event.delta = 1;
//         d = d + 3;
//       } else if (event.delta < 0) {
//         event.delta = -1;
//         d = d - 3;
//       }
//     }
//   }

//   clearTimeout(scrollTimeout);

//     scrollTimeout = setTimeout(function(){
//         scrolled = false;
//     }, 35);
// }

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	// info.position(xOffset, windowHeight - (dHeight + yOffset));
}
function mouseClicked() {
	switch (objectAtMouse()) {
		case 1:
			window.open('https://github.com/Ry-E/SarahLiz-Fitness', '_blank');
			break;
		case 2:
			window.open('https://github.com/Ry-E/Robinhood', '_blank');
			break;
		case 3:
			window.open(
				'https://github.com/Ry-E/Videography-Portfolio',
				'_blank'
			);
			break;
	}
}
