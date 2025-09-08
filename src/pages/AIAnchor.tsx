import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Settings, Shield, CheckCircle, Star, Clock, Globe, Users, Award, Bot, Mic, Camera, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AIAnchor = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentAnchor, setCurrentAnchor] = useState('sophia');
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [speed, setSpeed] = useState([1.0]);
  const [autoPlay, setAutoPlay] = useState(true);

  const anchors = [
    {
      id: 'sophia',
      name: 'Sophia Chen',
      specialty: 'Breaking News',
      languages: ['English', 'Mandarin', 'Spanish'],
      accuracy: 98.7,
      experience: '2.5M+ broadcasts',
      image: '/api/placeholder/300/400'
    },
    {
      id: 'marcus',
      name: 'Marcus Rivera',
      specialty: 'Politics & Economy',
      languages: ['English', 'Spanish', 'Portuguese'],
      accuracy: 99.1,
      experience: '1.8M+ broadcasts',
      image: '/api/placeholder/300/400'
    },
    {
      id: 'aisha',
      name: 'Aisha Patel',
      specialty: 'Technology & Science',
      languages: ['English', 'Hindi', 'Arabic'],
      accuracy: 97.9,
      experience: '3.2M+ broadcasts',
      image: '/api/placeholder/300/400'
    }
  ];

  const newsTopics = [
    { title: "Global Climate Summit Reaches Historic Agreement", category: "Environment", urgency: "high" },
    { title: "Breakthrough in Quantum Computing Announced", category: "Technology", urgency: "medium" },
    { title: "Stock Markets Show Mixed Results Amid Economic Uncertainty", category: "Finance", urgency: "low" },
    { title: "International Space Station Mission Success", category: "Space", urgency: "medium" }
  ];

  const stats = [
    { label: "AI Anchors Available", value: "50+", icon: Bot },
    { label: "Languages Supported", value: "35", icon: Globe },
    { label: "Daily Broadcasts", value: "10M+", icon: Mic },
    { label: "Accuracy Rate", value: "99.2%", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm font-medium">
                  <Bot className="w-4 h-4 mr-2" />
                  Next-Gen AI Technology
                </Badge>
                <h1 className="headline-font text-4xl md:text-6xl font-bold bg-gradient-to-r from-navy via-red-accent to-gold-accent bg-clip-text text-transparent">
                  AI News Anchors
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Experience the future of news delivery with our advanced AI anchors. 
                  Multilingual, always available, and delivering news with unprecedented accuracy.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-red-accent to-gold-accent hover:opacity-90">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Live Demo
                </Button>
                <Button variant="outline" size="lg">
                  <Settings className="w-5 h-5 mr-2" />
                  Customize Anchor
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">AI Transparency</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">Fact-Checked</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-gold-accent" />
                  <span className="text-sm font-medium">Award Winning</span>
                </div>
              </div>
            </div>

            {/* AI Anchor Preview */}
            <div className="relative animate-scale-in">
              <Card className="overflow-hidden border-2 border-gradient-primary">
                <CardContent className="p-0 relative">
                  <div className="aspect-video bg-gradient-to-br from-navy/20 to-primary/20 relative overflow-hidden">
                    <img 
                      src="/api/placeholder/600/400" 
                      alt="AI Anchor Preview"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Play/Pause Overlay */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <Button
                        size="lg"
                        variant="secondary"
                        className="bg-white/90 backdrop-blur-sm hover:bg-white"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                      </Button>
                    </div>

                    {/* Live Indicator */}
                    <div className="absolute top-4 left-4">
                      <Badge variant="destructive" className="animate-pulse">
                        <div className="w-2 h-2 bg-white rounded-full mr-2" />
                        LIVE
                      </Badge>
                    </div>

                    {/* Controls */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-3">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => setIsMuted(!isMuted)}
                              className="text-white hover:bg-white/20"
                            >
                              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                            </Button>
                            <span className="text-sm font-medium">Sophia Chen</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                              <Share2 className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-r from-secondary/30 to-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anchor Selection */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="headline-font text-3xl md:text-4xl font-bold text-navy mb-4">
              Choose Your AI Anchor
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select from our diverse team of professional AI anchors, each specialized in different topics and languages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {anchors.map((anchor) => (
              <Card 
                key={anchor.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  currentAnchor === anchor.id ? 'ring-2 ring-primary shadow-xl' : ''
                }`}
                onClick={() => setCurrentAnchor(anchor.id)}
              >
                <CardContent className="p-0">
                  <div className="aspect-[3/4] bg-gradient-to-br from-secondary to-accent/20 relative overflow-hidden">
                    <img 
                      src={anchor.image} 
                      alt={anchor.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg mb-1">{anchor.name}</h3>
                      <p className="text-sm opacity-90 mb-2">{anchor.specialty}</p>
                      <div className="flex items-center gap-2 text-xs">
                        <Star className="w-3 h-3" />
                        <span>{anchor.accuracy}% Accuracy</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardHeader className="pb-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {anchor.languages.map((lang) => (
                        <Badge key={lang} variant="secondary" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {anchor.experience}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Customization Panel */}
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Anchor Customization
              </CardTitle>
              <CardDescription>
                Personalize your AI anchor experience with advanced settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Language</label>
                    <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="spanish">Spanish</SelectItem>
                        <SelectItem value="mandarin">Mandarin</SelectItem>
                        <SelectItem value="hindi">Hindi</SelectItem>
                        <SelectItem value="arabic">Arabic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Speech Speed: {speed[0]}x
                    </label>
                    <Slider
                      value={speed}
                      onValueChange={setSpeed}
                      max={2}
                      min={0.5}
                      step={0.1}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Auto-play News</label>
                    <Switch checked={autoPlay} onCheckedChange={setAutoPlay} />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Breaking News Alerts</label>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Subtitles</label>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Live News Feed */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="headline-font text-3xl md:text-4xl font-bold text-navy mb-4">
              Live News Coverage
            </h2>
            <p className="text-lg text-muted-foreground">
              Real-time news delivery powered by AI anchors
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {newsTopics.map((news, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge 
                      variant={news.urgency === 'high' ? 'destructive' : news.urgency === 'medium' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {news.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      2 min ago
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-3 leading-tight">
                    {news.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      <Play className="w-4 h-4 mr-2" />
                      Listen with AI
                    </Button>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>1.2k listening</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="headline-font text-3xl md:text-4xl font-bold text-navy mb-6">
              Transparency & Trust
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg">AI Disclosure</h3>
                <p className="text-sm text-muted-foreground">
                  All content is clearly marked as AI-generated with full transparency about our technology.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Fact Verification</h3>
                <p className="text-sm text-muted-foreground">
                  Every news item is cross-verified with multiple sources before AI delivery.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Ethical Standards</h3>
                <p className="text-sm text-muted-foreground">
                  Adhering to the highest journalistic and AI ethics standards in news delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAnchor;