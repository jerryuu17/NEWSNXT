import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MapPin, 
  Eye, 
  Shield, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Users, 
  Star,
  AlertTriangle,
  ThumbsUp,
  ThumbsDown,
  MessageSquare
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface NewsReport {
  id: string;
  headline: string;
  description: string;
  category: string;
  language: string;
  location: { latitude: number; longitude: number; address: string };
  publishedAt: string;
  author: string;
  image?: string;
  verificationStatus: 'pending' | 'verified' | 'rejected';
  votes: { up: number; down: number };
  distance: number;
}

const Verify = () => {
  const [searchRadius, setSearchRadius] = useState('5');
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [reports, setReports] = useState<NewsReport[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock data for demonstration
  const mockReports: NewsReport[] = [
    {
      id: '1',
      headline: 'Road Accident on Main Street Causes Heavy Traffic',
      description: 'A two-vehicle collision occurred at the intersection of Main Street and Oak Avenue, causing significant traffic delays during rush hour.',
      category: 'Accident',
      language: 'English',
      location: { latitude: 40.7128, longitude: -74.0060, address: 'Main Street, New York, NY' },
      publishedAt: '2h ago',
      author: 'John Doe',
      image: '/news-placeholder.jpg',
      verificationStatus: 'pending',
      votes: { up: 12, down: 2 },
      distance: 2.3
    },
    {
      id: '2',
      headline: 'Local Community Center Hosts Charity Drive',
      description: 'The downtown community center is organizing a food and clothing drive to help families affected by recent flooding.',
      category: 'Events',
      language: 'English',
      location: { latitude: 40.7300, longitude: -73.9950, address: 'Community Center, Downtown' },
      publishedAt: '4h ago',
      author: 'Jane Smith',
      verificationStatus: 'verified',
      votes: { up: 25, down: 1 },
      distance: 1.8
    },
    {
      id: '3',
      headline: 'Water Main Break Disrupts Service in North District',
      description: 'A major water main rupture has left residents in the north district without water service. Repair crews are working to restore service.',
      category: 'General',
      language: 'English',
      location: { latitude: 40.7589, longitude: -73.9851, address: 'North District, NY' },
      publishedAt: '6h ago',
      author: 'Mike Johnson',
      verificationStatus: 'pending',
      votes: { up: 8, down: 0 },
      distance: 4.2
    }
  ];

  const getUserLocation = () => {
    setLoading(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setReports(mockReports);
          setLoading(false);
          toast({
            title: "Location obtained",
            description: "Now showing reports within your selected radius.",
          });
        },
        (error) => {
          console.error('Error getting location:', error);
          toast({
            title: "Location access denied",
            description: "Please enable location access to verify nearby reports.",
            variant: "destructive",
          });
          setLoading(false);
        }
      );
    } else {
      toast({
        title: "Location not supported",
        description: "Your browser doesn't support geolocation.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  const handleVote = (reportId: string, voteType: 'up' | 'down') => {
    setReports(prev => prev.map(report => {
      if (report.id === reportId) {
        return {
          ...report,
          votes: {
            ...report.votes,
            [voteType]: report.votes[voteType] + 1
          }
        };
      }
      return report;
    }));
    
    toast({
      title: "Vote recorded",
      description: `Your ${voteType === 'up' ? 'verification' : 'dispute'} has been recorded.`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'text-verified';
      case 'pending': return 'text-under-verification';
      case 'rejected': return 'text-destructive';
      default: return 'text-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'rejected': return <XCircle className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy to-navy-light text-white pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="headline-font text-4xl md:text-6xl font-bold mb-6">
              Verify <span className="text-gold-accent">Local News</span>
            </h1>
            <p className="body-font text-lg md:text-xl mb-8 opacity-90">
              Help build trust in your community by verifying news reports from nearby sources. 
              Your participation ensures accurate and reliable local journalism.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-gold-accent" />
                <span>Community-Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-gold-accent" />
                <span>Transparent Process</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gold-accent" />
                <span>Local Verification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar - How it Works */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-gradient-subtle border-navy/20">
              <CardHeader>
                <CardTitle className="text-lg text-navy flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  How Verification Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Set Your Location</h4>
                    <p className="text-sm text-foreground/70">Enable location to see nearby reports</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-under-verification rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Review Reports</h4>
                    <p className="text-sm text-foreground/70">Check reports within your radius</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-verified rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Vote & Verify</h4>
                    <p className="text-sm text-foreground/70">Confirm or dispute the accuracy</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card className="bg-card border-navy/20">
              <CardHeader>
                <CardTitle className="text-lg text-navy">Community Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-verified">1,247</div>
                  <div className="text-sm text-foreground/70">Reports Verified</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy">156</div>
                  <div className="text-sm text-foreground/70">Active Verifiers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-accent">98%</div>
                  <div className="text-sm text-foreground/70">Accuracy Rate</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            
            {/* Location & Search Controls */}
            <Card className="mb-8 border-navy/20">
              <CardHeader>
                <CardTitle className="text-xl text-navy">Find Reports to Verify</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="radius" className="text-navy">Search Radius (km)</Label>
                    <Input
                      id="radius"
                      type="number"
                      value={searchRadius}
                      onChange={(e) => setSearchRadius(e.target.value)}
                      min="1"
                      max="50"
                      className="border-navy/30"
                    />
                  </div>
                  <div className="md:col-span-2 flex items-end">
                    <Button 
                      onClick={getUserLocation}
                      disabled={loading}
                      className="w-full bg-navy hover:bg-navy-light text-white"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      {loading ? 'Getting Location...' : 'Use My Location'}
                    </Button>
                  </div>
                </div>
                
                {userLocation && (
                  <div className="p-4 bg-verified/10 rounded-lg border border-verified/30">
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <MapPin className="w-4 h-4 text-verified" />
                      <span className="font-medium">Your Location:</span>
                      <span>{userLocation.latitude.toFixed(6)}, {userLocation.longitude.toFixed(6)}</span>
                    </div>
                    <p className="text-sm text-foreground/70 mt-1">
                      Showing reports within {searchRadius}km radius
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Reports List */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="headline-font text-2xl font-bold text-navy">
                  Reports to Verify {reports.length > 0 && `(${reports.length})`}
                </h2>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-verified rounded-full"></div>
                    <span className="text-foreground/70">Verified</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-under-verification rounded-full"></div>
                    <span className="text-foreground/70">Pending</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-foreground/70">Disputed</span>
                  </span>
                </div>
              </div>

              {reports.length === 0 ? (
                <Card className="text-center py-12 border-navy/20">
                  <CardContent>
                    <Eye className="w-12 h-12 text-foreground/30 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-navy mb-2">No Reports Found</h3>
                    <p className="text-foreground/70 mb-4">
                      Enable location access to see reports in your area
                    </p>
                    <Button onClick={getUserLocation} variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {reports.map((report) => (
                    <Card key={report.id} className="border-navy/20 hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs border-navy/30 text-navy">
                                {report.category}
                              </Badge>
                              <div className={`flex items-center gap-1 text-sm ${getStatusColor(report.verificationStatus)}`}>
                                {getStatusIcon(report.verificationStatus)}
                                <span className="capitalize">{report.verificationStatus}</span>
                              </div>
                              <span className="text-sm text-foreground/70">• {report.distance}km away</span>
                            </div>
                            <h3 className="text-lg font-semibold text-navy mb-2">{report.headline}</h3>
                            <p className="text-foreground/80 mb-3">{report.description}</p>
                            
                            <div className="flex items-center gap-4 text-sm text-foreground/70">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {report.location.address}
                              </span>
                              <span>By {report.author}</span>
                              <span>{report.publishedAt}</span>
                            </div>
                          </div>
                          
                          {report.image && (
                            <img 
                              src={report.image} 
                              alt={report.headline}
                              className="w-24 h-24 object-cover rounded-lg ml-4 flex-shrink-0"
                            />
                          )}
                        </div>
                        
                        {/* Voting Section */}
                        <div className="flex items-center justify-between pt-4 border-t border-navy/10">
                          <div className="flex items-center gap-4">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleVote(report.id, 'up')}
                              className="flex items-center gap-2 border-verified text-verified hover:bg-verified hover:text-white"
                            >
                              <ThumbsUp className="w-4 h-4" />
                              Verify ({report.votes.up})
                            </Button>
                            
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleVote(report.id, 'down')}
                              className="flex items-center gap-2 border-destructive text-destructive hover:bg-destructive hover:text-white"
                            >
                              <ThumbsDown className="w-4 h-4" />
                              Dispute ({report.votes.down})
                            </Button>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost" className="text-foreground/70 hover:text-navy">
                              <MessageSquare className="w-4 h-4 mr-1" />
                              Comment
                            </Button>
                            <Button size="sm" variant="ghost" className="text-foreground/70 hover:text-navy">
                              <Star className="w-4 h-4 mr-1" />
                              Save
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Verify;