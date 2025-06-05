import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MoreVertical } from 'lucide-react';
import { ScheduleSlot } from '../../types';
import { format } from 'date-fns';
import PlatformIcon from '../shared/PlatformIcon';

interface UpcomingPostsProps {
  scheduleSlots: ScheduleSlot[];
}

const UpcomingPosts: React.FC<UpcomingPostsProps> = ({ scheduleSlots }) => {
  const upcomingSlots = scheduleSlots.filter(
    slot => slot.status === 'occupied' || slot.status === 'optimal'
  ).sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <div className="bg-white rounded-lg shadow-normal">
      <div className="p-5 border-b border-border-light flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">Upcoming Posts</h2>
        <button className="text-primary-500 text-sm font-medium hover:underline">
          View Schedule
        </button>
      </div>

      <div className="divide-y divide-border-light">
        {upcomingSlots.map((slot, index) => (
          <motion.div
            key={slot.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className="p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar size={14} />
                <span>{format(slot.date, 'MMM dd, yyyy')}</span>
                <Clock size={14} className="ml-2" />
                <span>{format(slot.date, 'h:mm a')}</span>
              </div>
              
              <div className="flex items-center gap-1.5">
                {slot.status === 'optimal' && (
                  <span className="px-2 py-0.5 bg-success-50 text-success-600 text-xs font-medium rounded-full">
                    Optimal Time
                  </span>
                )}
                <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                  <MoreVertical size={16} className="text-gray-400" />
                </button>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-sm text-gray-900 line-clamp-2">
                {slot.post?.content || 'Scheduled posting slot'}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex -space-x-1">
                {slot.platforms.map((platform) => (
                  <div key={platform} className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center border border-white">
                    <PlatformIcon platform={platform} size={14} />
                  </div>
                ))}
              </div>
              
              {slot.post ? (
                <span className="text-xs font-medium text-primary-500">Edit Post</span>
              ) : (
                <span className="text-xs font-medium text-primary-500">Create Post</span>
              )}
            </div>
          </motion.div>
        ))}

        {upcomingSlots.length === 0 && (
          <div className="p-6 text-center">
            <p className="text-gray-500 text-sm">No upcoming posts scheduled</p>
            <button className="mt-3 text-primary-500 text-sm font-medium">Schedule a post</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingPosts;