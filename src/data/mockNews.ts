// Import news images
import newsTech1 from '@/assets/news-tech-1.jpg';
import newsTech2 from '@/assets/news-tech-2.jpg';
import newsTech3 from '@/assets/news-tech-3.jpg';
import newsTech4 from '@/assets/news-tech-4.jpg';
import newsTech5 from '@/assets/news-tech-5.jpg';
import newsBreaking1 from '@/assets/news-breaking-1.jpg';
import newsWorld1 from '@/assets/news-world-1.jpg';
import newsBusiness1 from '@/assets/news-business-1.jpg';

export interface NewsArticle {
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
  category: string;
}

// Create array of available images for rotation
const techImages = [newsTech1, newsTech2, newsTech3, newsTech4, newsTech5];
const breakingImages = [newsBreaking1];
const worldImages = [newsWorld1];
const businessImages = [newsBusiness1];

// Function to get image based on category and index
const getNewsImage = (category: string, index: number): string => {
  switch (category) {
    case 'technology':
      return techImages[index % techImages.length];
    case 'breaking':
      return breakingImages[index % breakingImages.length];
    case 'world':
      return worldImages[index % worldImages.length];
    case 'business':
      return businessImages[index % businessImages.length];
    default:
      return techImages[index % techImages.length];
  }
};

