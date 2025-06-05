import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Image, 
  Video, 
  Calendar, 
  Sparkles, 
  Hash, 
  Send,
  Bot
} from 'lucide-react';
import PlatformIcon from '../components/shared/PlatformIcon';
import { SocialAccount } from '../types';
import { mockSocialAccounts } from '../data/mockData';

const Compose: React.FC = () => {
  const [content, setContent] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<SocialAccount['platform'][]>([]);
  const [aiAssistMode, setAiAssistMode] = useState(false);

  const handlePlatformToggle = (platform: SocialAccount['platform']) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  const connectedAccounts = mockSocialAccounts.filter(account => account.status === 'connected');

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-semibold text-gray-900">Create New Post</h1>
        <p className="text-gray-500 mt-1">Craft your content and publish to multiple platforms</p>
      </motion.div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-normal overflow-hidden">
            <div className="p-5 border-b border-border-light">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {connectedAccounts.map(account => (
                  <button
                    key={account.id}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-colors ${
                      selectedPlatforms.includes(account.platform)
                        ? 'bg-primary-50 border-primary-200 text-primary-700'
                        : 'border-gray-200 text-gray-500 hover:bg-gray-50'
                    }`}
                    onClick={() => handlePlatformToggle(account.platform)}
                  >
                    <PlatformIcon platform={account.platform} size={16} />
                    <span className="text-sm font-medium">{account.name}</span>
                  </button>
                ))}
              </div>
              
              <div className="mb-4">
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="What would you like to share today?"
                  className="w-full border border-border-light rounded-lg p-3 min-h-32 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300 resize-none"
                ></textarea>
                <div className="flex justify-between text-xs text-gray-500 mt-1 px-1">
                  <span>{content.length} characters</span>
                  <span>Recommended: 60-280</span>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-2">
                <button className="p-2 border border-border-light rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
                  <Image size={18} />
                </button>
                <button className="p-2 border border-border-light rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
                  <Video size={18} />
                </button>
                <button className="p-2 border border-border-light rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
                  <Hash size={18} />
                </button>
                <button 
                  className={`p-2 rounded-lg transition-colors ${
                    aiAssistMode 
                      ? 'bg-primary-50 text-primary-600 border border-primary-200' 
                      : 'border border-border-light text-gray-500 hover:bg-gray-50'
                  }`}
                  onClick={() => setAiAssistMode(!aiAssistMode)}
                >
                  <Sparkles size={18} />
                </button>
                
                <div className="ml-auto flex items-center gap-2">
                  <button className="flex items-center gap-2 px-3 py-1.5 border border-border-light rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                    <Calendar size={16} />
                    <span className="text-sm">Schedule</span>
                  </button>
                  
                  <button 
                    className="flex items-center gap-2 px-4 py-1.5 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
                    disabled={content.length === 0 || selectedPlatforms.length === 0}
                  >
                    <Send size={16} />
                    <span className="text-sm font-medium">Post Now</span>
                  </button>
                </div>
              </div>
            </div>
            
            {aiAssistMode && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="border-t border-border-light p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Bot size={18} className="text-primary-600" />
                  <h3 className="font-medium text-gray-900">Bot-Father Suggestions</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-800">Try "Check out our latest design portfolio! 🎨 #design #creativestudio #innovation"</p>
                    <div className="flex justify-end mt-2">
                      <button className="text-xs text-primary-600 hover:underline">Apply</button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-800">Hashtag suggestions: #DesignInspiration #CreativeProcess #DigitalArt #UXDesign</p>
                    <div className="flex justify-end mt-2">
                      <button className="text-xs text-primary-600 hover:underline">Apply</button>
                    </div>
                  </div>
                  
                  <button className="flex items-center justify-center gap-2 w-full py-2 border border-dashed border-primary-200 rounded-lg text-primary-600 hover:bg-primary-50 transition-colors">
                    <Sparkles size={14} />
                    <span className="text-sm">Generate More Suggestions</span>
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
        
        <div className="w-full lg:w-80 space-y-5">
          <div className="bg-white rounded-lg shadow-normal p-5">
            <h3 className="font-medium text-gray-900 mb-3">Platform Preview</h3>
            
            {selectedPlatforms.length > 0 ? (
              <div className="space-y-4">
                {selectedPlatforms.map(platform => (
                  <div key={platform} className="p-3 border border-border-light rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <PlatformIcon platform={platform} size={16} />
                      <span className="text-sm font-medium capitalize">{platform}</span>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-xs text-gray-600">
                        {content || 'Your post will appear here...'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-gray-400">
                <p className="text-sm">Select platforms to preview</p>
              </div>
            )}
          </div>
          
          <div className="bg-secondary-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Bot size={16} className="text-secondary-600" />
              <h3 className="text-sm font-medium text-secondary-900">Bot-Father Tip</h3>
            </div>
            <p className="text-xs text-secondary-700">
              Posts with questions receive 2x more engagement. Try adding a question to encourage interaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compose;