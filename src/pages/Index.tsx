import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import BreakingNews from '@/components/BreakingNews';
import CategoryBar from '@/components/CategoryBar';
import NewsCard from '@/components/NewsCard';
import TrendingTopics from '@/components/TrendingTopics';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/news-hero.jpg';

interface NewsArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}
const Index = () => {
  const navigate = useNavigate();
  const [visibleNews, setVisibleNews] = useState(6);
  const [newsData, setNewsData] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch news from API
  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://newsapi.org/v2/everything?q=technology&from=2025-08-30&sortBy=popularity&language=en&pageSize=20&page=${currentPage}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        );
        const data = await response.json();

        // shuffle results for randomness
        const shuffled = data.articles.sort(() => 0.5 - Math.random());
        setNewsData(shuffled);
      } catch (err) {
        setError('Failed to load news articles');
        console.error('Error loading news:', err);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  },[currentPage] );

  const loadMoreNews = async () => {
    try {
      setLoadingMore(true);
      const nextPage = currentPage + 1;

      const response = await fetch(
        `https://newsapi.org/v2/everything?q=technology&from=2025-08-30&sortBy=popularity&language=en&pageSize=20&page=${nextPage}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
      );
      const data = await response.json();

      const shuffled = data.articles.sort(() => 0.5 - Math.random());

      setNewsData(prev => [...prev, ...shuffled]);
      setCurrentPage(nextPage);
      setVisibleNews(prev => prev + 6);
    } catch (err) {
      console.error('Error loading more news:', err);
    } finally {
      setLoadingMore(false);
    }
  };

  // helper: how many hours ago
  const timeAgo = (dateString: string) => {
    const published = new Date(dateString).getTime();
    const now = new Date().getTime();
    const diff = Math.floor((now - published) / (1000 * 60 * 60)); // hours
    return diff <= 0 ? "Just now" : `${diff}h ago`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BreakingNews />
      <CategoryBar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy to-navy-light text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="News Hero" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="headline-font text-4xl md:text-6xl font-bold mb-6">
            Trusted News from <span className="text-gold-accent">Every Voice</span>
          </h1>
          <p className="body-font text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience verified, crowdsourced journalism that connects communities 
            and empowers citizen reporting across multiple languages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-red-accent hover:bg-red-accent/90 text-white px-8 py-3"
              onClick={() => navigate('/report')}
            >
              Start Reporting
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:text-navy px-8 py-3 font-normal bg-gray-500 hover:bg-gray-400"
              onClick={() => navigate('/stories')}
            >
              Explore Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* News Content */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="headline-font text-2xl font-bold text-navy">Latest News</h2>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-verified rounded-full"></div>
                  Verified
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-under-verification rounded-full"></div>
                  Under Review
                </span>
              </div>
            </div>

            {loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="bg-card border rounded-lg p-4 animate-pulse">
                    <div className="aspect-video bg-muted rounded mb-4"></div>
                    <div className="h-4 bg-muted rounded mb-2"></div>
                    <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            )}

            {error && (
              <div className="text-center py-8">
                <p className="text-destructive mb-4">{error}</p>
                <Button onClick={() => window.location.reload()} variant="outline">
                  Try Again
                </Button>
              </div>
            )}

            {!loading && !error && (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {newsData.slice(0, visibleNews).map((news, index) => (
                  <NewsCard 
                    key={`${news.source?.name}-${index}`} 
                    title={news.title} 
                    description={news.description} 
                    image={news.urlToImage || "/newspaper-placeholder.jpg"} 
                    category={"General"} 
                    source={news.url} 
                    sourceName={news.source?.name} 
                    isCrowdsourced={false} 
                    verificationStatus={"verified"} 
                    publishedAt={timeAgo(news.publishedAt)} 
                    // 🔑 Open original news in a new tab
                  />
                ))}
              </div>
            )}

            {!loading && !error && (
              <div className="text-center mt-8">
                <Button 
                  onClick={loadMoreNews} 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-3 border-navy text-navy hover:bg-navy hover:text-white"
                  disabled={loadingMore}
                >
                  {loadingMore ? 'Loading...' : 'Load More Stories'}
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <TrendingTopics />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
