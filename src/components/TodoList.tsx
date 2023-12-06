import React from 'react';
// import logo from './images/todo-trans.png';
import { useSelector } from 'react-redux';
import type { RootState } from './app/Store';

const TodoList = () => {

    // const [editModal,setEditModal] = useState<Boolean>(false);
    // const [deleteModal,setDeleteModal] = useState<Boolean>(false);

    // const [title,setTitle] = useState<String>('');
    // const [desc,setDesc] = useState<String>('');

    // const handleSubmit = () =>{

    // }

    const todolist = useSelector((store:RootState)=>store.todo.todolist);

    console.log(todolist);

    

  return (
    <div className="fixed no-scrollbar overflow-y-scroll pb-20 view-height">
        <section className="mt-10">
            {todolist.map((list)=>(
                <div className="text-white flex justify-center">
                    <div className="w-2/4 bg-slate-700 rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg border border-white
                                shadow-lg shadow-white mt-8">
                        <p className="flex justify-center font-extrabold text-3xl mt-5">{list.title}</p>
                        <p className="text-lg px-10 my-5">{list.description}</p>
                        <div className="flex justify-end items-center space-x-6 mb-4 pr-5">
                            <p className="text-sm italic font-light">{list.timeline}</p>
                            <button className="hover:bg-yellow-600 rounded-md px-3 py-1 outline text-yellow-500 hover:text-white outline-yellow-500 outline-1 font-semibold" onClick={()=>{setEditModal(true)}}>Edit</button>
                            <button className="hover:bg-red-600 rounded-md px-3 py-1 outline text-red-500 hover:text-white outline-red-500 outline-1 font-semibold">Delete</button>
                        </div>
                    </div>
                </div>       
            ))}       
        </section>

        

    </div>


    

  )
}


export default TodoList