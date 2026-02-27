function TaskListNo() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-6">
      
      <div className="bg-gray-800 p-5 rounded-xl shadow-md ">
        <h1 className="text-2xl font-bold text-blue-400">1</h1>
        <h2 className="text-gray-300 mt-1">New Task</h2>
      </div>

      <div className="bg-gray-800 p-5 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-green-400">5</h1>
        <h2 className="text-gray-300 mt-1">Completed Task</h2>
      </div>

      <div className="bg-gray-800 p-5 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-yellow-400">3</h1>
        <h2 className="text-gray-300 mt-1">Accepted Task</h2>
      </div>

      <div className="bg-gray-800 p-5 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-red-400">0</h1>
        <h2 className="text-gray-300 mt-1">Failed</h2>
      </div>

    </div>
  );
}

export default TaskListNo;