import React, {/*useState */} from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { BiCheckbox, BiCheckboxChecked } from 'react-icons/bi';

import './Todo.css';

const Todo = ({ text, todo, todos, setTodos }) => {

  const handleDelete = () => {
    setTodos(todos.filter(element => element.id !== todo.id));   
  };

  const handleComplete = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item, completed: !item.completed
        }
      }

      return item;
    }))
  };

  return (
    <div className={`todo-row ${todo.completed ? 'completed' : ''}`}>
      {todo.completed === false ? 
        <BiCheckbox onClick={handleComplete} className={`icons`} />
        :
        <BiCheckboxChecked onClick={handleComplete} className='icons'/>
      }
      <li className='todo-item'>{text}</li>
      {/*
      <TiEdit 
        className='icons edit'
        onClick={handleEdit}
      />
    */}
      <RiCloseCircleLine 
        className='icons delete'
        onClick={handleDelete}
      />
    </div>
  );
}

export default Todo;