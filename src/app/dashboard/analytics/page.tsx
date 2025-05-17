'use client'
import { Trophy } from 'lucide-react'
import LeaderboardTable from '@/components/leaderboardtable'

const trophyColors = ['#FFD700', '#C0C0C0', '#CD7F32']

const StatBar = ({
  color,
  count,
}: {
  color: string
  count: number
}) => (
  <div className="flex gap-1 mt-3">
    {Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="h-[1px] w-4"
        style={{ backgroundColor: color }}
      />
    ))}
  </div>
)

const ProfileCard = ({
  
  name,
  profileImg,
  trophyColor,
  questsCompleted,
  kys,
  position,
 
}: {
  rank: string
  name: string
  profileImg: string
  trophyColor: string
  questsCompleted: string | number
  kys: number
  position: string
  winRate: number
  kda: number
}) => (
  <div className="border border-white/15 rounded-lg bg-[#0A0A0A] p-4 w-full max-w-xs md:max-w-sm lg:w-[320px] h-auto">
    <div className="flex items-center gap-4">
      <img
        src={profileImg}
        alt={name}
        className="w-8 h-8 rounded-full object-cover"
      />
      <div className="flex justify-between flex-1">
        <div className="text-white text-[16px] font-medium">{name}</div>
        <Trophy size={24} color={trophyColor} />
      </div>
    </div>

    <div className="flex items-center gap-2 mt-5">
      <img src="/assets/game.png" alt="Grandmaster" className="w-4 h-4" />
      <p className="text-white font-light text-[13px]">Grandmaster</p>
    </div>

    <div className="mt-7 flex justify-between gap-5">
      <div className="flex flex-col w-1/3">
        <div className="text-white/60 text-[10px]">Quests Completed</div>
        <div className="text-white text-xs font-medium">{questsCompleted}</div>
        <StatBar count={5} color="#ffff00" />
      </div>
      <div className="flex flex-col w-1/3">
        <div className="text-white/60 text-[10px]">KYC</div>
        <div className="text-white text-xs font-medium">{kys}%</div>
        <StatBar count={3} color="#0707fb" />
      </div>
      <div className="flex flex-col w-1/3">
        <div className="text-white/60 text-[10px]">Position</div>
        <div className="text-white text-xs font-medium">{position}</div>
        <StatBar count={2} color="#04b004" />
      </div>
    </div>
  </div>
)

export default function AnalyticsPage() {
  return (
    <div className="p-4 md:p-8 text-white font-inter bg-[#0A0A0A] min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-start md:items-center gap-4 mb-10">
          {/* Right side stats toggle */}
        <div className="w-full md:w-[221px] h-[40px] bg-[#0A0A0A] border border-white/8 rounded-[7px]  flex items-center justify-between gap-2">
          <div className="flex-1 h-full bg-[#191919] rounded-[7px] flex items-center justify-center">
            <span className="text-white/70 text-xs">Rank</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <span className="text-white/70 text-xs">Win Rate</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <span className="text-white/70 text-xs">KDA</span>
          </div>
        </div>
        {/* Left side */}
        <div>
          <div className="text-[13px] font-medium mb-1 flex items-center gap-1">
            <span>Leaderboard resets in:</span>
            <div className="flex items-center gap-[2px] ml-2">
              <span className="px-1 py-[2px] rounded bg-black text-white">1</span>
              <span className="px-1 py-[2px] rounded bg-black text-white">0</span>
              <span className="px-1 py-[2px] text-white">:</span>
              <span className="px-1 py-[2px] rounded bg-black text-white">2</span>
              <span className="px-1 py-[2px] rounded bg-black text-white">3</span>
            </div>
          </div>
        </div>

      </div>

      {/* Main Section */}
      <div className="flex flex-col xl:flex-row gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-8 w-full xl:w-3/4">
          {/* Top Profile Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ProfileCard
              rank="1"
              name="Jimmy Boston"
              profileImg="/assets/image1.png"
              trophyColor={trophyColors[0]}
              questsCompleted={'1.3k/3.5k'}
              kys={65}
              position="1st"
              winRate={65}
              kda={3.5}
            />
            <ProfileCard
              rank="2"
              name="Degen_lord"
              profileImg="/assets/image2.png"
              trophyColor={trophyColors[1]}
              questsCompleted={'1.2k/3.5k'}
              kys={65}
              position="2nd"
              winRate={60}
              kda={3.0}
            />
            <ProfileCard
              rank="3"
              name="Adrian"
              profileImg="/assets/image3.png"
              trophyColor={trophyColors[2]}
              questsCompleted={'1.1k/3.5k'}
              kys={65}
              position="3rd"
              winRate={58}
              kda={2.8}
            />
          </div>

          {/* Leaderboard Table */}
          <div>
            <LeaderboardTable />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full xl:w-1/4 border border-white/15 rounded-2xl p-6 bg-[#0A0A0A] h-auto min-h-[300px]">
          
        </div>
      </div>
    </div>
  )
}
