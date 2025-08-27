import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Clock } from 'lucide-react';

interface NewsCardProps {
  title: string;
  description: string;
  image?: string;
  category: string;
  source: string;
  sourceName: string;
  isCrowdsourced?: boolean;
  verificationStatus: 'verified' | 'under-verification' | 'unverified';
  publishedAt: string;
}

const NewsCard = ({
  title,
  description,
  image,
  category,
  source,
  sourceName,
  isCrowdsourced = false,
  verificationStatus,
  publishedAt
}: NewsCardProps) => {
  const getVerificationIcon = () => {
    switch (verificationStatus) {
      case 'verified':
        return <CheckCircle className="h-4 w-4" />;
      case 'under-verification':
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getVerificationBadge = () => {
    switch (verificationStatus) {
      case 'verified':
        return (
          <Badge className="verified-badge text-xs flex items-center gap-1">
            {getVerificationIcon()}
            Verified
          </Badge>
        );
      case 'under-verification':
        return (
          <Badge className="under-verification-badge text-xs flex items-center gap-1">
            {getVerificationIcon()}
            Under Verification
          </Badge>
        );
      default:
        return (
          <Badge className="unverified-badge text-xs flex items-center gap-1">
            {getVerificationIcon()}
            Unverified
          </Badge>
        );
    }
  };

  return (
    <Card className="news-card h-full overflow-hidden">
      {image && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      
      <CardContent className="p-4 flex flex-col h-full">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className="text-xs font-medium bg-navy text-white">
            {category}
          </Badge>
          {getVerificationBadge()}
        </div>

        <h3 className="headline-font font-semibold text-lg mb-2 line-clamp-3 text-navy leading-tight">
          {title}
        </h3>

        <p className="body-font text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
          {description}
        </p>

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs text-muted-foreground">
              <span className="font-medium">
                Source: {isCrowdsourced ? `${sourceName} (Crowdsourced)` : sourceName}
              </span>
            </div>
            <div className="text-xs text-muted-foreground">
              {publishedAt}
            </div>
          </div>

          <Button 
            className="w-full bg-navy hover:bg-navy-light text-white"
            size="sm"
          >
            Read More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;