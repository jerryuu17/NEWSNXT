import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import BreakingNews from '@/components/BreakingNews';
import CategoryBar from '@/components/CategoryBar';
import NewsCard from '@/components/NewsCard';
import TrendingTopics from '@/components/TrendingTopics';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { fetchLatestNews, type NewsArticle } from '@/services/newsApi';
import heroImage from '@/assets/news-hero.jpg';

const Index = () => {
  const [visibleNews, setVisibleNews] = useState(6);

  // Mock news data - mix of API and crowdsourced content
  const newsData = [
    {
      title: "Revolutionary AI System Helps Doctors Diagnose Rare Diseases 90% Faster",
      description: "A breakthrough artificial intelligence system developed by international researchers is helping medical professionals identify rare genetic disorders with unprecedented accuracy and speed.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      category: "Technology",
      source: "api",
      sourceName: "Tech Medical Journal",
      isCrowdsourced: false,
      verificationStatus: "verified" as const,
      publishedAt: "2 hours ago"
    },
    {
      title: "Local Community Garden Initiative Transforms Urban Neighborhood",
      description: "Citizens in downtown area successfully convert vacant lot into thriving community space, providing fresh produce and bringing neighbors together.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
      category: "Cultural",
      source: "crowdsourced",
      sourceName: "Maria Rodriguez",
      isCrowdsourced: true,
      verificationStatus: "verified" as const,
      publishedAt: "4 hours ago"
    },
    {
      title: "Global Climate Summit Reaches Historic Carbon Reduction Agreement",
      description: "World leaders commit to ambitious new targets for reducing greenhouse gas emissions, with binding commitments from major industrial nations.",
      image: "https://images.unsplash.com/photo-1569163139394-de44cb5894be?w=600&h=400&fit=crop",
      category: "International",
      source: "api",
      sourceName: "International News Agency",
      isCrowdsourced: false,
      verificationStatus: "verified" as const,
      publishedAt: "6 hours ago"
    },
    {
      title: "New Public Transportation Route Reduces Commute Times by 40%",
      description: "Recently launched express bus service connecting suburban areas to city center shows remarkable success in first month of operation.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
      category: "National",
      source: "crowdsourced",
      sourceName: "David Kim",
      isCrowdsourced: true,
      verificationStatus: "under-verification" as const,
      publishedAt: "8 hours ago"
    },
    {
      title: "Scientists Discover New Species of Marine Life in Deep Ocean Trenches",
      description: "Research expedition uncovers previously unknown creatures living in extreme depths, providing insights into evolution and adaptation.",
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=400&fit=crop",
      category: "Science",
      source: "api",
      sourceName: "Marine Biology Institute",
      isCrowdsourced: false,
      verificationStatus: "verified" as const,
      publishedAt: "12 hours ago"
    },
    {
      title: "Local School's Innovative STEM Program Wins National Recognition",
      description: "Elementary school's hands-on science curriculum receives prestigious education award, inspiring similar programs nationwide.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      category: "Cultural",
      source: "crowdsourced",
      sourceName: "Jennifer Thompson",
      isCrowdsourced: true,
      verificationStatus: "verified" as const,
      publishedAt: "14 hours ago"
    },
    {
      title: "Economic Recovery Shows Strong Signs as Employment Rates Rise",
      description: "Latest employment statistics reveal significant improvement in job market across multiple sectors, indicating robust economic recovery.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop",
      category: "Economy",
      source: "api",
      sourceName: "Economic Research Center",
      isCrowdsourced: false,
      verificationStatus: "verified" as const,
      publishedAt: "16 hours ago"
    },
    {
      title: "Community Health Fair Provides Free Medical Screenings to 500 Residents",
      description: "Volunteer doctors and nurses team up with local organizations to offer essential health services to underserved community members.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      category: "Health",
      source: "crowdsourced",
      sourceName: "Dr. Sarah Mitchell",
      isCrowdsourced: true,
      verificationStatus: "verified" as const,
      publishedAt: "18 hours ago"
    },
    {
      title: "Revolutionary Battery Technology Promises Sustainable Energy Storage",
      description: "New lithium-free battery design offers higher capacity and faster charging while using abundant, environmentally friendly materials.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      category: "Technology",
      source: "api",
      sourceName: "Green Energy Weekly",
      isCrowdsourced: false,
      verificationStatus: "under-verification" as const,
      publishedAt: "20 hours ago"
    }
  ];

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
              {newsData.slice(0, visibleNews).map((news, index) => (
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
              ))}
            </div>

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
    </div>;
};
export default Index;
