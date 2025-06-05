import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Calendar, 
  Feather, 
  BarChart3, 
  Users, 
  Settings, 
  Bot,
  Sparkles
} from 'lucide-react';

const navItems = [
  { path: '/', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
  { path: '/compose', icon: <Feather size={20} />, label: 'Compose' },
  { path: '/schedule', icon: <Calendar size={20} />, label: 'Schedule' },
  { path: '/analytics', icon: <BarChart3 size={20} />, label: 'Analytics' },
  { path: '/accounts', icon: <Users size={20} />, label: 'Accounts' },
  { path: '/settings', icon: <Settings size={20} />, label: 'Settings' },
];

const Sidebar: React.FC = () => {
  return (
    <motion.aside 
      className="w-64 bg-background-light border-r border-border-light h-screen sticky top-0 flex flex-col"
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-primary-500 to-primary-700 w-8 h-8 rounded flex items-center justify-center">
            <Sparkles className="text-white" size={18} />
          </div>
          <h1 className="text-xl font-semibold text-gray-900">Harmony Hub</h1>
        </div>
      </div>

      <nav className="flex-1 py-6">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-50 text-primary-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 m-4 bg-secondary-50 rounded-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-secondary-100 p-2 rounded">
            <Bot size={18} className="text-secondary-600" />
          </div>
          <h3 className="font-medium text-secondary-900">Bot-Father</h3>
        </div>
        <p className="text-xs text-secondary-700 mb-3">AI assistant ready to help with content creation and insights.</p>
        <button className="w-full bg-secondary-500 hover:bg-secondary-600 text-white text-sm font-medium py-1.5 px-3 rounded transition-colors">
          Ask Bot-Father
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;