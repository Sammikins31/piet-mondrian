function setup() {

    // size of each square
    const squareSize = 50;
    // number of cells of the grid
    const cellNumber = 10;
    //  canvas size in pixels
    const canvasSize = squareSize * cellNumber;

    createCanvas(canvasSize, canvasSize);
    background(220);

    for(let row = 0; row < cellNumber; row++) {
        for(let column = 0; column < cellNumber; column++) {
            const red = random(255);
            const green = random(255);
            const blue = random(255);

            const myColor = color(red, green, blue);

            // use fill to fill all the square with one colour
            fill(myColor)

            // calculate horizontal position in pixels
            const x = row * squareSize;
            // calculate the vertical position in pixels
            const y = column * squareSize;


            // set width and height
            const width = squareSize;
            const height = squareSize;

            // square(x, y, s)
            // x = position of the left of the square
            // y = position of the square
            // s = size of the side of the square
            // square(x, y, squareSize);
           square(x, y, width)

        }
    }
}