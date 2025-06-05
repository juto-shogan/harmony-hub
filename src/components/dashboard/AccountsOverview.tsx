import React from 'react';
import { motion } from 'framer-motion';
import { SocialAccount } from '../../types';
import { TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';
import PlatformIcon from '../shared/PlatformIcon';

interface AccountsOverviewProps {
  accounts: SocialAccount[];
}

const AccountsOverview: React.FC<AccountsOverviewProps> = ({ accounts }) => {
  return (
    <div className="bg-white rounded-lg shadow-normal">
      <div className="p-5 border-b border-border-light flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">Connected Accounts</h2>
        <button className="text-primary-500 text-sm font-medium hover:underline">
          Manage Accounts
        </button>
      </div>

      <div className="divide-y divide-border-light">
        {accounts.map((account, index) => (
          <motion.div
            key={account.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className={`p-4 hover:bg-gray-50 transition-colors`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src={account.avatar} 
                    alt={account.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-gray-900">{account.name}</p>
                    <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                      <PlatformIcon platform={account.platform} size={12} />
                    </div>
                  </div>
                  <div className="flex items-center mt-0.5">
                    {account.status === 'connected' ? (
                      <span className="text-xs text-success-600 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-success-500 rounded-full"></span>
                        Connected
                      </span>
                    ) : account.status === 'disconnected' ? (
                      <span className="text-xs text-error-600 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-error-500 rounded-full"></span>
                        Disconnected
                      </span>
                    ) : (
                      <span className="text-xs text-warning-600 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-warning-500 rounded-full"></span>
                        Pending
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              {account.metrics ? (
                <div className="text-right">
                  <p className="text-sm text-gray-900 font-medium">
                    {account.metrics.followers.toLocaleString()} followers
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-0.5">
                    {account.metrics.growth > 0 ? (
                      <>
                        <TrendingUp size={12} className="text-success-500" />
                        <span className="text-xs text-success-600">+{account.metrics.growth}%</span>
                      </>
                    ) : (
                      <>
                        <TrendingDown size={12} className="text-error-500" />
                        <span className="text-xs text-error-600">{account.metrics.growth}%</span>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <button className="text-xs text-primary-500 font-medium py-1 px-3 border border-primary-200 rounded hover:bg-primary-50 transition-colors">
                  Connect
                </button>
              )}
            </div>
          </motion.div>
        ))}

        <div className="p-4">
          <button className="w-full py-2 border border-dashed border-border-dark rounded-lg text-gray-500 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <span className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-400">+</span>
            <span className="text-sm">Add Account</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountsOverview;