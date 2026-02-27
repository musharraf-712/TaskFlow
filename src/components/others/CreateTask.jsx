function CreateTask() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="px-15 py-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-lg shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
          
          {/* LEFT SIDE */}
          <div className="space-y-3">
            
            <div>
              <label className="text-sm text-gray-400">Task Title</label>
              <input
                type="text"
                placeholder="Title"
                className="w-full mt-1 px-3 py-2 bg-transparent border border-gray-600 rounded-md text-white outline-none focus:border-gray-400 "
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Date</label>
              <input
                type="date"
                className="w-full mt-1 px-3 py-2 bg-transparent border border-gray-600 rounded-md text-gray-400 outline-none focus:border-gray-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Assign to</label>
              <input
                type="text"
                placeholder="employee name"
                className="w-full mt-1 px-3 py-2 bg-transparent border border-gray-600 rounded-md text-white outline-none focus:border-gray-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Category</label>
              <input
                type="text"
                placeholder="design, dev, etc"
                className="w-full mt-1 px-3 py-2 bg-transparent border border-gray-600 rounded-md text-white outline-none focus:border-gray-400"
              />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-between">
            
            <div>
              <label className="text-sm text-gray-400">Description</label>
              <textarea
                rows="7"
                className="w-full mt-1 px-3 py-2 bg-transparent border border-gray-600 rounded-md text-white outline-none resize-none focus:border-gray-400"
              ></textarea>
            </div>

            <button className="mt-4 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
              Create Task
            </button>

          </div>

        </div>
      </form>
    </div>
  );
}

export default CreateTask;