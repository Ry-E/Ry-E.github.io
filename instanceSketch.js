// instanceSketch.js is a 2D canvas layered underneath the sketch.js 3D canvas

let speed;

let s = sketch => {
	let stars = [];
	let galaxy;

	sketch.preload = () => {
		starbg = sketch.loadImage('./assets/images/stars.jpg');
	};

	sketch.setup = () => {
		galaxy = createGraphics(windowWidth, windowHeight);
		// galaxy.background(0, 0, 0, 0);
		// image(galaxy, 0, 0);
		sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);

		//   Purple gas
		layer(width / 4, 40, 5, 185, 0, 105, 0, 255, 0, 6, 0);

		//   Bright blue gas
		layer(22, 40, 1, 100, 255, 200, 255, 150, 255, 10, 0);

		//   White gas
		layer(8, 20, 1, 200, 255, 200, 255, 250, 255, 10, 0);
		//   Yellow gas
		layer(10, 25, 1, 255, 0, 255, 25, 35, 0, 12, 0);
		//   Dark fizzure
		layer(15, 33, 1, 0, 0, 0, 0, 35, 0, 40, 0);

		layer(
			width / 9,
			0.6,
			200,
			255,
			255,
			255,
			255,
			255,
			255,
			50,
			200,
			height * 1.5,
			height - height * 1.5,
			0.6,
			width / 6
		);

		// Add 200 stars
		for (let i = 0; i < 200; i++) {
			stars[i] = new Star(sketch);
		}

		speed = 1;
	};

	sketch.draw = () => {
		// sketch.background(galaxy);
		sketch.background(0, 0, 0);
		// galaxy.background(0, 0, 0, 0);
		// layer(15, 33, 1, 0, 0, 0, 0, 35, 0, 40, 0);
		sketch.image(galaxy, 0, 0);
		// image(galaxy, 0, 0);
		// sketch.clear();
		// galaxy.fill(255, 255, 0);
		// galaxy.circle(200, 200, 1000);
		// sketch.background(0, 0, 0, 0);

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

	layer = (
		sd,
		cw,
		loop,
		r1,
		r2,
		g1,
		g2,
		b1,
		b2,
		a1,
		a2,
		gEnd = height,
		gStart = 0,
		xoff = 0.6,
		ogMean = width / 3
	) => {
		for (let i = 0; i < loop; i++) {
			let mean = ogMean;
			for (let y = gStart; y < gEnd; y++) {
				// console.log(mean)
				const x = galaxy.randomGaussian(mean, sd);

				if (x > mean) {
					r = galaxy.map(x, mean, width, r1, r2);
					g = galaxy.map(x, mean, width, g1, g2);
					b = galaxy.map(x, mean, width, b1, b2);
					a = galaxy.map(x, mean, width, a1, a2);
					// a = map(x, 0, width, 255, 255);
				} else {
					r = galaxy.map(x, 0, mean, r2, r1);
					g = galaxy.map(x, 0, mean, g2, g1);
					b = galaxy.map(x, 0, mean, b2, b1);
					a = galaxy.map(x, 0, mean, a2, a1);
					// a = map(x, 0, width, 255, 255);
				}

				galaxy.fill(r, g, b, a);
				galaxy.noStroke();
				galaxy.circle(x, y, cw);

				mean += xoff;
				// curve = curve * 0.99999
			}
			mean = ogMean;
		}
	};

	sketch.windowResized = () => {
		sketch.resizeCanvas(windowWidth, windowHeight);
	};
};

let myp5 = new p5(s, 'stars');
