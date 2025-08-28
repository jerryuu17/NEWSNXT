import { useState } from 'react';
import { Search, Menu, X, Sun, Moon, Globe, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };
  const languages = ['English', 'Hindi', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Russian', 'Arabic', 'Chinese', 'Japanese', 'Korean'];
  const navItems = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'Report',
    href: '/report'
  }, {
    name: 'Verify',
    href: '/verify'
  }, {
    name: 'AI Anchor',
    href: '/ai-anchor'
  }];
  return <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center bg-gradient-to-r from-red-accent to-gold-accent rounded font-bold text-white text-sm">Nxt</div>
            <span className="headline-font font-bold text-navy mx-[10px] text-2xl">NEWSnxt</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map(item => <a key={item.name} href={item.href} className="text-sm font-medium text-foreground hover:text-red-accent transition-colors">
                {item.name}
              </a>)}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-2">
            {/* Search Toggle */}
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)} className="h-9 w-9">
              <Search className="h-4 w-4" />
            </Button>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {languages.map(lang => <DropdownMenuItem key={lang}>
                    {lang}
                  </DropdownMenuItem>)}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Login/Profile */}
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <User className="h-4 w-4" />
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden h-9 w-9">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-6">
                  {navItems.map(item => <a key={item.name} href={item.href} className="text-lg font-medium text-foreground hover:text-red-accent transition-colors">
                      {item.name}
                    </a>)}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && <div className="border-t py-3 animate-fade-in">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search news, topics, or contributors..." className="pl-10 pr-4" autoFocus />
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;