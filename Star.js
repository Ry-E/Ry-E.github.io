//  Generates star animation

class Star {
	constructor(sketch) {
		// Pass in sketch for instance mode
		this.sketch = sketch;
		// Give star random x & y values
		this.x = sketch.random(-sketch.width / 2, sketch.width / 2);
		this.y = sketch.random(-sketch.height / 2, sketch.height / 2);
		// Give star a z value to represent a third dimesion. z is used to offset x and y values
		this.z = sketch.random(sketch.width);
		// pz saves the previous z value as z changes
		this.pz = this.z;
		// Declare color values
		this.r = 255;
		this.g = 255;
		this.b = 255;
	}

	//   Displays a simple line shape with length based on speed
	show() {
		let sx = this.sketch.map(this.x / this.z, 0, 1, 0, this.sketch.width);
		let sy = this.sketch.map(this.y / this.z, 0, 1, 0, this.sketch.height);

		let px = this.sketch.map(this.x / this.pz, 0, 1, 0, this.sketch.width);
		let py = this.sketch.map(this.y / this.pz, 0, 1, 0, this.sketch.height);

		this.pz = this.z;

		let s = this.sketch.map(this.z, 0, this.sketch.width, 10, 0);
		this.sketch.strokeWeight(s);
		this.sketch.stroke(this.r, this.g, this.b);
		this.sketch.strokeCap(this.sketch.ROUND);
		this.sketch.line(px, py, sx, sy);
	}

	//   Moves and recycles stars based on the z value changing due to speed
	update() {
		this.z = this.z - speed;
		if (this.z < 1) {
			this.z = this.sketch.width;
			this.x = this.sketch.random(
				-this.sketch.width / 2,
				this.sketch.width / 2
			);
			this.y = this.sketch.random(
				-this.sketch.height / 2,
				this.sketch.height / 2
			);
			this.pz = this.z;
		}
		//     Handles reverse
		if (this.z > this.sketch.width) {
			this.z = 0;
			this.x = this.sketch.random(
				-this.sketch.width / 2,
				this.sketch.width / 2
			);
			this.y = this.sketch.random(
				-this.sketch.height / 2,
				this.sketch.height / 2
			);
			this.pz = this.z;
		}
	}

	changeColor() {
		this.r = 200;
		this.g = 230;
		this.b = 255;
	}
	resetColor() {
		this.r = 255;
		this.g = 255;
		this.b = 255;
	}
}
