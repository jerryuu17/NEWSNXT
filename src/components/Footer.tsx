import { ArrowUp, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    'Privacy Policy',
    'Feedbacks', 
    'Careers',
    'Subscription',
    'Contributors',
    'Advertise With Us',
    'Legal',
    'Contact Us'
  ];

  return (
    <footer className="bg-navy text-white mt-12">
      {/* Back to Top Button */}
      <div className="border-b border-navy-light">
        <div className="container mx-auto px-4 py-4 flex justify-center">
          <Button
            onClick={scrollToTop}
            variant="ghost" 
            className="text-white hover:bg-navy-light hover:text-white flex items-center gap-2"
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center bg-gradient-to-r from-red-accent to-gold-accent rounded font-bold text-white">
                N
              </div>
              <span className="headline-font text-2xl font-bold">NEWSnxt</span>
            </div>
            <p className="body-font text-gray-300 mb-6 max-w-md">
              Your trusted source for verified, crowdsourced, and multilingual news. 
              Empowering communities with transparent journalism and citizen reporting.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="mb-6">
              <h4 className="headline-font font-semibold mb-3">Stay Updated</h4>
              <div className="flex gap-2 max-w-sm">
                <Input 
                  placeholder="Enter your email"
                  className="bg-navy-light border-navy-light text-white placeholder:text-gray-400"
                />
                <Button className="bg-red-accent hover:bg-red-accent/90 text-white px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="headline-font font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.slice(0, 4).map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="body-font text-gray-300 hover:text-white hover:underline transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="headline-font font-semibold mb-4 opacity-0">More Links</h4>
            <ul className="space-y-3">
              {quickLinks.slice(4).map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="body-font text-gray-300 hover:text-white hover:underline transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-navy-light mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <h4 className="headline-font font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <p className="body-font text-gray-400 text-sm text-center md:text-right">
            © 2025 NEWSnxt. All Rights Reserved.<br />
            Designed for trusted, crowdsourced, multilingual news.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;