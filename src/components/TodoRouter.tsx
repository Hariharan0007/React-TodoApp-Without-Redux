import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import TodoForm from './TodoForm.tsx';
import TodoNav from './TodoNav.tsx';
import TodoHeader from './TodoHeader.tsx';
import TodoList from './TodoList.tsx';

const TodoRouter = () => {
  return (
    <div>
        <Router>
            <TodoHeader/>
            <TodoNav/>
            <Routes>
                <Route path='/' element={<TodoForm/>}></Route>
                <Route path='/view' element={<TodoList/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default TodoRouter