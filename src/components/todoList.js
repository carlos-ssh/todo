import { todo } from './updates';

export default function todoList() {
  const todoConst = " string";


}






// const erase = document.querySelector('.erase-container');
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
