/* eslint-disable import/no-mutable-exports */
const todo = [ { description: 'Visit Grand Ma.', completed: false, id: 0, index: 0 },
  { description: 'Morning Meeting with my Team.', completed: true, id: 1, index: 1 },
  { description: 'Finish my Capstone Project.', completed: true, id: 2, index: 2 }
];

const saveTodo = () => {
  const jsonData = JSON.stringify(todo);
  localStorage.setItem('todo', jsonData);
};

const updateTodo = (id, description, completed) => {
  const finder = todo.find(t => t.id === id);
  finder.completed = elm.checked;
};

const clearTodo = () => {
  todo = [];
};

const addTodo = (obj) => {
  todo.push(obj);
};

const loadTodo = () => {
  const localTodo = localStorage.getItem('todo');
  todo = localTodo == null ? [] : JSON.parse(localTodo);
};

export {
    todo, saveTodo, updateTodo, clearTodo, addTodo, loadTodo
};
/* eslint-disable import/no-mutable-exports */
