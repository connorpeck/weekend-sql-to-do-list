$(document).ready( onReady);

function onReady (){
    $('#addTaskButton').on('click', addTask)
    console.log('in onReady JQ');
}// end onReady

function addTask (){
    console.log('in addTask');
let newTask = {
    task: $('#taskIn').val()
    
};
saveTask( newTask)
}
// end add task

function getTasks(){
    console.log('in getTasks');
$.ajax({
    method: 'GET',
    url: '/tasks'
}).then( function ( response ){
    console.log('back from GET', response);
})
}// end getTasks

function saveTask( newTask){
console.log(newTask);
}// end saveTask

function saveTask(taskToPOST){
    console.log('in saveTask', taskToPOST);
$.ajax({
    method: 'POST',
    url: '/tasks', 
    data: taskToPOST
}).then( function( response ){
console.log('back from POST response is:', response);
getTasks();

}).catch( function (err){
    console.log(err);
    alert('error in POST');
})
}

