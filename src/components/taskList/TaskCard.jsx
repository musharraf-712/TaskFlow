

function TaskCard({task,handleNewTask,handleActiveTask}){
    function handleClick(){
        if(task.newTask){
            handleNewTask(task.title)
        }
        else if(task.active){
            handleActiveTask(task.title)
        }
    }
    return (
 <div
  className={`w-[160px] sm:w-[170px] md:w-[310px] h-[220px] bg-gray-800 p-4 rounded-xl shadow-md flex-shrink-0 flex flex-col gap-2
  ${!(task.failed || task.completed) ? "hover:scale-[1.02] transition-all duration-200 ease-in-out" : "opacity-70"}
`}
>
      <div className="flex justify-between items-center">
     <p className="text-[10px] px-2 py-[2px] bg-red-500/80 text-white rounded-full tracking-wide uppercase">
          {task.category}
        </p>

        <p className="text-xs text-gray-200">
          {task.date}
        </p>
      </div>

   <div className="pt-2 flex flex-col flex-grow">
  <h3 className="text-lg font-semibold text-white pb-1">
    {task.title}
  </h3>

  <p className="text-gray-300 text-xs mt-1 line-clamp-4">
    {task.description}
  </p>

  {/* Status Button */}

  {task.newTask && (
    <button
      onClick={handleClick}
      className="mt-auto w-full bg-blue-500 hover:bg-blue-600 text-white text-xs py-2 rounded-lg transition shadow-md hover:shadow-lg"
    >
      New Task
    </button>
  )}

  {task.active && (
    <button
      onClick={handleClick}
  className="mt-auto w-full bg-yellow-400 hover:bg-yellow-500 text-black text-xs font-medium py-2 rounded-lg transition shadow-md hover:shadow-lg"
    >
      Active
    </button>
  )}

  {task.completed && (
    <div className="mt-auto bg-green-500 text-white text-xs py-1.5 text-center rounded-md">
      Completed
    </div>
  )}

  {task.failed && (
    <div className="mt-auto bg-red-500 text-white text-xs py-1.5 text-center rounded-md">
      Failed
    </div>
  )}
</div>

    </div>
  )
}

export default TaskCard