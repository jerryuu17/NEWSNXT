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
    <Card className="news-card group h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
      {image && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      
      <CardContent className="flex flex-col h-full p-0">
        {/* Main Content */}
        <div className="p-4 pb-2 flex-grow">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="secondary" className="text-xs font-medium bg-primary text-primary-foreground">
              {category}
            </Badge>
            {getVerificationBadge()}
          </div>

          <h3 className="headline-font font-semibold text-lg mb-2 line-clamp-3 text-foreground leading-tight">
            {title}
          </h3>

          <p className="body-font text-muted-foreground text-sm mb-3 line-clamp-3">
            {description}
          </p>

          {/* Source and Date Info */}
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
            <span className="font-medium">
              Source: {isCrowdsourced ? `${sourceName} (Crowdsourced)` : sourceName}
            </span>
            <span>{publishedAt}</span>
          </div>
        </div>

        {/* Interactive Section */}
        <div className="border-t bg-muted/20 p-3 mt-auto">
          {/* Reaction Buttons */}
          <div className="flex flex-wrap items-center gap-1 mb-3">
            {Object.entries(reactionEmojis).map(([type, emoji]) => (
              <button
                key={type}
                onClick={() => handleReaction(type)}
                className={`flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs transition-all duration-200 hover:scale-105 border ${
                  userReaction === type 
                    ? 'bg-primary/10 text-primary border-primary/20 shadow-sm' 
                    : 'bg-background text-muted-foreground hover:text-foreground hover:bg-accent border-border hover:border-accent'
                }`}
              >
                <span className="text-base transition-transform duration-200 hover:scale-110">{emoji}</span>
                <span className="font-medium">{reactions[type as keyof typeof reactions]}</span>
              </button>
            ))}
          </div>

          {/* Comments and Share */}
          <div className="flex items-center justify-between mb-3">
            <button 
              onClick={() => setShowComments(!showComments)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="font-medium">{commentsCount} Comments</span>
            </button>
            
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-105"
            >
              <Share2 className="h-4 w-4" />
              <span className="font-medium">Share</span>
            </button>
          </div>

          {/* Comments Section */}
          {showComments && (
            <div className="bg-background rounded-lg p-3 mb-3 border animate-fade-in">
              <div className="text-sm text-muted-foreground mb-3">Join the conversation</div>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Add a comment..." 
                  className="flex-1 text-sm px-3 py-2 rounded-md border border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
                <Button size="sm" className="px-4">Post</Button>
              </div>
            </div>
          )}

          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-200"
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