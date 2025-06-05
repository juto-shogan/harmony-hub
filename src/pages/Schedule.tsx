import React from 'react';
import { Calendar, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { mockSchedule } from '../data/mockData';
import { format, addDays, startOfWeek, isSameDay } from 'date-fns';
import PlatformIcon from '../components/shared/PlatformIcon';

const Schedule: React.FC = () => {
  const today = new Date();
  const startOfCurrentWeek = startOfWeek(today, { weekStartsOn: 1 });
  
  const weekDays = Array.from({ length: 7 }).map((_, i) => {
    const date = addDays(startOfCurrentWeek, i);
    return {
      date,
      dayName: format(date, 'EEE'),
      dayNumber: format(date, 'd'),
      isToday: isSameDay(date, today),
    };
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Content Schedule</h1>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <button className="p-2 border border-r-0 rounded-l-lg hover:bg-gray-50 transition-colors">
              <ChevronLeft size={16} className="text-gray-500" />
            </button>
            <button className="p-2 border border-l-0 rounded-r-lg hover:bg-gray-50 transition-colors">
              <ChevronRight size={16} className="text-gray-500" />
            </button>
          </div>
          
          <button className="flex items-center gap-2 px-3 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors">
            <Plus size={16} />
            <span className="text-sm font-medium">New Post</span>
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-normal overflow-hidden">
        {/* Calendar Header */}
        <div className="flex items-center justify-between p-4 border-b border-border-light">
          <div className="flex items-center gap-3">
            <Calendar size={20} className="text-primary-500" />
            <h2 className="text-lg font-medium text-gray-900">
              {format(today, 'MMMM yyyy')}
            </h2>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 text-sm border border-border-light rounded hover:bg-gray-50 transition-colors">
              Month
            </button>
            <button className="px-3 py-1 text-sm bg-primary-50 text-primary-600 border border-primary-200 rounded">
              Week
            </button>
            <button className="px-3 py-1 text-sm border border-border-light rounded hover:bg-gray-50 transition-colors">
              Day
            </button>
          </div>
        </div>
        
        {/* Days of Week */}
        <div className="grid grid-cols-7 border-b border-border-light">
          {weekDays.map((day) => (
            <div key={day.dayName} className="p-3 text-center">
              <p className="text-sm text-gray-500">{day.dayName}</p>
              <div className={`mt-1 w-8 h-8 flex items-center justify-center rounded-full mx-auto ${
                day.isToday 
                  ? 'bg-primary-100 text-primary-700 font-medium' 
                  : 'text-gray-700'
              }`}>
                {day.dayNumber}
              </div>
            </div>
          ))}
        </div>
        
        {/* Schedule Content */}
        <div className="grid grid-cols-7 min-h-[400px]">
          {weekDays.map((day) => (
            <div 
              key={day.dayName} 
              className={`border-r last:border-r-0 border-border-light relative ${
                day.isToday ? 'bg-primary-50/30' : ''
              }`}
            >
              {mockSchedule
                .filter(slot => isSameDay(slot.date, day.date))
                .map(slot => (
                  <div 
                    key={slot.id} 
                    className={`mx-2 my-1.5 p-2 rounded text-xs ${
                      slot.status === 'occupied'
                        ? 'bg-primary-100 border border-primary-200'
                        : slot.status === 'optimal'
                          ? 'bg-success-50 border border-success-200'
                          : 'bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <div className="font-medium text-gray-800 mb-1">
                      {format(slot.date, 'h:mm a')}
                    </div>
                    <p className="line-clamp-2 text-gray-700">
                      {slot.post?.content || (slot.status === 'optimal' ? 'Optimal posting time' : 'Available slot')}
                    </p>
                    <div className="flex mt-1.5 gap-1">
                      {slot.platforms.map(platform => (
                        <div key={platform} className="w-4 h-4">
                          <PlatformIcon platform={platform} size={12} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              
              <button className="absolute bottom-2 right-2 w-6 h-6 bg-white rounded-full shadow-subtle flex items-center justify-center text-gray-400 hover:text-primary-500 transition-colors">
                <Plus size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;