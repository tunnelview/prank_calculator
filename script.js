// Work flow
// Adding functionality - Basic interations -
// Step 1. WE press the button, we capture the button,
// we grab the text/item on the click
// no should be displayed

// grab the buttons
const buttons = document.querySelectorAll("button");
const displayEml = document.querySelector("#result");

// Creating global variable
let textToDisplay = ""; // initialized to nothing

// loop through the buttons

buttons.forEach((btn) => {
  // add listener
  btn.addEventListener("click", () => {
    //   grab the value
    const val = btn.innerText;
    textToDisplay += val; // concatenate the pressed values
    // console.log(btn);

    // display the value of button
    displayEml.innerText = val;
    console.log(val); // console log it to check

    display(val);
  });
});

const display = (toDisplay) => {
  displayEml.innerText = val;
};
