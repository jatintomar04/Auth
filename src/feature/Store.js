import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/todosclice"



const store = configureStore({
    reducer: {
      todos : todoReducer,
    }
})




export default store
