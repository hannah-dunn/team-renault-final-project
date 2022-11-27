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

  }

  function displayTasks(){
    const bodyContainer = document.getElementById("bodyContainer")
   
    TaskManager.getLocalData().forEach(element => {
      bodyContainer.appendChild(document.createElement("p")).innerHTML = `id: ${element.id}, title: ${element.title}`
      })
    }
   



    //   get id(){
    //     return this.id
    //   }
    //    get taskName(){
    //     return this.taskName;
    //    }
    //    get description(){
    //     return this.description;
    //    }
    //    get assignedTo(){
    //     return this.assignedTo;
    //    }
    //     get dueDate(){
    //       return this.dueDate;
    //     }
    //     get setStatus(){
    //       return this.setStatus;
    //     }
      
    //   set taskName(newTaskName){
    //     this.taskName=newTaskName
    //  }
    //  set description(newDescription){
    //      this.description=newDescription
    //  }
    //  set assignedTo(newAssignedTo){
    //      this.assignedTo=newAssignedTo
    //  }
    //  set dueDate(newDueDate){
    //      this.dueDate=newDueDate
    //  }
    //  set setStatus(newSetStatus){
    //      this.setStatus=newSetStatus
    //  }
    // }
    //  class TaskManagers{
    //      // Each task object should be added to and stored in an array variable
    //      constructor(){
    //          this.taskMangers=[];
    //      }
    //  // Add Task -> a task to existing Tasks List
    //  addTask(taskName,taskDes,assignTo,dueDate,taskSt){
    //      let task=new TaskManger(taskName,taskDes,assignTo,dueDate,taskSt);
    //  this.taskMangers.push(task);
    //  return task;
    //  }
    //  // Get Tasks -> returns the list of ALL tasks
    //  getAllTasks(){
    //      return this.taskMangers
    //  }
    //  // Get all Tasks with a given status -> returns a list of all tasks where a status equal to the status passes as an argument
    //  getTasksWithStatus(status){
    //      let filterTask=this.taskMangers.filter(task=>task.status===status)
    //      return filterTask
    //  }
    //  }
    //  //Add a card once created with all the details of task.
    //  btnSubmit.addEventListener('click',(e)=>{
    //  //Form fields data validation
    //     if(validate()){
    //      //call render method to add new tasks
    //       render();
    //     }
    //  e.preventDefault();
    //      })


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



