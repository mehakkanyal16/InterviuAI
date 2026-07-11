'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { getUserStats } from '@/app/actions/interview';
import { BarChart3, MessageSquareText, Star, CalendarClock } from 'lucide-react';

function StatTile({ icon: Icon, label, value }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-md p-5 flex items-center gap-4">
      <div className="p-3 rounded-lg bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
}

function formatDate(dateStr) {
  if (!dateStr) return null;
  const [day, month, year] = dateStr.split('-');
  if (!day || !month || !year) return dateStr;
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  if (Number.isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
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
      <StatTile icon={BarChart3} label="Total interviews" value={stats.totalInterviews} />
      <StatTile icon={MessageSquareText} label="Questions practiced" value={stats.questionsAnswered} />
      <StatTile
        icon={Star}
        label="Average score"
        value={stats.averageScore != null ? `${stats.averageScore}/10` : '—'}
      />
      <StatTile
        icon={CalendarClock}
        label="Last practiced"
        value={formatDate(stats.lastPracticed) ?? 'Not yet'}
      />
    </div>
  );
}

export default DashboardStats;
