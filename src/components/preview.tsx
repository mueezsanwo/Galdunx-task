'use client'

import React from 'react'
import { User } from 'lucide-react'

const Preview: React.FC = () => {
  return (
    <div className="w-full max-w-[350px]  border border-white/15 rounded-[10px] p-4 bg-white/5">
      <h2 className="text-white text-[18px] leading-[100%] tracking-[0] font-medium mt-3">
        Token Preview
      </h2>

      {/* Outer Card */}
      <div className="w-full mt-8 border border-white/15 rounded-[15px] p-4 bg-[#0A0A0A]">
        {/* User Info */}
        <div className="flex items-center gap-3 mb-4">
          {/* Image */}
          <div className="w-11 h-11 flex items-center justify-center rounded-full bg-white">
            <User className="w-6 h-6 text-black" />
          </div>

          <div>
            <h3 className="text-white text-[16px] font-semibold">Linkdin</h3>
            <div className="text-white/50 mt-2 flex flex-wrap gap-2">
              <span className="bg-black border border-white/15 text-[10px] px-2 py-0.5 rounded">
                socials x
              </span>
              <span className="bg-black border border-white/15 text-[10px] px-2 py-0.5 rounded">
                owners x
              </span>
            </div>
          </div>
        </div>

        {/* Grid Card */}
        <div className="w-full border border-white/15 rounded-[10px] px-2 py-2 flex flex-col justify-between">
          {/* Top Row */}
          <div className="flex flex-wrap">
            <div className="flex flex-col gap-2 flex-1 text-white text-xs text-center p-3 border-r border-white/15">
              <span className="text-white/60 font-normal leading-[100%]">Points</span>
              <span className="text-sm font-medium">+10</span>
            </div>
            <div className="flex flex-col gap-2 flex-1 text-white text-xs text-center p-3">
              <span className="text-white/60 font-normal leading-[100%]">Status</span>
              <span className="text-sm font-medium">Active</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-white/15 my-1" />

          {/* Bottom Row */}
          <div className="flex flex-wrap">
            <div className="flex flex-col gap-2 flex-1 text-white text-xs text-center p-3 border-r border-white/15">
              <span className="text-white/60 font-normal leading-[100%]">Participants</span>
              <span className="text-sm font-medium">+10</span>
            </div>
            <div className="flex flex-col gap-2 flex-1 text-white text-xs text-center p-3">
              <span className="text-white/60 font-normal leading-[100%]">Exp.</span>
              <span className="text-sm font-medium">May 03, 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview
