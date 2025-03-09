This project is a simplified version of the Instagram Stories feature, designed specifically for mobile devices. It allows users to view a series of temporary story images with both auto-advance and manual navigation capabilities.

Features

Mobile-First Design: Optimized exclusively for mobile devices.
Horizontally Scrollable Story List: Browse through a list of stories presented as image thumbnails.
Story Viewer: Tap on a story to view it full screen.
Auto-Advance: Stories automatically progress to the next after 5 seconds.
Manual Navigation: Tap the left or right side of the story to navigate backward or forward.
Smooth Transitions: CSS transitions create a polished viewing experience.
Testing: Both unit/integration tests (using Jest & React Testing Library) and end-to-end tests (using Cypress) are provided.




Technologies Used
React.js & TypeScript: For building the user interface.
Create React App: Project scaffolding.
CSS: For styling and animations.
Cypress: For end-to-end testing.

Project Structure
instagram-stories/
├─ public/
│  └─ images/
│     ├─ story1.jpg
│     ├─ story2.jpg
│     └─ story3.jpg
├─ src/
│  ├─ assets/
│  │  └─ stories.json
   ├─ images/
│     ├─ story1.jpg
│     ├─ story2.jpg
│     └─ story3.jpg
│  ├─ components/
│  │  ├─ StoryList.tsx
│  │  └─ StoryViewer.tsx
│  ├─ App.tsx
│  ├─ index.tsx
│  └─ App.css
├─ cypress/
│  └─ e2e/
│     └─ test.e2e.ts
├─ package.json
└─ README.md