import React, { useEffect, useState } from "react";
import { fetchLatestNews } from "../services/newsApi";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  author: string;
  publishedAt: string;
}

const Index: React.FC = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        // Pick a random topic for variety
        const queries = [
          "technology",
          "sports",
          "politics",
          "business",
          "health",
          "science",
          "entertainment",
          "world",
          "finance",
          "education"
        ];
        const randomQuery = queries[Math.floor(Math.random() * queries.length)];

        const articles = await fetchLatestNews(randomQuery, 6);
        setNews(articles);
      } catch (err) {
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">NEWSnst</h1>
          <nav className="space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/report" className="text-gray-700 hover:text-blue-600">Report</a>
            <a href="/verify" className="text-gray-700 hover:text-blue-600">Verify</a>
            <a href="/ai-anchor" className="text-gray-700 hover:text-blue-600">AI Anchor</a>
            <select className="border rounded px-2 py-1">
              <option>English</option>
              <option>हिन्दी</option>
              <option>Español</option>
              <option>Français</option>
              <option>Deutsch</option>
              <option>中文</option>
              <option>日本語</option>
              <option>한국어</option>
              <option>Русский</option>
              <option>عربي</option>
            </select>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10">
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Latest News</h2>

          {loading ? (
            <p className="text-gray-500">Loading news...</p>
          ) : news.length === 0 ? (
            <p className="text-gray-500">No news available right now.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((article, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    src={article.urlToImage || "https://via.placeholder.com/400x200"}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {article.description || "No description available."}
                    </p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Read more →
                    </a>
                    <p className="text-xs text-gray-500 mt-2">
                      {article.author || "Unknown"} •{" "}
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Index;
