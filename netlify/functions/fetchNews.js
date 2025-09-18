// frontend/src/api.js

export const fetchLatestNews = async (query = "latest", pageSize = 20, page = 1) => {
  try {
    // Call your Netlify serverless function instead of NewsAPI directly
    const url = `/.netlify/functions/fetchNews?q=${encodeURIComponent(query)}&pageSize=${pageSize}&page=${page}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();

    // Transform articles into your frontend format
    const validArticles = (data.articles || [])
      .filter(article =>
        article.title &&
        article.description &&
        article.title !== "[Removed]" &&
        article.description !== "[Removed]"
      )
      .map(article => ({
        title: article.title || "Untitled Article",
        description: article.description || "No description available.",
        image: article.urlToImage || undefined,
        category: "General", // you can keep your categorizeArticle() function if needed
        source: article.url,
        sourceName: article.source?.name || "Unknown Source",
        isCrowdsourced: false,
        verificationStatus: "verified",
        publishedAt: article.publishedAt,
      }));

    return validArticles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
