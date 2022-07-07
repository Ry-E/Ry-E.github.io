// 3d sphere of portfolio project

class Project {
	constructor(project, img) {
		this.project = project;
		this.img = img;
	}

	//   Displays project in orbit
	show() {
		let radius;
		if (windowWidth > windowHeight) {
			radius = windowWidth / 10;
		} else if (windowWidth < windowHeight) {
			radius = windowHeight / 10;
		}
		sPush();
		sTranslate(this.project.translateX, 0, this.project.translateZ);
		sRotateX(this.project.rotateX);
		sRotateY(this.project.rotateY);
		sRotateZ(this.project.rotateZ);
		sRotateY(millis() / 2000);
		sTexture(this.img);
		smooth();

		// Switch statement ready for project customization
		switch (this.project.id) {
			default:
				sSphere(this.project.id, radius, 25);
		}
		sPop();

		// Tech moons show the technology used in production

		// Tech Moon 1
		sPush();
		sTranslate(this.project.translateTechX, 0, this.project.translateTechZ);
		sRotateX(this.project.rotateTechX);
		sRotateZ(this.project.rotateTechZ);
		sRotateY(-millis() / 2000);
		sRotateX(millis() / 400);
		sTranslate(150, 0, 0);
		fill(255);
		sTexture(react_logo);
		sSphere(this.project.id, 15, 15, 25);
		sPop();

		// Tech Moon 2
		sPush();
		sTranslate(this.project.translateTechX, 0, this.project.translateTechZ);
		sRotateX(this.project.rotateTechX);
		sRotateZ(this.project.rotateTechZ + 200);
		sRotateY(millis() / 2500);
		sRotateX(millis() / 400);
		sTranslate(150, 0, 0);
		fill(255);

		// Switch statement ready for customizable tech moon
		switch (this.project.id) {
			case 1:
				sTexture(node_logo);
				noStroke();
				sBox(this.project.id, 20, 20, 20);
				break;
			case 2:
				firebase_logo.resize(600, 30);
				sTexture(firebase_logo);
				noStroke();
				sBox(this.project.id, 20, 20, 20);
				break;
		}
		sPop();

		// Title
		sPush();
		sTranslate(
			this.project.translateTitleX,
			this.project.translateTitleY,
			this.project.translateTitleZ
		);
		sRotateX(this.project.rotateTitleX);
		sRotateY(this.project.rotateTitleY);
		sRotateZ(this.project.rotateTitleZ);
		fill(255);
		textSize(20);
		textFont(myFont);
		text(this.project.name, 0, 0);
		sPop();
	}
}
