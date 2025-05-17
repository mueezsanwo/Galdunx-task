import React from 'react';

interface Player {
  id: number;
  name: string;
  image: string;
  questsCompleted: string;
  kycs: string;
  playerId: string;
  rankLabel: string;
  rankIcon: string;
  position: string;
}

const players: Player[] = [
  {
    id: 1,
    name: 'Samuel.57',
    image: '/assets/profile1.png',
    questsCompleted: '1.3k / 3.5k',
    kycs: '53%',
    playerId: '0x5672e382....',
    rankLabel: 'Challenger',
    rankIcon: '/assets/game2.png',
    position: '4th',
  },
  {
    id: 2,
    name: 'Saint jones',
    image: '/assets/profile2.png',
    questsCompleted: '1.1k / 3.5k',
    kycs: '52%',
    playerId: '0x0982e382....',
    rankLabel: 'Challenger',
    rankIcon: '/assets/game2.png',
    position: '5th',
  },
  {
    id: 3,
    name: 'Captain Man',
    image: '/assets/picture3.png',
    questsCompleted: '1.1k / 3.5k',
    kycs: '50%',
    playerId: '0x7456e382....',
    rankLabel: 'Challenger',
    rankIcon: '/assets/game2.png',
    position: '7th',
  },
  {
    id: 4,
    name: 'Josh Evans',
    image: '/assets/picture4.png',
    questsCompleted: '1.1k / 3.5k',
    kycs: '50%',
    playerId: '0x113e382....',
    rankLabel: 'Challenger',
    rankIcon: '/assets/game2.png',
    position: '8th',
  },
  {
    id: 5,
    name: 'Caramel Eve',
    image: '/assets/picture4.png',
    questsCompleted: '1.1k / 3.5k',
    kycs: '48%',
    playerId: '0x0572e382....',
    rankLabel: 'Challenger',
    rankIcon: '/assets/game4.png',
    position: '9th',
  },
  {
    id: 6,
    name: 'Mikasa',
    image: '/assets/picture5.png',
    questsCompleted: '1.1k / 3.5k',
    kycs: '45%',
    playerId: '0x9992e382....',
    rankLabel: 'Challenger',
    rankIcon: '/assets/game4.png',
    position: '10th',
  },
  {
    id: 7,
    name: 'taiwo',
    image: '/assets/picture6.png',
    questsCompleted: '1.1k / 3.5k',
    kycs: '435',
    playerId: '0x3542e382....',
    rankLabel: 'Challenger',
    rankIcon: '/assets/game4.png',
    position: '11th',
  },
  {
    id: 8,
    name: 'Jesus_rage',
    image: '/assets/picture7.png',
    questsCompleted: '1.1k / 3.5k',
    kycs: '42%',
    playerId: '0x5098i382....',
    rankLabel: 'Challenger',
    rankIcon: '/assets/game3.png',
    position: '12th',
  },
];

const LeaderboardTable = () => {
  return (
    <div className="border w-full max-w-[1000px] bg-[#0a0a0a] border-white/15 rounded-lg overflow-hidden">
      <table className="w-full">
        {/* Table Head */}
        <thead className="bg-white/5 text-[12px] text-white/50 font-normal">
          <tr>
            <th className="text-left px-4 py-3">Position</th>
            <th className="text-left px-4 py-3">Player Name</th>
            <th className="text-left px-4 py-3 hidden md:table-cell">Quests Completed</th>
            <th className="text-left px-4 py-3 hidden md:table-cell">KYCs</th>
            <th className="text-left px-4 py-3 hidden md:table-cell">Player ID</th>
            <th className="text-left px-4 py-3">Rank</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-white/10 text-[11px] text-white font-normal">
          {players.map((player) => (
            <tr key={player.id} className="hover:bg-white/5 transition">
              <td className="px-4 py-3">{player.position}</td>

              <td className="px-4 py-3 flex items-center gap-2">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-6 h-6 rounded-full object-cover"
                />
                {player.name}
              </td>

              <td className="px-4 py-3 hidden md:table-cell">
                {player.questsCompleted}
              </td>
              <td className="px-4 py-3 hidden md:table-cell">{player.kycs}</td>
              <td className="px-4 py-3 hidden md:table-cell">{player.playerId}</td>

              <td className="px-4 py-3">
                <div className="flex items-center gap-1">
                  <img
                    src={player.rankIcon}
                    alt="rank"
                    className="w-4 h-4"
                  />
                  {player.rankLabel}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
