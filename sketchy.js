let speed;

let s = sketch => {
	let stars = [];
	let starsy = [];
	let starbg;

	sketch.preload = () => {
		starbg = sketch.loadImage('./assets/images/stars.jpg');
	};

	sketch.setup = () => {
		sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);

		for (let i = 0; i < 200; i++) {
			stars[i] = new Star(sketch);
		}

		speed = 1;
	};

	sketch.draw = () => {
		// background(test)
		sketch.background(starbg);

		// sketch.clear();

		sketch.translate(sketch.width / 2, sketch.height / 2);

		for (let star of stars) {
			star.update();
			star.show();
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

	//   clearTimeout(scrollTimeout);

	//     scrollTimeout = setTimeout(function(){
	//         scrolled = false;
	//     }, 35);
	// }

	sketch.mouseWheel = event => {
		// change orbit scroll speed based on scroll event speed
		scroll += event.delta / 2400;
		// map star speed to scroll event speed
		speed = map(event.delta, -200, 200, -50, 50, true);

		// change star color based on star speed
		for (let star of stars) {
			if (speed > 45) {
				star.changeColor();
			} else if (speed < -45) {
				star.changeColor();
			} else {
				star.resetColor();
			}
		}

		// for (let star of stars) {
		// 	star.pz = map(
		// 		Math.floor(event.delta),
		// 		-10,
		// 		10,
		// 		star.z,
		// 		star.z + 50,
		// 		true
		// 	);
		// }
	};

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
