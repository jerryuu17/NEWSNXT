import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Clock, Globe, Zap } from 'lucide-react';

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

const Stories = () => {
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState<{ [key: string]: NewsArticle[] }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('breaking');

  const categories = [
    { id: 'breaking', name: 'Breaking News', query: 'breaking news', icon: Zap },
    { id: 'technology', name: 'Technology', query: 'technology', icon: TrendingUp },
    { id: 'world', name: 'World News', query: 'world news', icon: Globe },
    { id: 'business', name: 'Business', query: 'business', icon: TrendingUp },
  ];

  useEffect(() => {
    const loadCategorizedNews = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Import hardcoded data
        const { getNewsByCategory } = await import('@/data/mockNews');
        
        const categorizedNews: { [key: string]: NewsArticle[] } = {};
        
        // Load news for each category
        categories.forEach((category) => {
          const categoryNews = getNewsByCategory(category.id, 12);
          categorizedNews[category.id] = categoryNews.sort(() => 0.5 - Math.random());
        });

        setNewsData(categorizedNews);
      } catch (err) {
        setError('Failed to load news stories');
        console.error('Error loading news:', err);
      } finally {
        setLoading(false);
      }
    };

    loadCategorizedNews();
  }, []);

  const timeAgo = (dateString: string) => {
    const published = new Date(dateString).getTime();
    const now = new Date().getTime();
    const diff = Math.floor((now - published) / (1000 * 60 * 60));
    return diff <= 0 ? "Just now" : `${diff}h ago`;
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-navy-light text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="headline-font text-3xl md:text-5xl font-bold mb-4">
                Explore <span className="text-gold-accent">Stories</span>
              </h1>
              <p className="body-font text-lg opacity-90 max-w-2xl">
                Discover curated news stories organized by categories, 
                from breaking news to in-depth analysis across all topics.
              </p>
            </div>
            <Button 
              onClick={handleBackToHome}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-navy">2,845</div>
                <div className="text-sm text-muted-foreground">Stories Today</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-verified">1,923</div>
                <div className="text-sm text-muted-foreground">Verified</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-gold-accent">156</div>
                <div className="text-sm text-muted-foreground">Breaking</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-red-accent">47</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center gap-2"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="headline-font text-2xl font-bold text-navy flex items-center gap-3">
                    <category.icon className="w-6 h-6 text-red-accent" />
                    {category.name}
                  </h2>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Updated 5 min ago
                    </Badge>
                  </div>
                </div>
              </div>

              {loading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {Array.from({ length: 8 }).map((_, index) => (
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

              {!loading && !error && newsData[category.id] && (
                <>
                  {/* Featured Story */}
                  {newsData[category.id][0] && (
                    <Card className="mb-8 overflow-hidden">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="aspect-video md:aspect-auto relative">
                          <img 
                            src={newsData[category.id][0].urlToImage || "/newspaper-placeholder.jpg"} 
                            alt="Featured story"
                            className="w-full h-full object-cover"
                          />
                          <Badge className="absolute top-4 left-4 bg-red-accent text-white">
                            FEATURED
                          </Badge>
                        </div>
                        <CardContent className="p-6 flex flex-col justify-center">
                          <Badge variant="outline" className="w-fit mb-3">
                            {newsData[category.id][0].source?.name}
                          </Badge>
                          <h3 className="headline-font text-xl font-bold mb-3 text-navy">
                            {newsData[category.id][0].title}
                          </h3>
                          <p className="body-font text-muted-foreground mb-4 line-clamp-3">
                            {newsData[category.id][0].description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                              {timeAgo(newsData[category.id][0].publishedAt)}
                            </span>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => window.open(newsData[category.id][0].url, '_blank')}
                            >
                              Read More
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  )}

                  {/* Regular Stories Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {newsData[category.id].slice(1).map((news, index) => (
                      <NewsCard 
                        key={`${category.id}-${news.source?.name}-${index}`} 
                        title={news.title} 
                        description={news.description} 
                        image={news.urlToImage || "/newspaper-placeholder.jpg"} 
                        category={category.name} 
                        source={news.url} 
                        sourceName={news.source?.name} 
                        isCrowdsourced={false} 
                        verificationStatus={"verified"} 
                        publishedAt={timeAgo(news.publishedAt)} 
                      />
                    ))}
                  </div>

                  {newsData[category.id].length === 0 && (
                    <div className="text-center py-12">
                      <div className="text-muted-foreground mb-4">
                        No stories available in this category at the moment.
                      </div>
                      <Button variant="outline" onClick={() => window.location.reload()}>
                        Refresh
                      </Button>
                    </div>
                  )}
                </>
              )}
            </TabsContent>
          ))}
        </Tabs>

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-to-r from-navy to-navy-light text-white">
          <CardContent className="p-8 text-center">
            <h3 className="headline-font text-2xl font-bold mb-4">
              Have a Story to Share?
            </h3>
            <p className="body-font text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of citizen journalists contributing to our global news network.
              Your voice matters in shaping the narrative.
            </p>
            <Button 
              size="lg" 
              className="bg-red-accent hover:bg-red-accent/90 text-white px-8 py-3"
              onClick={() => navigate('/report')}
            >
              Start Reporting
            </Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Stories;