'use client'

import { ArrowUp } from 'lucide-react';
import UserGraph from '@/components/usersgraph';
import UsersActivitiesGraph from '@/components/usersactivitiesgraph';
import ProgressCard from '@/components/progresscard';
import OnboardedUsersCard from '@/components/onboardedusercard';

const stats = [
  {
    title: 'Users',
    value: '33.6K',
    change: '15.3%',
    showArrow: true,
  },
  {
    title: 'Total Tasks',
    value: '345',
    change: '15.3%',
    showArrow: true,
  },
  {
    title: 'Total Submissions',
    value: '40K',
    change: '15.3%',
    showArrow: true,
  },
  {
    title: 'Approval Rate',
    value: '4.2K%',
    change: '/week',
    showArrow: false,
  },
  {
    title: 'Rejection Rate',
    value: '1.7K%',
    change: '/week',
    showArrow: false,
  },
];

export default function DashboardPage() {
  return (
    <div className="p-4 sm:p-6 w-full max-w-[1440px] mx-auto">

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="w-full bg-white/5 border border-white/15 backdrop-blur-md rounded-[30px] p-4 text-white flex flex-col justify-between h-[110px]"
          >
            <div className="font-medium text-[13px] text-white/70">{stat.title}</div>

            <div className="flex items-end justify-between">
              <div className="font-semibold text-[30px] md:text-[20px] lg:text-[30px] leading-[100%]">{stat.value}</div>
              {stat.showArrow ? (
                <div className="flex items-center text-green-500 font-medium text-[13px]">
                  {stat.change}
                  <ArrowUp className="w-4 h-4 mr-1" />
                </div>
              ) : (
                <div className="text-sm text-white/50">{stat.change}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Graphs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        <UserGraph />
        <UsersActivitiesGraph />
      </div>

      {/* Bottom Cards */}
      <div className="flex flex-col lg:flex-row gap-6 mt-10 w-full">
        <ProgressCard />
        <OnboardedUsersCard />
      </div>
    </div>
  );
}
