import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";
import QuestionDialog from "./QuestionDialog";
import StoryDialog from "./StoryDialog";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuestionDialogOpen, setIsQuestionDialogOpen] = useState(false);
  const [isStoryDialogOpen, setIsStoryDialogOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img src={logo} alt="Furst Things Furst" className="h-10 w-10" />
              <span className="text-xl font-bold text-gradient">Furst Things Furst</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center gap-2">
              <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
                Merch
              </a>
              <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
            </div>
            <a 
              href="https://www.youtube.com/@FurstThingsFurstPawdcast" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Podcast
            </a>
            <button 
              onClick={() => setIsQuestionDialogOpen(true)}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Ask a Question
            </button>
            <button 
              onClick={() => setIsStoryDialogOpen(true)}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Submit a Story
            </button>
            {/* <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
              Community
            </a> */}
          </div>

          {/* Desktop Shop Button */}
          <div className="hidden md:block">
            <Button variant="shop" size="sm">
              Shop
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2">
                <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
                  Merch
                </a>
                <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
              </div>
              <a 
                href="https://www.youtube.com/@FurstThingsFurstPawdcast" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                Podcast
              </a>
              <button 
                onClick={() => setIsQuestionDialogOpen(true)}
                className="text-foreground hover:text-primary transition-smooth font-medium text-left"
              >
                Ask a Question
              </button>
              <button 
                onClick={() => setIsStoryDialogOpen(true)}
                className="text-foreground hover:text-primary transition-smooth font-medium text-left"
              >
                Submit a Story
              </button>
              <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
                Community
              </a>
              <Button variant="shop" size="sm" className="w-fit">
                Shop
              </Button>
            </div>
          </div>
        )}
      </div>
      
      {/* Dialogs */}
      <QuestionDialog 
        open={isQuestionDialogOpen} 
        onOpenChange={setIsQuestionDialogOpen} 
      />
      <StoryDialog 
        open={isStoryDialogOpen} 
        onOpenChange={setIsStoryDialogOpen} 
      />
    </nav>
  );
};

export default Navigation;