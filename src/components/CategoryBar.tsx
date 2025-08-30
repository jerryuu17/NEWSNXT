
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const CategoryBar = () => {
  const [activeCategory, setActiveCategory] = useState('Latest');
  
  const categories = [
    'Latest',
    'Sports',
    'Entertainment', 
    'National',
    'International',
    'Politics',
    'Technology',
    'Economy',
    'Science',
    'Health',
    'Editorial',
    'Cultural'
  ];

  return (
    <div className="bg-secondary/50 dark:bg-secondary/20 border-b border-border sticky top-16 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-1 py-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap text-sm font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-navy dark:bg-primary text-white dark:text-primary-foreground hover:bg-navy-light dark:hover:bg-primary/90' 
                  : 'text-navy dark:text-foreground hover:text-red-accent dark:hover:text-accent hover:bg-red-accent/10 dark:hover:bg-accent/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
