window.addEventListener("load", ()=>loadPage());

const form = document.getElementById('form');
const description = document.getElementById('description');
const dueDate = document.getElementById('dueDate');
const assignedTo = document.getElementById('assignedTo');
const taskName = document.getElementById('taskName');
const statusInput = document.getElementById('setStatus');
const submitButton = document.getElementById('submitButton');




// TASK - 4 - Task Form Inputs Validation 

function validateTaskForm() {
  //validate Name length
  
  const validateName = document.getElementById('taskName').value;
  if(validateName.length === 0)
  alert("Please enter Name!");
  if(validateName.length > 8)
  alert("Name length can't be longer than 8 characters");

  // validate Description

  const validateDescription = document.getElementById('description').value;

  if(validateDescription.length === 0)
  alert("Please enter Description!");
  if(validateDescription.length > 15)
  alert("Description can't be longer than 15 characters");

  // validate AssignTo 
  const validateAssignedTo = document.getElementById('assignedTo').value;

  if(validateAssignedTo.length === 0)
  alert("Please assign to someone!");
  if(validateAssignedTo.length > 8)
  alert("The AssignTo name can't be longer than 8 characters");

  // validate DueDate 
  const validateDueDate = document.getElementById('dueDate').value;

  const currentDate = new Date().toJSON().slice(0,10);
 
  if(validateDueDate.length === 0)
  alert("Due date can't be empty!");
  if(validateDueDate.length != 0 && validateDueDate < currentDate)
  alert("Due date can't be later than current date!");
}


//TASK 5 -- Displaying Date

// Date & Time Display
function display_c(){
    let refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
 }
 
 function display_ct() {
   let CDate = new Date()
   let NewDate=CDate.toDateString(); 
   NewDate = NewDate + " - " + CDate.toLocaleTimeString();
   document.getElementById('ct').innerHTML = NewDate;
   display_c();
 }





 //Add tasks




function loadPage(){
  const allTasks = (TaskManager.getAllTasks())
  allTasks.map(task=>{
    let card = TaskManager.createHtmlCard(task)
  })
}


  class TaskManager{
    static id = 0
    static array = []
    constructor(id,taskName,description,assignedTo,dueDate,setStatus){
      this.id = TaskManager.id++;
       this.taskName = taskName;
       this.description = description;
       this.assigned_to = assignedTo;
       this.dueDate = dueDate;
       this.setStatus = setStatus;
       TaskManager.array.push(this)
    }
    static saveToLocal(){
      localStorage.setItem("tasks", JSON.stringify(TaskManager.array))
    }

    static getLocalData(){
      return JSON.parse(localStorage.getItem("tasks"))
    }

    static render(object){
      createHtmlTask(object)
    }

    static getAllTasks(){
      return JSON.parse(localStorage.getItem("tasks"))
    }

    static createHtmlCard(object){
      let card = document.createElement("div")
      card.innerHTML = `<div>
      <div class="card mb-3">
          <!-- <labtimeDivfor="">Task Name: </label> -->
            <h5 class="card-header text-center fw-bold text-success">${object.taskName}</h5>
            <div class="card-body border">
              <div class="mb-3 ">
              <!--  <labtimeDivclass="form-control for="">Assigned to: </label>-->
              <textarea class="form-control" id="" cols=" 10" rows="2" placeholder="Assigned to: ${object.assignedTo}"readonly></textarea>
            </div>
            <div class="mb-3">
            <!-- <labtimeDivfor="">Due Date: </label> -->
              <textarea class="form-control" id="" cols=" 10" rows="2" placeholder="Due Date: ${object.dueDate}"readonly></textarea>
            </div>
            <div class="mb-3 ">
            <!-- <labtimeDivfor="">Description:</label>-->
              <textarea class="form-control" id="" cols=" 30" rows="3" placeholder="Description: ${object.description}"readonly></textarea>
            </div> 
            <!-- Edit buttons -->
          </div>  
         </div >  `
      TaskManager.render(card)
    }

    static render(card){
      const taskCardContainer = document.getElementById("taskCardContainer")
      taskCardContainer.appendChild(card)
    }
  }


form.addEventListener('submit', (event) => submitFunction(event))

function submitFunction(event){
  event.preventDefault()
  const target = event.target
  const taskName = target.taskName.value
  const description = target.description.value
  const assignedTo = target.assignedTo.value
  const dueDate = target.dueDate.value
  const setStatus = target.setStatus.value


  const newTask = new TaskManager(taskName, description, assignedTo, dueDate, setStatus)
  TaskManager.createHtmlCard(newTask)

}

  



  // function displayTasks(){
  //   const bodyContainer = document.getElementById("taskCardContainer")

  //   TaskManager.getLocalData().forEach(element => {
  //     bodyContainer.appendChild(document.createElement("p")).innerHTML = `id: ${element.id}, title: ${element.title}, description: ${element.description},
  //     assigned to: ${element.assigned_to}, date: ${element.date}, status: ${element.setStatus}`
  //     })
  //   }



