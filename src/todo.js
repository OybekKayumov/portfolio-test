const addMessage = document.querySelector('.message');
const addBtn = document.querySelector('.add');
//list of tasks
const todoTask = document.querySelector('.todo');


let todoList = [];


addBtn.addEventListener('click', () => {
  
  // every task to OBJECT
  // every OBJECT to Array => todoList
  // create new array 
  let newTodo = {
    todo: addMessage.value,
    checked: false,
    important: false,
    id: 0
  }

  todoList.push(newTodo);
  
  // console.log('value from input "addMessage": ', addMessage.value);
  // console.log('newTodo Object": ', newTodo);
  // console.log('TodoList Array": ', todoList);
  // call every time when we click on Add button
  renderMessages()
})

function renderMessages() { 
  let renderMessage = '';
  todoList.forEach((item, index) => {
    // console.log('render items', item);
    // const renderMessage = `Our task is: ${addMessage.value}`;
    // console.log('renderMessage: ', renderMessage);
    

    // checked task or not
    // item.checked ? 1 : 2
    // if true do 1, if false do 2
    // if checked is true we add "checked, if false "" empty
    renderMessage += `
        <li>
          <input type="checkbox" id="item_${index}" ${item.checked ? 'checked' : ''}>
          <label for="item_${index}">${item.todo}</label>
        </li>    
    `;
    
    todoTask.innerHTML = renderMessage; 
  })

}