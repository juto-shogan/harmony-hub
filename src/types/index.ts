export interface SocialAccount {
  id: string;
  platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'tiktok' | 'youtube';
  name: string;
  avatar: string;
  status: 'connected' | 'disconnected' | 'pending';
  metrics?: {
    followers: number;
    engagement: number;
    growth: number;
  };
}

export interface Post {
  id: string;
  content: string;
  media: Media[];
  platforms: SocialAccount['platform'][];
  status: 'draft' | 'scheduled' | 'published' | 'failed';
  scheduledFor?: Date;
  publishedAt?: Date;
  engagement?: {
    likes: number;
    comments: number;
    shares: number;
  };
}

export interface Media {
  id: string;
  type: 'image' | 'video' | 'gif';
  url: string;
  thumbnail?: string;
  alt?: string;
}

export interface AnalyticsData {
  platform: SocialAccount['platform'];
  followers: number;
  engagement: number;
  growthRate: number;
  postsThisWeek: number;
  bestPerformingPost?: Post;
}

export interface AICaption {
  id: string;
  text: string;
  tone: 'professional' | 'casual' | 'humorous' | 'inspirational';
  hashtags: string[];
  score: number;
}

export interface AIInsight {
  id: string;
  type: 'recommendation' | 'warning' | 'insight';
  text: string;
  priority: 'low' | 'medium' | 'high';
}

export interface ScheduleSlot {
  id: string;
  date: Date;
  platforms: SocialAccount['platform'][];
  status: 'available' | 'occupied' | 'optimal';
  post?: Post;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'editor' | 'viewer';
}