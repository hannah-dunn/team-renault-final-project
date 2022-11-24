const form = document.getElementById('form');
const description = document.getElementById('description');
const dueDate = document.getElementById('dueDate');
const assignedTo = document.getElementById('assignedTo');

// function validateTaskForm () {
// }





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
           const task= new TaskManager()
           task._id=tasksList.length+1;
           task._taskName=taskForm['taskName'].value
           task._desc=taskForm['taskDes'].value
           task._status=taskForm['taskStatus'].value
           task._assignTo=taskForm['assignTo'].value
           task._dueDate=taskForm['dueDate'].value

           console.log(`task name :${task._taskName}`)
           console.log(task)
           tasksList.push(task)

           window.localStorage.setItem('Tasks',JSON.stringify(tasksList))
  })
    

  class TaskManager{
    constructor(id,taskName,desc,assignTo,dueDate,status){
      this._id=id;
       this._taskName=taskName;
       this._desc=desc;
       this._assignTo=assignTo;
       this._dueDate=dueDate;
       this._status=status;
    //    this._tasks=[{id:1,
    //   taskName:test1,
    // desc:'test'}]


    }
       get taskName(){
        return this._taskName;
       }
       get desc(){
        return this._desc;
       }
       get assignTo(){
        return this._assignTo;
       }
        get dueDate(){
          return this._dueDate;
        }
        get status(){
          return this._status;
        }

        saveTask(){
            //    let task ={id:this._id,
            //     taskName:this._taskName,
            //   }
            // window.localStorage.setItem('tasks',JSON.stringify(task))
        }
      }
      
