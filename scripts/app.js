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




function saveTask() {
   console.log("Saving Task!");
   let title = $("#txtTitle").val();
   let description = $("#txtDescription").val();
   let dueDate = $("#txtDueDate").val();
   let category = $("#txtCategory").val();
   let priority = $("#txtPriority").val();
   let cost = $("#cost").val();

   //create a new instance of Task (object)
   let task = new Task(isImportant, title, description, dueDate, category, priority, cost);
   console.log(task);
}



function init() {
   console.log("Task Manager HTML loaded");

   $("#topIcon").click(toggleImportant);
   $("#btnSave").click(saveTask);
   $("#btnToggleDetails").click(toggleDetails);
}

window.onload = init;