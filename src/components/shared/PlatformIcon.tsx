import React from 'react';
import { SocialAccount } from '../../types';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

interface PlatformIconProps {
  platform: SocialAccount['platform'];
  size?: number;
  className?: string;
}

const PlatformIcon: React.FC<PlatformIconProps> = ({ platform, size = 16, className = '' }) => {
  const getIcon = () => {
    switch (platform) {
      case 'facebook':
        return <Facebook size={size} className={`text-blue-600 ${className}`} />;
      case 'instagram':
        return <Instagram size={size} className={`text-pink-600 ${className}`} />;
      case 'twitter':
        return <Twitter size={size} className={`text-sky-500 ${className}`} />;
      case 'linkedin':
        return <Linkedin size={size} className={`text-blue-700 ${className}`} />;
      case 'youtube':
        return <Youtube size={size} className={`text-red-600 ${className}`} />;
      case 'tiktok':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M19.3 6.8c-1 0-1.9-.3-2.6-.9-.7-.6-1.2-1.5-1.3-2.4V3h-2.9v13.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.2 0 .3 0 .5.1V11c-.2 0-.3-.1-.5-.1-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4V8.2c1.2.9 2.8 1.4 4.4 1.4V7c-.2.1-.3.2-.5.2-.8 0-1.5-.4-1.9-1.2-.3-.6-.5-1.2-.5-1.9V3h-.7z" fill="#000000"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return getIcon();
};

export default PlatformIcon;