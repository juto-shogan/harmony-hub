import React from 'react';
import { BarChart3, TrendingUp, Users, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnalyticsData } from '../../types';

interface AnalyticsOverviewProps {
  data: AnalyticsData[];
}

const AnalyticsOverview: React.FC<AnalyticsOverviewProps> = ({ data }) => {
  // Calculate total metrics across all platforms
  const totalFollowers = data.reduce((sum, item) => sum + item.followers, 0);
  const avgEngagement = data.reduce((sum, item) => sum + item.engagement, 0) / data.length;
  const avgGrowthRate = data.reduce((sum, item) => sum + item.growthRate, 0) / data.length;
  const totalPosts = data.reduce((sum, item) => sum + item.postsThisWeek, 0);

  const metrics = [
    {
      title: 'Total Followers',
      value: totalFollowers.toLocaleString(),
      icon: <Users className="text-primary-500" />,
      change: '+3.2%',
      trend: 'up',
    },
    {
      title: 'Avg. Engagement',
      value: avgEngagement.toFixed(1) + '%',
      icon: <MessageSquare className="text-secondary-500" />,
      change: '+0.8%',
      trend: 'up',
    },
    {
      title: 'Growth Rate',
      value: avgGrowthRate.toFixed(1) + '%',
      icon: <TrendingUp className="text-accent-500" />,
      change: '-0.3%',
      trend: 'down',
    },
    {
      title: 'Posts This Week',
      value: totalPosts.toString(),
      icon: <BarChart3 className="text-success-500" />,
      change: '+5',
      trend: 'up',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white rounded-lg p-5 shadow-normal"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">{metric.title}</p>
              <h3 className="text-2xl font-semibold text-gray-900">{metric.value}</h3>
            </div>
            <div className="p-2 bg-gray-50 rounded-lg">
              {metric.icon}
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className={`text-xs font-medium ${
              metric.trend === 'up' ? 'text-success-500' : 'text-error-500'
            }`}>
              {metric.change}
            </span>
            <span className="text-xs text-gray-500 ml-1.5">vs last month</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AnalyticsOverview;