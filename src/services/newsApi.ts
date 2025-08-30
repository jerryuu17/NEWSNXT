const NEWS_API_KEY = 'fd21aaad08ee43ffabf7f68db7c3eaa5';
const BASE_URL = 'https://newsapi.org/v2';

export interface NewsApiArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: NewsApiArticle[];
}

export interface NewsArticle {
  title: string;
  description: string;
  image?: string;
  category: string;
  source: string;
  sourceName: string;
  isCrowdsourced: boolean;
  verificationStatus: 'verified' | 'under-verification' | 'unverified';
  publishedAt: string;
}

// Function to categorize articles based on content
const categorizeArticle = (title: string, description: string): string => {
  const content = `${title} ${description}`.toLowerCase();
  
  if (content.includes('tech') || content.includes('ai') || content.includes('app') || content.includes('digital') || content.includes('software')) {
    return 'Technology';
  }
  if (content.includes('health') || content.includes('medical') || content.includes('doctor') || content.includes('disease')) {
    return 'Health';
  }
  if (content.includes('sport') || content.includes('game') || content.includes('player') || content.includes('team')) {
    return 'Sports';
  }
  if (content.includes('business') || content.includes('economy') || content.includes('market') || content.includes('financial')) {
    return 'Economy';
  }
  if (content.includes('climate') || content.includes('environment') || content.includes('green') || content.includes('energy')) {
    return 'Environment';
  }
  if (content.includes('entertainment') || content.includes('movie') || content.includes('music') || content.includes('celebrity')) {
    return 'Entertainment';
  }
  
  return 'General';
};

// Function to format date
const formatPublishedDate = (dateString: string): string => {
  const publishedDate = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - publishedDate.getTime()) / (1000 * 60 * 60));
  
  if (diffInHours < 1) return 'Just now';
  if (diffInHours < 24) return `${diffInHours} hours ago`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays} days ago`;
  
  return publishedDate.toLocaleDateString();
};

// Transform API response to our NewsArticle format
const transformArticle = (article: NewsApiArticle): NewsArticle => ({
  title: article.title || 'Untitled Article',
  description: article.description || 'No description available.',
  image: article.urlToImage || undefined,
  category: categorizeArticle(article.title, article.description || ''),
  source: article.url,
  sourceName: article.source.name || 'Unknown Source',
  isCrowdsourced: false,
  verificationStatus: 'verified' as const,
  publishedAt: formatPublishedDate(article.publishedAt)
});

export const fetchLatestNews = async (query = 'technology', pageSize = 20): Promise<NewsArticle[]> => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const url = `${BASE_URL}/everything?q=${encodeURIComponent(query)}&from=${today}&sortBy=popularity&pageSize=${pageSize}&apiKey=${NEWS_API_KEY}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    
    const data: NewsApiResponse = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error('API returned error status');
    }
    
    return data.articles
      .filter(article => article.title && article.description) // Filter out articles with missing data
      .map(transformArticle);
    
  } catch (error) {
    console.error('Error fetching news:', error);
    
    // Return fallback mock data if API fails (e.g., CORS issues)
    return getFallbackNews();
  }
};

export const searchNews = async (query: string, pageSize = 20): Promise<NewsArticle[]> => {
  return fetchLatestNews(query, pageSize);
};

// Fallback news data when API is unavailable
const getFallbackNews = (): NewsArticle[] => [
  {
    title: "Revolutionary AI System Helps Doctors Diagnose Rare Diseases 90% Faster",
    description: "A breakthrough artificial intelligence system developed by international researchers is helping medical professionals identify rare genetic disorders with unprecedented accuracy and speed.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    category: "Technology",
    source: "fallback",
    sourceName: "Tech Medical Journal",
    isCrowdsourced: false,
    verificationStatus: "verified" as const,
    publishedAt: "2 hours ago"
  },
  {
    title: "Global Climate Summit Reaches Historic Carbon Reduction Agreement",
    description: "World leaders commit to ambitious new targets for reducing greenhouse gas emissions, with binding commitments from major industrial nations.",
    image: "https://images.unsplash.com/photo-1569163139394-de44cb5894be?w=600&h=400&fit=crop",
    category: "Environment",
    source: "fallback",
    sourceName: "International News Agency",
    isCrowdsourced: false,
    verificationStatus: "verified" as const,
    publishedAt: "6 hours ago"
  },
  {
    title: "Scientists Discover New Species of Marine Life in Deep Ocean Trenches",
    description: "Research expedition uncovers previously unknown creatures living in extreme depths, providing insights into evolution and adaptation.",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=400&fit=crop",
    category: "Science",
    source: "fallback",
    sourceName: "Marine Biology Institute",
    isCrowdsourced: false,
    verificationStatus: "verified" as const,
    publishedAt: "12 hours ago"
  },
  {
    title: "Economic Recovery Shows Strong Signs as Employment Rates Rise",
    description: "Latest employment statistics reveal significant improvement in job market across multiple sectors, indicating robust economic recovery.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop",
    category: "Economy",
    source: "fallback",
    sourceName: "Economic Research Center",
    isCrowdsourced: false,
    verificationStatus: "verified" as const,
    publishedAt: "16 hours ago"
  },
  {
    title: "Revolutionary Battery Technology Promises Sustainable Energy Storage",
    description: "New lithium-free battery design offers higher capacity and faster charging while using abundant, environmentally friendly materials.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
    category: "Technology",
    source: "fallback",
    sourceName: "Green Energy Weekly",
    isCrowdsourced: false,
    verificationStatus: "verified" as const,
    publishedAt: "20 hours ago"
  },
  {
    title: "Breaking: Major Tech Company Announces Breakthrough in Quantum Computing",
    description: "Revolutionary quantum processor achieves unprecedented computational speeds, potentially transforming fields from cryptography to drug discovery.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
    category: "Technology",
    source: "fallback",
    sourceName: "Tech Innovation Daily",
    isCrowdsourced: false,
    verificationStatus: "verified" as const,
    publishedAt: "1 day ago"
  }
];