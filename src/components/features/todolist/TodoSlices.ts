import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface arr{
    title:String,
    description:String,
    timeline:String
}

export interface listType{
    todolist:Array<arr>
}

const initialState:listType = {
    todolist:[]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action:PayloadAction<arr>)=>{
            console.log(action.payload);
            
            state.todolist = [...state.todolist,action.payload]
        }
    }
})

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
