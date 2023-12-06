import React, { useState } from 'react';
import logo from './images/todo-trans.png';
import { useDispatch } from 'react-redux';
import { addTodo } from './features/todolist/TodoSlices.ts';

const TodoForm = () => {

    const dispatch = useDispatch();

    const [title,setTitle] = useState<String>('');
    const [description,setDescription] = useState<String>('');

    const [tooltip,showTooltip] = useState<Boolean>(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(title===''&&description===''){
            alert("Enter all values");
            return;
        }
        console.log("Submitting");

        console.log(Date().toLocaleString());
        

        const newTodo = {
          title:title,
          description:description,
          timeline:Date().toLocaleString()
        }

        dispatch(addTodo(newTodo));
        trigerToolTip(true,100);
        trigerToolTip(false,1000);
    }

    const trigerToolTip = async(e,time) =>{
        await setTimeout(()=>{showTooltip(e);},time)
    }

    console.log(tooltip);
    


  return (
    <div>
      <div className="flex justify-center mt-20">
        <section className="w-96 border p-14 bg-slate-800 rounded-tr-3xl rounded-bl-3xl border-slate-500 my-shadow">
          <div className="flex justify-center">
            <img className="w-10" src={logo} alt="" />
            <p className="font-bold text-white text-3xl">Add your Todo</p>
          </div>
          <div className="mt-10 text-white">
              <div className="flex flex-col my-3">
                <label className="text-lg font-bold" htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  className=" h-8 outline-none border bg-slate-900 border-slate-500 rounded-lg px-3"
                />
              </div>
              <div className="flex flex-col my-10">
                <label className="text-lg font-bold" htmlFor="desc">
                  Description
                </label>
                <input
                  type="text"
                  name="desc"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  className=" h-8 outline-none border bg-slate-900 border-slate-500 rounded-lg px-3"
                />
              </div>
              <button
                type='submit'
                onClick={handleSubmit}
                className=" text-white font-bold bg-slate-400 rounded-full w-full py-2 mt-3 hover:bg-slate-500
                                            shadow-blue-600 shadow-2xl drop-shadow-2xl"
              >
                Add Todo
              </button>
          </div>
        </section>
      </div>
    
    {tooltip===true && 
      <div className="fixed top-80 right-0 pr-20 mt-10">
        <section>
          <div className="text-white overflow-auto">
            <p className=" border rounded-md h-20 px-10 flex items-center w-fit">
              <span className="text-3xl px-2">
                <ion-icon name="checkmark-done-circle-outline"></ion-icon>
              </span>
              Todo Added Successfully
            </p>
          </div>
        </section>
      </div>
    }

    </div>
  );
}

export default TodoForm