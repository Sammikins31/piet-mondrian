function setup() {
    // "#f3f3f3"- white
    // "#292928" - black
    // "#f20d0d" - red
    // "#0c7bbc" - blue
    // "#fae317" - yellow

    const possibleColors = ["#f3f3f3", "#292928", "#f20d0d", "#0c7bbc", "#fae317"]; 
   
    
    // size of each square
    const squareSize = 50;
    //  canvas size in pixels
    const canvasSize = 800;
    
    const possibleCellSizes = [squareSize, 2 * squareSize, 3* squareSize];

    // set width and height
    const width = squareSize;
    const height = squareSize;

    const borderColor = color("#404040");
    
    createCanvas(canvasSize, canvasSize);
    background(220);
    
    let x = 0;
    let y = 0;
    
    while(y < canvasSize) {
        
        x = 0;

        // generate a random height from the possiblr cell sizes
        const actualHeight = random(possibleCellSizes);
        
        
        while(x < canvasSize) {
      

            // choose random hex code from all the possible colours
            const colorCode = random(possibleColors);
            
            // store colour object in myColor
            const myColor = color(colorCode);
            
            // use fill to fill all the square with one colour
            fill(myColor)
            
            // update sroke weight and colour
            stroke(borderColor);
            strokeWeight(10);

            const actualWidth = random(possibleCellSizes);


            // rect(x, y, width, height)
            // x = position of the left of the square
            // y = position of the square
            // width = width in pixels of the rectangle
            // height = height in pixels of the rectangle 
            // square(x, y, squareSize);
          rect(x, y, actualWidth, actualHeight);

        //   update x
        x = x + actualWidth;

        }

        // update y
        y = y + actualHeight;
    }
}