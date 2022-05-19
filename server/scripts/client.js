$(document).ready( onReady);

function onReady (){
    $('#addTaskButton').on('click', addTask)
    console.log('in onReady JQ');
}// end onReady

function addTask (){
    console.log('in addTask');
let newTask = {
    task: $('#taskIn').val()
}
console.log(newTask);
} // end add task