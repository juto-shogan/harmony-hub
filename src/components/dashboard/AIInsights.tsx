import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Lightbulb, AlertTriangle, Sparkles } from 'lucide-react';
import { AIInsight } from '../../types';

interface AIInsightsProps {
  insights: AIInsight[];
}

const AIInsights: React.FC<AIInsightsProps> = ({ insights }) => {
  const getInsightIcon = (type: AIInsight['type'], priority: AIInsight['priority']) => {
    switch (type) {
      case 'recommendation':
        return <Lightbulb size={16} className="text-primary-500" />;
      case 'warning':
        return <AlertTriangle size={16} className={`${priority === 'high' ? 'text-error-500' : 'text-warning-500'}`} />;
      case 'insight':
        return <Sparkles size={16} className="text-secondary-500" />;
      default:
        return <Lightbulb size={16} className="text-primary-500" />;
    }
  };

  const getPriorityClass = (priority: AIInsight['priority']) => {
    switch (priority) {
      case 'high':
        return 'border-l-4 border-primary-500';
      case 'medium':
        return 'border-l-4 border-secondary-400';
      case 'low':
        return 'border-l-2 border-gray-300';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-normal">
      <div className="p-5 border-b border-border-light flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Bot size={18} className="text-primary-600" />
          <h2 className="text-lg font-medium text-gray-900">Bot-Father Insights</h2>
        </div>
        <button className="text-primary-500 text-sm font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="divide-y divide-border-light">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`p-4 hover:bg-gray-50 transition-colors ${getPriorityClass(insight.priority)}`}
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                {getInsightIcon(insight.type, insight.priority)}
              </div>
              <div>
                <p className="text-sm text-gray-900">{insight.text}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                    insight.priority === 'high' 
                      ? 'bg-error-50 text-error-600' 
                      : insight.priority === 'medium'
                        ? 'bg-warning-50 text-warning-600'
                        : 'bg-gray-100 text-gray-600'
                  }`}>
                    {insight.priority.charAt(0).toUpperCase() + insight.priority.slice(1)} Priority
                  </span>
                  <button className="text-xs text-primary-500 font-medium hover:underline">
                    Take Action
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AIInsights;