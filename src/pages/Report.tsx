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
import { MapPin, Upload, FileText, Image, Video } from 'lucide-react';

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
      <section className="bg-gradient-to-r from-navy to-navy-light text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="headline-font text-3xl md:text-5xl font-bold mb-4">
            Report Breaking News
          </h1>
          <p className="body-font text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Share important news from your community. Your reports help keep everyone informed and contribute to verified, trustworthy journalism.
          </p>
        </div>
      </section>

      {/* Report Form */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="headline-font text-2xl text-navy">Submit Your News Report</CardTitle>
              <CardDescription className="body-font">
                Fill in the details below to submit your news report for community verification.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* News Headline */}
                <div className="space-y-2">
                  <Label htmlFor="headline" className="text-base font-medium text-navy">
                    News Headline *
                  </Label>
                  <Input
                    id="headline"
                    placeholder="Enter a clear, descriptive headline for your news"
                    value={formData.headline}
                    onChange={(e) => handleInputChange('headline', e.target.value)}
                    className="text-base"
                    maxLength={150}
                  />
                  <p className="text-sm text-muted-foreground">
                    {formData.headline.length}/150 characters
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-base font-medium text-navy">
                    News Description *
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Provide detailed information about the news. Include who, what, when, where, and why."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="min-h-[120px] text-base resize-none"
                    maxLength={1000}
                  />
                  <p className="text-sm text-muted-foreground">
                    {formData.description.length}/1000 characters
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Category Selection */}
                  <div className="space-y-2">
                    <Label className="text-base font-medium text-navy">
                      Category *
                    </Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger className="text-base">
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
                  <div className="space-y-2">
                    <Label className="text-base font-medium text-navy">
                      Language *
                    </Label>
                    <Select value={formData.language} onValueChange={(value) => handleInputChange('language', value)}>
                      <SelectTrigger className="text-base">
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
                <div className="space-y-2">
                  <Label htmlFor="file-upload" className="text-base font-medium text-navy">
                    Attach Media (Optional)
                  </Label>
                  <div className="border-2 border-dashed border-input rounded-lg p-6 hover:border-navy transition-colors">
                    <div className="text-center">
                      <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                      <Label htmlFor="file-upload" className="cursor-pointer">
                        <span className="text-sm text-navy font-medium hover:text-red-accent">
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
                      <p className="text-xs text-muted-foreground mt-1">
                        Supports: JPG, PNG, WebP, MP4, WebM, MOV (Max 10MB)
                      </p>
                    </div>
                    
                    {formData.file && (
                      <div className="mt-4 p-3 bg-secondary rounded-lg flex items-center gap-3">
                        {formData.file.type.startsWith('image/') ? (
                          <Image className="h-5 w-5 text-navy" />
                        ) : (
                          <Video className="h-5 w-5 text-navy" />
                        )}
                        <span className="text-sm font-medium text-navy">
                          {formData.file.name}
                        </span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, file: null }));
                            const fileInput = document.getElementById('file-upload') as HTMLInputElement;
                            if (fileInput) fileInput.value = '';
                          }}
                          className="ml-auto text-red-accent hover:text-red-accent/80"
                        >
                          Remove
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label className="text-base font-medium text-navy">
                    Location for Verification
                  </Label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleGetLocation}
                      disabled={isGettingLocation}
                      className="flex items-center gap-2 border-navy text-navy hover:bg-navy hover:text-white"
                    >
                      <MapPin className="h-4 w-4" />
                      {isGettingLocation ? 'Getting Location...' : 'Use My Location'}
                    </Button>
                    
                    {formData.location.latitude && formData.location.longitude && (
                      <div className="flex items-center gap-2 px-3 py-2 bg-verified/10 text-verified rounded-md text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>
                          {formData.location.latitude.toFixed(6)}, {formData.location.longitude.toFixed(6)}
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Location is only used for verification purposes and helps establish credibility.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-accent hover:bg-red-accent/90 text-white py-3 text-base font-medium"
                  >
                    {isSubmitting ? (
                      <>
                        <FileText className="mr-2 h-4 w-4 animate-spin" />
                        Submitting Report...
                      </>
                    ) : (
                      <>
                        <FileText className="mr-2 h-4 w-4" />
                        Submit News Report
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          {/* Information Card */}
          <Card className="mt-6 border-gold-accent/20 bg-gold-light/10">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold-accent mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="headline-font font-semibold text-navy mb-2">How It Works</h3>
                  <ul className="body-font text-sm text-muted-foreground space-y-1">
                    <li>• Your report will be reviewed by our verification team</li>
                    <li>• Community members within 5km can verify local news</li>
                    <li>• Verified reports are published with credibility scores</li>
                    <li>• You earn points for quality reporting and community engagement</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Report;