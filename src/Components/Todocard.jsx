import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { edit, remove, removeTodo } from '../feature/todo/todosclice'


const Todocard = ({todo}) => {
 
const dispatch = useDispatch();
const {issuccess} = useSelector(state => state.todos)
  
const handleRemove = (id) => {
  dispatch(removeTodo(id));
  if (issuccess) {
    dispatch(remove(id));
  }
};

const editTodo = (todo) => {
    dispatch(edit(todo))
};





  return (
    <div className='bg-gray-400 relative rounded p-2 '>
    <h1>Title : {todo.title}  </h1>
    <p>Description : {todo.description} </p>
    <span className='flex gap-2 absolute right-4 top-2 items-center'>
    <button onClick={()=> handleRemove(todo._id)}  className='bg-red-500 rounded-sm text-white px-2  py-1'>delete</button>
    <button  onClick={()=> editTodo(todo)}  className='bg-yellow-500 rounded-sm text-white px-2  py-1'>Edit</button>
    </span>
</div>

  )
}

export default Todocard