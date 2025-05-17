'use client'

import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Wallet Verification', value: 66, color: '#ffffff' },
  { name: 'Email Verification', value: 22, color: '#FFFFFF99' },
  { name: 'KYC Done', value: 7, color: '#FFFFFF66' },
]

const ProgressCard = () => {
  return (
    <div className="w-full max-w-[322px] max-h-[301px] border border-white/15 rounded-[30px] p-5 flex flex-col justify-between text-white/70 bg-transparent">
      {/* Top texts */}
      <div>
        <div className="text-[13px] font-medium leading-[100%]">Progress Bar</div>
        <div className="text-[35px] font-bold leading-none mt-5">5.7</div>
      </div>

      <div className="flex justify-between items-end mt-5 flex-grow gap-4">
        {/* Left side */}
        <div className="flex flex-col gap-2 mb-2">
          {data.map(({ value, name, color }) => (
            <div key={name} className="flex items-center gap-2">
              {/* Pill */}
              <div
                className="w-[21px] h-[10px] rounded-full flex items-center justify-center text-[8px] font-semibold select-none flex-shrink-0"
                style={{ backgroundColor: color }}
              ></div>
              <span className="text-[12px]">{value}%{name}</span>
            </div>
          ))}
        </div>

        {/* Right side: Pie Chart */}
        <div className="w-[100px] h-[100px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={45}
                paddingAngle={2}
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default ProgressCard
