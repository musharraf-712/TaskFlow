
function AllTask() {



  return (
    <div className="px-15 py-3">
      <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-800">
        
        {/* We use grid-cols-[1fr_1fr_auto] to squeeze the status column to the right */}
        <div className="grid grid-cols-[1fr_1fr_auto] bg-gray-800 text-gray-400 text-xs uppercase tracking-wider font-bold px-30 py-4">
          <div>Employee</div>
          <div>Task</div>
          <div className="text-right">Status</div>
        </div>

        {/* Scrollable area */}
        <div className="max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700">
          {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
            <div 
              key={i} 
              className="grid grid-cols-[1fr_1fr_auto] px-30 py-3 text-white border-t border-gray-800 hover:bg-gray-800/40 transition-colors items-center"
            >
              <span className="text-sm font-medium">Musharraf</span>
              <span className="text-sm text-gray-400 truncate pr-4">Make a UI Design</span>
              
              {/* This div now sits tight against the right edge */}
              <div className="flex justify-end">
                <span className="text-[11px] font-bold px-3 py-1 rounded-md bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                  Pending
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default AllTask;
