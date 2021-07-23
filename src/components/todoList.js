// Import list todoElements from todoList.js [PENDING]
import { update } from 'lodash';
import { todo } from './updates';

export default function todoList() {
  const twoDo = document.getElementById('to-do-list');
  
  // Create a list of todos.
  const listElement = document.createElement('li');

  const h1 = document.createElement('h1');
  h1.innerHTML = "Pending To Do's:";
  h1.classList.add('list-title');
  listElement.appendChild(h1);
  
  twoDo.appendChild(listElement);

  const inputText = document.createElement('input');
  inputText.type = 'text';
  inputText.placeholder = 'Add to your list...';
  inputText.classList.add('input');

  const liText = document.createElement('li');
  liText.appendChild(inputText);

  twoDo.appendChild(liText);


  // Todo 1
  todo.forEach (task => {
    console.log(task);

    const liTask = document.createElement('li');
    const liBox = document.createElement('input');
    const textDescription = document.createElement('h3'); // Change to textbox
    const deleteButton = document.createElement('button');

    liTask.id = task.id;
    liTask.setAttribute('index', task.id);
    liTask.draggable = true;
    textDescription.innerHTML = task.description;
    liTask.classList.add('liTask');
    liBox.type = 'checkbox';
    deleteButton.innerHTML = 'X';
    
    // EVENT LISTENERS
    let idDragged = 0;
    let dragOver = 0;
    let dragDrop = 0;

    liTask.addEventListener('dragstart', function() { 
      console.log('starting dragstart', task.id);
      idDragged = task.id;
    });

    liTask.addEventListener('dragover', function(event) {
      event.preventDefault();
      console.log('dragover', task.id);
      dragOver = task.id;
    });

    liTask.addEventListener('drop', function() {
      console.log('droped into', task.id);
      dragDrop = task.id;
      console.log('id dragged', idDragged);
      console.log('id Dragover', dragOver);
      const elementDragged = document.getElementById(idDragged);
      const elementDropped = document.getElementById(dragDrop);
      elementDropped.before(elementDragged);

      
      updateIndex();
    });
    
    liTask.addEventListener('dragleave', () => { 
      console.log('dragleave', task.id);
    });

    liTask.addEventListener('dragend', () => {
      console.log('dragend', task.id);
    });

    const updateIndex = () => { 
      console.log('Actualizando Indices');
      const draggableElements = document.querySelectorAll('.liTask');
      console.log('draggableElements', draggableElements);
      
      draggableElements.forEach(function(element, index) {
        element.setAttribute('index', index);
      });
    }

    // End of EVENT LISTENERS
    
    liTask.appendChild(liBox);
    liTask.appendChild(textDescription);
    liTask.appendChild(deleteButton);
    twoDo.appendChild(liTask);

  })




  // Top level list items are todoElements.
  // const todoConst = document.getElementById('tdl-element');
  // const erase = document.querySelector('.erase-container');

  
  // twoDo.appendChild(todoConst);
  // todoConst.appendChild(h1);
  // todoConst.appendChild(erase);

  // Input for adding new todos.
  
};





// <section>
// <div class="mine container">
//     <div id="to-do-list" class="to-do-list">
        
//     <div class="refresh-button"></div>
//     <div class="tdl-element">
//       <div class="modul">
//           <input id="new-item" class="" placeholder="" type="text">
//           <button 
//               id="submit-new-item" 
//               type="submit" 
//               tabindex="-1"
//               title="press enter to submit"
//               class="icon-return input-btn">
//                   <span class="add"> + </span>
//           </button>
//       </div>
//     </div>
// </div>
// </div>
// <div class="tdl-element erase-container">
// <button class="erase" type="submit" > Clear all completed</button>
// </div>
// </section>







// class Todo {
//   constructor() {
//     this.todo = null;
//   }

//   setTodo(todolist) {
//     this.todo = todolist;
//   }

//   getTodo() {
//     return this.todo;
//   }

//   showall() {
//     for (let i = 0; i < this.todo.length; i += 1) {
//       const activity = this.todo[i];
//       const container = document.createElement('li');
//       container.classList.add('tdl-element');

//       const statusC = document.createElement('div');
//       statusC.classList.add('tdle-status-c');

//       const status = document.createElement('i');
//       status.classList.add('far');
//       if (activity.completed === true) {
//         status.classList.add('fa-check-square');
//       } else {
//         status.classList.add('fa-square');
//       }
//       statusC.appendChild(status);

//       container.appendChild(statusC);

//       const text = document.createElement('div');
//       text.classList.add('tdle-text-c');
//       text.textContent = activity.description;

//       container.appendChild(text);

//       const lastC = document.createElement('div');
//       lastC.classList.add('tdle-last-c');

//       const last = document.createElement('i');
//       last.classList.add('fas');
//       last.classList.add('fa-ellipsis-v');

//       lastC.appendChild(last);

//       container.appendChild(lastC);
//       erase.parentNode.insertBefore(container, erase);
//     }
//   }
// }

// const list = new Todo();
// list.setTodo(todo);
// list.showall();
