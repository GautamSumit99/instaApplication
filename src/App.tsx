// App.tsx
import React, { useState } from 'react';
import StoryList from './components/StoryList';
import StoryViewer from './components/StoryViewer';

const App: React.FC = () => {
  const [showViewer, setShowViewer] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const handleSelectStory = (index: number) => {
    setStartIndex(index);
    setShowViewer(true);
  };

  return (
    <div className="app">
      {showViewer ? (
        <StoryViewer initialIndex={startIndex} onClose={() => setShowViewer(false)} />
      ) : (
        <StoryList onSelect={handleSelectStory} />
      )}
    </div>
  );
};

export default App;
