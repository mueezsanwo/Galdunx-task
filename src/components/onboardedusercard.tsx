import { SlidersHorizontal, User } from 'lucide-react';

const users = [
  {
    name: 'Samson Dave',
    wallet: 'Ox235e486***',
    category: 'Web3',
    task: 'Reclaim Protocol',
    status: 'Pending',
    date: '10-12-30',
  },
  {
    name: 'Samson Dave',
    wallet: 'Ox235e486***',
    category: 'Web3',
    task: 'Reclaim Protocol',
    status: 'Pending',
    date: '10-12-30',
  },
  {
    name: 'Samson Dave',
    wallet: 'Ox235e486***',
    category: 'Web3',
    task: 'Reclaim Protocol',
    status: 'Pending',
    date: '10-12-30',
  },
];

export default function OnboardedUsersCard() {
  return (
    <div className="w-full max-w-[789px] h-auto max-h-[500px] rounded-[30px] border border-white/15 bg-transparent p-4 flex flex-col justify-between text-white/70 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[13px] font-medium leading-[100%]">Onboarded Users</h2>
        <SlidersHorizontal className="text-white opacity-80" size={20} />
      </div>

      {/* Table Headings - Large Screens */}
      <div className="hidden lg:flex justify-between text-[11px] text-white/50 font-normal mb-2 px-5 pr-8">
        <div>Name</div>
        <div>Wallet</div>
        <div>Category</div>
        <div>Task</div>
        <div>Status</div>
        <div>Date</div>
      </div>

      {/* Table Headings - Small Screens */}
      <div className="flex lg:hidden justify-between text-[11px] text-white/50 font-normal mb-2 px-3">
        <div>Name</div>
        <div>Wallet</div>
        <div>Status</div>
      </div>

      {/* User rows */}
      <div className="flex flex-col gap-2 overflow-y-auto">
        {users.map((user, index) => (
          <div
            key={index}
            className="w-full rounded-full border border-white/15 bg-[#1A1A1A] flex items-center px-4 font-normal text-white/70 text-[13px] h-[45px]"
          >
            {/* Large screen full row */}
            <div className="hidden lg:grid grid-cols-[1.4fr_1.3fr_1.3fr_1.3fr_1.3fr_0.6fr] items-center w-full">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 rounded-full bg-white" />
                <span>{user.name}</span>
              </div>
              <div className="mr-1">{user.wallet}</div>
              <div className="ml-2">{user.category}</div>
              <div>{user.task}</div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 ml-5 rounded-full bg-green-500" />
              </div>
              <div>{user.date}</div>
            </div>

            
            <div className="flex lg:hidden justify-between w-full items-center px-1">
              <div className="flex items-center gap-1">
                
                <span className="text-[10px]">{user.name}</span>
              </div>
              <span className="text-[10px]">{user.wallet}</span>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
