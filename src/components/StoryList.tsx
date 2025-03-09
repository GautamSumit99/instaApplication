// StoryList.tsx
import React from 'react';
import rawStoriesData from '../assets/stories.json';

interface Story {
  id: number;
  imageUrl: string;
}

interface StoryListProps {
  onSelect: (storyIndex: number) => void;
}

const storiesData: Story[] = rawStoriesData as unknown as Story[];
// Create a context for the images folder
// @ts-ignore
const images = require.context('../assets/images', false, /\.(png|jpe?g|svg)$/);

const StoryList: React.FC<StoryListProps> = ({ onSelect }) => {
  return (
    <div className="story-list" style={{ display: 'flex', overflowX: 'auto' }}>
      {storiesData.map((story: Story, index: number) => (
        <img
          key={story.id}
          src={images(`./${story.imageUrl}`)}
          alt={`Story ${story.id}`}
          style={{ width: 80, height: 80, marginRight: 8, cursor: 'pointer' }}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
};

export default StoryList;
