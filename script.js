



// function validateTaskForm() {
//     let x = document.forms["exampleModalCenter"]["inputName3"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }


// Create a JavaScript function called “validateTaskForm” that verifies 
// that the inputs inserted by the user in the task form are correct:
// Name -> Not Empty and longer than 8 characters
// Description -> Not Empty and longer than 15 characters
// AssignedTo -> Not Empty and longer than 8 characters
// DueDate -> Not Empty and not less than current date



// function checkForm(form)
// {
//   // validation fails if the input is blank
//   if(form.inputfield.value == "") {
//     alert("Error: Input is empty!");
//     form.inputfield.focus();
//     return false;
//   }

//   // regular expression to match only alphanumeric characters and spaces
//   var re = /^[\w ]+$/;

//   // validation fails if the input doesn't match our regular expression
//   if(!re.test(form.inputfield.value)) {
//     alert("Error: Input contains invalid characters!");
//     form.inputfield.focus();
//     return false;
//   }

//   // validation was successful
//   return true;
// }

// const submit = document.getElementById("submit");

// submit.addEventListener("click", validate);

// function validate(e) {
//   e.preventDefault();

//   const taskNameField = document.getElementById("inputName3");
//   let valid = true;

//   if (!taskNameField.value) {
//     const nameError = document.getElementById("nameError");
//     nameError.classList.add("visible");
//     taskNameField.classList.add("invalid");
//     nameError.setAttribute("aria-hidden", false);
//     nameError.setAttribute("aria-invalid", true);
//   }
//   return valid;
// }