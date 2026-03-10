import { useState } from "react";
import Header from "../others/Header";
import TaskListNo from "../others/TaskListNo";
import TaskList from "../taskList/TaskList";

function EmployeeDashboard({ employee, setUser }) {
  console.log("emoloyee", employee);

  const [empData, setEmpData] = useState(employee);
  function handleNewTask(title) {
    const updatedEmployee = { ...empData };
    updatedEmployee.tasks = empData.tasks.map((task) => {
      if (task.title === title) {
        return {
          ...task,
          newTask: false,
          active: true,
          failed: false,
          completed: false,
        };
      }
      return task;
    });

    updatedEmployee.taskCounts.active += 1;
    if (updatedEmployee.taskCounts.newTask > 0) {
      updatedEmployee.taskCounts.newTask -= 1;
    }

    setEmpData(updatedEmployee);

    const localEmployees = JSON.parse(localStorage.getItem("employees"));
    const updatedLocalEmployees = localEmployees.map((emp) =>
      emp.id === updatedEmployee.id ? updatedEmployee : emp,
    );
    localStorage.setItem("employees", JSON.stringify(updatedLocalEmployees));
  }
  function handleActiveTask(title) {
    const updatedEmployee = { ...empData };
    updatedEmployee.tasks = updatedEmployee.tasks.map(task => {
      if (task.title === title) {
        console.log("task", task);
        return {
          ...task,
          active: false,
          completed: true,
          failed: false,
          newTask: false,
        };
      }
      return task;
    });
    console.log("updatedEmployee handleActiveTask", updatedEmployee);
    if (updatedEmployee.taskCounts.active > 0) {
      updatedEmployee.taskCounts.active -= 1;
    }

    updatedEmployee.taskCounts.completed += 1;
    setEmpData(updatedEmployee);

    const localEmployees = JSON.parse(localStorage.getItem("employees"));
    const updatedLocalEmployees = localEmployees.map(emp =>
      emp.id === updatedEmployee.id ? updatedEmployee : emp,
    );

    localStorage.setItem("employees", JSON.stringify(updatedLocalEmployees));
  }
  return (
    <div >
      <Header employee={empData} setUser={setUser} />
      <TaskListNo employee={empData} />
      <TaskList
        employeeTasks={empData?.tasks}
        handleNewTask={handleNewTask}
        handleActiveTask={handleActiveTask}
      />
    </div>
  );
}
export default EmployeeDashboard;
