// 3d sphere of portfolio project

class Project {
  constructor(project, img) {
    this.project = project;
    this.img = img;
  }

  //   Displays project in orbit
  show() {
    mPush();
    mTranslate(this.project.translateX, 0, this.project.translateZ);
    mRotateX(this.project.rotateX);
    mRotateY(this.project.rotateY);
    mRotateZ(this.project.rotateZ);
    mRotateY(millis() / 2000);
    mTexture(this.img);
    smooth();
    
    // Switch statement ready for project customization
    switch (this.project.id) {
      default:
        mSphere(this.project.id, (windowHeight + windowWidth) / 8, 25);
    }
    mPop();

    // Tech moons show the technology used in production

    // Tech Moon 1
    mPush();
    mTranslate(this.project.translateTechX, 0, this.project.translateTechZ);
    mRotateX(this.project.rotateTechX);
    mRotateZ(this.project.rotateTechZ);
    mRotateY(-millis() / 2000);
    mRotateX(millis() / 400);
    mTranslate(150, 0, 0);
    fill(255);
    mTexture(react_logo);
    mSphere(this.project.id, 15, 15, 25);
    mPop();

    // Tech Moon 2
    mPush();
    mTranslate(this.project.translateTechX, 0, this.project.translateTechZ);
    mRotateX(this.project.rotateTechX);
    mRotateZ(this.project.rotateTechZ + 200);
    mRotateY(millis() / 2500);
    mRotateX(millis() / 400);
    mTranslate(150, 0, 0);
    fill(255);
    
// Switch statement ready for customizable tech moon
    switch (this.project.id) {
      case 1:
        mTexture(node_logo);
        noStroke();
        mBox(this.project.id, 20, 20, 20);
        break;
      case 2:
        firebase_logo.resize(600, 30);
        mTexture(firebase_logo);
        noStroke();
        mBox(this.project.id, 20, 20, 20);
        break;
    }
    mPop();
    
    // Title
    mPush();
    mTranslate(
      this.project.translateTitleX,
      this.project.translateTitleY,
      this.project.translateTitleZ
    );
    mRotateX(this.project.rotateTitleX);
    mRotateY(this.project.rotateTitleY);
    mRotateZ(this.project.rotateTitleZ);
    fill(255);
    textSize(20);
    textFont(myFont);
    text(this.project.name, 0, 0);
    mPop();
  }
}
