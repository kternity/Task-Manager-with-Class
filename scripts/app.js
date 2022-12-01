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
   displayTask(task);
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



function init() {
   console.log("Task Manager HTML loaded");

   $("#topIcon").click(toggleImportant);
   $("#btnSave").click(saveTask);
   $("#btnToggleDetails").click(toggleDetails);
}

window.onload = init;