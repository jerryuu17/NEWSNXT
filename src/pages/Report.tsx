import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Upload, FileText, Image, Video, Shield, Users, Clock, CheckCircle } from 'lucide-react';

interface ReportFormData {
  headline: string;
  description: string;
  category: string;
  language: string;
  file: File | null;
  location: {
    latitude: number | null;
    longitude: number | null;
  };
}

const Report = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ReportFormData>({
    headline: '',
    description: '',
    category: '',
    language: '',
    file: null,
    location: {
      latitude: null,
      longitude: null
    }
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGettingLocation, setIsGettingLocation] = useState(false);

  const categories = [
    'General',
    'Crime',
    'Accident', 
    'Weather',
    'Politics',
    'Events',
    'Sports',
    'Technology',
    'Health',
    'Education',
    'Business',
    'Environment'
  ];

  const languages = [
    'English',
    'Hindi', 
    'Spanish',
    'French',
    'German',
    'Italian',
    'Portuguese',
    'Russian',
    'Arabic',
    'Chinese',
    'Japanese',
    'Korean'
  ];

  const handleInputChange = (field: keyof ReportFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select a file smaller than 10MB",
          variant: "destructive",
        });
        return;
      }
      
      // Check file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'video/mp4', 'video/webm', 'video/mov'];
      if (!validTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please select an image (JPG, PNG, WebP) or video (MP4, WebM, MOV)",
          variant: "destructive",
        });
        return;
      }

      setFormData(prev => ({
        ...prev,
        file
      }));
      
      toast({
        title: "File uploaded successfully",
        description: `${file.name} has been selected`,
      });
    }
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      toast({
        title: "Geolocation not supported",
        description: "Your browser doesn't support location services",
        variant: "destructive",
      });
      return;
    }

    setIsGettingLocation(true);
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setFormData(prev => ({
          ...prev,
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        }));
        
        setIsGettingLocation(false);
        toast({
          title: "Location captured",
          description: `Lat: ${position.coords.latitude.toFixed(6)}, Lng: ${position.coords.longitude.toFixed(6)}`,
        });
      },
      (error) => {
        setIsGettingLocation(false);
        toast({
          title: "Location access denied",
          description: "Please enable location services and try again",
          variant: "destructive",
        });
        console.error('Geolocation error:', error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.headline.trim()) {
      toast({
        title: "Headline required",
        description: "Please enter a news headline",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.description.trim()) {
      toast({
        title: "Description required", 
        description: "Please provide news details",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.category) {
      toast({
        title: "Category required",
        description: "Please select a news category",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.language) {
      toast({
        title: "Language required",
        description: "Please select the news language",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call - Replace with actual submission logic
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "News submitted successfully!",
        description: "Your report has been sent for verification. Thank you for contributing to community journalism!",
      });
      
      // Reset form
      setFormData({
        headline: '',
        description: '',
        category: '',
        language: '',
        file: null,
        location: {
          latitude: null,
          longitude: null
        }
      });
      
      // Reset file input
      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
      
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-navy text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px]"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="bg-red-accent/20 text-red-accent border-red-accent/30 mb-6 text-sm px-4 py-2">
                Community Journalism
              </Badge>
              
              <h1 className="headline-font text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Report Breaking
                <span className="block text-gold-accent">News</span>
              </h1>
              
              <p className="body-font text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                Share important news from your community. Your reports help keep everyone informed and contribute to verified, trustworthy journalism.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-3 text-lg">
                  <div className="w-8 h-8 bg-verified rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span>Verified Reports</span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <div className="w-8 h-8 bg-gold-accent rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <span>Community Verified</span>
                </div>
              </div>
            </div>
            
            {/* Right Content - Trust Indicators */}
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-gold-accent" />
                  <h3 className="headline-font text-2xl font-bold mb-2">Secure</h3>
                  <p className="text-sm opacity-80">Protected reporting system</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 mx-auto mb-4 text-gold-accent" />
                  <h3 className="headline-font text-2xl font-bold mb-2">Verified</h3>
                  <p className="text-sm opacity-80">Community validation</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 mx-auto mb-4 text-gold-accent" />
                  <h3 className="headline-font text-2xl font-bold mb-2">Fast</h3>
                  <p className="text-sm opacity-80">Quick review process</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-gold-accent" />
                  <h3 className="headline-font text-2xl font-bold mb-2">Local</h3>
                  <p className="text-sm opacity-80">Location-based verification</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Report Form */}
      <main className="py-12 md:py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="headline-font text-3xl md:text-4xl font-bold text-navy mb-4">
              Submit Your Report
            </h2>
            <p className="body-font text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill in the details below to submit your news report for community verification and publication.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Sidebar - Process Info */}
            <div className="lg:order-1 space-y-6">
              <Card className="border-gold-accent/20 bg-gradient-to-br from-gold-light/10 to-gold-accent/5">
                <CardHeader>
                  <CardTitle className="headline-font text-xl text-navy flex items-center gap-2">
                    <FileText className="w-5 h-5 text-gold-accent" />
                    Reporting Process
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">Submit Report</h4>
                      <p className="text-sm text-muted-foreground">Fill out the form with accurate details</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-under-verification rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">Community Review</h4>
                      <p className="text-sm text-muted-foreground">Local community members verify the news</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-verified rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">Publication</h4>
                      <p className="text-sm text-muted-foreground">Verified reports are published publicly</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-verified/20 bg-gradient-to-br from-verified/10 to-verified/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-verified flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-navy mb-2">Trust & Safety</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Your identity is protected</li>
                        <li>• All reports are fact-checked</li>
                        <li>• Community-based verification</li>
                        <li>• Transparent credibility system</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Form */}
            <div className="lg:col-span-2 lg:order-2">
              <Card className="shadow-2xl bg-white/70 backdrop-blur-sm border-0">
                <CardHeader className="bg-gradient-to-r from-navy/5 to-red-accent/5 rounded-t-lg">
                  <CardTitle className="headline-font text-2xl md:text-3xl text-navy flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-accent to-gold-accent rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    News Report Form
                  </CardTitle>
                  <CardDescription className="body-font text-base">
                    Provide accurate information to help our community stay informed with verified news.
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* News Headline */}
                    <div className="space-y-3">
                      <Label htmlFor="headline" className="text-base font-medium text-navy">
                        News Headline *
                      </Label>
                      <Input
                        id="headline"
                        placeholder="Enter a clear, descriptive headline for your news"
                        value={formData.headline}
                        onChange={(e) => handleInputChange('headline', e.target.value)}
                        className="text-base h-12 border-navy/20 focus:border-navy"
                        maxLength={150}
                      />
                      <p className="text-sm text-muted-foreground">
                        {formData.headline.length}/150 characters
                      </p>
                    </div>

                    {/* Description */}
                    <div className="space-y-3">
                      <Label htmlFor="description" className="text-base font-medium text-navy">
                        News Description *
                      </Label>
                      <Textarea
                        id="description"
                        placeholder="Provide detailed information about the news. Include who, what, when, where, and why."
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        className="min-h-[140px] text-base resize-none border-navy/20 focus:border-navy"
                        maxLength={1000}
                      />
                      <p className="text-sm text-muted-foreground">
                        {formData.description.length}/1000 characters
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Category Selection */}
                      <div className="space-y-3">
                        <Label className="text-base font-medium text-navy">
                          Category *
                        </Label>
                        <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                          <SelectTrigger className="text-base h-12 border-navy/20 focus:border-navy">
                            <SelectValue placeholder="Select news category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Language Selection */}
                      <div className="space-y-3">
                        <Label className="text-base font-medium text-navy">
                          Language *
                        </Label>
                        <Select value={formData.language} onValueChange={(value) => handleInputChange('language', value)}>
                          <SelectTrigger className="text-base h-12 border-navy/20 focus:border-navy">
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            {languages.map((language) => (
                              <SelectItem key={language} value={language}>
                                {language}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* File Upload */}
                    <div className="space-y-3">
                      <Label htmlFor="file-upload" className="text-base font-medium text-navy flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        Attach Media (Optional)
                      </Label>
                      <div className="border-2 border-dashed border-navy/20 rounded-xl p-8 hover:border-navy/40 hover:bg-navy/5 transition-all duration-300 bg-gradient-to-br from-background to-secondary/20">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-red-accent/20 to-gold-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Upload className="h-8 w-8 text-navy" />
                          </div>
                          <Label htmlFor="file-upload" className="cursor-pointer">
                            <span className="text-base text-navy font-semibold hover:text-red-accent transition-colors block mb-2">
                              Click to upload image or video
                            </span>
                            <Input
                              id="file-upload"
                              type="file"
                              accept="image/*,video/*"
                              onChange={handleFileUpload}
                              className="hidden"
                            />
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Supports: JPG, PNG, WebP, MP4, WebM, MOV (Max 10MB)
                          </p>
                        </div>
                        
                        {formData.file && (
                          <div className="mt-6 p-4 bg-gradient-to-r from-verified/10 to-navy/10 rounded-xl border border-verified/20 flex items-center gap-4">
                            <div className="w-10 h-10 bg-verified/20 rounded-lg flex items-center justify-center">
                              {formData.file.type.startsWith('image/') ? (
                                <Image className="h-5 w-5 text-verified" />
                              ) : (
                                <Video className="h-5 w-5 text-verified" />
                              )}
                            </div>
                            <div className="flex-1">
                              <span className="text-sm font-semibold text-navy block">
                                {formData.file.name}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {(formData.file.size / 1024 / 1024).toFixed(2)} MB
                              </span>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, file: null }));
                                const fileInput = document.getElementById('file-upload') as HTMLInputElement;
                                if (fileInput) fileInput.value = '';
                              }}
                              className="text-red-accent hover:text-red-accent/80 hover:bg-red-accent/10"
                            >
                              Remove
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Location */}
                    <div className="space-y-4">
                      <Label className="text-base font-medium text-navy flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Location for Verification
                      </Label>
                      
                      <div className="p-6 bg-gradient-to-br from-navy/5 to-red-accent/5 rounded-xl border border-navy/10">
                        <div className="flex flex-col sm:flex-row gap-4 mb-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={handleGetLocation}
                            disabled={isGettingLocation}
                            className="flex items-center gap-2 border-navy text-navy hover:bg-navy hover:text-white transition-all duration-300 px-6 py-3 font-medium"
                          >
                            <MapPin className="h-5 w-5" />
                            {isGettingLocation ? 'Getting Location...' : 'Use My Current Location'}
                          </Button>
                          
                          {formData.location.latitude && formData.location.longitude && (
                            <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-verified/20 to-verified/10 text-verified rounded-lg text-sm font-medium border border-verified/20">
                              <div className="w-2 h-2 bg-verified rounded-full animate-pulse"></div>
                              <MapPin className="h-4 w-4" />
                              <span>
                                {formData.location.latitude.toFixed(6)}, {formData.location.longitude.toFixed(6)}
                              </span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <Shield className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">
                            Location data is encrypted and only used for verification purposes. It helps establish credibility and enables local community members to verify your report.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6 border-t border-navy/10">
                      <div className="text-center mb-6">
                        <p className="text-sm text-muted-foreground mb-2">
                          By submitting this report, you agree to our community guidelines and verification process.
                        </p>
                      </div>
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-red-accent to-red-accent/90 hover:from-red-accent/90 hover:to-red-accent text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                            Submitting Report...
                          </>
                        ) : (
                          <>
                            <FileText className="mr-3 h-6 w-6" />
                            Submit News Report
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Bottom Statistics Section */}
          <div className="mt-16 pt-12 border-t border-navy/10">
            <div className="text-center mb-8">
              <h3 className="headline-font text-2xl md:text-3xl font-bold text-navy mb-4">
                Join Our Community of Citizen Journalists
              </h3>
              <p className="body-font text-lg text-muted-foreground max-w-2xl mx-auto">
                Be part of a movement that's revolutionizing news reporting through community-driven verification and transparency.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-verified/10 to-verified/5 rounded-xl border border-verified/20">
                <div className="text-3xl font-bold text-verified mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Reports Submitted</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-navy/10 to-navy/5 rounded-xl border border-navy/20">
                <div className="text-3xl font-bold text-navy mb-2">25K+</div>
                <div className="text-sm text-muted-foreground">Active Verifiers</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gold-accent/10 to-gold-accent/5 rounded-xl border border-gold-accent/20">
                <div className="text-3xl font-bold text-gold-accent mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-red-accent/10 to-red-accent/5 rounded-xl border border-red-accent/20">
                <div className="text-3xl font-bold text-red-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Report;