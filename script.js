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

    // now capturing the "= equals to" as the eval function is already doing
    // an operation. We need to capture that result before the equals to is
    // displayed on the result section - in line 26 - 28.

    if (val === "=") {
      return onTotal();
    }

    textToDisplay += val; // concatenate the pressed values
    // console.log(btn);

    // display the value of button
    // displayEml.innerText = val; this is done outside the function in line 33
    console.log(val); // console log it to check

    display(textToDisplay); //textTodisplay is the variable that holds all the click items
  });
});

const display = (toDisplay) => {
  displayEml.innerText = toDisplay;
};

// create a function to

const onTotal = () => {
  const total = eval(textToDisplay);
  display(total); //calling and invoking the function
};
