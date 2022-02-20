// Work flow
// Adding functionality - Basic interations -
// Step 1. WE press the button, we capture the button,
// we grab the text/item on the click
// no should be displayed

// grab the buttons
const buttons = document.querySelectorAll("button");
const displayEml = document.querySelector("#result");
const symbols = ["+", "-", "*", "/"]; // creating an array of symbols

// Creating global variable
let textToDisplay = ""; // initialized to nothing

// loop through the buttons

buttons.forEach((btn) => {
  // add listener
  btn.addEventListener("click", () => {
    displayEml.style.backgroundColor = "";
    displayEml.style.color = "";

    // animation
    // displayEml.classList.add("prank");

    //   grab the value
    const val = btn.innerText;
    const lastChar = textToDisplay[textToDisplay.length - 1];

    // if .exist, don't let user enter another .
    if (val === "." && textToDisplay.includes(".")) return; // There is a bug in the code

    // don't allow to click on symbols at the beginning
    if (textToDisplay.length < 1 && symbols.includes(val)) return; // this is prevent the user from pressing the symbols first

    // if operator already exists, replace it with the new one (basically, no two sysbols, one after the other)
    if (symbols.includes(lastChar) && symbols.includes(val)) {
      // this line means, if the last character is already a symbol,
      // the user presses another symbol, then
      textToDisplay = textToDisplay.slice(0, -1); // remove the last char from the string

      // add the incoming operator
    }

    //AC clear everything from the display
    if (val === "AC") {
      return resetDisplay();
    }

    // now capturing the "= equals to" as the eval function is already doing
    // an operation. We need to capture that result before the equals to is
    // displayed on the result section - in line 26 - 28.

    if (val === "=") {
      //check if the last character is a symbol - Last Step
      const lastChar = textToDisplay[textToDisplay.length - 1]; // this is to grab the last character
      if (symbols.includes(lastChar)) {
        // this means, if the last character is one of the symbols, then remove it and call it.
        textToDisplay = textToDisplay.slice(0, -1); //then remove it and call onTotal().
      }
      return onTotal();
    }

    //cut the last charater from the display
    if (val === "C") {
      textToDisplay = textToDisplay.slice(0, -1);
      return display(textToDisplay);
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
  displayEml.innerText = toDisplay || "0.00"; // in this line,
  //   we are saying, either display the result else display 0.00,
  // this is done so that the C press doesn's shrink the display box
};

const onTotal = () => {
  const prankNum = randomNumber(); // const and prankNum was written together, fixed it.

  if (prankNum > 0) {
    //do any or something
    displayEml.style.backgroundColor = "red";
    displayEml.style.color = "white";

    displayEml.classList.add("prank");

    // remove the class name after animate ends
    displayEml.addEventListener("animationend", () => {
      displayEml.classList.remove("prank"); // line 27 and 28 to remove the animation soon after the prank is over.
    });
  }

  //   displayEml.classList.add("prank");

  const total = eval(textToDisplay) + prankNum;
  //   display(total); //calling and invoking the function
  console.log(prankNum);

  display(total);
  textToDisplay = ""; // this is done to ensure, that the display is empty
  //   when we start performing the operation once again, else it start adding the previous number
};

const resetDisplay = () => {
  display("0.00");
  textToDisplay = "";
};

const randomNumber = () => {
  const num = Math.round(Math.random() * 10); //0-10 This is also round up the number
  //   console.log(num, "from randomNumber");
  return num <= 6 ? num : 0; // we can set the threshhold
  //   to increase or decrease the probability of getting the wrong total.
};
