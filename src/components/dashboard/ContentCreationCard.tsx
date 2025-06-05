import React from 'react';
import { motion } from 'framer-motion';
import { Feather, ChevronRight } from 'lucide-react';

const ContentCreationCard: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg shadow-large text-white overflow-hidden"
    >
      <div className="p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-white/10 rounded">
            <Feather size={20} className="text-white" />
          </div>
          <h2 className="text-lg font-medium">Start Creating Content</h2>
        </div>
        
        <p className="text-white/80 text-sm mb-6">
          Let Bot-Father help you craft the perfect post with AI-powered suggestions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
          <button className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-lg text-left">
            <p className="text-sm font-medium">Create a new post</p>
            <p className="text-xs text-white/70 mt-1">Start from scratch</p>
          </button>
          
          <button className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-lg text-left">
            <p className="text-sm font-medium">Use AI templates</p>
            <p className="text-xs text-white/70 mt-1">Quick content creation</p>
          </button>
        </div>
        
        <button className="w-full py-2.5 bg-white text-primary-700 rounded-lg font-medium flex items-center justify-center gap-1.5 hover:bg-white/90 transition-colors">
          <span>Go to Composer</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </motion.div>
  );
};

export default ContentCreationCard;