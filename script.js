const form = document.getElementById('form');
const description = document.getElementById('description');
const dueDate = document.getElementById('dueDate');
const assignedTo = document.getElementById('assignedTo');

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
        data.map(eachObject => {
            
        })
    })
    .catch(err => console.log(err));
  }
  fetchData()
}





 let taskForm= document.getElementById('taskForm')
  let tasksList=[]


  window.addEventListener('load',()=>{
     tasksList=  JSON.parse( localStorage.getItem('Tasks'))
     console.log(`tasklist :${tasksList}`)
  })
  taskForm.addEventListener('submit',(event)=>{
        event.preventDefault();
             console.log(taskForm['taskName'].value)
        const formData=new FormData(taskForm);
        console.log(`formdata:${formData}`)
           

           console.log(`task name :${task._taskName}`)
           console.log(task)
           tasksList.push(task)

           window.localStorage.setItem('Tasks',JSON.stringify(tasksList))
  })
    

  class TaskManager{
    static id = 0
    constructor(id,taskName,description,assignedTo,dueDate,setStatus){
      this.id = TaskManager.id++;
       this.taskName = taskName;
       this.description = description;
       this.assignedTo = assignedTo;
       this.dueDate = dueDate;
       this.setStatus = setStatus;
      const saveToLocal = () => {
        localStorage.setItem(this._id, this)
      }
    }
    static saveToLocal(Object){
      localStorage.setItem(Object._id, Object)
    }

      get id(){
        return this.id
      }
       get taskName(){
        return this.taskName;
       }
       get description(){
        return this.description;
       }
       get assignedTo(){
        return this.assignedTo;
       }
        get dueDate(){
          return this.dueDate;
        }
        get setStatus(){
          return this.setStatus;
        }
      
      set taskName(newTaskName){
        this.taskName=newTaskName
     }
     set description(newDescription){
         this.description=newDescription
     }
     set assignedTo(newAssignedTo){
         this.assignedTo=newAssignedTo
     }
     set dueDate(newDueDate){
         this.dueDate=newDueDate
     }
     set setStatus(newSetStatus){
         this.setStatus=newSetStatus
     }
    }
     class TaskManagers{
         // Each task object should be added to and stored in an array variable
         constructor(){
             this.taskMangers=[];
         }
     // Add Task -> a task to existing Tasks List
     addTask(taskName,taskDes,assignTo,dueDate,taskSt){
         let task=new TaskManger(taskName,taskDes,assignTo,dueDate,taskSt);
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
     }
     //Add a card once created with all the details of task.
     btnSubmit.addEventListener('click',(e)=>{
     //Form fields data validation
        if(validate()){
         //call render method to add new tasks
          render();
        }
     e.preventDefault();
         })

//Each time a new task is added, the render() method is called to display the new task.
const render=()=>{
  //  add task info into TaskManagers array list 
  let task= new TaskManagers();
  task.addTask(taskName.value,taskDes.value,assignTo.value,dueDate.value,taskSt.value,commentIn.value)
 //show task box in HTML
 createTaskHTML(task.getAllTasks());
  //    reset form fields
  document.getElementById("form").reset();
}
// creates a Card Layout HTML as defined on previous tasks object
const createTaskHTML=(task)=>{
task.forEach(element => {
const taskHTML=` <div class="col">
     <div class="card mb-3 bg-info m-2 task-box p-1 rounded shadow box-1 text-light" style="max-width: 18rem;">
       <div class="card-header bg-transparent border-light"><small class="fst-italic" >
       Due Date:${element.dueDate}</small></div>
       <div class="card-body text-light">
         <h5>Name: ${element.taskName}</h5>
         <p>Description: ${element.description}</p>
         <p>Assign To:    <select class="form-control col me-3" id="assignedTo" required="required">
         <option>${element.assignedTo}</option>
        
     </select></p>
         <div class="spinner-border text-light" role="status"> </div>
             <span >${element.setStatus}</span>
           
       <div class="card-footer bg-transparent border-light">              
           <button type="submit" class="btn btn-success shadow">Update</button>
           <button type="submit" class="btn btn-danger shadow">Delete</button>
       </div>
     </div>
   </div>`
 const itemsContainer = document.getElementById("taskCards");
 itemsContainer.innerHTML += taskHTML; 
});     
}


// to add cards for task 7 maybe

    //   function addItem(item){
    //     const itemHTML = '<div class="card" style="width: 18rem;">\n' +
    //         '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
    //         '    <div class="card-body">\n' +
    //         '        <h5 class="card-title">'+item.name+'</h5>\n' +
    //         '        <p class="card-text">'+item.description+'</p>\n' +
    //         '        <a href="#" class="btn btn-primary">Add</a>\n' +
    //         '    </div>\n' +
    //         '</div>\n' +
    //         '<br/>';
    //     const itemsContainer = document.getElementById("form");
    //     itemsContainer.innerHTML += itemHTML;
    // }
    
    // addItem({'name':'juice',
    //     'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    //     'description':'Orange and Apple juice fresh and delicious'});
    
    // addItem({'name':'Tayto',
    //     'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
    //     'description':'Cheese & Onion Chips'})



