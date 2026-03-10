// import ActiveTask from "./ActiveTask";
// import CompleteTask from "./CompleteTask";
// import FailedTask from "./FailedTask";
// import NewTask from "./NewTask";

import TaskCard from "./taskCard";


function TaskList({ employeeTasks,handleNewTask,handleActiveTask }) {
  console.log("TaskList employeesTask", employeeTasks,)

  
  if (!employeeTasks || employeeTasks.length === 0) {
    return <p className="text-white p4">No taskks available</p>;
  }

  return(
    <div className="p-6">
     <div className="flex gap-5 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        {
          
          employeeTasks.map((task)=>(
            <TaskCard
                key ={task.title}
                task={task}
                handleActiveTask ={handleActiveTask}
                handleNewTask={handleNewTask}
            />
          ))
        }
      </div>
    </div>
  )



  // return (
  //   <div className="p-6">
  //     <div className="flex gap-4 overflow-x-auto overflow-y-visible py-2">
  //       {employeeTasks.map((ele) => {
  //         if(ele.active ){
  //           return <ActiveTask key={ele.title} task={ele} handleActiveTask={handleActiveTask}/>
  //         }
  //         else if(ele.newTask){
  //           return <NewTask key={ele.title} task={ele} handleNewTask={handleNewTask}/>
            
  //         }
  //         else if(ele.completed){
  //           return <CompleteTask key={ele.title} task={ele} />
  //         }
  //         else if(ele.failed){
  //           return <FailedTask key={ele.title} task={ele} />
  //         }
  //       })}
  //     </div>
  //   </div>

  // );
}

export default TaskList;
