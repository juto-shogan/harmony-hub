import React from 'react';
import { motion } from 'framer-motion';
import AnalyticsOverview from '../components/dashboard/AnalyticsOverview';
import UpcomingPosts from '../components/dashboard/UpcomingPosts';
import AIInsights from '../components/dashboard/AIInsights';
import AccountsOverview from '../components/dashboard/AccountsOverview';
import ContentCreationCard from '../components/dashboard/ContentCreationCard';
import { mockAnalyticsData, mockSchedule, mockAIInsights, mockSocialAccounts } from '../data/mockData';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back! Here's an overview of your social media performance</p>
      </motion.div>
      
      <AnalyticsOverview data={mockAnalyticsData} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <UpcomingPosts scheduleSlots={mockSchedule} />
        </div>
        <div>
          <ContentCreationCard />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AIInsights insights={mockAIInsights} />
        </div>
        <div>
          <AccountsOverview accounts={mockSocialAccounts} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;