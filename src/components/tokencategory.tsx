import React from 'react'

interface CategoryCardProps {
  title: string
  subtitle: string
  filledDot?: boolean
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, subtitle, filledDot = false }) => {
  return (
    <div className="relative w-full h-[120px] opacity-90 border border-white/15 rounded-[10px] p-6 flex flex-col justify-end bg-[#0A0A0A]">
      {/* Dot */}
      <div
        className={`absolute top-4 right-4 w-3 h-3 rounded-full ${
          filledDot ? 'bg-white' : 'border border-white'
        }`}
      />
      
      <h3 className="text-white font-normal text-[13px] leading-[100%] tracking-[0] mb-1">{title}</h3>
      <p className="text-white/60 font-normal text-[13px] leading-[100%] tracking-[0] mt-2">{subtitle}</p>
    </div>
  )
}

const TokenCategory: React.FC = () => {
  return (
    <div className="w-full max-w-[691px] border border-white/15 rounded-[10px] bg-black p-4">
      <div className="flex flex-col h-full">
        <h2 className="text-white text-[16px] leading-[100%] tracking-[0] font-medium mt-3 ml-2 md:ml-8">
          Token Category
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <CategoryCard
            title="Web3"
            subtitle="Web3 standard for crypto"
            filledDot={true}
          />
          <CategoryCard
            title="Web3"
            subtitle="Web3 standard for crypto"
            filledDot={false}
          />
          <CategoryCard
            title="Web3"
            subtitle="Custom standard for crypto"
            filledDot={false}
          />
        </div>
      </div>
    </div>
  )
}

export default TokenCategory
