function TaskList() {
  return (
    <div className="p-6">
      
      <div className="flex gap-4 overflow-x-auto overflow-y-visible py-2">
        
        {[1,2,3,4,5,6,7].map((_, i) => (
            <div
  key={i}
 className="w-[160px] sm:w-[170px] md:w-[310px] h-[220px] bg-gray-800 p-4 rounded-xl shadow-md flex-shrink-0 hover:scale-[1.02] transition flex flex-col gap-2"
>
  {/* Top Row */}
  <div className="flex justify-between items-center">
    <p className="text-xs px-2 py-1 bg-red-500 text-white rounded-sm">
      High
    </p>
    <p className="text-xs text-gray-200">20 Feb 2026</p>
  </div>

  {/* Content */}
  <div className="pt-2">
    <h3 className="text-lg font-semibold text-white pb-1">Title</h3>
    <p className="text-gray-300 text-xs mt-1 line-clamp-4">
      Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
  </div>
</div>
         ))}

      </div>

    </div>
  );
}

export default TaskList;