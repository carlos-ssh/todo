import './css/style.css'
import { saveTodo } from './components/updates';
import todoList from './components/todoList';

const start = () => {
  todoList();
  saveTodo();
};

start();