const addMessage = document.querySelector('.message');
const addBtn = document.querySelector('.add');
//list of tasks
const todoTask = document.querySelector('.todo');


let todoList = [];
// check localStorage for data
if (localStorage.getItem('todo')) {
  // if in localStorage we have some data, 
  todoList = JSON.parse(localStorage.getItem('todo'));
  // render data from LocalStorage to HTML
  renderMessages();
} else {
  todoList = [];
}



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
  // localStorage gets string
  localStorage.setItem('todo', JSON.stringify(todoList));
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
          <label for="item_${index}" class="${item.important ? 'important' : ''}">${item.todo}</label>
        </li>    
    `;
    
    todoTask.innerHTML = renderMessage; 
  })
}

// see and update for task status 'checked'
// if checked, save to LocalStorage
// we can find 'checked' by input
// our task list 
todoTask.addEventListener('change', (event) => {
  // see on consol which task we pressed
  // console.log(event.target); 
  // take attribute ID for this target
  // console.log(event.target.getAttribute('id'));
  
  let idInput  = event.target.getAttribute('id');
  let forLabel = todoTask.querySelector('[for=' + idInput + ']');
  let valueLabel = forLabel.innerHTML;

  // item number
  // console.log('forlabel: ', forLabel);
  // value label = text (task 1)
  // console.log('valuelabel: ', valueLabel);

  todoList.forEach((item) => {
    if (item.todo === valueLabel) {
      item.checked = !item.checked;

      localStorage.setItem('todo', JSON.stringify(todoList));
    }
  })
})

// important task
todoTask.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  todoList.forEach((item) => {
    if(item.todo === event.target.innerHTML) {
      item.important = !item.important;
      
      renderMessages();

      localStorage.setItem('todo', JSON.stringify(todoList));
    }

  })

})