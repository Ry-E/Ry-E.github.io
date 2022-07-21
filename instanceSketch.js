// instanceSketch.js is a 2D canvas layered underneath the sketch.js 3D canvas

let speed;

let s = sketch => {
	let stars = [];
	let starbg;

	sketch.preload = () => {
		starbg = sketch.loadImage('./assets/images/stars.jpg');
	};

	sketch.setup = () => {
		sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);

		// Add 200 stars
		for (let i = 0; i < 200; i++) {
			stars[i] = new Star(sketch);
		}

		speed = 1;
	};

	sketch.draw = () => {
		// sketch.background(starbg);
		sketch.background(0, 0, 0);

		sketch.translate(sketch.width / 2, sketch.height / 2);

		for (let star of stars) {
			star.update();
			star.show();

			if (speed > 45 || speed < -45) {
				star.changeColor();
			} else {
				star.resetColor();
			}
		}
	};

	// function mouseDragged(event) {
	//   // print(event.movementY/100)
	//   scroll += event.movementY / 480;
	//   // scroll += 0.02
	// }

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

	// sketch.mouseWheel = event => {
	// 	console.log('event:', event);
	// 	event.preventDefault();
	// 	// change orbit scroll speed based on scroll event speed
	// 	scroll += event.delta / 2400;
	// 	// map star speed to scroll event speed
	// 	speed = map(event.delta, -200, 200, -50, 50, true);

	// 	// change star color based on star speed
	// 	for (let star of stars) {
	// 		if (speed > 45) {
	// 			star.changeColor();
	// 		} else if (speed < -45) {
	// 			star.changeColor();
	// 		} else {
	// 			star.resetColor();
	// 		}
	// 	}
	// };

	sketch.windowResized = () => {
		sketch.resizeCanvas(windowWidth, windowHeight);
	};
};

// function mouseWheel(event) {
//   scroll += event.delta / 480;
//   // console.log(event.delta);
//   speed = map(event.delta, -50, 50, -40, 40, true);
// }

let myp5 = new p5(s, 'stars');
