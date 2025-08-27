const BreakingNews = () => {
  const breakingNews = [
    "🚨 Major climate summit reaches historic agreement on renewable energy targets",
    "⚡ Technology breakthrough: New battery technology promises 10x faster charging",
    "🏛️ Parliament passes landmark digital privacy legislation after months of debate",
    "🌍 Global economic summit addresses rising inflation concerns worldwide",
    "🔬 Scientists discover potential cure for rare genetic disease affecting children"
  ];

  return (
    <div className="bg-gradient-to-r from-red-accent to-gold-accent text-white py-2 overflow-hidden">
      <div className="flex items-center">
        <div className="flex-shrink-0 px-4">
          <span className="headline-font font-bold text-sm uppercase tracking-wide">
            Breaking News
          </span>
        </div>
        
        <div className="flex-1 overflow-hidden">
          <div className="animate-scroll-left whitespace-nowrap">
            <span className="inline-block body-font text-sm">
              {breakingNews.join(' • ')} • 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;