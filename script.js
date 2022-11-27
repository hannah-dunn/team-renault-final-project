const form = document.getElementById('form');
const description = document.getElementById('description');
const dueDate = document.getElementById('dueDate');
const assignedTo = document.getElementById('assignedTo');
const submit = document.getElementById("submit");

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


window.addEventListener("load", ()=>loadPage());

function loadPage(){
  function fetchData(){
    fetch("https://jwd09-task-api.herokuapp.com")
    .then(resp => resp.json())
    .then(data => {
        let newTask;
        data.map(eachObj => {
            newTask = new TaskManager(eachObj.id, eachObj.title, eachObj.description, eachObj.assigned_to, eachObj.date, eachObj.setStatus)
            console.log(newTask)
            TaskManager.saveToLocal()
        })
    })
    .catch(err => console.log(err));
  }
  fetchData()
  displayTasks()
}



  class TaskManager{
    static id = 0
    static array = []
    constructor(id,title,description,assigned_to,date,setStatus){
      this.id = TaskManager.id++;
       this.title = title;
       this.description = description;
       this.assigned_to = assigned_to;
       this.date = date;
       this.setStatus = setStatus;
       TaskManager.array.push(this)
    }
    static saveToLocal(){
      localStorage.setItem("tasks", JSON.stringify(TaskManager.array))
    }

    static getLocalData(){
      return JSON.parse(localStorage.getItem("tasks"))
    }


    addTask(title,description,assigned_to,date,setStatus){
      let task = new TaskManger(title,description,assigned_to,date,setStatus);
   this.taskMangers.push(task);
   return task;
   }
  // Get Tasks -> returns the list of ALL tasks
    getAllTasks(){
      return this.taskMangers
    }
  // Get all Tasks with a given status -> returns a list of all tasks where a status equal to the status passes as an argument
    getTasksWithStatus(status){
      let filterTask=this.taskMangers.filter(task=>task.status===status)
      return filterTask
   }

  //Add a card once created with all the details of task.
    submit.addEventListener('click',(e)=> {
  //Form fields data validation
     if(validate()){
      //call render method to add new tasks
       render();
     }
    e.preventDefault();
      })
    }

  function displayTasks(){
    const bodyContainer = document.getElementById("taskCardContainer")

    TaskManager.getLocalData().forEach(element => {
      bodyContainer.appendChild(document.createElement("p")).innerHTML = `id: ${element.id}, title: ${element.title}, description: ${element.description},
      assigned to: ${element.assigned_to}, date: ${element.date}, status: ${element.setStatus}`
      })
    }






// to add cards for task 7 maybe



const createHtmlTask = (task) => {
  return (
    `
          <div class="card mb-3">
          <!-- <labtimeDivfor="">Task Name: </label> -->
            <h5 class="card-header text-center fw-bold text-success">${task.name}</h5>
            <div class="card-body border">
              <div class="mb-3 ">
              <!--  <labtimeDivclass="form-control for="">Assigned to: </label>-->
              <textarea class="form-control" id="" cols=" 10" rows="2" placeholder="Assigned to: ${task.assignedTo}"readonly></textarea>
            </div>
            <div class="mb-3">
            <!-- <labtimeDivfor="">Due Date: </label> -->
              <textarea class="form-control" id="" cols=" 10" rows="2" placeholder="Due Date: ${task.dueDate}"readonly></textarea>
            </div>
            <div class="mb-3 ">
            <!-- <labtimeDivfor="">Description:</label>-->
              <textarea class="form-control" id="" cols=" 30" rows="3" placeholder="Description: ${task.description}"readonly></textarea>
            </div> 
            <!-- Edit buttons -->
          </div>  
         </div >  
        `
  )
}



