import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createTodos, deleteTodo, fetchTodos, update } from "./todoservice"; // Fixed the typo here

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    allTodos: [],
    edit: { todo: {}, isEdit: false },
  },
  reducers: {
    edit: (state, action) => {
      return {
        ...state,
        edit: { todo: action.payload, isEdit: true },
      };
    },
    
    remove : (state , action) => {
        return{
        ...state,
        allTodos : state.allTodos.filter(item => item._id !== action.payload)
    }

    }
  }, 

  extraReducers: (builder) => {
    builder
      // Handle getTodos actions
      .addCase(getTodos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.allTodos = action.payload; // Updated to directly assign payload
        state.isSuccess = true;
      })
      .addCase(getTodos.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })

      // Handle addTodo actions
      .addCase(addTodo.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.allTodos = [action.payload, ...state.allTodos]; // Prepend new todo to the list
        state.isSuccess = true;
      })
      .addCase(addTodo.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })




            // delete update actions
           
            .addCase(removeTodo.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
              })
              .addCase(removeTodo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
              })
              .addCase(removeTodo.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
              });

  },
});

export const { edit , remove } = todoSlice.actions;

export default todoSlice.reducer;

// Get Todos
export const getTodos = createAsyncThunk("FETCH/TODOS", async () => {
  try {
    return await fetchTodos(); // Fixed the typo here
  } catch (error) {
    console.log(error);
  }
});

// Add Todo
export const addTodo = createAsyncThunk("CREATE/TODO", async (formData) => {
  try {
    return await createTodos(formData);
  } catch (error) {
    console.log(error);
  }
});

// update Todo
export const updateTodo = createAsyncThunk("UPDATE/TODO", async (formData) => {
    try {
      return await update(formData);
    } catch (error) {
      console.log(error);
    }
  });
  


  // remove Todo
export const removeTodo = createAsyncThunk("REMOVE/TODO", async (id) => {
    try {
      return await deleteTodo(id);
    } catch (error) {
      console.log(error);
    }
  });
  
