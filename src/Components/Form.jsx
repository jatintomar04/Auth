import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo } from '../feature/todo/todosclice';



const Form = () => {

const {edit} = useSelector(state => state.todos); 
const dispatch = useDispatch()
const [title, setTitle] = useState("")
const [description, setDescription] = useState ("")



const handleSubmit = (e) => {
   e.preventDefault();
   edit.isEdit ? dispatch(updateTodo({id : edit.todo._id,title, description})) :
   dispatch(addTodo({title, description}));
   setDescription("")
   setTitle("")
}

useEffect (() => {
   setTitle(edit.todo.title)
   setDescription(edit.todo.description)
}, [edit])


   
  return (
    <form onSubmit={handleSubmit} className='flex flex-col space-y-4  bg-slate-500 p-2 rounded' action="">
    <input value={title} onChange={(e)=>setTitle(e.target.value)} required className='p-2 rounded outline-none' placeholder='Enter task' type="text" 
       />
    <textarea value={description} onChange={(e)=>setDescription(e.target.value)} required  className='p-2 rounded outline-none' placeholder='Discription' type="text"  />
    <button  type="submit"  className='bg-green-800 text-white font-bold p-2 rounded hover:bg-green-700'>
    submit
    </button>
</form>
  )
}

export default Form