import './style.css';

const erase = document.querySelector('.erase-container');

const todo = [
  {
    description: 'Visit Grand Ma.',
    completed: false,
    id: 0,
    index: 0,
  },
  {
    description: 'Morning Meeting with my Team.',
    completed: true,
    id: 1,
    index: 1,
  },
  {
    description: 'Finish my Capstone Project.',
    completed: true,
    id: 2,
    index: 2,
  },
];

class Todo {
  constructor() {
    this.todo = null;
  }

  setTodo(todolist) {
    this.todo = todolist;
  }

  getTodo() {
    return this.todo;
  }



const list = new Todo();
list.setTodo(todo);
list.showall(); 
