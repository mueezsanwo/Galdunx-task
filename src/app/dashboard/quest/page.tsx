'use client'

import React from 'react'
import Preview from '@/components/preview'
import TokenCategory from '@/components/tokencategory'
import TaskDetails from '@/components/taskdetails'
import MediaCard from '@/components/mediacard'

const QuestPage: React.FC = () => {
  return (
    <div className="w-full max-w-[1440px] px-4 py-8 mx-auto flex flex-col xl:flex-row flex-col-below-xl gap-9">
      {/* Large Card Section */}
      <div className="w-full xl:w-[741px] border border-white/15 rounded-[10px] p-4 bg-white/2 flex flex-col">
        <h2 className="text-white text-lg font-semibold mt-2">Create Quest</h2>
        <p className="text-white/70 font-normal text-[13px] leading-[100%] tracking-[0] mt-3">
          Add/create quest in different category for user point and verification.
        </p>

        {/* Inner 3 cards */}
        <div className="flex flex-col gap-4 mt-8">
          <TokenCategory />
          <TaskDetails />
          <MediaCard />
        </div>
      </div>

      {/* Side Preview Card */}
      <div className="w-full xl:w-[350px]">
        <Preview />
      </div>
    </div>
  )
}

export default QuestPage
