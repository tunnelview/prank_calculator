// Work flow
// Adding functionality - Basic interations -
// Step 1. WE press the button, we capture the button,
// we grab the text/item on the click
// no should be displayed

// grab the buttons
const buttons = document.querySelectorAll("button");

// loop through the buttons

buttons.forEach((btn) => {
  // add listener
  btn.addEventListener("click", () => {
    //   grab the value
    const val = btn.innerText;
    // console.log(btn);
    console.log(val);
  });
});
