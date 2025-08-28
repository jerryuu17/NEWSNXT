import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Clock, MessageCircle, Share2 } from 'lucide-react';
import { useState } from 'react';

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
  // State for reactions
  const [reactions, setReactions] = useState({
    like: 0,
    smile: 0,
    anger: 0,
    sad: 0,
    love: 0
  });
  const [userReaction, setUserReaction] = useState<string | null>(null);
  const [commentsCount, setCommentsCount] = useState(Math.floor(Math.random() * 50)); // Mock data
  const [showComments, setShowComments] = useState(false);

  // Handle reaction click
  const handleReaction = (reactionType: string) => {
    if (userReaction === reactionType) {
      // Remove reaction
      setReactions(prev => ({ ...prev, [reactionType]: prev[reactionType as keyof typeof prev] - 1 }));
      setUserReaction(null);
    } else {
      // Add new reaction, remove old one if exists
      setReactions(prev => {
        const newReactions = { ...prev };
        if (userReaction) {
          newReactions[userReaction as keyof typeof newReactions]--;
        }
        newReactions[reactionType as keyof typeof newReactions]++;
        return newReactions;
      });
      setUserReaction(reactionType);
    }
  };

  // Handle share
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: description,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${title} - ${window.location.href}`);
      alert('Link copied to clipboard!');
    }
  };

  // Reaction emojis
  const reactionEmojis = {
    like: '👍',
    smile: '😊',
    anger: '😠',
    sad: '😢',
    love: '❤️'
  };
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
          {/* Source and Date Info */}
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

          {/* Reaction Buttons */}
          <div className="flex items-center gap-2 mb-3 py-2 border-t border-border">
            <div className="flex items-center gap-1">
              {Object.entries(reactionEmojis).map(([type, emoji]) => (
                <button
                  key={type}
                  onClick={() => handleReaction(type)}
                  className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs transition-colors hover:bg-accent ${
                    userReaction === type ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="text-sm">{emoji}</span>
                  <span>{reactions[type as keyof typeof reactions]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Comments and Share */}
          <div className="flex items-center justify-between mb-3">
            <button 
              onClick={() => setShowComments(!showComments)}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="h-3 w-3" />
              <span>{commentsCount} Comments</span>
            </button>
            
            <button 
              onClick={handleShare}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <Share2 className="h-3 w-3" />
              <span>Share</span>
            </button>
          </div>

          {/* Comments Section */}
          {showComments && (
            <div className="bg-muted/50 rounded-md p-3 mb-3">
              <div className="text-xs text-muted-foreground mb-2">Comments coming soon...</div>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Add a comment..." 
                  className="flex-1 text-xs px-2 py-1 rounded border border-input bg-background"
                />
                <Button size="sm" className="text-xs h-6">Post</Button>
              </div>
            </div>
          )}

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