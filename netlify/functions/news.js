export async function handler(event) {
  try {
    const query = event.queryStringParameters.q || "latest";
    const pageSize = event.queryStringParameters.pageSize || 20;
    const page = event.queryStringParameters.page || 1;

    // Get date range: yesterday to today
    const today = new Date().toISOString().split("T")[0];
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split("T")[0];

    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
      query
    )}&from=${yesterday}&to=${today}&sortBy=publishedAt&pageSize=${pageSize}&page=${page}&apiKey=${process.env.NEWS_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch news", details: err.message }),
    };
  }
}
