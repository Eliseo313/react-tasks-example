import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {
   const [tittle, setTittle] = useState('')
   const [description, setDescription] = useState('')

   const { createTask } = useContext(TaskContext)

   const handleSubmit = (e) => {
      e.preventDefault()
      createTask({
         tittle,
         description,
      })
      setDescription('')
      setTittle('')
   }

   return (
      <div className='max-w-md mx-auto'>
         <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4 rounded-md'>
            <h1 className='text-2xl font-bold text-white mb-3'>
               Crea tu tarea
            </h1>
            <input
               type='text'
               placeholder='escribe tu tarea'
               onChange={(e) => setTittle(e.target.value)}
               value={tittle}
               autoFocus
               className='bg-slate-300 p-3 w-full mb-2'
            />
            <textarea
               placeholder='descripcion de la tarea'
               onChange={(e) => setDescription(e.target.value)}
               value={description}
               className='bg-slate-300 p-3 w-full mb-2'
            ></textarea>
            <button className='bg-lime-700 px-3 py-1 text-white rounded-md hover:bg-lime-600'>
               Guardar
            </button>
         </form>
      </div>
   )
}

export default TaskForm