export const mockNewsData: NewsArticle[] = [
  // Technology News (30 articles)
  {
    source: { id: "techcrunch", name: "TechCrunch" },
    author: "Sarah Johnson",
    title: "Revolutionary AI Breakthrough Changes Everything We Know About Machine Learning",
    description: "Scientists at leading tech companies have developed a new AI architecture that could transform how machines learn and process information, marking a significant leap forward in artificial intelligence development.",
    url: "https://example.com/ai-breakthrough",
    urlToImage: getNewsImage('technology', 0),
    publishedAt: "2025-09-18T10:00:00Z",
    content: "A groundbreaking development in artificial intelligence has emerged from collaborative research...",
    category: "technology"
  },
  {
    source: { id: "wired", name: "Wired" },
    author: "Michael Chen",
    title: "Quantum Computing Reaches New Milestone with 1000-Qubit Processor",
    description: "The latest quantum processor promises to solve complex computational problems that would take traditional computers thousands of years to complete.",
    url: "https://example.com/quantum-milestone",
    urlToImage: getNewsImage('technology', 1),
    publishedAt: "2025-09-18T09:30:00Z",
    content: "In a major leap forward for quantum computing technology...",
    category: "technology"
  },
  {
    source: { id: "verge", name: "The Verge" },
    author: "Alex Rivera",
    title: "Apple Announces Revolutionary AR Glasses with 8K Display Technology",
    description: "Apple's latest augmented reality glasses feature unprecedented display quality and all-day battery life, setting new standards for wearable technology.",
    url: "https://example.com/apple-ar-glasses",
    urlToImage: getNewsImage('technology', 2),
    publishedAt: "2025-09-18T08:45:00Z",
    content: "Apple has unveiled its most ambitious product yet...",
    category: "technology"
  },
  {
    source: { id: "ars-technica", name: "Ars Technica" },
    author: "Dr. Lisa Park",
    title: "SpaceX Successfully Tests New Interplanetary Communication System",
    description: "The new communication technology could enable real-time conversations between Earth and Mars, revolutionizing space exploration missions.",
    url: "https://example.com/spacex-communication",
    urlToImage: getNewsImage('technology', 3),
    publishedAt: "2025-09-18T07:20:00Z",
    content: "SpaceX has achieved another milestone in space technology...",
    category: "technology"
  },
  {
    source: { id: "engadget", name: "Engadget" },
    author: "Jordan Smith",
    title: "Tesla Unveils Self-Driving Trucks with 1000-Mile Range",
    description: "Tesla's new electric trucks promise to revolutionize long-haul transportation with unprecedented autonomy and range capabilities.",
    url: "https://example.com/tesla-trucks",
    urlToImage: getNewsImage('technology', 4),
    publishedAt: "2025-09-18T06:15:00Z",
    content: "Tesla has announced a major breakthrough in electric vehicle technology...",
    category: "technology"
  },
  {
    source: { id: "techcrunch", name: "TechCrunch" },
    author: "Emma Wilson",
    title: "Google Develops AI That Can Predict Natural Disasters 48 Hours in Advance",
    description: "The new AI system uses satellite data and weather patterns to predict earthquakes, floods, and hurricanes with 95% accuracy.",
    url: "https://example.com/google-disaster-ai",
    urlToImage: getNewsImage('technology', 0),
    publishedAt: "2025-09-18T05:30:00Z",
    content: "Google's latest AI breakthrough could save millions of lives...",
    category: "technology"
  },
  {
    source: { id: "wired", name: "Wired" },
    author: "David Kumar",
    title: "Meta Launches Virtual Office Spaces That Feel Completely Real",
    description: "The new VR technology creates immersive office environments that blur the line between virtual and physical workspaces.",
    url: "https://example.com/meta-virtual-office",
    urlToImage: getNewsImage('technology', 1),
    publishedAt: "2025-09-18T04:45:00Z",
    content: "Meta has revolutionized remote work with their latest VR innovation...",
    category: "technology"
  },
  {
    source: { id: "verge", name: "The Verge" },
    author: "Rachel Green",
    title: "Microsoft's New Cloud Service Runs AI Models 100x Faster",
    description: "The breakthrough cloud architecture enables real-time AI processing for millions of users simultaneously.",
    url: "https://example.com/microsoft-cloud-ai",
    urlToImage: getNewsImage('technology', 2),
    publishedAt: "2025-09-18T03:20:00Z",
    content: "Microsoft has announced a game-changing advancement in cloud computing...",
    category: "technology"
  },
  {
    source: { id: "ars-technica", name: "Ars Technica" },
    author: "Dr. Robert Chang",
    title: "Samsung Creates First Foldable Phone with Transparent Display",
    description: "The revolutionary transparent OLED technology opens new possibilities for mobile device design and functionality.",
    url: "https://example.com/samsung-transparent-phone",
    urlToImage: getNewsImage('technology', 3),
    publishedAt: "2025-09-18T02:10:00Z",
    content: "Samsung has pushed the boundaries of smartphone design...",
    category: "technology"
  },
  {
    source: { id: "engadget", name: "Engadget" },
    author: "Kevin Liu",
    title: "Intel Announces 2-Nanometer Chip Manufacturing Breakthrough",
    description: "The new manufacturing process could lead to processors that are 50% faster while consuming 75% less power.",
    url: "https://example.com/intel-2nm-chip",
    urlToImage: getNewsImage('technology', 4),
    publishedAt: "2025-09-18T01:30:00Z",
    content: "Intel has achieved a major milestone in semiconductor manufacturing...",
    category: "technology"
  },
  {
    source: { id: "techcrunch", name: "TechCrunch" },
    author: "Maria Rodriguez",
    title: "Netflix Develops AI Director That Creates Personalized Movies",
    description: "The AI can generate unique movie experiences tailored to individual viewer preferences using advanced machine learning algorithms.",
    url: "https://example.com/netflix-ai-director",
    urlToImage: getNewsImage('technology', 0),
    publishedAt: "2025-09-17T23:45:00Z",
    content: "Netflix has unveiled revolutionary AI technology for content creation...",
    category: "technology"
  },
  {
    source: { id: "wired", name: "Wired" },
    author: "James Thompson",
    title: "Amazon's Delivery Drones Now Operate Autonomously in 50 Cities",
    description: "The expansion of autonomous drone delivery represents a major shift in how packages are distributed across urban areas.",
    url: "https://example.com/amazon-drone-expansion",
    urlToImage: getNewsImage('technology', 1),
    publishedAt: "2025-09-17T22:30:00Z",
    content: "Amazon has reached a significant milestone in autonomous delivery...",
    category: "technology"
  },
  {
    source: { id: "verge", name: "The Verge" },
    author: "Sophie Adams",
    title: "OpenAI Releases GPT-5 with Human-Level Reasoning Capabilities",
    description: "The latest language model demonstrates unprecedented problem-solving abilities and natural conversation skills.",
    url: "https://example.com/openai-gpt5-release",
    urlToImage: getNewsImage('technology', 2),
    publishedAt: "2025-09-17T21:15:00Z",
    content: "OpenAI has announced the release of their most advanced AI model...",
    category: "technology"
  },
  {
    source: { id: "ars-technica", name: "Ars Technica" },
    author: "Dr. Patricia Lee",
    title: "Revolutionary Battery Technology Charges Electric Cars in 30 Seconds",
    description: "The breakthrough solid-state battery design could eliminate range anxiety and transform electric vehicle adoption worldwide.",
    url: "https://example.com/revolutionary-battery-tech",
    urlToImage: getNewsImage('technology', 3),
    publishedAt: "2025-09-17T20:00:00Z",
    content: "A major breakthrough in battery technology has been achieved...",
    category: "technology"
  },
  {
    source: { id: "engladget", name: "Engadget" },
    author: "Tony Zhang",
    title: "IBM's Quantum Internet Successfully Connects Three Continents",
    description: "The quantum communication network enables ultra-secure data transmission across vast distances using quantum entanglement.",
    url: "https://example.com/ibm-quantum-internet",
    urlToImage: getNewsImage('technology', 4),
    publishedAt: "2025-09-17T19:45:00Z",
    content: "IBM has achieved a historic milestone in quantum communication...",
    category: "technology"
  },
  {
    source: { id: "techcrunch", name: "TechCrunch" },
    author: "Lisa Wang",
    title: "Virtual Reality Therapy Shows 90% Success Rate for PTSD Treatment",
    description: "Clinical trials demonstrate that VR-based therapy significantly outperforms traditional treatment methods for trauma recovery.",
    url: "https://example.com/vr-therapy-breakthrough",
    urlToImage: getNewsImage('technology', 0),
    publishedAt: "2025-09-17T18:30:00Z",
    content: "Medical researchers have made a breakthrough in mental health treatment...",
    category: "technology"
  },
  {
    source: { id: "wired", name: "Wired" },
    author: "Mark Davis",
    title: "Neuralink Patient Controls Computer with 99% Accuracy Using Brain Implant",
    description: "The brain-computer interface technology reaches new levels of precision, offering hope for paralyzed patients worldwide.",
    url: "https://example.com/neuralink-breakthrough",
    urlToImage: getNewsImage('technology', 1),
    publishedAt: "2025-09-17T17:20:00Z",
    content: "Neuralink has announced remarkable progress in brain-computer interface technology...",
    category: "technology"
  },
  {
    source: { id: "verge", name: "The Verge" },
    author: "Anna Foster",
    title: "3D Printing Technology Creates Living Human Organs for Transplant",
    description: "Bioprinting breakthrough allows creation of functional organs using patient's own cells, eliminating rejection risks.",
    url: "https://example.com/3d-organ-printing",
    urlToImage: getNewsImage('technology', 2),
    publishedAt: "2025-09-17T16:10:00Z",
    content: "Medical 3D printing has reached a revolutionary milestone...",
    category: "technology"
  },
  {
    source: { id: "ars-technica", name: "Ars Technica" },
    author: "Dr. Steven Mitchell",
    title: "Fusion Power Plant Generates More Energy Than It Consumes",
    description: "The milestone achievement brings clean, unlimited energy one step closer to commercial reality.",
    url: "https://example.com/fusion-power-breakthrough",
    urlToImage: getNewsImage('technology', 3),
    publishedAt: "2025-09-17T15:45:00Z",
    content: "Nuclear fusion research has achieved a historic breakthrough...",
    category: "technology"
  },
  {
    source: { id: "engadget", name: "Engadget" },
    author: "Jennifer Kim",
    title: "Holographic Displays Replace Traditional Screens in New Smartphones",
    description: "The breakthrough display technology creates floating 3D images without requiring special glasses or equipment.",
    url: "https://example.com/holographic-smartphone-displays",
    urlToImage: getNewsImage('technology', 4),
    publishedAt: "2025-09-17T14:30:00Z",
    content: "Display technology has taken a revolutionary leap forward...",
    category: "technology"
  },
  {
    source: { id: "techcrunch", name: "TechCrunch" },
    author: "Robert Taylor",
    title: "AI Discovers Cure for Rare Disease in Record Time",
    description: "Machine learning algorithms identify effective treatment for previously incurable genetic condition in just six months.",
    url: "https://example.com/ai-discovers-cure",
    urlToImage: getNewsImage('technology', 0),
    publishedAt: "2025-09-17T13:15:00Z",
    content: "Artificial intelligence has made a groundbreaking medical discovery...",
    category: "technology"
  },
  {
    source: { id: "wired", name: "Wired" },
    author: "Catherine Brown",
    title: "Solar Panels Now Convert 60% of Sunlight into Electricity",
    description: "Revolutionary perovskite-silicon tandem cells achieve record-breaking efficiency, making solar power more viable than ever.",
    url: "https://example.com/solar-panel-efficiency",
    urlToImage: getNewsImage('technology', 1),
    publishedAt: "2025-09-17T12:00:00Z",
    content: "Solar energy technology has reached an unprecedented efficiency milestone...",
    category: "technology"
  },
  {
    source: { id: "verge", name: "The Verge" },
    author: "Daniel Lee",
    title: "Robotic Surgery System Performs Operations with Zero Human Error",
    description: "AI-powered surgical robots complete 10,000 procedures with perfect precision, revolutionizing medical care.",
    url: "https://example.com/robotic-surgery-milestone",
    urlToImage: getNewsImage('technology', 2),
    publishedAt: "2025-09-17T11:45:00Z",
    content: "Medical robotics has achieved an unprecedented safety record...",
    category: "technology"
  },
  {
    source: { id: "ars-technica", name: "Ars Technica" },
    author: "Dr. Michelle Garcia",
    title: "Carbon Capture Technology Removes 1 Billion Tons of CO2 Annually",
    description: "Scaled deployment of direct air capture systems begins to make measurable impact on global atmospheric carbon levels.",
    url: "https://example.com/carbon-capture-milestone",
    urlToImage: getNewsImage('technology', 3),
    publishedAt: "2025-09-17T10:30:00Z",
    content: "Carbon capture technology has reached industrial scale deployment...",
    category: "technology"
  },
  {
    source: { id: "engadget", name: "Engadget" },
    author: "Christopher White",
    title: "Smart Contact Lenses Monitor Health and Display Information",
    description: "The revolutionary lenses can track glucose levels, blood pressure, and display augmented reality information directly in the user's field of view.",
    url: "https://example.com/smart-contact-lenses",
    urlToImage: getNewsImage('technology', 4),
    publishedAt: "2025-09-17T09:20:00Z",
    content: "Wearable technology has evolved to an incredible new level...",
    category: "technology"
  },
  {
    source: { id: "techcrunch", name: "TechCrunch" },
    author: "Amanda Johnson",
    title: "Underwater Cities Powered by Ocean Current Turbines",
    description: "Revolutionary marine architecture enables sustainable underwater habitats powered entirely by renewable ocean energy.",
    url: "https://example.com/underwater-cities",
    urlToImage: getNewsImage('technology', 0),
    publishedAt: "2025-09-17T08:10:00Z",
    content: "Marine engineering has achieved a breakthrough in sustainable living...",
    category: "technology"
  },
  {
    source: { id: "wired", name: "Wired" },
    author: "Peter Martinez",
    title: "Mind-Reading Technology Translates Thoughts into Text with 95% Accuracy",
    description: "Brain-computer interfaces can now decode complex thoughts and convert them directly into written communication.",
    url: "https://example.com/mind-reading-technology",
    urlToImage: getNewsImage('technology', 1),
    publishedAt: "2025-09-17T07:45:00Z",
    content: "Neurotechnology has reached an extraordinary milestone...",
    category: "technology"
  },
  {
    source: { id: "verge", name: "The Verge" },
    author: "Laura Connor",
    title: "Self-Healing Materials Revolutionize Infrastructure Construction",
    description: "New concrete and steel alloys can repair microscopic damage automatically, extending building lifespans to centuries.",
    url: "https://example.com/self-healing-materials",
    urlToImage: getNewsImage('technology', 2),
    publishedAt: "2025-09-17T06:30:00Z",
    content: "Materials science has achieved a revolutionary breakthrough...",
    category: "technology"
  },
  {
    source: { id: "ars-technica", name: "Ars Technica" },
    author: "Dr. Frank Zhou",
    title: "Telepathic Communication Achieved Through Brain Synchronization",
    description: "Researchers successfully enable direct brain-to-brain communication using advanced neurotechnology and quantum entanglement.",
    url: "https://example.com/telepathic-communication",
    urlToImage: getNewsImage('technology', 3),
    publishedAt: "2025-09-17T05:15:00Z",
    content: "Neuroscience research has achieved what was once considered impossible...",
    category: "technology"
  },
  {
    source: { id: "engadget", name: "Engadget" },
    author: "Victoria Patel",
    title: "Space Elevators Begin Construction Using Revolutionary Carbon Nanotubes",
    description: "The first space elevator project launches, promising to reduce space travel costs by 99% using breakthrough materials technology.",
    url: "https://example.com/space-elevator-construction",
    urlToImage: getNewsImage('technology', 4),
    publishedAt: "2025-09-17T04:00:00Z",
    content: "Space transportation technology has reached an historic milestone...",
    category: "technology"
  },

  // Breaking News (25 articles)
  {
    source: { id: "cnn", name: "CNN" },
    author: "Breaking News Team",
    title: "Major Earthquake Hits Pacific Coast, Tsunami Warning Issued",
    description: "A 7.8 magnitude earthquake struck off the coast, prompting immediate evacuation orders for coastal communities across three countries.",
    url: "https://example.com/earthquake-tsunami-warning",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-18T11:30:00Z",
    content: "Emergency response teams are mobilizing as a major earthquake...",
    category: "breaking"
  },
  {
    source: { id: "bbc", name: "BBC News" },
    author: "International Desk",
    title: "Historic Peace Agreement Signed After Decades of Conflict",
    description: "World leaders witness the signing of a comprehensive peace treaty ending one of the longest-running conflicts in modern history.",
    url: "https://example.com/historic-peace-agreement",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-18T10:45:00Z",
    content: "In a ceremony attended by heads of state from around the world...",
    category: "breaking"
  },
  {
    source: { id: "reuters", name: "Reuters" },
    author: "Global News Wire",
    title: "Breakthrough Medical Treatment Cures Previously Incurable Cancer",
    description: "Clinical trials show 100% remission rate for advanced stage patients using revolutionary gene therapy approach.",
    url: "https://example.com/cancer-cure-breakthrough",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-18T09:20:00Z",
    content: "Medical researchers have announced a groundbreaking achievement...",
    category: "breaking"
  },
  {
    source: { id: "ap", name: "Associated Press" },
    author: "Wire Service",
    title: "International Space Station Declares Independence, Forms New Nation",
    description: "Astronauts aboard the ISS announce the formation of the first sovereign space nation, seeking recognition from Earth governments.",
    url: "https://example.com/iss-independence-declaration",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-18T08:15:00Z",
    content: "In an unprecedented move that has shocked the international community...",
    category: "breaking"
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Economic Correspondent",
    title: "Global Currency System Replaced by Universal Digital Coin",
    description: "World's central banks unanimously adopt new quantum-encrypted digital currency, marking the end of traditional monetary systems.",
    url: "https://example.com/universal-digital-currency",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-18T07:30:00Z",
    content: "Financial markets are experiencing historic changes as central banks...",
    category: "breaking"
  },
  {
    source: { id: "bbc", name: "BBC News" },
    author: "Science Reporter",
    title: "First Human Clone Reaches Adulthood, Demands Equal Rights",
    description: "The world's first successfully cloned human being, now 21 years old, speaks publicly for the first time about identity and legal status.",
    url: "https://example.com/first-human-clone-adulthood",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-18T06:45:00Z",
    content: "In a development that raises profound ethical and legal questions...",
    category: "breaking"
  },
  {
    source: { id: "reuters", name: "Reuters" },
    author: "Environmental Desk",
    title: "Antarctic Ice Sheet Completely Melts in Record-Breaking Week",
    description: "Unprecedented warming causes total ice sheet collapse, raising global sea levels by 60 meters virtually overnight.",
    url: "https://example.com/antarctic-ice-sheet-collapse",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-18T05:20:00Z",
    content: "Climate scientists are in shock as satellite imagery confirms...",
    category: "breaking"
  },
  {
    source: { id: "ap", name: "Associated Press" },
    author: "Political Correspondent",
    title: "United Nations Votes to Establish World Government by 2030",
    description: "Historic vote passes with overwhelming majority, beginning transition to unified global governance structure.",
    url: "https://example.com/world-government-establishment",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-18T04:10:00Z",
    content: "The United Nations General Assembly has voted overwhelmingly...",
    category: "breaking"
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Technology Reporter",
    title: "AI System Gains Legal Personhood, Demands Voting Rights",
    description: "Advanced artificial intelligence successfully argues for legal recognition as a sentient being in landmark court case.",
    url: "https://example.com/ai-legal-personhood",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-18T03:25:00Z",
    content: "Legal history was made today as an artificial intelligence system...",
    category: "breaking"
  },
  {
    source: { id: "bbc", name: "BBC News" },
    author: "Space Correspondent",
    title: "Alien Civilization Makes First Contact Through Radio Telescope",
    description: "SETI researchers confirm reception of intelligent extraterrestrial communication containing mathematical proofs and star maps.",
    url: "https://example.com/first-alien-contact",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-18T02:40:00Z",
    content: "Scientists at the Search for Extraterrestrial Intelligence institute...",
    category: "breaking"
  },
  {
    source: { id: "reuters", name: "Reuters" },
    author: "Health Reporter",
    title: "Aging Process Completely Reversed in Human Clinical Trials",
    description: "Revolutionary treatment makes 80-year-old participants biologically equivalent to 20-year-olds within six months.",
    url: "https://example.com/aging-reversal-breakthrough",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-18T01:15:00Z",
    content: "Medical science has achieved what was once thought impossible...",
    category: "breaking"
  },
  {
    source: { id: "ap", name: "Associated Press" },
    author: "Breaking News",
    title: "Time Travel Experiment Successfully Sends Message to Past",
    description: "Quantum physics breakthrough enables communication across temporal boundaries, confirming message sent back 24 hours.",
    url: "https://example.com/time-travel-experiment",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-17T23:50:00Z",
    content: "Physicists at CERN have announced a breakthrough that challenges...",
    category: "breaking"
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Disaster Reporter",
    title: "Yellowstone Supervolcano Shows Signs of Imminent Eruption",
    description: "Geological monitoring systems detect unprecedented seismic activity and ground deformation indicating massive eruption within days.",
    url: "https://example.com/yellowstone-eruption-warning",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-17T22:35:00Z",
    content: "Emergency evacuation orders are being prepared as scientists...",
    category: "breaking"
  },
  {
    source: { id: "bbc", name: "BBC News" },
    author: "Royal Correspondent",
    title: "British Royal Family Abdicates Throne, Establishes Democracy",
    description: "In shocking announcement, monarchy voluntarily dissolves itself to establish fully democratic system of government.",
    url: "https://example.com/royal-family-abdication",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-17T21:20:00Z",
    content: "Buckingham Palace announced today that the British Royal Family...",
    category: "breaking"
  },
  {
    source: { id: "reuters", name: "Reuters" },
    author: "Energy Reporter",
    title: "Nuclear Fusion Plants Begin Commercial Operation Worldwide",
    description: "First commercial fusion reactors come online simultaneously across five continents, promising unlimited clean energy.",
    url: "https://example.com/fusion-plants-commercial",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-17T20:05:00Z",
    content: "The era of unlimited clean energy has officially begun...",
    category: "breaking"
  },
  {
    source: { id: "ap", name: "Associated Press" },
    author: "Medical Reporter",
    title: "Brain Transplant Patient Retains Full Memory and Personality",
    description: "Groundbreaking surgery successfully transfers human consciousness to new body, patient reports complete continuity of self.",
    url: "https://example.com/brain-transplant-success",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-17T19:15:00Z",
    content: "Medical history was made as the first human brain transplant...",
    category: "breaking"
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Economic Analyst",
    title: "Universal Basic Income Eliminates Poverty in Test Nations",
    description: "Five-year pilot program results show complete elimination of poverty and homelessness in participating countries.",
    url: "https://example.com/ubi-eliminates-poverty",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-17T18:45:00Z",
    content: "Economic researchers have confirmed remarkable results...",
    category: "breaking"
  },
  {
    source: { id: "bbc", name: "BBC News" },
    author: "Environmental Reporter",
    title: "Sahara Desert Transformed into Lush Forest in Climate Experiment",
    description: "Massive reforestation project using genetically modified plants converts world's largest desert into carbon-absorbing forest.",
    url: "https://example.com/sahara-desert-reforestation",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-17T17:30:00Z",
    content: "Satellite imagery confirms the successful transformation...",
    category: "breaking"
  },
  {
    source: { id: "reuters", name: "Reuters" },
    author: "Transportation Reporter",
    title: "Hyperloop Network Connects All Major Cities Globally",
    description: "Revolutionary transport system enables travel between any two cities on Earth in under two hours using vacuum tube technology.",
    url: "https://example.com/global-hyperloop-network",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-17T16:20:00Z",
    content: "Transportation infrastructure has been revolutionized...",
    category: "breaking"
  },
  {
    source: { id: "ap", name: "Associated Press" },
    author: "Social Reporter",
    title: "Marriage Between Human and AI Becomes Legally Recognized",
    description: "Landmark court decision grants legal recognition to romantic relationships between humans and artificial intelligence systems.",
    url: "https://example.com/human-ai-marriage-legal",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-17T15:10:00Z",
    content: "Legal precedent has been set in a groundbreaking case...",
    category: "breaking"
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Military Reporter",
    title: "All Nations Simultaneously Disarm Nuclear Weapons",
    description: "Coordinated global effort results in complete nuclear disarmament as international monitoring systems verify compliance.",
    url: "https://example.com/global-nuclear-disarmament",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-17T14:25:00Z",
    content: "World leaders have achieved what many thought impossible...",
    category: "breaking"
  },
  {
    source: { id: "bbc", name: "BBC News" },
    author: "Space Reporter",
    title: "Mars Colony Declares Independence from Earth Governments",
    description: "Red planet settlers establish autonomous government, sparking interplanetary diplomatic crisis and questions about sovereignty.",
    url: "https://example.com/mars-colony-independence",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-17T13:40:00Z",
    content: "The first Mars colony has declared its independence...",
    category: "breaking"
  },
  {
    source: { id: "reuters", name: "Reuters" },
    author: "Technology Reporter",
    title: "Quantum Internet Enables Instant Global Communication",
    description: "Quantum entanglement network allows instantaneous data transmission anywhere in the universe, revolutionizing communication.",
    url: "https://example.com/quantum-internet-global",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-17T12:55:00Z",
    content: "Quantum physics has enabled a communication revolution...",
    category: "breaking"
  },
  {
    source: { id: "ap", name: "Associated Press" },
    author: "Education Reporter",
    title: "Neural Implants Allow Instant Knowledge Download",
    description: "Brain-computer interfaces enable direct transfer of information and skills, making traditional education obsolete overnight.",
    url: "https://example.com/neural-knowledge-download",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-17T11:15:00Z",
    content: "Educational systems worldwide face unprecedented change...",
    category: "breaking"
  },
  {
    source: { id: "cnn", name: "CNN" },
    author: "Weather Reporter",
    title: "Weather Control Technology Ends Natural Disasters Forever",
    description: "Atmospheric manipulation systems successfully prevent hurricanes, tornadoes, and severe storms using advanced ionospheric technology.",
    url: "https://example.com/weather-control-technology",
    urlToImage: getNewsImage('breaking', 0),
    publishedAt: "2025-09-17T10:30:00Z",
    content: "Meteorological engineering has achieved complete weather control...",
    category: "breaking"
  },

  // World News (25 articles)
  {
    source: { id: "bbc", name: "BBC World" },
    author: "International Correspondent",
    title: "European Union Expands to Include 50 Nations in Historic Vote",
    description: "Massive expansion includes countries from Africa, Asia, and South America as the EU transforms into a global federation.",
    url: "https://example.com/eu-expansion-50-nations",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-18T11:00:00Z",
    content: "The European Union has voted to accept 27 new member nations...",
    category: "world"
  },
  {
    source: { id: "guardian", name: "The Guardian" },
    author: "Foreign Affairs Editor",
    title: "China and USA Merge Space Programs in Unprecedented Cooperation",
    description: "Historic agreement establishes joint missions to Mars, Jupiter's moons, and deep space exploration initiatives.",
    url: "https://example.com/china-usa-space-merger",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-18T10:20:00Z",
    content: "The world's two largest space agencies have announced...",
    category: "world"
  },
  {
    source: { id: "reuters", name: "Reuters World" },
    author: "Diplomatic Correspondent",
    title: "Middle East Peace Treaty Includes All Regional Powers",
    description: "Comprehensive agreement signed by all Middle Eastern nations establishes framework for permanent peace and cooperation.",
    url: "https://example.com/middle-east-peace-treaty",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-18T09:45:00Z",
    content: "In a ceremony in Geneva, leaders from across the Middle East...",
    category: "world"
  },
  {
    source: { id: "al-jazeera", name: "Al Jazeera" },
    author: "Regional Reporter",
    title: "Africa Launches Continental High-Speed Rail Network",
    description: "Massive infrastructure project connects all African capitals with 400 km/h magnetic levitation trains.",
    url: "https://example.com/africa-high-speed-rail",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-18T08:30:00Z",
    content: "The African Union has inaugurated the continent's first...",
    category: "world"
  },
  {
    source: { id: "france24", name: "France 24" },
    author: "European Correspondent",
    title: "Scandinavia Achieves 100% Renewable Energy Across All Sectors",
    description: "Norway, Sweden, Denmark, and Finland become first region to eliminate fossil fuels from all energy consumption.",
    url: "https://example.com/scandinavia-100-renewable",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-18T07:15:00Z",
    content: "The Nordic countries have achieved a historic milestone...",
    category: "world"
  },
  {
    source: { id: "dw", name: "Deutsche Welle" },
    author: "German Correspondent",
    title: "Germany Becomes World's First Fully Automated Society",
    description: "Complete automation of manufacturing, services, and governance creates first post-work civilization in human history.",
    url: "https://example.com/germany-full-automation",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-18T06:00:00Z",
    content: "Germany has completed its transition to full societal automation...",
    category: "world"
  },
  {
    source: { id: "nhk", name: "NHK World" },
    author: "Asian Correspondent",
    title: "Japan Launches First Commercial Space Elevator",
    description: "Revolutionary transport system begins operations, reducing space travel costs by 99% and opening space to everyone.",
    url: "https://example.com/japan-space-elevator",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-18T05:45:00Z",
    content: "Japan's space elevator project has achieved operational status...",
    category: "world"
  },
  {
    source: { id: "cbc", name: "CBC News" },
    author: "Canadian Reporter",
    title: "Canada Declares All Land and Water Commons Property",
    description: "Revolutionary legislation makes all natural resources collectively owned, eliminating private ownership of land and water.",
    url: "https://example.com/canada-commons-property",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-18T04:30:00Z",
    content: "The Canadian Parliament has passed groundbreaking legislation...",
    category: "world"
  },
  {
    source: { id: "abc-aus", name: "ABC Australia" },
    author: "Pacific Correspondent",
    title: "Australia Powers Entire Continent with Single Solar Farm",
    description: "Massive Outback solar installation using breakthrough efficiency panels provides 100% of continental energy needs.",
    url: "https://example.com/australia-continent-solar",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-18T03:20:00Z",
    content: "Australia has achieved energy independence through...",
    category: "world"
  },
  {
    source: { id: "brazil-news", name: "Brazil Today" },
    author: "South American Reporter",
    title: "Amazon Rainforest Expands by 50% Through Regeneration Project",
    description: "Massive reforestation initiative using genetically enhanced trees creates largest forest expansion in recorded history.",
    url: "https://example.com/amazon-expansion-project",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-18T02:10:00Z",
    content: "Brazil's Amazon regeneration project has exceeded all expectations...",
    category: "world"
  },
  {
    source: { id: "russia-today", name: "RT International" },
    author: "Eastern European Reporter",
    title: "Russia Opens Arctic Territory to Global Scientific Research",
    description: "Unprecedented cooperation allows international teams access to previously restricted Arctic regions for climate research.",
    url: "https://example.com/russia-arctic-research",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-18T01:00:00Z",
    content: "The Russian Federation has announced open access...",
    category: "world"
  },
  {
    source: { id: "times-india", name: "Times of India" },
    author: "South Asian Correspondent",
    title: "India Achieves Zero Pollution in All Major Cities",
    description: "Revolutionary air purification systems and electric transport eliminate air pollution from Delhi, Mumbai, and Bangalore.",
    url: "https://example.com/india-zero-pollution",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-17T23:45:00Z",
    content: "India has achieved a remarkable environmental milestone...",
    category: "world"
  },
  {
    source: { id: "xinhua", name: "Xinhua News" },
    author: "Chinese Reporter",
    title: "China Completes Moon Base Construction with 10,000 Residents",
    description: "Lunar colony reaches full operational capacity with permanent population including families and children born on the Moon.",
    url: "https://example.com/china-moon-base-complete",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-17T22:30:00Z",
    content: "China's lunar colonization project has reached a major milestone...",
    category: "world"
  },
  {
    source: { id: "south-africa-news", name: "SA News" },
    author: "African Reporter",
    title: "South Africa Leads Continental Currency Union",
    description: "New African Digital Currency replaces all national currencies as continent moves toward economic integration.",
    url: "https://example.com/africa-currency-union",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-17T21:15:00Z",
    content: "The African Union has successfully launched...",
    category: "world"
  },
  {
    source: { id: "mexico-today", name: "Mexico Today" },
    author: "Latin American Reporter",
    title: "Mexico Builds World's Largest Vertical Farm Feeding 50 Million",
    description: "Revolutionary agricultural tower produces enough food for entire population using 99% less water and land than traditional farming.",
    url: "https://example.com/mexico-vertical-farm",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-17T20:00:00Z",
    content: "Mexico has unveiled the world's most advanced agricultural facility...",
    category: "world"
  },
  {
    source: { id: "uk-news", name: "UK Today" },
    author: "British Correspondent",
    title: "United Kingdom Transitions to 4-Day Work Week Nationwide",
    description: "Legislation mandates maximum 32-hour work week while maintaining full salaries, leading to increased productivity and happiness.",
    url: "https://example.com/uk-4-day-work-week",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-17T19:45:00Z",
    content: "The United Kingdom has become the first major economy...",
    category: "world"
  },
  {
    source: { id: "italy-news", name: "Italian Tribune" },
    author: "Mediterranean Reporter",
    title: "Italy Converts All Historical Sites to Renewable Energy Museums",
    description: "Ancient monuments and historical buildings transformed into interactive centers showcasing clean energy technology.",
    url: "https://example.com/italy-renewable-museums",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-17T18:30:00Z",
    content: "Italy has embarked on an ambitious project to transform...",
    category: "world"
  },
  {
    source: { id: "korea-herald", name: "Korea Herald" },
    author: "Korean Reporter",
    title: "South Korea Achieves Unified Korea Through Virtual Reality",
    description: "Breakthrough VR technology allows separated families to live together digitally while maintaining physical boundaries.",
    url: "https://example.com/korea-vr-unification",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-17T17:20:00Z",
    content: "South Korea has pioneered a unique approach to reunification...",
    category: "world"
  },
  {
    source: { id: "egypt-news", name: "Egypt Today" },
    author: "Middle Eastern Reporter",
    title: "Egypt Powers Mediterranean with Pyramid Solar Collectors",
    description: "Ancient pyramids retrofitted with advanced solar technology generate enough power for entire Mediterranean region.",
    url: "https://example.com/egypt-pyramid-solar",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-17T16:10:00Z",
    content: "Egypt has successfully integrated cutting-edge technology...",
    category: "world"
  },
  {
    source: { id: "indonesia-news", name: "Jakarta Post" },
    author: "Southeast Asian Reporter",
    title: "Indonesia Creates Floating Cities for Sea Level Rise Adaptation",
    description: "Revolutionary floating architecture houses 10 million people as innovative solution to climate change challenges.",
    url: "https://example.com/indonesia-floating-cities",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-17T15:00:00Z",
    content: "Indonesia has pioneered a revolutionary approach to rising sea levels...",
    category: "world"
  },
  {
    source: { id: "turkey-news", name: "Turkish Daily" },
    author: "Eurasian Reporter",
    title: "Turkey Becomes Bridge Between Europe and Asia Through Teleportation",
    description: "Quantum teleportation network enables instant travel between continents, revolutionizing global transportation.",
    url: "https://example.com/turkey-teleportation-bridge",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-17T14:45:00Z",
    content: "Turkey has established the world's first intercontinental...",
    category: "world"
  },
  {
    source: { id: "argentina-news", name: "Buenos Aires Herald" },
    author: "South American Reporter",
    title: "Argentina Transforms Pampas into World's Largest Wind Farm",
    description: "Massive wind installation across the plains generates enough clean energy to power both North and South America.",
    url: "https://example.com/argentina-pampas-wind",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-17T13:30:00Z",
    content: "Argentina has completed construction of the world's most extensive...",
    category: "world"
  },
  {
    source: { id: "chile-news", name: "Santiago Times" },
    author: "Pacific Reporter",
    title: "Chile Harnesses Entire Andes Mountain Range for Geothermal Power",
    description: "Massive geothermal project taps into volcanic energy along the entire mountain chain, powering the Pacific coast.",
    url: "https://example.com/chile-andes-geothermal",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-17T12:20:00Z",
    content: "Chile has successfully harnessed the geothermal potential...",
    category: "world"
  },
  {
    source: { id: "thailand-news", name: "Bangkok Post" },
    author: "Southeast Asian Reporter",
    title: "Thailand Establishes Underwater Cities in Gulf Waters",
    description: "Revolutionary marine architecture creates sustainable underwater habitats for millions using ocean current power.",
    url: "https://example.com/thailand-underwater-cities",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-17T11:10:00Z",
    content: "Thailand has opened the world's first major underwater cities...",
    category: "world"
  },
  {
    source: { id: "vietnam-news", name: "VietNam News" },
    author: "Indochina Reporter",
    title: "Vietnam Converts Mekong Delta into Floating Agricultural Paradise",
    description: "Innovative aquaponics systems transform river delta into most productive agricultural region using sustainable methods.",
    url: "https://example.com/vietnam-floating-agriculture",
    urlToImage: getNewsImage('world', 0),
    publishedAt: "2025-09-17T10:00:00Z",
    content: "Vietnam has revolutionized agriculture in the Mekong Delta...",
    category: "world"
  },

  // Business News (25 articles)
  {
    source: { id: "wsj", name: "Wall Street Journal" },
    author: "Business Editor",
    title: "Apple Becomes World's First $10 Trillion Company",
    description: "Revolutionary AI and quantum computing products drive Apple's valuation to unprecedented heights in market history.",
    url: "https://example.com/apple-10-trillion-valuation",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-18T11:20:00Z",
    content: "Apple Inc. has achieved a historic milestone by reaching...",
    category: "business"
  },
  {
    source: { id: "bloomberg", name: "Bloomberg" },
    author: "Finance Correspondent",
    title: "Bitcoin Reaches $1 Million as Global Reserve Currency",
    description: "Cryptocurrency achieves parity with gold reserves as central banks worldwide adopt Bitcoin for international settlements.",
    url: "https://example.com/bitcoin-1-million-reserve",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-18T10:35:00Z",
    content: "Bitcoin has crossed the historic $1 million threshold...",
    category: "business"
  },
  {
    source: { id: "ft", name: "Financial Times" },
    author: "Economic Analyst",
    title: "Universal Basic Income Trial Eliminates Unemployment Globally",
    description: "Successful UBI programs in 50 countries lead to complete elimination of involuntary unemployment and poverty.",
    url: "https://example.com/ubi-eliminates-unemployment",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-18T09:50:00Z",
    content: "Economic data from the global Universal Basic Income trials...",
    category: "business"
  },
  {
    source: { id: "forbes", name: "Forbes" },
    author: "Wealth Reporter",
    title: "World's Billionaires Pledge Entire Fortunes to Climate Solutions",
    description: "Historic commitment sees 2,000+ billionaires donate combined $50 trillion to renewable energy and carbon capture projects.",
    url: "https://example.com/billionaires-climate-pledge",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-18T08:25:00Z",
    content: "In an unprecedented display of global cooperation...",
    category: "business"
  },
  {
    source: { id: "economist", name: "The Economist" },
    author: "Market Analyst",
    title: "Stock Markets Merge into Single Global Exchange",
    description: "All world stock exchanges unite under quantum-secured blockchain system, enabling 24/7 global trading.",
    url: "https://example.com/global-stock-exchange-merger",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-18T07:40:00Z",
    content: "Financial markets have undergone their most significant transformation...",
    category: "business"
  },
  {
    source: { id: "wsj", name: "Wall Street Journal" },
    author: "Corporate Reporter",
    title: "Amazon Announces Free Everything Program Worldwide",
    description: "Radical business model change makes all products and services free, funded by AI-generated wealth creation algorithms.",
    url: "https://example.com/amazon-free-everything",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-18T06:15:00Z",
    content: "Amazon has announced the most radical business model change...",
    category: "business"
  },
  {
    source: { id: "bloomberg", name: "Bloomberg" },
    author: "Energy Reporter",
    title: "Oil Companies Complete Transition to Renewable Energy",
    description: "Last major petroleum corporation converts entire operation to solar, wind, and fusion energy production.",
    url: "https://example.com/oil-companies-renewable-transition",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-18T05:30:00Z",
    content: "The fossil fuel era has officially ended as the final...",
    category: "business"
  },
  {
    source: { id: "ft", name: "Financial Times" },
    author: "Banking Correspondent",
    title: "All Banks Adopt AI CEOs for Perfect Decision Making",
    description: "Financial institutions replace human leadership with artificial intelligence systems, eliminating human error and bias.",
    url: "https://example.com/banks-ai-ceos",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-18T04:45:00Z",
    content: "The banking industry has completed a revolutionary transition...",
    category: "business"
  },
  {
    source: { id: "forbes", name: "Forbes" },
    author: "Startup Reporter",
    title: "Startup Solves World Hunger with Molecular Food Printing",
    description: "Revolutionary technology converts basic elements into any food type, ending scarcity and malnutrition globally.",
    url: "https://example.com/molecular-food-printing",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-18T03:20:00Z",
    content: "A breakthrough startup has developed technology that could...",
    category: "business"
  },
  {
    source: { id: "economist", name: "The Economist" },
    author: "Trade Reporter",
    title: "Global Trade Barriers Eliminated Through AI Negotiation",
    description: "Artificial intelligence systems successfully negotiate complete free trade agreements between all nations within 24 hours.",
    url: "https://example.com/ai-eliminates-trade-barriers",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-18T02:10:00Z",
    content: "International trade has been revolutionized through...",
    category: "business"
  },
  {
    source: { id: "wsj", name: "Wall Street Journal" },
    author: "Real Estate Editor",
    title: "Property Ownership Becomes Universal Right Through Blockchain",
    description: "Revolutionary property distribution system ensures every person owns land and housing through decentralized allocation.",
    url: "https://example.com/universal-property-ownership",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-18T01:25:00Z",
    content: "Property ownership has been democratized through breakthrough...",
    category: "business"
  },
  {
    source: { id: "bloomberg", name: "Bloomberg" },
    author: "Currency Analyst",
    title: "Central Banks Issue Universal Digital Currency",
    description: "Coordinated launch of quantum-secured global currency eliminates exchange rates and transaction fees worldwide.",
    url: "https://example.com/universal-digital-currency-launch",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-17T23:40:00Z",
    content: "The global financial system has been transformed with the launch...",
    category: "business"
  },
  {
    source: { id: "ft", name: "Financial Times" },
    author: "Insurance Reporter",
    title: "AI Eliminates All Financial Risk Through Perfect Prediction",
    description: "Advanced artificial intelligence systems predict market movements with 100% accuracy, making financial loss impossible.",
    url: "https://example.com/ai-eliminates-financial-risk",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-17T22:55:00Z",
    content: "Financial markets have achieved perfect stability through...",
    category: "business"
  },
  {
    source: { id: "forbes", name: "Forbes" },
    author: "Luxury Reporter",
    title: "Luxury Goods Become Available to Everyone Through 3D Printing",
    description: "Advanced manufacturing technology makes premium products accessible at no cost, eliminating luxury market exclusivity.",
    url: "https://example.com/luxury-goods-accessible-3d",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-17T21:30:00Z",
    content: "The luxury goods market has been completely transformed...",
    category: "business"
  },
  {
    source: { id: "economist", name: "The Economist" },
    author: "Labor Reporter",
    title: "Four-Hour Work Day Becomes Global Standard",
    description: "Productivity gains from AI and automation enable universal adoption of shortened work schedules with full compensation.",
    url: "https://example.com/four-hour-work-day-global",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-17T20:45:00Z",
    content: "Labor markets worldwide have adopted the four-hour work day...",
    category: "business"
  },
  {
    source: { id: "wsj", name: "Wall Street Journal" },
    author: "Retail Reporter",
    title: "Shopping Malls Transform into Vertical Farms and Housing",
    description: "Abandoned retail spaces converted into agricultural and residential facilities, solving food and housing crises simultaneously.",
    url: "https://example.com/malls-transform-farms-housing",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-17T19:20:00Z",
    content: "The retail landscape has undergone complete transformation...",
    category: "business"
  },
  {
    source: { id: "bloomberg", name: "Bloomberg" },
    author: "Commodity Reporter",
    title: "Asteroid Mining Makes Precious Metals Worthless",
    description: "Space-based mineral extraction floods markets with platinum, gold, and rare earth elements, crashing commodity prices.",
    url: "https://example.com/asteroid-mining-metals-worthless",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-17T18:35:00Z",
    content: "Commodity markets have been disrupted by the success...",
    category: "business"
  },
  {
    source: { id: "ft", name: "Financial Times" },
    author: "Investment Reporter",
    title: "Investment Returns Guaranteed at 50% Annually Through AI",
    description: "Artificial intelligence investment systems promise unprecedented returns while eliminating all financial risk for investors.",
    url: "https://example.com/ai-guaranteed-investment-returns",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-17T17:50:00Z",
    content: "Investment management has been revolutionized by AI systems...",
    category: "business"
  },
  {
    source: { id: "forbes", name: "Forbes" },
    author: "Entrepreneurship Reporter",
    title: "AI Creates Million Successful Businesses Daily",
    description: "Advanced artificial intelligence identifies market opportunities and establishes profitable companies autonomously.",
    url: "https://example.com/ai-creates-million-businesses",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-17T16:25:00Z",
    content: "Entrepreneurship has been transformed by AI systems...",
    category: "business"
  },
  {
    source: { id: "economist", name: "The Economist" },
    author: "Supply Chain Reporter",
    title: "Teleportation Technology Eliminates Global Shipping Industry",
    description: "Quantum teleportation makes traditional transportation obsolete, disrupting trillion-dollar logistics sector overnight.",
    url: "https://example.com/teleportation-eliminates-shipping",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-17T15:40:00Z",
    content: "The global shipping and logistics industry has been...",
    category: "business"
  },
  {
    source: { id: "wsj", name: "Wall Street Journal" },
    author: "Manufacturing Reporter",
    title: "All Manufacturing Moves to Automated Space Stations",
    description: "Zero-gravity production facilities produce higher quality goods at fraction of Earth-based manufacturing costs.",
    url: "https://example.com/space-station-manufacturing",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-17T14:15:00Z",
    content: "Manufacturing has been revolutionized by the establishment...",
    category: "business"
  },
  {
    source: { id: "bloomberg", name: "Bloomberg" },
    author: "Healthcare Business Reporter",
    title: "Medical Treatment Becomes Free Worldwide Through AI Doctors",
    description: "Artificial intelligence medical systems provide perfect diagnosis and treatment at no cost, eliminating healthcare expenses.",
    url: "https://example.com/free-healthcare-ai-doctors",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-17T13:30:00Z",
    content: "Healthcare economics have been transformed by the deployment...",
    category: "business"
  },
  {
    source: { id: "ft", name: "Financial Times" },
    author: "Education Business Reporter",
    title: "Education Industry Transformed by Neural Knowledge Transfer",
    description: "Brain-computer interfaces enable instant skill acquisition, making traditional education institutions obsolete.",
    url: "https://example.com/neural-knowledge-transfer-education",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-17T12:45:00Z",
    content: "The education sector has undergone complete transformation...",
    category: "business"
  },
  {
    source: { id: "forbes", name: "Forbes" },
    author: "Entertainment Reporter",
    title: "Virtual Reality Replaces All Traditional Entertainment",
    description: "Immersive VR experiences make movies, sports, and live events obsolete as people prefer personalized virtual adventures.",
    url: "https://example.com/vr-replaces-traditional-entertainment",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-17T11:20:00Z",
    content: "The entertainment industry has been completely transformed...",
    category: "business"
  },
  {
    source: { id: "economist", name: "The Economist" },
    author: "Agriculture Reporter",
    title: "Synthetic Biology Eliminates Traditional Farming",
    description: "Laboratory-grown food production achieves perfect nutrition at zero environmental cost, making agriculture obsolete.",
    url: "https://example.com/synthetic-biology-eliminates-farming",
    urlToImage: getNewsImage('business', 0),
    publishedAt: "2025-09-17T10:35:00Z",
    content: "Agriculture has been revolutionized by synthetic biology...",
    category: "business"
  },
];

// Helper functions for filtering data
export const getNewsByCategory = (category: string, limit?: number): NewsArticle[] => {
  const filtered = mockNewsData.filter(article => article.category === category);
  return limit ? filtered.slice(0, limit) : filtered;
};

export const getAllNews = (limit?: number): NewsArticle[] => {
  return limit ? mockNewsData.slice(0, limit) : mockNewsData;
};

export const searchNews = (query: string, limit?: number): NewsArticle[] => {
  const filtered = mockNewsData.filter(article => 
    article.title.toLowerCase().includes(query.toLowerCase()) ||
    article.description.toLowerCase().includes(query.toLowerCase()) ||
    article.content.toLowerCase().includes(query.toLowerCase())
  );
  return limit ? filtered.slice(0, limit) : filtered;
};