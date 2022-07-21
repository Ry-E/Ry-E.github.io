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
let scroll = 0;
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
	sCreateCanvas(windowWidth, windowHeight, WEBGL);
	sCamera(0, 0, 4500, 0, 0, 0, -0.5, 1, 0);

	sarahLizFitness = new Project(PROJECTS[0], sl_fitness);
	robinhoodClone = new Project(PROJECTS[1], robinhood_clone);
	videoPortfolio = new Project(PROJECTS[2], v_portfolio);
	developerPortfolio = new Project(PROJECTS[3], d_portfolio);

	projects.push(
		sarahLizFitness,
		robinhoodClone,
		videoPortfolio,
		developerPortfolio
	);
}

function draw() {
	sBackground(0, 0, 0, 0);
	sReset();

	// increases depth of view
	let eyeZ = height / 2 / tan(PI / 6);
	sPerspective(PI / 3, width / height, eyeZ / 10, 10000);

	sRotateY(scroll);
	speed = 1;

	//messing around with lighting
	// let dirX = (mouseX / width - 0.5) * 2;
	// let dirY = (mouseY / height - 0.5) * 2;
	// ambientLight(mouseX, mouseY, 255)
	// directionalLight(250, 0, 250, -dirX, -dirY, -1);

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

	if (objectAtPointer(mouseX, mouseY) > 0) {
		cursor(HAND);
	} else {
		cursor(ARROW);
	}
}

// function mouseWheel(event) {
// 	scroll += event.delta / 480;
// 	speed = map(event.delta, -50, 50, -40, 40, true);
// 	return false;
// }

if (window.innerWidth < 1024) {
	let preY;
	function touchStarted(event) {
		preY = event.touches[0].clientY;
	}

	function touchMoved(event) {
		// console.log('event:', event.layerY);
		let currentY = event.changedTouches[0].clientY;
		// if (preY > currentY) {
		// 	speed = preY - currentY;
		// 	console.log('up');
		// } else {
		// 	speed = preY - currentY;
		// 	console.log('down');
		// }

		speed = preY - currentY;
		scroll += (preY - currentY) * 0.005;
		preY = currentY;
		return false;
	}

	touchEnded = e => {
		switch (
			objectAtPointer(
				e.changedTouches[0].clientX,
				e.changedTouches[0].clientY
			)
		) {
			case 1:
				window.open(
					'https://github.com/Ry-E/SarahLiz-Fitness',
					'_blank'
				);
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
	};
} else {
	mouseWheel = event => {
		// change orbit scroll speed based on scroll event speed
		scroll += event.delta / 2400;
		// map star speed to scroll event speed
		speed = map(event.delta, -200, 200, -50, 50, true);
	};
}

// function mouseDragged(event) {
// 	console.log('event:', event);
// 	scroll += event.movementY * 0.0001;
// 	// scroll += 0.001;
// 	console.log('scroll:', scroll);
// 	speed = event.movementY;
// 	return false;
// }

// function mouseDragged(event) {
// 	// print(event.movementY/100)
// 	scroll += event.movementY * 0.001;
// 	speed = event.movementY / 100;
// 	// speed = map(event.movementY, -50, 50, -40, 40, true);
// 	// scroll += 0.02
// 	return false;
// }

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
function mouseClicked() {
	switch (objectAtPointer(mouseX, mouseY)) {
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
