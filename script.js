function validateTaskForm() {
    let x = document.forms["exampleModalCenter"]["inputName3"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }


Create a JavaScript function called “validateTaskForm” that verifies 
that the inputs inserted by the user in the task form are correct:
Name -> Not Empty and longer than 8 characters
Description -> Not Empty and longer than 15 characters
AssignedTo -> Not Empty and longer than 8 characters
DueDate -> Not Empty and not less than current date