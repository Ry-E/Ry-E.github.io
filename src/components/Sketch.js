import React from 'react';
import p5, { DOM } from 'p5';

class Sketch extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	Sketch = p => {
		let canvas;
		let para;
		let card;
		let robinhoodClone;

		p.setup = () => {
			canvas = p.createCanvas(
				p.windowWidth / 1.1,
				p.windowHeight / 4
				//p.WEBGL
			);
			canvas.position(
				p.windowWidth / 22,
				p.windowHeight + p.windowHeight / 1.8
			);
			canvas.style('z-index', '-1');

			robinhoodClone = p.select('.robinhoodClone');
			robinhoodClone.mouseOver(highlight);
			robinhoodClone.mouseOut(unhighlight);

			para = p.createSlider();
		};

		p.draw = () => {
			p.clear();
			lines();
			windowResized();
			p.noStroke();
			p.textSize(32);
			p.fill(255);
			p.textAlign(p.CENTER, p.CENTER);
			setInterval(
				p.text(
					`Frame Rate: ${Math.round(p.frameRate())}`,
					p.canvas.width / 2,
					p.canvas.height / 1.5
				),
				10000
			);
		};

		// Creates ines that respond to mouse movements
		let lines = function () {
			let x1 = -100;
			let y1 = -14000;
			let x4 = p.windowWidth;
			let y4 = -p.windowHeight;
			let spacer = 30;

			for (let i = 0; i < 800; i++) {
				p.noFill(255, 1000, 5);
				p.stroke(p.mouseX, p.mouseY, 200);
				//p.strokeWeight(4);
				p.bezier(
					x1,
					y1,
					-p.mouseX * 2,
					-p.mouseY * 8,
					p.mouseX * 8,
					p.mouseY * 3,
					x4,
					y4
				);

				y1 += spacer;
				x4 += spacer;
				y4 += spacer;
			}
		};

		function highlight() {
			this.style('opacity', '.9');
		}
		function unhighlight() {
			this.style('opacity', '1');
		}

		// Update canvas size on window size change
		let pw = p.windowWidth;
		let ph = p.windowHeight;

		function windowResized() {
			if (p.windowWidth !== pw) {
				updateCanvas();
				pw = p.windowWidth;
			} else if (p.windowHeight !== ph) {
				updateCanvas();
				ph = p.windowHeight;
			}
		}

		function updateCanvas() {
			p.resizeCanvas(p.windowWidth / 1.1, p.windowHeight / 4);
		}
	};

	componentDidMount() {
		this.myP5 = new p5(this.Sketch, this.myRef.current);
	}

	render() {
		return <div ref={this.myRef}></div>;
	}
}
export default Sketch;
