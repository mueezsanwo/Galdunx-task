import { CloudUpload } from "lucide-react";

export default function MediaCard() {
  return (
    <div className="w-full max-w-[691px] min-h-[235px] bg-black border border-white/15 rounded-[15px] p-4 space-y-4">
      {/* Title */}
      <h2 className="text-white text-[16px] leading-[100%] tracking-[0] font-medium mt-3 ml-2 md:ml-8">
        Media & Description
      </h2>

      {/* Media + Description */}
      <div className="flex flex-col md:flex-row gap-6 mt-6 md:mt-8">
        {/* Media Upload */}
        <div className="flex flex-col  w-full md:w-[310px]">
          <label className="text-white/50 font-medium text-[13px] mb-1">Token Image</label>
          <label
            htmlFor="media-upload"
            className="w-full h-[105px] border border-dashed  border-white/15 rounded bg-transparent text-white flex flex-col items-center justify-center cursor-pointer hover:bg-white/5 transition"
          >
            <CloudUpload className="w-8 h-8 mb-1 text-white" />
            <span className="text-white/50 font-medium text-[13px]">Upload Token Image</span>
            <input id="media-upload" type="file" className="hidden" />
          </label>
        </div>

        {/* Description */}
        <div className="flex flex-col w-full md:w-[310px]">
          <label className="text-white/50 font-medium text-[13px] mb-1">Description</label>
          <textarea
            className="w-full h-[105px] bg-transparent border border-white/15 rounded px-2 py-2 text-white text-sm resize-none"
            placeholder=" "
          />
        </div>
      </div>
    </div>
  );
}
