import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import Video1 from "@/assets/videos/Video1.mp4";
import Video2 from "@/assets/videos/Video2.mp4";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  videoIndex?: number;
}

const VideoModal = ({ isOpen, onClose, title, videoIndex = 0 }: VideoModalProps) => {
  const videos = [Video1, Video2, Video1]; // Different videos for each slide
  const currentVideo = videos[videoIndex] || Video1;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-bull-dark border-bull-gold/20">
        <div className="flex items-center justify-between p-6 border-b border-bull-gold/20">
          <DialogTitle className="text-xl font-orbitron font-bold text-bull-gold">
            {title}
          </DialogTitle>
          <button
            onClick={onClose}
            className="text-bull-silver hover:text-bull-gold transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="relative w-full">
            <video 
              key={currentVideo} // Add key to force re-render when video changes
              className="w-full h-auto rounded-lg" 
              controls 
              autoPlay
              src={currentVideo}
              preload="auto"
              onLoadStart={() => {
                // Pause any other videos that might be playing
                const allVideos = document.querySelectorAll('video');
                allVideos.forEach(video => {
                  if (video.src !== currentVideo) {
                    video.pause();
                  }
                });
              }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;