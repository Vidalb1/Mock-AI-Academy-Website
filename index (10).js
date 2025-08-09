/*** You will not need this file until Unit 5 ***/
/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button")
// Step 2: Write the callback function
const toggleDarkMode = () => {
    // Write your code here
    document.body.classList.toggle("dark-mode");
    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click",toggleDarkMode);

/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/
/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
const n = document.querySelector("#Name");
const s = document.querySelector("#State");
const emailInput = document.getElementById("Email");

const button = document.querySelector("#rsvp-button");
const feed = document.querySelector("#Feedback");
const form = document.querySelector("#rsvp-form");

const addParticipant = (event, person) => {
    // Step 2: Write your code to manipulate the DOM here
    event.preventDefault();
    const name = person.name;
    const state = person.state;
    const message = "🤖 " + name + " from " + state + " has join AI Academy";
    feed.textContent = message;
}

// Step 3: Add a click event listener to the submit RSVP button here

/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = () => {

  let containsErrors = false;
  let rsvpInputs = document.getElementById("rsvp-form").elements;
  const person ={
    name:rsvpInputs[0].value,
    state:rsvpInputs[1].value,
    email:rsvpInputs[2].value
  };
  // TODO: Loop through all inputs

  if(person.name.length < 2){
    containsErrors = true;
    rsvpInputs[0].classList.add("error");
  }else{
    rsvpInputs[0].classList.remove("error");    }
  if(person.state.length < 2){
      containsErrors = true;
      rsvpInputs[1].classList.add("error");
    }else{
      rsvpInputs[1].classList.remove("error");    }
  if(person.email.length < 2){
      containsErrors = true;
      rsvpInputs[2].classList.add("error");
  }else{
      rsvpInputs[2].classList.remove("error");
  }
  if(!person.email.includes("@") || !person.email.includes(".com")){
    containsErrors = true;
    rsvpInputs[2].classList.add("error");
  }else{
    rsvpInputs[2].classList.remove("error");
  }
  // TODO: Inside loop, validate the value of each input

  // TODO: If no errors, call addParticipant() and clear fields
    if(containsErrors == false){
      addParticipant(event, person);
      toggleModal(person);
      for(let i = 0; i < rsvpInputs.length;i++){
        rsvpInputs[i].value = "";
      }
    }

}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
button.addEventListener("click",validateForm);
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
    let modal = document.getElementById("thanks-modal"); // TODO
    let modalContent = document.getElementById("thanks-content-modal")
    // TODO: Update modal display to flex
    modal.style.display = "flex";
    // TODO: Update modal text to personalized message
    modalContent.textContent = "Change starts with brave minds like yours, " + n.value + ". Welcome to AI Academy—let's lead the future!";


    // Set modal timeout to 5 seconds
    let intervalID = setInterval(animateImage, 500);
    setTimeout(() => {
      modal.style.display = "none";
      clearInterval(intervalID);
    }, 5000);
}

// TODO: animation variables and animateImage() function
let rotateFactor = 0;
const modalImage = document.getElementById("modal-image");

const animateImage = ( ) =>{
  if(rotateFactor == 0){
    rotateFactor = -10;
  }else{
    rotateFactor = 0;
  }
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}