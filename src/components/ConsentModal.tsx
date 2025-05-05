
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";

interface ConsentModalProps {
  open: boolean;
  onAccept: () => void;
  onDecline: () => void;
}

const ConsentModal = ({ open, onAccept, onDecline }: ConsentModalProps) => {
  const [isVisible, setIsVisible] = useState(open);

  useEffect(() => {
    setIsVisible(open);
  }, [open]);

  const handleAccept = () => {
    onAccept();
  };

  const handleDecline = () => {
    onDecline();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Dialog open={isVisible} onOpenChange={setIsVisible}>
      <DialogContent className="sm:max-w-md glass border-neon-purple neon-glow">
        <DialogHeader>
          <DialogTitle className="neon-text-purple text-center text-xl">Welcome to Music Video Maker GPT</DialogTitle>
          <DialogDescription className="text-center">
            By using this website, you agree to our Terms of Service and Privacy Policy.
          </DialogDescription>
        </DialogHeader>
        <div className="text-sm text-gray-300 my-4 space-y-2">
          <p>
            This website uses AI technology to create music videos based on user inputs. We do not store your personal data beyond what is necessary for the service to function.
          </p>
          <p>
            All generated content is subject to our terms of use and you are responsible for ensuring that your use of our service complies with all applicable laws and regulations.
          </p>
        </div>
        <DialogFooter className="flex sm:justify-between">
          <Button 
            type="button" 
            variant="destructive" 
            onClick={handleDecline}
          >
            Decline
          </Button>
          <Button
            type="button"
            className="bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:opacity-90"
            onClick={handleAccept}
          >
            I Agree
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConsentModal;
