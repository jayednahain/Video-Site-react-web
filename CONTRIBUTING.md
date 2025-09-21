# Contributing to Video Site React Web

Thank you for your interest in contributing to this project! This guide will help you get started with contributing to the Video Site React Web application.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Contribution Guidelines](#contribution-guidelines)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Documentation](#documentation)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment. Please:

- Be respectful and constructive in discussions
- Welcome newcomers and help them get started
- Focus on what's best for the community
- Show empathy towards other community members

## Getting Started

### Prerequisites
- Node.js 16+ installed
- Git installed
- Familiarity with React, Redux, and modern JavaScript
- Basic understanding of REST APIs

### First Time Setup
1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Video-Site-react-web.git
   cd Video-Site-react-web
   ```
3. Add upstream remote:
   ```bash
   git remote add upstream https://github.com/jayednahain/Video-Site-react-web.git
   ```
4. Install dependencies:
   ```bash
   npm install
   cd server && npm install && cd ..
   ```

## Development Setup

### Environment Setup
1. Create a `.env` file in the root directory:
   ```env
   VITE_API_BASE_URL=http://localhost:9000
   ```

2. Start both servers in separate terminals:
   ```bash
   # Terminal 1 - Backend
   cd server && npm start
   
   # Terminal 2 - Frontend
   npm run dev
   ```

### Keeping Your Fork Updated
```bash
git fetch upstream
git checkout main
git merge upstream/main
```

## Contribution Guidelines

### Types of Contributions
We welcome various types of contributions:

- **Bug Fixes**: Fix existing issues or bugs
- **Feature Enhancements**: Add new features or improve existing ones
- **Documentation**: Improve README, API docs, or code comments
- **Performance**: Optimize code for better performance
- **UI/UX**: Improve user interface and user experience
- **Testing**: Add or improve test coverage
- **Refactoring**: Clean up code without changing functionality

### Finding Work
- Check the [Issues](https://github.com/jayednahain/Video-Site-react-web/issues) page
- Look for issues labeled `good first issue` or `help wanted`
- Feel free to propose new features by creating an issue first

### Before You Start
1. Check if there's already an issue for what you want to work on
2. If not, create an issue to discuss your proposed changes
3. Wait for feedback before starting significant work
4. Comment on the issue to let others know you're working on it

## Pull Request Process

### Creating a Pull Request
1. Create a new branch for your work:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

2. Make your changes and commit them:
   ```bash
   git add .
   git commit -m "Add: brief description of your changes"
   ```

3. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Open a Pull Request on GitHub

### Pull Request Guidelines
- **Title**: Use a clear, descriptive title
- **Description**: Explain what changes you made and why
- **Testing**: Describe how you tested your changes
- **Screenshots**: Include screenshots for UI changes
- **Breaking Changes**: Clearly document any breaking changes

### PR Template
```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] Tested locally
- [ ] Added/updated tests
- [ ] All existing tests pass

## Screenshots (if applicable)

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Code is commented where necessary
- [ ] Documentation updated
```

## Coding Standards

### JavaScript/React Standards
- Use ES6+ features
- Follow React functional component patterns
- Use hooks appropriately
- Implement proper error handling
- Write clear, self-documenting code

### Code Style
```javascript
// Good - Descriptive naming
const fetchVideoById = async (videoId) => {
  try {
    const response = await api.get(`/videos/${videoId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching video:', error);
    throw error;
  }
};

// Component structure
const VideoCard = ({ video, onVideoClick }) => {
  const { title, thumbnail, author, duration } = video;
  
  return (
    <div className="video-card" onClick={() => onVideoClick(video.id)}>
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>{author} • {duration}</p>
    </div>
  );
};
```

### CSS/Styling
- Use Tailwind CSS classes consistently
- Follow mobile-first responsive design
- Use semantic class names for custom CSS
- Maintain consistent spacing and typography

### File Naming
- Use PascalCase for React components: `VideoCard.jsx`
- Use camelCase for hooks: `useVideoData.jsx`
- Use kebab-case for utility files: `api-helpers.js`

### Directory Structure
```
src/
├── Components/           # Reusable UI components
│   ├── ComponentName/
│   │   ├── index.jsx    # Main component
│   │   └── styles.css   # Component-specific styles (if needed)
├── Pages/               # Page-level components
├── features/            # Redux slices and related logic
├── customHook/          # Custom React hooks
├── service/             # API service layer
└── Utiles/              # Utility functions and helpers
```

## Project Structure

### Key Areas to Understand

#### Frontend Architecture
- **Components**: Reusable UI components
- **Pages**: Top-level page components
- **Features**: Redux Toolkit slices for state management
- **Hooks**: Custom React hooks for reusable logic
- **Services**: API communication layer

#### State Management
- Redux Toolkit for global state
- Custom hooks for component-specific state
- RTK Query for data fetching (if implementing)

#### Common Patterns
```javascript
// Custom hook pattern
export const useVideoData = (videoId) => {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetchVideo(videoId)
      .then(setVideo)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [videoId]);
  
  return { video, loading, error };
};

// Component with error boundary
const VideoPlayer = ({ videoId }) => {
  const { video, loading, error } = useVideoData(videoId);
  
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!video) return <NotFound />;
  
  return <VideoPlayerComponent video={video} />;
};
```

## Testing

### Current Testing Setup
The project currently has minimal testing setup. We welcome contributions to improve test coverage.

### Adding Tests
- Use React Testing Library for component tests
- Use Jest for unit tests
- Test user interactions and edge cases
- Mock API calls appropriately

### Running Tests
```bash
npm test          # Run all tests
npm run test:watch # Run tests in watch mode
```

## Documentation

### Code Documentation
- Write JSDoc comments for complex functions
- Add inline comments for non-obvious logic
- Update README if you change setup process
- Document new features in appropriate files

### Example Documentation
```javascript
/**
 * Fetches videos based on search criteria
 * @param {Object} params - Search parameters
 * @param {string} params.query - Search query string
 * @param {string[]} params.tags - Array of tags to filter by
 * @param {number} params.page - Page number for pagination
 * @returns {Promise<Object>} Promise resolving to search results
 */
const searchVideos = async ({ query, tags, page = 1 }) => {
  // Implementation...
};
```

## Development Tips

### Debugging
- Use React Developer Tools
- Use Redux DevTools for state debugging
- Check browser console for errors
- Use network tab to debug API calls

### Performance Considerations
- Implement proper memoization where needed
- Optimize re-renders with React.memo
- Use lazy loading for routes and components
- Optimize images and assets

### Common Patterns
```javascript
// Error boundary pattern
const withErrorBoundary = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
    
    render() {
      if (this.state.hasError) {
        return <ErrorFallback />;
      }
      return <Component {...this.props} />;
    }
  };
};
```

## Getting Help

### Communication Channels
- **Issues**: For bug reports and feature requests
- **Discussions**: For general questions and ideas
- **Pull Requests**: For code review and feedback

### Resources
- [React Documentation](https://react.dev/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)

## Recognition

Contributors will be recognized in the following ways:
- Listed in the project's contributors section
- Mentioned in release notes for significant contributions
- Added to the project's acknowledgments

## Questions?

If you have questions about contributing:
1. Check existing issues and discussions
2. Create a new issue with the `question` label
3. Reach out to maintainers

Thank you for contributing to Video Site React Web! 🎉