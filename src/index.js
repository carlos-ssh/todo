import 'src/style.css';
import { loadData } from './components/updates.js';
import createList from './components/todoList.js';

const run = () => {
  loadData();
  createList();
};

run();