function setup() {
    // "#f3f3f3"- white
    // "#292928" - black
    // "#f20d0d" - red
    // "#0c7bbc" - blue
    // "#fae317" - yellow

    const possibleCololrs = ["#f3f3f3", "#292928", "#f20d0d", "#0c7bbc", "#fae317"]; 
   
    
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


            const colorCode = random(possibleCololrs);

            const myColor = color(colorCode);

            // use fill to fill all the square with one colour
            fill(myColor)

            // calculate horizontal position in pixels
            const x = row * squareSize;
            // calculate the vertical position in pixels
            const y = column * squareSize;


            // set width and height
            const width = squareSize;
            const height = squareSize;

            // rect(x, y, width, height)
            // x = position of the left of the square
            // y = position of the square
            // width = width in pixels of the rectangle
            // height = height in pixels of the rectangle 
            // square(x, y, squareSize);
          rect(x, y, width, height);

        }
    }
}