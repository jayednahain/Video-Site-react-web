# Video Site React Web Application

A modern, full-stack video streaming platform built with React and Redux Toolkit. This application provides a YouTube-like experience with video browsing, searching, filtering, and interactive features.

![Home Page](https://github.com/user-attachments/assets/d2c2a990-272f-4671-9cfb-8e5d459c36f8)

## 🚀 Features

### Frontend Features
- **Video Browsing**: Browse through a collection of videos with thumbnail previews
- **Search Functionality**: Search videos by title, description, or content
- **Tag-based Filtering**: Filter videos by technology tags (JavaScript, React, CSS, etc.)
- **Video Player**: Embedded video player with full controls
- **Like/Unlike System**: Interactive rating system for videos
- **Related Videos**: Smart recommendations based on video tags
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Pagination**: Navigate through large video collections efficiently

### Backend Features
- **RESTful API**: JSON Server providing video data and metadata
- **Video Management**: CRUD operations for video content
- **Tag System**: Categorization and filtering capabilities
- **No-CORS Support**: Configured for cross-origin requests

![Video Detail Page](https://github.com/user-attachments/assets/4f44d679-da84-47d4-a2b8-47a4bee9610e)

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite 7** - Fast build tool and development server
- **Redux Toolkit** - State management with RTK Query
- **React Router DOM 7** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests

### Backend
- **JSON Server** - Mock REST API server
- **Node.js** - Runtime environment

### Development Tools
- **ESLint** - Code linting and formatting
- **Vite DevTools** - Development debugging
- **Hot Module Replacement** - Fast development workflow

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 16.x or higher)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

To check if you have these installed:
```bash
node --version
npm --version
git --version
```

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/jayednahain/Video-Site-react-web.git
cd Video-Site-react-web
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Install Backend Dependencies
```bash
cd server
npm install
cd ..
```

### 4. Start the Backend Server
Open a new terminal window and run:
```bash
cd server
npm start
```

The JSON server will start at `http://localhost:9000`

### 5. Start the Frontend Development Server
In another terminal window:
```bash
npm run dev
```

The React application will start at `http://localhost:5173`

### 6. Open Your Browser
Navigate to `http://localhost:5173` to view the application.

## 📁 Project Structure

```
Video-Site-react-web/
├── README.md
├── package.json
├── vite.config.js
├── eslint.config.js
├── index.html
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx                 # Main application component
│   ├── main.jsx               # Application entry point
│   ├── index.css              # Global styles
│   ├── Components/            # Reusable UI components
│   │   ├── SearchBar/         # Search functionality
│   │   ├── description/       # Video description components
│   │   ├── footer/           # Footer component
│   │   ├── grid/             # Video grid layout
│   │   ├── list/             # Video list components
│   │   ├── loader/           # Loading indicators
│   │   ├── navbar/           # Navigation bar
│   │   ├── pagination/       # Pagination controls
│   │   ├── tags/             # Tag filtering components
│   │   └── vedioGrid/        # Video grid items
│   ├── Pages/                # Page components
│   │   ├── home.jsx          # Home page
│   │   └── vedio.jsx         # Video detail page
│   ├── Utiles/               # Utility components
│   │   └── Routing.jsx       # App routing configuration
│   ├── features/             # Redux slices
│   │   ├── filter/           # Filter state management
│   │   ├── relatedVedios/    # Related videos logic
│   │   ├── tags/             # Tags state management
│   │   ├── vedio/            # Single video state
│   │   └── vedios/           # Videos collection state
│   ├── customHook/           # Custom React hooks
│   ├── redux/                # Redux store configuration
│   ├── service/              # API service layer
│   └── assets/               # Static assets (images, icons)
└── server/                   # Backend JSON server
    ├── package.json
    ├── db_videos.json        # Video database
    └── README.md            # Server documentation
```

## 🔧 Available Scripts

### Frontend Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint for code quality
```

### Backend Scripts
```bash
cd server
npm start            # Start JSON server on port 9000
```

## 🌐 API Endpoints

The JSON server provides the following endpoints:

### Videos
- `GET /videos` - Get all videos
- `GET /videos/:id` - Get a specific video
- `POST /videos` - Create a new video
- `PUT /videos/:id` - Update a video
- `DELETE /videos/:id` - Delete a video

### Tags
- `GET /tags` - Get all available tags

### Query Parameters
- `?_limit=10` - Limit results
- `?_page=1` - Pagination
- `?q=search term` - Search videos
- `?tags_like=react` - Filter by tags

### Example API Calls
```bash
# Get all videos
curl http://localhost:9000/videos

# Search videos
curl "http://localhost:9000/videos?q=react"

# Filter by tags
curl "http://localhost:9000/videos?tags_like=javascript"

# Get paginated results
curl "http://localhost:9000/videos?_page=1&_limit=5"
```

## 🎨 Features in Detail

### Video Browsing
- Grid layout displaying video thumbnails
- Video metadata (title, author, views, date)
- Responsive design for different screen sizes

### Search & Filter
- Real-time search across video titles and descriptions
- Tag-based filtering system
- Combined search and filter capabilities

### Video Player
- Embedded YouTube player with full controls
- Video information display
- Like/unlike functionality
- Related videos sidebar

### State Management
- Redux Toolkit for global state management
- Custom hooks for component-specific logic
- RTK Query for efficient data fetching

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL=http://localhost:9000
```

### Tailwind CSS Configuration
The application uses Tailwind CSS via CDN. For production, consider setting up Tailwind CSS build process:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 🚀 Deployment

### Frontend Deployment
1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service (Netlify, Vercel, etc.)

### Backend Deployment
1. Deploy the server folder to a Node.js hosting service
2. Update the frontend API base URL to point to your deployed backend

### Environment Setup for Production
- Update API URLs in the frontend configuration
- Configure CORS settings if needed
- Set up proper error handling and logging

## 🐛 Troubleshooting

### Common Issues

**Issue: Server not starting**
```bash
# Make sure you're in the server directory
cd server
npm install
npm start
```

**Issue: Frontend build errors**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue: API connection errors**
- Ensure the backend server is running on port 9000
- Check if the frontend is making requests to the correct API URL
- Verify CORS configuration in the JSON server

**Issue: Linting errors**
```bash
# Fix common linting issues
npm run lint
```

### Debug Mode
To enable debug mode:
1. Open browser developer tools
2. Check console for error messages
3. Monitor network tab for API request failures

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style and conventions
- Write clear commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation when necessary

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Learn with Sumit**
- YouTube: [Learn with Sumit Channel](https://youtube.com/learnwithsumit)
- GitHub: [@jayednahain](https://github.com/jayednahain)

## 🙏 Acknowledgments

- React team for the amazing framework
- Redux Toolkit for simplified state management
- Tailwind CSS for utility-first styling
- Vite for fast development experience
- JSON Server for quick backend prototyping

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/jayednahain/Video-Site-react-web/issues) page
2. Create a new issue with detailed information
3. Join the discussion in existing issues

---

⭐ If you found this project helpful, please give it a star on GitHub!
