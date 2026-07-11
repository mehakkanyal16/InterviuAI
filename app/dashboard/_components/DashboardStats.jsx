'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { getUserStats } from '@/app/actions/interview';
import { formatStoredDate } from '@/lib/utils';
import { BarChart3, MessageSquareText, Star, CalendarClock } from 'lucide-react';

const ACCENTS = {
  indigo: 'border-l-indigo-500 bg-indigo-50 text-indigo-600',
  purple: 'border-l-purple-500 bg-purple-50 text-purple-600',
  amber: 'border-l-amber-500 bg-amber-50 text-amber-600',
  blue: 'border-l-blue-500 bg-blue-50 text-blue-600',
};

function StatTile({ icon: Icon, label, value, accent = 'indigo' }) {
  const [borderClass, bgClass, textClass] = ACCENTS[accent].split(' ');
  return (
    <div className={`bg-white/90 backdrop-blur-sm border border-gray-200/50 border-l-4 ${borderClass} rounded-xl shadow-md p-5 flex items-center gap-4 transition-shadow hover:shadow-lg`}>
      <div className={`p-3 rounded-lg ${bgClass} ${textClass}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
}

function DashboardStats() {
  const { user } = useUser();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (user) {
      getUserStats().then(setStats).catch(() => setStats(null));
    }
  }, [user]);

  if (!stats) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-[84px] w-full bg-gray-200 animate-pulse rounded-xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatTile icon={BarChart3} label="Total interviews" value={stats.totalInterviews} accent="indigo" />
      <StatTile icon={MessageSquareText} label="Questions practiced" value={stats.questionsAnswered} accent="purple" />
      <StatTile
        icon={Star}
        label="Average score"
        value={stats.averageScore != null ? `${stats.averageScore}/10` : '—'}
        accent="amber"
      />
      <StatTile
        icon={CalendarClock}
        label="Last practiced"
        value={formatStoredDate(stats.lastPracticed) ?? 'Not yet'}
        accent="blue"
      />
    </div>
  );
}

export default DashboardStats;
