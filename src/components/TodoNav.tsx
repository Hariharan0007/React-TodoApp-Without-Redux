import React from 'react';
import { useNavigate } from 'react-router-dom';


const TodoNav = () => {

  const nav = useNavigate();

  return (
    <div className="bg-slate-800" >
        <section className="text-white flex w-full py-2">
            <div className="flex justify-start items-center text-3xl">
                <button onClick={()=>nav('/view')} className="rounded-lg font-semibold bg-black hover:bg-slate-900 hover:font-bold p-2 mx-10
                                   hover:shadow-white hover:shadow-2xl hover:drop-shadow-2xl hover:border">Todays todo</button>
                <button onClick={()=>nav('/')} className="rounded-lg font-semibold bg-black hover:bg-slate-900 hover:font-bold p-2 mx-10
                                  hover:shadow-white hover:shadow-2xl hover:drop-shadow-2xl hover:border">Add Todos</button>
                <button onClick={()=>nav('/view')} className="rounded-lg font-semibold bg-black hover:bg-slate-900 hover:font-bold p-2 mx-10
                                    hover:shadow-white hover:shadow-2xl hover:drop-shadow-2xl hover:border">View All</button>
            </div>
        </section>
    </div>
  )
}

export default TodoNav