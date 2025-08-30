import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import BreakingNews from '@/components/BreakingNews';
import CategoryBar from '@/components/CategoryBar';
import NewsCard from '@/components/NewsCard';
import TrendingTopics from '@/components/TrendingTopics';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/news-hero.jpg';

const Index = () => {
  const [visibleNews, setVisibleNews] = useState(6);
  const [newsData, setNewsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch NewsAPI data
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=Apple&from=2025-08-30&sortBy=popularity&apiKey=fd21aaad08ee43ffabf7f68db7c3eaa5"
        );
        const data = await response.json();

        // Map API response to match NewsCard props
        const formatted = data.articles.map((article: any) => ({
          title: article.title,
          description: article.description,
          image: article.urlToImage,
          category: "General", // NewsAPI doesn't provide category directly
          source: "api",
          sourceName: article.source?.name || "Unknown",
          isCrowdsourced: false,
          verificationStatus: "verified" as const,
          publishedAt: new Date(article.publishedAt).toLocaleString(),
        }));

        setNewsData(formatted);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const loadMoreNews = () => {
    setVisibleNews(prev => Math.min(prev + 3, newsData.length));
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
            <Button size="lg" className="bg-red-accent hover:bg-red-accent/90 text-white px-8 py-3">
              Start Reporting
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:text-navy px-8 py-3 font-normal bg-gray-500 hover:bg-gray-400">
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

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {loading ? (
                <p>Loading news...</p>
              ) : (
                newsData.slice(0, visibleNews).map((news, index) => (
                  <NewsCard
                    key={index}
                    title={news.title}
                    description={news.description}
                    image={news.image}
                    category={news.category}
                    source={news.source}
                    sourceName={news.sourceName}
                    isCrowdsourced={news.isCrowdsourced}
                    verificationStatus={news.verificationStatus}
                    publishedAt={news.publishedAt}
                  />
                ))
              )}
            </div>

            {!loading && visibleNews < newsData.length && (
              <div className="text-center mt-8">
                <Button
                  onClick={loadMoreNews}
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 border-navy text-navy hover:bg-navy hover:text-white"
                >
                  Load More Stories
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
