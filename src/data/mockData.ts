import { SocialAccount, Post, AnalyticsData, ScheduleSlot, AIInsight } from '../types';
import { addDays, addHours, subDays } from 'date-fns';

const today = new Date();

// Mock Social Accounts
export const mockSocialAccounts: SocialAccount[] = [
  {
    id: '1',
    platform: 'instagram',
    name: 'designstudio',
    avatar: 'https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
    status: 'connected',
    metrics: {
      followers: 12540,
      engagement: 3.2,
      growth: 1.8,
    },
  },
  {
    id: '2',
    platform: 'twitter',
    name: 'design_tweets',
    avatar: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
    status: 'connected',
    metrics: {
      followers: 8750,
      engagement: 2.1,
      growth: 0.7,
    },
  },
  {
    id: '3',
    platform: 'facebook',
    name: 'Design Studio Official',
    avatar: 'https://images.pexels.com/photos/3182744/pexels-photo-3182744.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
    status: 'connected',
    metrics: {
      followers: 25300,
      engagement: 1.4,
      growth: 0.3,
    },
  },
  {
    id: '4',
    platform: 'linkedin',
    name: 'Design Studio Inc.',
    avatar: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=2',
    status: 'disconnected',
  },
];

// Mock Posts
export const mockPosts: Post[] = [
  {
    id: '1',
    content: 'Check out our latest design portfolio! 🎨 #design #portfolio',
    media: [
      {
        id: 'm1',
        type: 'image',
        url: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Design portfolio showcase',
      },
    ],
    platforms: ['instagram', 'twitter'],
    status: 'published',
    publishedAt: subDays(today, 2),
    engagement: {
      likes: 243,
      comments: 18,
      shares: 32,
    },
  },
  {
    id: '2',
    content: 'Excited to announce our new collaboration with @techbrand! Stay tuned for amazing new products coming your way. #collaboration #innovation',
    media: [
      {
        id: 'm2',
        type: 'image',
        url: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Team collaboration',
      },
    ],
    platforms: ['facebook', 'linkedin', 'twitter'],
    status: 'scheduled',
    scheduledFor: addDays(today, 1),
  },
  {
    id: '3',
    content: 'Draft post for upcoming product launch.',
    media: [],
    platforms: ['instagram'],
    status: 'draft',
  },
];

// Mock Analytics Data
export const mockAnalyticsData: AnalyticsData[] = [
  {
    platform: 'instagram',
    followers: 12540,
    engagement: 3.2,
    growthRate: 1.8,
    postsThisWeek: 5,
    bestPerformingPost: mockPosts[0],
  },
  {
    platform: 'twitter',
    followers: 8750,
    engagement: 2.1,
    growthRate: 0.7,
    postsThisWeek: 7,
  },
  {
    platform: 'facebook',
    followers: 25300,
    engagement: 1.4,
    growthRate: 0.3,
    postsThisWeek: 3,
  },
];

// Mock Schedule Slots
export const mockSchedule: ScheduleSlot[] = [
  {
    id: 's1',
    date: addHours(today, 2),
    platforms: ['instagram', 'twitter'],
    status: 'optimal',
  },
  {
    id: 's2',
    date: addDays(today, 1),
    platforms: ['facebook', 'linkedin', 'twitter'],
    status: 'occupied',
    post: mockPosts[1],
  },
  {
    id: 's3',
    date: addDays(today, 2),
    platforms: ['instagram'],
    status: 'available',
  },
  {
    id: 's4',
    date: addDays(today, 3),
    platforms: ['instagram', 'facebook'],
    status: 'optimal',
  },
];

// Mock AI Insights
export const mockAIInsights: AIInsight[] = [
  {
    id: 'i1',
    type: 'recommendation',
    text: 'Your engagement rate is 20% higher when posting between 7-9 PM. Consider scheduling more content during this time.',
    priority: 'high',
  },
  {
    id: 'i2',
    type: 'insight',
    text: 'Posts with carousel images receive 2.2x more engagement than single image posts.',
    priority: 'medium',
  },
  {
    id: 'i3',
    type: 'warning',
    text: 'Instagram account hasn\'t posted in 5 days, which may affect your reach algorithm.',
    priority: 'medium',
  },
];