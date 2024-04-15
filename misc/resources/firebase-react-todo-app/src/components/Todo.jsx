import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const style = {
   li: `flex justify-between bg-slate-200 p-4 my-2 capatilize`,
   liComplete: `flex justify-between bg-slate-600 p-4 my-2 cqaitalize`,
   row: `flex`,
   text: `ml-2 cursor-pointer`,
   textComplete: `ml-2 cursor-pointer line-through`,
   button: `cursor-pointer flex intems-center`,

}

const Todo = ({ todo, toggleComplete }) => {
   return (
      <li className={todo.completed ? style.liComplete : style.li}>
         <div className={style.row}>
            <input onChange={() => toggleComplete(todo)} type='checkbox' checked={todo.complete ? 'checked' : ''}/>
            <p onClick={() => toggleComplete(todo)} className={todo.completed ? style.textComplete : style.text}>
               {todo.text}</p>
         </div>
         <button>{<FaRegTrashAlt />}</button>
      </li>
   )
}

export default Todo;