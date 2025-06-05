import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, ArrowRight, TrendingUp, TrendingDown, Calendar } from 'lucide-react';
import { mockAnalyticsData, mockSocialAccounts } from '../data/mockData';
import PlatformIcon from '../components/shared/PlatformIcon';

const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
            <p className="text-gray-500 mt-1">Track your performance across all platforms</p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center border border-border-medium rounded-lg overflow-hidden">
              <button className="px-3 py-1.5 text-sm bg-primary-50 text-primary-600 font-medium">
                Last 7 days
              </button>
              <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                Last 30 days
              </button>
              <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                Custom
              </button>
            </div>
            
            <button className="p-2 border border-border-medium rounded-lg hover:bg-gray-50 transition-colors">
              <Calendar size={18} className="text-gray-500" />
            </button>
          </div>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { 
            title: 'Total Reach', 
            value: '84,293', 
            change: '+12.5%',
            trend: 'up' 
          },
          { 
            title: 'Engagement Rate', 
            value: '3.2%', 
            change: '+0.8%',
            trend: 'up' 
          },
          { 
            title: 'Follower Growth', 
            value: '1,243', 
            change: '+2.3%',
            trend: 'up' 
          },
          { 
            title: 'Total Posts', 
            value: '28', 
            change: '-3',
            trend: 'down' 
          },
        ].map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-lg p-5 shadow-normal"
          >
            <div className="flex justify-between items-start">
              <p className="text-sm text-gray-500">{metric.title}</p>
              <div className="flex items-center gap-1">
                {metric.trend === 'up' ? (
                  <TrendingUp size={14} className="text-success-500" />
                ) : (
                  <TrendingDown size={14} className="text-error-500" />
                )}
                <span className={`text-xs font-medium ${
                  metric.trend === 'up' ? 'text-success-600' : 'text-error-600'
                }`}>
                  {metric.change}
                </span>
              </div>
            </div>
            <p className="text-2xl font-semibold mt-2">{metric.value}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance by Platform */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-normal p-5">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-medium text-gray-900 flex items-center gap-2">
              <BarChart3 size={20} className="text-primary-500" />
              Platform Performance
            </h2>
            <button className="text-primary-500 text-sm hover:underline">
              Detailed Report
            </button>
          </div>
          
          <div className="space-y-5">
            {mockAnalyticsData.map((platform) => (
              <div key={platform.platform} className="border border-border-light rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <PlatformIcon platform={platform.platform} size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 capitalize">{platform.platform}</p>
                      <p className="text-xs text-gray-500">{platform.followers.toLocaleString()} followers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {platform.growthRate > 0 ? (
                      <>
                        <TrendingUp size={14} className="text-success-500" />
                        <span className="text-xs font-medium text-success-600">+{platform.growthRate}%</span>
                      </>
                    ) : (
                      <>
                        <TrendingDown size={14} className="text-error-500" />
                        <span className="text-xs font-medium text-error-600">{platform.growthRate}%</span>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="text-xs text-gray-500">Engagement</p>
                    <p className="font-medium text-gray-900 mt-0.5">{platform.engagement}%</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="text-xs text-gray-500">Posts</p>
                    <p className="font-medium text-gray-900 mt-0.5">{platform.postsThisWeek}</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="text-xs text-gray-500">New Followers</p>
                    <p className="font-medium text-gray-900 mt-0.5">+{Math.floor(platform.followers * (platform.growthRate/100))}</p>
                  </div>
                </div>
                
                {platform.bestPerformingPost && (
                  <div className="mt-3 pt-3 border-t border-border-light">
                    <p className="text-xs text-gray-500 mb-2">Best Performing Post</p>
                    <div className="text-sm text-gray-700 line-clamp-2">
                      {platform.bestPerformingPost.content}
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <span>{platform.bestPerformingPost.engagement?.likes} likes</span>
                        <span>•</span>
                        <span>{platform.bestPerformingPost.engagement?.comments} comments</span>
                      </div>
                      <button className="text-xs text-primary-500 flex items-center hover:underline">
                        View Details
                        <ArrowRight size={12} className="ml-1" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Account Growth */}
        <div className="bg-white rounded-lg shadow-normal p-5">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Account Growth</h2>
          
          <div className="space-y-4">
            {mockSocialAccounts
              .filter(account => account.status === 'connected')
              .map((account) => (
                <div key={account.id} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img 
                      src={account.avatar} 
                      alt={account.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-gray-900">{account.name}</p>
                      <div className="ml-2 w-4 h-4">
                        <PlatformIcon platform={account.platform} size={14} />
                      </div>
                    </div>
                    <div className="mt-1 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary-500 rounded-full"
                        style={{ width: `${account.metrics?.growth ? Math.min(account.metrics.growth * 20, 100) : 0}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-xs text-gray-500">{account.metrics?.followers.toLocaleString()} followers</p>
                      {account.metrics?.growth && (
                        <p className={`text-xs font-medium ${account.metrics.growth > 0 ? 'text-success-600' : 'text-error-600'}`}>
                          {account.metrics.growth > 0 ? '+' : ''}{account.metrics.growth}%
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;