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
		let frameRate;

		p.setup = () => {
			canvas = p.createCanvas(
				p.windowWidth / 1.1,
				p.windowHeight / 4
				//p.WEBGL
			);
			// canvas.position(
			// 	p.windowWidth / 22,
			// 	p.windowHeight + p.windowHeight / 1.8
			// );

			// canvas.child('.portfolio');

			robinhoodClone = p.select('.robinhoodClone');
			robinhoodClone.mouseOver(highlight);
			robinhoodClone.mouseOut(unhighlight);
			robinhoodClone.style('z-index', '0');
			//robinhoodClone.p.rotate(p.PI);

			frameRate = setInterval(getFrameRate, 10000);
		};

		p.draw = () => {
			p.clear();
			lines();
			windowResized();
			canvas.style('z-index', '-1');
		};

		let getFrameRate = function () {
			console.log(`Frame Rate: ${Math.round(p.frameRate())}`);
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
			this.style('transform', 'scale(1.03)');
			this.style('box-shadow', '20px 10px 30px green');
		}
		function unhighlight() {
			this.style('transform', 'scale(1)');
			this.style('box-shadow', 'none');
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
