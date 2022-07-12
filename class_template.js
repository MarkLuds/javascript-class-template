// the output of this will only be in the console log, so you will need to check dev tools to see

class Palette {  // the pallet name. used below to instatiate the class

    constructor(colour_1) { // run when the class is created / instatiated
        this.colour_1 = colour_1; // bind the colour_1 variable to the class to be used later by calling this.colour_1
    }

    changeColour(new_colour){ // this is a function bound to the class that can be used to change the "state" of the class
        this.colour_1 = new_colour;
    }
}

//----------------
// create the palette object and send a colour through for the constructor
//----------------
let colour_1 = "grey";
let palette = new Palette(colour_1); // create / instatiate the class and save it to a vsriable
console.log('palette created:', palette);
console.log('colour_1 in object: '+ palette.colour_1);

//----------------
// change the colour in the palette
//----------------
let new_colour = "pink";
palette.changeColour(new_colour); // call the changeColour function on the class variable, sending through the new colour
console.log('colour_1 in object after change: '+ palette.colour_1);