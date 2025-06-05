import React, { useState } from 'react';
import { Bell, Search, Plus, ChevronDown, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (showUserMenu) setShowUserMenu(false);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
    if (showNotifications) setShowNotifications(false);
  };

  return (
    <header className="bg-background-light border-b border-border-light py-3 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative w-64">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-4 rounded-lg bg-gray-50 border border-border-light text-sm focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-primary-500 hover:bg-primary-600 text-white rounded-lg px-4 py-2 text-sm font-medium flex items-center gap-2 transition-colors">
            <Plus size={16} />
            <span>New Post</span>
          </button>

          <div className="relative">
            <button 
              onClick={toggleNotifications}
              className={`relative p-2 rounded-full hover:bg-gray-100 transition-colors ${showNotifications ? 'bg-gray-100' : ''}`}
            >
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent-500 rounded-full"></span>
            </button>
            
            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-large z-10"
                >
                  <div className="p-4 border-b border-border-light">
                    <h3 className="font-medium text-gray-900">Notifications</h3>
                  </div>
                  <div className="p-3 max-h-96 overflow-y-auto">
                    <div className="py-2 px-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <p className="text-sm font-medium text-gray-900">New comment on your post</p>
                      <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                    </div>
                    <div className="py-2 px-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <p className="text-sm font-medium text-gray-900">Your Instagram post was published</p>
                      <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                    </div>
                    <div className="py-2 px-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <p className="text-sm font-medium text-gray-900">Bot-Father: Engagement up 12% this week</p>
                      <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                    </div>
                  </div>
                  <div className="p-3 border-t border-border-light">
                    <button className="w-full text-primary-500 text-sm font-medium py-2 hover:bg-primary-50 rounded-lg transition-colors">
                      View all notifications
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            <button 
              onClick={toggleUserMenu}
              className="flex items-center gap-2 hover:bg-gray-50 rounded-lg p-1.5 transition-colors"
            >
              <img 
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2" 
                alt="User" 
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm font-medium text-gray-700">Sarah Chen</span>
              <ChevronDown size={16} className="text-gray-500" />
            </button>
            
            <AnimatePresence>
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-large z-10"
                >
                  <div className="p-3 border-b border-border-light">
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2" 
                        alt="User" 
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Sarah Chen</p>
                        <p className="text-xs text-gray-500">sarah@designstudio.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      Your Profile
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      Team Settings
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors">
                      <Users size={16} />
                      <span>Invite Team Members</span>
                    </button>
                  </div>
                  <div className="py-2 border-t border-border-light">
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      Sign out
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;