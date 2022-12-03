const nonImportantIcon = "fa-regular fa-star";
const importantIcon = "fa-solid fa-star";
var isImportant = false;
var isVisible = true;

function toggleImportant() {
   console.log("Important Icon clicked");
   if(isImportant) {
      $("#topIcon").removeClass(importantIcon);//to non important
      $("#topIcon").addClass(nonImportantIcon);
      isImportant = false;
   }
   else {
      //to important
      $("#topIcon").removeClass(nonImportantIcon);
      $("#topIcon").addClass(importantIcon);
      isImportant=true;
   }
}


function saveTask() {
   console.log("Saving Task!");
   let title = $("#txtTitle").val();
   let description = $("#txtDescription").val();
   let dueDate = $("#txtDueDate").val();
   let category = $("#txtCategory").val();
   let priority = $("#txtPriority").val();
   let cost = $("#txtCost").val();

   //create a new instance of Task (object)
   let task = new Task(isImportant, title, description, dueDate, category, priority, cost);
   console.log(task);
  
   
   $.ajax({
      type: "POST",
      url: "https://fsdiapi.azurewebsites.net/api/tasks/",
      data: JSON.stringify(task),
      contentType: "application/json",
      success: function(data) {
         displayTask(task);
         console.log("Server says",data);
      },
      error: function(error) {
         console.log("Request error", error)
         alert('Error: task is not saved');
      },
   });
}

function displayTask(task) {
   let syntax =`
   <div class="task">

      <i class="fa-regular  fa-star"></i>
      <div class="description">
         <h5>${task.title}</h5>
         <p>${task.description}</p>
      </div>

      <label>${task.dueDate}</label>
      <label>${task.category}</label>
      <label>${task.cost}</label>
   </div>   
   `;
   $("#pendingTasks").append(syntax);
}




function toggleDetails() {
   console.log("Important Icon clicked");
   if(isVisible) {
      $("#secForm").hide();
      isVisible = false;
   }
   else {
      $("#secForm").show();
      isVisible=true;
   }
}

/*
function testRequest () {
   $.ajax({
      type: "GET",
      url: "https://fsdiapi.azurewebsites.net",
      success: function(x) {
         console.log("Server says", x);
      },
      error: function(error) {
         console.log("Request error", error)
      },
   });
}
*/


function fetchTasks() {
   $.ajax({
      type: "GET",
      url: "https://fsdiapi.azurewebsites.net/api/tasks",
      success:function (data) {
         let all = JSON.parse(data); // will parse string back into obj.
         console.log(all); //all = all the tasks saved in the server
         for(let i=0; i<all.length; i++) {
            let task= all[i];
            if(task.name === "Kenneth") {
               displayTask(task);
            }
         }
      },
      error:function (error) {
         console.log("request error",error)
      },
   });
}

function init() {
   console.log("Task Manager HTML loaded");

   fetchTasks();
   $("#topIcon").click(toggleImportant);
   $("#btnSave").click(saveTask);
   $("#btnToggleDetails").click(toggleDetails);
}

window.onload = init;











