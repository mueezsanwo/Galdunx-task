'use client'

import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { month: 'Jan', users: 100000 },
  { month: 'Feb', users: 300000 },
  { month: 'Mar', users: 200000 },
  { month: 'Apr', users: 300000 },
  { month: 'May', users: 100000 },
  { month: 'Jun', users: 260000 },
  { month: 'Jul', users: 300000 },
  { month: 'Aug', users: 350000 },
  { month: 'Sep', users: 320000 },
  { month: 'Oct', users: 170000 },
  { month: 'Nov', users: 290000 },
  { month: 'Dec', users: 400000 },
]

const MAX_USERS = 400000

const UsersActivitiesGraph = () => {
  return (
    <div className="w-full max-w-[566px] max-h-[263px] rounded-[30px] border border-white/15 p-4 bg-transparent text-white/70 flex flex-col">
      <h2 className="text-[13px] font-medium leading-[100%] mt-1 mb-2">Users Activities</h2>

      
      <div className="mt-12 h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 50 }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1E1E1E" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
              <filter id="wiggle" x="0" y="0" width="200%" height="200%">
                <feTurbulence baseFrequency="0.015" numOctaves="2" result="turb" />
                <feDisplacementMap in="SourceGraphic" in2="turb" scale="6" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>

            <XAxis
              dataKey="month"
              tick={{ fill: 'white', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              dy={20}
            />
            <YAxis
              tickFormatter={(value) => `${value / 1000}k`}
              domain={[0, MAX_USERS]}
              ticks={[0, 100000, 200000, 300000, 400000]}
              interval={0}
              tick={{ fill: 'white', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={40}
            />

            <Line
              type="monotone"
              dataKey="users"
              stroke="url(#lineGradient)"
              strokeWidth={4}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default UsersActivitiesGraph
