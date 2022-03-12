"use strict";
var addMessage = document.querySelector('.message');
var addBtn = document.querySelector('.add'); //list of tasks
var todoTask = document.querySelector('.todo');
var todoList = []; // check localStorage for data
if (localStorage.getItem('todo')) {
    // if in localStorage we have some data, 
    todoList = JSON.parse(localStorage.getItem('todo')); // render data from LocalStorage to HTML
    renderMessages();
} else todoList = [];
addBtn.addEventListener('click', function() {
    // if input is empty, we cannot add a task
    if (!addMessage.value) // alert("Enter a new task")
    return;
     // every task to OBJECT
    // every OBJECT to Array => todoList
    // create new array 
    var newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false,
        id: 0
    };
    todoList.push(newTodo); // console.log('value from input "addMessage": ', addMessage.value);
    // console.log('newTodo Object": ', newTodo);
    // console.log('TodoList Array": ', todoList);
    // call every time when we click on Add button
    renderMessages(); // localStorage gets string
    localStorage.setItem('todo', JSON.stringify(todoList));
    addMessage.value = '';
});
function renderMessages() {
    var renderMessage = '';
    if (todoList.length === 0) todoTask.innerHTML = '';
    todoList.forEach(function(item, index) {
        // console.log('render items', item);
        // const renderMessage = `Our task is: ${addMessage.value}`;
        // console.log('renderMessage: ', renderMessage);
        // checked task or not
        // item.checked ? 1 : 2
        // if true do 1, if false do 2
        // if checked is true we add "checked, if false "" empty
        renderMessage += "\n        <li>\n          <input type=\"checkbox\" id=\"item_".concat(index, "\" ").concat(item.checked ? 'checked' : '', ">\n          <label for=\"item_").concat(index, "\" class=\"").concat(item.important ? 'important' : '', "\">").concat(item.todo, "</label>\n        </li>    \n    ");
        todoTask.innerHTML = renderMessage;
    });
} // see and update for task status 'checked'
// if checked, save to LocalStorage
// we can find 'checked' by input
// our task list 
todoTask.addEventListener('change', function(event) {
    // see on consol which task we pressed
    // console.log(event.target); 
    // take attribute ID for this target
    // console.log(event.target.getAttribute('id'));
    var idInput = event.target.getAttribute('id');
    var forLabel = todoTask.querySelector('[for=' + idInput + ']');
    var valueLabel = forLabel.innerHTML; // item number
    // console.log('forlabel: ', forLabel);
    // value label = text (task 1)
    // console.log('valuelabel: ', valueLabel);
    todoList.forEach(function(item) {
        if (item.todo === valueLabel) {
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    });
}); // important task
todoTask.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    todoList.forEach(function(item, index) {
        if (item.todo === event.target.innerHTML) {
            // delete task by "right click mouse + CTRL" 
            if (event.ctrlKey || event.metaKey) todoList.splice(index, 1);
            else item.important = !item.important;
            renderMessages();
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    });
});

//# sourceMappingURL=todo.099c8cbf.js.map
