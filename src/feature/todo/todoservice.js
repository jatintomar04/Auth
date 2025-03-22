import axios from "axios"

export const fetchTodos = async ()=> {
    const response = await axios.get('/api/todo')
  return response.data;
};

export const createTodos = async (formData)=> {
    const response = await axios.post('/api/todo', formData);
;
  return response.data;
}

export const update = async (formData)=> {
  const response = await axios.put('/api/todo/'+ formData.id,formData);

return response.data;
}


export const deleteTodo = async (id)=> {
  const response = await axios.delete('/api/todo/'+ id);
  console.log(response.data);
return response.data;
}
