import React, { useEffect } from 'react'
import Todocard from './Todocard'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../feature/todo/todosclice'


const Todocontainer = () => {

  const {allTodos, isLoading, isError} =  useSelector(state => state.todos )

  const dispatch = useDispatch()


  useEffect (()=>{
    dispatch(getTodos());
  },[]);

  if (allTodos.length === 0) {
    return (<h1 className="font-bold text-gray-500 text-center mt-5">No todos yet..</h1>)
}

if (isLoading) {
    return (<h1 className="font-bold text-gray-500 text-center mt-5">Loading...</h1>)
}
if (isError) {
    return (<h1 className="font-bold text-red-500 text-center mt-5">Some thing went wrong</h1>)
}


  return (
    <div className='grid gap-5 mt-5 grid-cols-3 p-2'>
{
    allTodos.map ((todo) => (<Todocard key={todo._id} todo={todo} />))
}
    </div>
  )
}

export default Todocontainer