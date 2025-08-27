import { TrendingUp, Hash } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TrendingTopics = () => {
  const trendingTopics = [
    { tag: 'ClimateAction', posts: 2847 },
    { tag: 'TechBreakthrough', posts: 1923 },
    { tag: 'DigitalPrivacy', posts: 1567 },
    { tag: 'GlobalEconomy', posts: 1234 },
    { tag: 'HealthInnovation', posts: 987 },
    { tag: 'SpaceExploration', posts: 756 },
    { tag: 'RenewableEnergy', posts: 654 },
    { tag: 'AIRevolution', posts: 543 }
  ];

  return (
    <Card className="sticky top-32 h-fit">
      <CardHeader>
        <CardTitle className="headline-font text-lg flex items-center gap-2 text-navy">
          <TrendingUp className="h-5 w-5 text-red-accent" />
          Trending Topics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {trendingTopics.map((topic, index) => (
          <div 
            key={topic.tag}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-muted-foreground w-4">
                {index + 1}
              </span>
              <div className="flex items-center gap-2">
                <Hash className="h-4 w-4 text-navy" />
                <span className="body-font font-medium text-navy group-hover:text-red-accent transition-colors">
                  {topic.tag}
                </span>
              </div>
            </div>
            <Badge variant="secondary" className="text-xs">
              {topic.posts.toLocaleString()}
            </Badge>
          </div>
        ))}
        
        <div className="pt-2 border-t">
          <a 
            href="#" 
            className="text-sm text-red-accent hover:underline body-font font-medium"
          >
            View all trending topics →
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrendingTopics;