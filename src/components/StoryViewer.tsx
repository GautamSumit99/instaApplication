// storyViewer.tsx
import React, { useState, useEffect } from 'react';
import rawStoriesData from '../assets/stories.json';

interface Story {
  id: number;
  imageUrl: string;
}


const storiesData: Story[] = rawStoriesData as unknown as Story[];
// Create a context for the images folder
// @ts-ignore
const images = require.context('../assets/images', false, /\.(png|jpe?g|svg)$/);

interface StoryViewerProps {
  initialIndex: number;
  onClose: () => void;
}

const StoryViewer: React.FC<StoryViewerProps> = ({ initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
  const currentStory: Story = storiesData[currentIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < storiesData.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        onClose();
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex, onClose]);

  const handleTap = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, currentTarget } = e;
    const width = currentTarget.clientWidth;
    if (clientX < width / 2) {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    } else {
      if (currentIndex < storiesData.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        onClose();
      }
    }
  };

  return (
    <div
      className="story-viewer"
      onClick={handleTap}
      style={{ position: 'relative', height: '100vh', background: '#000' }}
    >
      <img
        src={images(`./${currentStory.imageUrl}`)}
        alt={`Story ${currentStory.id}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'opacity 0.5s ease-in-out',
        }}
      />
    </div>
  );
};

export default StoryViewer;
// This empty export ensures the file is treated as a module.
// export {};
