window.addEventListener("load", ()=>loadPage());

const form = document.getElementById('form');
const description = document.getElementById('description');
const dueDate = document.getElementById('dueDate');
const assignedTo = document.getElementById('assignedTo');
const taskName = document.getElementById('taskName');
const setStatus = document.getElementById('setStatus');
const submitButton = document.getElementById('submitButton');





// TASK - 4 - Task Form Inputs Validation 

function validateTaskForm() {
  //validate Name length
  
  const validateName = document.getElementById('taskName').value;
  if(validateName.length === 0){
    alert("Please enter Name!");
    return false
  }
  if(validateName.length < 8){
    alert("Task name should be longer than 8 characters");
    return false
  }

  // validate Description

  const validateDescription = document.getElementById('description').value;

  if(validateDescription.length === 0){
    alert("Please enter Description!");
    return false
  }

  if(validateDescription.length < 15){
    alert("Description should be longer than 15 characters");
    return false
  }

  // validate AssignTo 
  const validateAssignedTo = document.getElementById('assignedTo').value;

  if(validateAssignedTo.length === 0){
    alert("Please assign to someone!");
    return false
  }
  if(validateAssignedTo.length < 8){
    alert("The name of the assigned should be longer than 8 characters");
    return false
  }

  // validate DueDate 
  const validateDueDate = document.getElementById('dueDate').value;

  const currentDate = new Date().toJSON().slice(0,10);
  if(validateDueDate.length === 0){
    alert("Due date can't be empty!");
    return false
  }
  if(validateDueDate.length != 0 && validateDueDate < currentDate){
    alert("Due date can't be later than current date!");
    return false
  }

  return true
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
  const allTasks = TaskManager.getAllTasks()
  allTasks.map(task=>{
    let card = TaskManager.createHtmlCard(task)
   console.log(task)
  })
}


form.addEventListener('submit', (event) => submitFunction(event))




function submitFunction(event){
  event.preventDefault()
  if(validateTaskForm()){

  const target = event.target
  const taskName = target.taskName.value
  const description = target.description.value
  const assignedTo = target.assignedTo.value
  const dueDate = target.dueDate.value
  const setStatus = target.setStatus.value


  const newTask = new TaskManager(taskName, description, assignedTo, dueDate, setStatus)
  TaskManager.createHtmlCard(newTask)
  console.log( )
}}



  class TaskManager{
    static id = 0
    static array = []
    constructor(taskName,description,assignedTo,dueDate,setStatus){
      this.id = TaskManager.id++;
       this.taskName = taskName;
       this.description = description;
       this.assignedTo = assignedTo;
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
      card.innerHTML =
                      `<div class="card mx-3">
                          <div class="mx-3">
                            <label>Task Name:</label>
                            <h4>${object.taskName}</h4>
                          </div>
                            <div class="mx-3">
                            <label>Assigned to: </label>
                            <p>${object.assignedTo}</p>
                          </div>
                           <div class="mx-3">
                            <label>Due Date: </label>
                            <p>${object.dueDate}</p>
                          </div>
                          <div class="mx-3 ">
                            <label>Description:</label>
                             <p>${object.description}</p>
                          </div>
                          <div class="mx-3 ">
                            <label>Status:</label>
                            <p>${object.setStatus}</p>
                          </div>
                          <div class="card-footer bg-transparent border-light">
                          <button type="submit">Mark as Done</button>
                          <button type="submit">Delete</button>
                        </div>
                        </div>
                      </div>`
      TaskManager.render(card)
      TaskManager.saveToLocal()
      console.log(object)
    }

    static render(card){
      const taskCardContainer = document.getElementById("taskCardContainer")
      taskCardContainer.appendChild(card)
    }

  }

  // class Storage {
  //   static getTasks() {
  //     let tweets;
  //     if (localStorage.getItem("tweets") === null) {
  //       tweets = [];
  //     } else {
  //       tweets = JSON.parse(localStorage.getItem("tweets"));
  //     }
  //     return tweets;
  //   }
  
  //   static displayTweets() {
  //     const tweets = Storage.getTweets();
  //     tweets.forEach((tweet) => {
  //       addTweet(tweet);
  //     });
  //   }
  //   static saveTweet(tweet) {
  //     const tweets = Storage.getTweets();
  //     tweets.push(tweet);
  
  //     localStorage.setItem("tweets", JSON.stringify(tweets));
  //   }
  //   static removeTweet(tweetValue) {
  //     const tweets = Storage.getTweets();
  //     tweets.forEach((tweet, index) => {
  //       if (tweet === tweetValue) {
  //         tweets.splice(index, 1);
  //       }
  //     });
  //     localStorage.setItem("tweets", JSON.stringify(tweets));
  //   }
  // }
