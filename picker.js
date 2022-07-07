// picker.js enables object picking for the 3D objects used in p5.js

// Hidden copies of p5.js functions are grouped with visible
// versions allowing for color-based object picking

// sCanvas is the hidden WEBGL canvas and holds all hidden objects

let sCanvas;
let canvas;

function sCreateCanvas() {
	canvas = createCanvas(...[...arguments]);
	pixelDensity(1);
	sCanvas = createGraphics(...[...arguments]);
	sCanvas.pixelDensity(1);
}

// getObjectID returns the "red" rgba value of a pixel at a set of coordinates (mouse position).
// The value is used as a reference for a project ID

function getObjectID(mx, my) {
	if (mx > width || my > height || mx < 0 || my < 0) {
		return 0;
	}
	// gl lets us access the webgl API on sCanvas
	const gl = sCanvas.elt.getContext('webgl');
	var pix = getPixels();
	var index =
		4 * ((gl.drawingBufferHeight - my) * gl.drawingBufferWidth + mx);

	// Returns ID of 3D object closest to camera or 0 if no object present
	return pix[index];
}

//  getPixels returns an array of pixel rgba values for the canvas.
//  It is only used by other functions.

function getPixels() {
	var gl = sCanvas.elt.getContext('webgl');

	var pixels = new Uint8Array(
		gl.drawingBufferWidth * gl.drawingBufferHeight * 4
	);
	gl.readPixels(
		0,
		0,
		gl.drawingBufferWidth,
		gl.drawingBufferHeight,
		gl.RGBA,
		gl.UNSIGNED_BYTE,
		pixels
	);
	return pixels;
}

// "sShape" creates a "shape" primitive with an associated ID number.
// Following parameters are passed through to "sShape().

function sBox(id) {
	let passon = [...arguments].slice(1);
	box(...passon);
	sCanvas.fill(id, 0, 0);
	sCanvas.box(...passon);
}

function sSphere(id) {
	var passon = [...arguments].slice(1);
	sphere(...passon);
	sCanvas.fill(id, 0, 0);
	sCanvas.sphere(...passon);
}

// "sFunction" performs the *function* to both visible and hidden 3D models.
// All parameters are the same as for "function()".

function sTranslate() {
	translate(...[...arguments]);
	sCanvas.translate(...[...arguments]);
}

function sRotateX() {
	rotateX(...[...arguments]);
	sCanvas.rotateX(...[...arguments]);
}

function sRotateY() {
	rotateY(...[...arguments]);
	sCanvas.rotateY(...[...arguments]);
}

function sRotateZ() {
	rotateZ(...[...arguments]);
	sCanvas.rotateZ(...[...arguments]);
}

function sRotate() {
	rotate(...[...arguments]);
	sCanvas.rotate(...[...arguments]);
}

function sScale() {
	scale(...[...arguments]);
}

function sCamera() {
	camera(...[...arguments]);
	sCanvas.camera(...[...arguments]);
}

function sOrtho() {
	ortho(...[...arguments]);
	sCanvas.ortho(...[...arguments]);
}

function sPerspective() {
	perspective(...[...arguments]);
	sCanvas.perspective(...[...arguments]);
}

function sPush() {
	push();
	sCanvas.push();
}

function sPop() {
	pop();
	sCanvas.pop();
}

function sBackground() {
	background(...[...arguments]);
	sCanvas.background(0);
}

function sTexture() {
	texture(...[...arguments]);
}

// ensure proper synchronization of the hidden canvas with the
// visible canvas and accurate object identification.

function sResetMatrix() {
	resetMatrix();
	sCanvas.resetMatrix();
}

function sReset() {
	// reset();
	sCanvas.reset();
}

//  objectAtMouse returns the object ID at the current mouse position.
function objectAtMouse() {
	return getObjectID(mouseX, mouseY);
}
