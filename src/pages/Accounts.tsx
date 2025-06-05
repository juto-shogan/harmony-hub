import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, UserPlus, Facebook, Instagram, Twitter, Linkedin, Youtube, MoreVertical } from 'lucide-react';
import { mockSocialAccounts } from '../data/mockData';
import PlatformIcon from '../components/shared/PlatformIcon';

const Accounts: React.FC = () => {
  const [showConnectModal, setShowConnectModal] = useState(false);
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Social Accounts</h1>
          <p className="text-gray-500 mt-1">Manage your connected social media accounts</p>
        </div>
        
        <button 
          className="flex items-center gap-2 px-3 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
          onClick={() => setShowConnectModal(true)}
        >
          <Plus size={16} />
          <span className="text-sm font-medium">Connect Account</span>
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-normal overflow-hidden">
        <div className="grid grid-cols-1 divide-y divide-border-light">
          {mockSocialAccounts.map((account, index) => (
            <motion.div
              key={account.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="p-5 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={account.avatar} 
                      alt={account.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-gray-900">{account.name}</h3>
                      <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
                        <PlatformIcon platform={account.platform} size={14} />
                      </div>
                    </div>
                    <div className="flex items-center mt-1">
                      {account.status === 'connected' ? (
                        <>
                          <span className="w-1.5 h-1.5 bg-success-500 rounded-full"></span>
                          <span className="ml-1.5 text-xs text-success-600">Connected</span>
                        </>
                      ) : account.status === 'disconnected' ? (
                        <>
                          <span className="w-1.5 h-1.5 bg-error-500 rounded-full"></span>
                          <span className="ml-1.5 text-xs text-error-600">Disconnected</span>
                        </>
                      ) : (
                        <>
                          <span className="w-1.5 h-1.5 bg-warning-500 rounded-full"></span>
                          <span className="ml-1.5 text-xs text-warning-600">Pending</span>
                        </>
                      )}
                      
                      {account.metrics && (
                        <>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-xs text-gray-500">{account.metrics.followers.toLocaleString()} followers</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {account.status === 'connected' ? (
                    <button className="px-3 py-1.5 text-sm text-gray-600 border border-border-light rounded-lg hover:bg-gray-50 transition-colors">
                      Disconnect
                    </button>
                  ) : (
                    <button className="px-3 py-1.5 text-sm text-white bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors">
                      Connect
                    </button>
                  )}
                  
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <MoreVertical size={18} className="text-gray-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Connect Account Modal */}
      {showConnectModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-lg shadow-large max-w-md w-full mx-4"
          >
            <div className="p-5 border-b border-border-light">
              <h2 className="text-xl font-semibold text-gray-900">Connect Social Account</h2>
              <p className="text-sm text-gray-500 mt-1">Select a platform to connect</p>
            </div>
            
            <div className="p-5 space-y-3">
              {[
                { icon: <Facebook size={22} className="text-blue-600" />, name: 'Facebook', description: 'Pages and profiles' },
                { icon: <Instagram size={22} className="text-pink-600" />, name: 'Instagram', description: 'Business accounts' },
                { icon: <Twitter size={22} className="text-sky-500" />, name: 'X (Twitter)', description: 'Profiles' },
                { icon: <Linkedin size={22} className="text-blue-700" />, name: 'LinkedIn', description: 'Pages and profiles' },
                { icon: <Youtube size={22} className="text-red-600" />, name: 'YouTube', description: 'Channels' },
              ].map((platform) => (
                <button 
                  key={platform.name}
                  className="w-full flex items-center gap-4 p-3 border border-border-light rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    {platform.icon}
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">{platform.name}</p>
                    <p className="text-xs text-gray-500">{platform.description}</p>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="p-5 border-t border-border-light flex justify-end">
              <button 
                className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setShowConnectModal(false)}
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Accounts;