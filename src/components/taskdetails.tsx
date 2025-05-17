export default function TaskDetails() {
  return (
    <div className="w-full max-w-[691px] min-h-[235px] bg-black border border-white/15 rounded-[10px] p-4 space-y-4">
      <h2 className="text-white text-[16px] leading-[100%] tracking-[0] font-medium mt-3 ml-2 md:ml-8">
        Task Details
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        
        <div className="flex flex-col w-full md:w-1/2 mt-1">
          <label className="text-white/50 font-medium text-[13px] mt-2">Name</label>
          <input
            type="text"
            className="bg-transparent border border-white/15 rounded px-2 py-1 mt-1 text-white text-sm w-full"
          />

          
          <div className="flex flex-col sm:flex-row gap-4 mt-3">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-white/50 font-medium text-[13px] mt-2">Points</label>
              <input
                type="number"
                className="bg-transparent border border-white/15 rounded px-2 py-1 mt-1 text-white text-sm w-full"
              />
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-white/50 font-medium text-[13px] mt-2">Status</label>
              <input
                type="text"
                className="bg-transparent border border-white/15 rounded px-2 py-1 mt-1 text-white text-sm w-full"
              />
            </div>
          </div>
        </div>

        
        <div className="flex flex-col w-full md:w-1/2 mt-5 md:mt-1">
            <span className="text-white/50 font-medium text-[13px] mt-2">Tags</span>
          <div className="bg-transparent mt-1 border border-white/15 rounded px-2 py-1 text-white/70 min-h-[30px] flex items-center flex-wrap gap-1">
            <span className="bg-black border-white/15 border text-white/50 text-[10px] px-1 rounded">
              socials x
            </span>
            <span className="bg-black border border-white/15 text-white/50 text-[10px] px-2 rounded">
              owners x
            </span>
          </div>

          
          <div className="flex flex-col mt-5">
            <label className="text-white/50 font-medium text-[13px] mb-1">Exp Date</label>
            <input
              type="text"
              className="bg-transparent border border-white/15 rounded px-2 py-1 text-white text-sm w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
