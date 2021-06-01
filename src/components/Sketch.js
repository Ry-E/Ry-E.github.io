import React from 'react';
import p5, { Color } from 'p5';

class Sketch extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	Sketch = p => {
		let canvas;

		let lines = function () {
			let x1 = 0;
			let y1 = -14000;
			let x4 = p.windowWidth;
			let y4 = -p.windowHeight;
			let spacer = 100;

			for (let i = 0; i < 800; i++) {
				p.noFill(255, 1000, 5);
				p.stroke(p.mouseX, p.mouseY, 200);
				p.strokeWeight(4);
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

		p.setup = () => {
			canvas = p.createCanvas(
				p.windowWidth / 2,
				p.windowHeight
				//p.WEBGL
			);

			let para = p.createP(
				'Hello, my name is Ryan, I am a web developer'
			);
			para.position(p.windowWidth / 2, p.windowHeight / 2);
			para.style('background-color', 'white');
			para.style('color', 'black');
			para.style('padding', '20px');
			para.style('justify', 'center');
		};

		p.draw = () => {
			p.clear();
			lines();
			windowResized();
			p.noStroke();
			p.textSize(32);
			p.fill(255);
			p.textAlign(p.CENTER, p.CENTER);
			p.text('I am a developer', p.canvas.width / 2, p.canvas.height / 2);
			setInterval(
				p.text(
					`Frame Rate: ${Math.round(p.frameRate())}`,
					p.canvas.width / 2,
					p.canvas.height / 1.5
				),
				10000
			);
			// if (p.text.p.mousePressed) {
			// 	lines();
			// }
		};

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
			p.resizeCanvas(p.windowWidth / 2, p.windowHeight);
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
