/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
  let div = document.getElementById('exercise1');

  let canvas = document.getElementById("canvas1");
  let hello = canvas.getContext('2d');

  hello.font = "48px Sans-Serif";
  hello.strokeText("Hello, World!", 10, 50);
  hello.stroke();
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  let div = document.getElementById('exercise2');

  let height;
  let width;
  let x;
  let y;

  let canvas = document.getElementById('canvas2');
  let rectangle = canvas.getContext('2d');
  rectangle.clearRect(0, 0, canvas2.width, canvas2.height);

  do {
    width = Number(prompt("Enter a width."));
  } while (width < 1)

  do {
    height = Number(prompt("Enter a heigth."));
  } while (height < 1)

  do {
    x = Number(prompt("Enter an X-coordinate."));
  } while (x < 5)

  do {
    y = Number(prompt("Enter a Y-coordinate."));
  } while (y < 5)

  rectangle.rect(x, y, width, height);
  rectangle.stroke();
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  let div = document.getElementById("exercise3");

  let canvas = document.getElementById("canvas3");
  let colored = canvas.getContext("2d");
  colored.clearRect(0, 0, canvas3.width, canvas3.height);

  let chooseColor = prompt("Enter a color.");

  if (chooseColor === "red"){
    colored.fillStyle = "#ff0000";
    colored.fillRect(10, 10, 100, 50);

  } else if (chooseColor === "orange"){
    colored.fillStyle = "#ffa500";
    colored.fillRect(10, 10, 100, 50);

  } else if (chooseColor === "yellow"){
    colored.fillStyle = "#ffff00";
    colored.fillRect(10, 10, 100, 50);

  } else if (chooseColor === "green"){
    colored.fillStyle = "#008000";
    colored.fillRect(10, 10, 100, 50);

  } else if (chooseColor === "blue"){
    colored.fillStyle = "#0000ff";
    colored.fillRect(10, 10, 100, 50);

  } else if (chooseColor === "purple"){
    colored.fillStyle = "#800080";
    colored.fillRect(10, 10, 100, 50);

  } else if (chooseColor === "black"){
    colored.fillStyle = "#000000";
    colored.fillRect(10, 10, 100, 50);

  } else {
    alert("Your color is not supported")
  }

}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {

  let canvas = document.getElementById("canvas4");
  let triangle = canvas.getContext("2d");
  triangle.clearRect(0, 0, canvas4.width, canvas4.height);

  let sides = [];

  for (i = 0; i < 3; i++){
    do {
      input = Number(prompt("Enter a side length."));
    } while (input < 1 || isNaN(input) == true)
      sides.push(input);
  }

  if (Math.pow(sides[0], 2) + Math.pow(sides[1], 2) == Math.pow(sides[2], 2)){
    sides = sides.sort();
    triangle.moveTo(10, 10);
    triangle.lineTo(10,sides[0]);
    triangle.lineTo(sides[1], sides[0]);
    triangle.lineTo(10, 10);
    triangle.stroke();
  } else {
    alert("Invalid right triangle. Please try again.");
  }

}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {

  let canvas = document.getElementById("canvas5");
  let smile = canvas.getContext("2d");
  smile.clearRect(0, 0, canvas5.width, canvas5.height);

  let radius = 0;

  do{
    radius = Number(prompt("Enter a positive radius."));
  } while (radius < 1 || isNaN(radius))

  smile.beginPath();
  smile.arc(radius + 10, radius + 10, radius, 0, 2 * Math.PI);
  smile.stroke();

  smile.beginPath();
  smile.arc(radius + 10, radius + 10, radius * 0.7, 0, 1 * Math.PI);
  smile.stroke();

  smile.beginPath();
  smile.arc(radius - 5, radius, radius * 0.10, 0, 2 * Math.PI);
  smile.stroke();

  smile.beginPath();
  smile.arc(radius + 25, radius, radius * 0.10, 0, 2 * Math.PI);
  smile.stroke();
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {

  let canvas = document.getElementById("canvas6");
  let star = canvas.getContext("2d");
  star.clearRect(0, 0, canvas6.width, canvas6.height);

  let outerRadius;
  let innerRadius;
  let degrees = 0;

  do {
    outerRadius = Number(prompt("Enter the outer radius."));
  } while (outerRadius < 0 || isNaN(outerRadius) == true)

  do {
    innerRadius = Number(prompt("Enter the inner radius."));
  } while (innerRadius < 0 || isNaN(innerRadius) == true || innerRadius > outerRadius)

  star.beginPath();
  star.moveTo(125,125-outerRadius);
    for (let i=0; i<=5; i++){
      star.lineTo(125+Math.round((Math.cos(Math.PI*(degrees-90)/180)*outerRadius)), 125+Math.round((Math.sin(Math.PI*(degrees-90)/180)*outerRadius)));
      degrees +=36;
      star.lineTo(125+Math.round((Math.cos(Math.PI*(degrees-90)/180)*innerRadius)), 125+Math.round((Math.sin(Math.PI*(degrees-90)/180)*innerRadius)));
      degrees +=36;
    }
    star.stroke();
    star.closePath();
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {

  let canvas = document.getElementById("canvas7");
  let stop = canvas.getContext("2d");
  stop.clearRect(0, 0, canvas7.width, canvas7.height);

  let l = 80; // l = length
  let d = l * Math.sqrt(1/2); // d = diagonal
  let x = l - 70;
  let y = 10;

  stop.beginPath();
  stop.moveTo(x, y += 60);
  stop.lineTo(x, y += l);
  stop.lineTo(x += d, y += d);
  stop.lineTo(x += l, y);
  stop.lineTo(x += d, y -= d);
  stop.lineTo(x, y -= l);
  stop.lineTo(x -= d, y -= d);
  stop.lineTo(x -= l, y);
  stop.lineTo(x -= d, y += d);
  stop.fillStyle = "red";
  stop.fill();
  stop.closePath();

  stop.fillStyle = "white";
  stop.font = "65px Sans-Serif";
  stop.fillText("STOP", 18, 130);
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {

  let canvas8 = document.getElementById("canvas8");
  let pyramid = canvas8.getContext("2d");
  pyramid.clearRect(0, 0, canvas8.width, canvas8.height);

  let x = 10;
  let y = 502;
  let blockWidth;

  do{
    blockWidth = Number(prompt("Enter a block width."));
  } while (blockWidth < 0 || isNaN(blockWidth) == true || blockWidth > 100)

  let xOffset = 0;
  let yOffset = 0;
  let i;
  let i2;

  for (i = 0; i < 5; i++){
    for (i2 = 0; i2 < 5 - i; i2++){
      pyramid.rect(10 + xOffset, canvas8.height - (blockWidth + 10 + yOffset), blockWidth, blockWidth);
      pyramid.stroke();
      xOffset = xOffset + blockWidth;
    }
    xOffset = blockWidth*i/2 + blockWidth/2;
    yOffset = yOffset + (blockWidth);
  }
}


/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {

  let canvas = document.getElementById("canvas9");
  let house = canvas.getContext("2d");
  house.clearRect(0, 0, canvas9.width, canvas9.height);

  let houseColor = prompt("What color should the house be?");
  let doorColor = prompt("What about the door?");

  if ((houseColor == "blue" || houseColor == "brown" || houseColor == "green" || houseColor == "orange" || houseColor == "purple" || houseColor == "red" || houseColor == "yellow") && (doorColor == "blue" || doorColor == "brown" || doorColor == "green" || doorColor == "orange" || doorColor == "purple" || doorColor == "red" || doorColor == "yellow")){
    /*House*/
    house.fillStyle = houseColor;
    house.fillRect(150, 300, 724, 450);
    house.stroke();

    /*Roof*/
    house.beginPath();
    house.moveTo(150, 300);
    house.lineTo(512, 10);
    house.lineTo(875, 300);
    house.lineTo(150, 300);
    house.fillStyle = "gray";
    house.closePath();
    house.fill();
    house.stroke();

    /*Door*/
    house.fillStyle = doorColor;
    house.fillRect(463, 591, 98, 158);
    house.stroke();

    /*Door Handle*/
    house.beginPath();
    house.fillStyle = "yellow";
    house.arc(545, 680, 8, 0, 2 * Math.PI);
    house.closePath();
    house.fill();
    house.stroke();


    /*Window (Top Left)*/
    house.fillStyle = "#33ccff";
    house.fillRect(256, 350, 100, 100);
    house.stroke();

    /*Window (Top Right)*/
    house.fillStyle = "33ccff";
    house.fillRect(640, 350, 100, 100);
    house.stroke();

    /*Window (Bottom Left)*/
    house.fillStyle = "33ccff";
    house.fillRect(256, 550, 100, 100);
    house.stroke();

    /*Window (Bottom Right)*/
    house.fillStyle = "33ccff";
    house.fillRect(640, 550, 100, 100);
    house.stroke();

} else {
  alert("One of these colors is not supported.");
}











}
