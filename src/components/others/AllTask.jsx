
function AllTask({employeesData}) {



  return (
    <div className="px-6 py-4">
  <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 overflow-hidden">

    {/* Header */}
    <div className="grid grid-cols-5 bg-gray-800 text-gray-400 text-xs uppercase font-semibold px-6 py-3">
      <h2>Employee Name</h2>
      <h2 className="text-center">New</h2>
      <h2 className="text-center">Active</h2>
      <h2 className="text-center">Completed</h2>
      <h2 className="text-center">Failed</h2>
    </div>

    {/* Scrollable body */}
    <div className="max-h-[220px] overflow-y-auto">
      {employeesData.map((ele, i) => (
        <div
          key={i}
          className="grid grid-cols-5 px-6 py-3 text-white border-t border-gray-800 hover:bg-gray-800/40 transition-all duration-200 items-center"
        >
          <h3 className="text-sm font-medium">{ele.name}</h3>

          <h3 className="text-sm text-center text-blue-400">
            {ele.taskCounts?.newTask || 0}
          </h3>

          <h3 className="text-sm text-center text-yellow-400">
            {ele.taskCounts?.active || 0}
          </h3>

          <h3 className="text-sm text-center text-green-400">
            {ele.taskCounts?.completed || 0}
          </h3>

          <h3 className="text-sm text-center text-red-400">
            {ele.taskCounts?.failed || 0}
          </h3>
        </div>
      ))}
    </div>

  </div>
</div>
  );
}

export default AllTask;
