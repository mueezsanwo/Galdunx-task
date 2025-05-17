'use client'

import React from 'react'
import {
  BarChart,
  Bar,
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
const TUBE_WIDTH = 12
const TUBE_HEIGHT = 105
const RADIUS = 10

const TubeBar = (props: any) => {
  const { x, y, width, height, value } = props

  const bottomY = y + height
  const tubeTopY = bottomY - TUBE_HEIGHT
  const fillHeight = (value / MAX_USERS) * TUBE_HEIGHT
  const fillTopY = bottomY - fillHeight
  const radius = width / 2

  const tubePath = `
    M ${x},${tubeTopY + radius}
    a ${radius},${radius} 0 0 1 ${width},0
    v ${TUBE_HEIGHT - 2 * radius}
    a ${radius},${radius} 0 0 1 -${width},0
    Z
  `

  const fillPath = (() => {
    if (fillHeight <= 0) return ''
    if (fillHeight >= TUBE_HEIGHT) return tubePath

    if (fillHeight <= radius) {
      return `
        M ${x},${bottomY - fillHeight}
        a ${radius},${fillHeight} 0 0 1 ${width},0
        Z
      `
    }

    if (fillHeight >= TUBE_HEIGHT - radius) {
      const remaining = TUBE_HEIGHT - fillHeight
      return `
        M ${x},${tubeTopY + remaining}
        a ${radius},${remaining} 0 0 1 ${width},0
        L ${x + width},${bottomY}
        L ${x},${bottomY}
        Z
      `
    }

    return `
      M ${x},${fillTopY + radius}
      a ${radius},${radius} 0 0 1 ${width},0
      v ${fillHeight - 2 * radius}
      a ${radius},${radius} 0 0 1 -${width},0
      Z
    `
  })()

  return (
    <g>
      <path d={tubePath} stroke="rgba(255, 255, 255, 0.15)" strokeWidth={2} fill="transparent" />
      <path d={fillPath} fill="#ffffff" />
    </g>
  )
}

const UserGraph = () => {
  return (
    <div className="w-full max-w-[566px] max-h-[263px] rounded-[30px] border border-white/15 p-4 bg-transparent text-white/70 flex flex-col">
      <h2 className="text-[13px] font-medium leading-[100%] mt-1 mb-2">Onboarded Users</h2>

      
      <div className="mt-4 h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 50 }}
            barCategoryGap="40%"
          >
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
            <Bar
              dataKey="users"
              shape={<TubeBar />}
              isAnimationActive={false}
              barSize={TUBE_WIDTH}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default UserGraph
