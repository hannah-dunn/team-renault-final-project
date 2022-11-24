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
           task._Description=taskForm['taskDes'].value
           task._setStatus=taskForm['taskStatus'].value
           task._assignedTo=taskForm['assignTo'].value
           task._dueDate=taskForm['dueDate'].value

           console.log(`task name :${task._taskName}`)
           console.log(task)
           tasksList.push(task)

           window.localStorage.setItem('Tasks',JSON.stringify(tasksList))
  })
    

  class TaskManager{
    static id = 0
    constructor(id,taskName,Description,assignedTo,dueDate,setStatus){
      this._id = TaskManager.id++;
       this._taskName = taskName;
       this._Description = Description;
       this._assignedTo = assignedTo;
       this._dueDate = dueDate;
       this._setStatus = setStatus;
  
    }
       get taskName(){
        return this._taskName;
       }
       get Description(){
        return this._Description;
       }
       get assignedTo(){
        return this._assignedTo;
       }
        get dueDate(){
          return this._dueDate;
        }
        get setStatus(){
          return this._setStatus;
        }

        saveTask(){
            //    let task ={id:this._id,
            //     taskName:this._taskName,
            //   }
            // window.localStorage.setItem('tasks',JSON.stringify(task))
        }
      }
      





      function addItem(item){
        const itemHTML = '<div class="card" style="width: 18rem;">\n' +
            '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
            '    <div class="card-body">\n' +
            '        <h5 class="card-title">'+item.name+'</h5>\n' +
            '        <p class="card-text">'+item.description+'</p>\n' +
            '        <a href="#" class="btn btn-primary">Add</a>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<br/>';
        const itemsContainer = document.getElementById("form");
        itemsContainer.innerHTML += itemHTML;
    }
    
    addItem({'name':'juice',
        'img':'https://www.gs1india.org/media/Juice_pack.jpg',
        'description':'Orange and Apple juice fresh and delicious'});
    
    addItem({'name':'Tayto',
        'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
        'description':'Cheese & Onion Chips'})



