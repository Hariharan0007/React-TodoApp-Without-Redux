import React from 'react';
import logo from './images/todo-trans.png';

const TodoHeader = () => {
  return (
    <div>
        <header className="text-white py-5">
            <div className="flex justify-center items-center">
                <div className="flex items-center">
                    <img className=" w-48" src={logo} alt="" />
                    <p className="text-7xl font-extrabold px-2 shadow-white shadow-inner">Todo Marker</p>
                </div>
            </div> 
        </header>
    </div>
  )
}

export default TodoHeader