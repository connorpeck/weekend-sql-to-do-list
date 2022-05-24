$(document).ready( onReady);

function onReady (){
    $('#addTaskButton').on('click', addTask);
    $('#tasksOut').on('click', '.deleteButton', deleteTask);
    $('#tasksOut').on('click', '.completeButton', completeTask);
    $('#tasksOut').on('click', '.undoButton', undoFunction);

    getTasks();
    console.log('in onReady JQ');
}// end onReady

function addTask (){
    console.log('in addTask');
let newTask = {
    task: $('#taskIn').val()
    
};
$('#taskIn').val('')
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
    let el = $('#tasksOut');
    el.empty();
    for (let i=0; i<response.length; i++){
        
        let taskStatusClass = `incompleteClass`;
        let textStatusStyle = ``
        
        if (response[i].completed == true){
            console.log(response[i].completed);
            taskStatusClass= `completeClass`;
            textStatusStyle= `<del> Task: ${response[i].task}</del>`
            }

        else 
        {
            taskStatusClass = `incompleteClass`;
            textStatusStyle = `Task: ${response[i].task}`
        }
        el.append( 
            `<tr id=${ response[i].id} class="${taskStatusClass}"> <td> ${textStatusStyle}</td><td>
            <button class="completeButton" data-id="${ response[i].id}"><span class='bi bi-check-circle'></span></button>
            <button class="undoButton" data-id="${ response[i].id}"><span class="bi bi-arrow-counterclockwise"></span></button>
            <button class="deleteButton" data-id="${ response[i].id}"><span class="bi bi-trash"></span></button></td></tr>`
        );
         
    }
    // <button type="button" class="btn btn-light"><span class="bi bi-trash"></span></button>
   
   
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

function deleteTask(){
    console.log('in deleteTask', $(this).data('id'));
$.ajax({
    method: 'DELETE',
    url: `/tasks?id=${ $( this ).data( 'id') }`
}).then( function (response){
    console.log(response);
    getTasks();
}).catch(function ( err ){
    console.log(err);
    alert( 'error in deleteTask')
})
}// end deleteTask

function completeTask (){
    console.log('in completeTask', $(this).data('id'));
$.ajax ({
    method: 'PUT',
    url: `/tasks?id=${ $( this ).data( 'id') }`
}).then ( function (response){
    console.log(response);
    getTasks();
}).catch( function ( err ){
    console.log(err);
    alert( 'error in completeTask');
})
}

function undoFunction (){
    console.log('in undoFunction', $(this).data('id'));
$.ajax ({
    method: 'PUT',
    url: `/tasks/undo?id=${ $( this ).data( 'id') }`
}).then ( function (response){
    console.log(response);
    getTasks();
}).catch( function ( err ){
    console.log(err);
    alert( 'error in undoFunction');
})
}