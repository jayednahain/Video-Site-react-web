# Installation Guide

This guide provides detailed step-by-step instructions for setting up the Video Site React Web application on your local machine.

## Table of Contents
- [System Requirements](#system-requirements)
- [Quick Start](#quick-start)
- [Detailed Installation](#detailed-installation)
- [Verification](#verification)
- [Troubleshooting](#troubleshooting)
- [Next Steps](#next-steps)

## System Requirements

### Minimum Requirements
- **Operating System**: Windows 10, macOS 10.15, or Linux (Ubuntu 18.04+)
- **Node.js**: Version 16.x or higher
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 500MB free space
- **Internet**: Required for downloading dependencies

### Recommended Requirements
- **Node.js**: Version 18.x or higher
- **RAM**: 8GB or more
- **Storage**: 2GB free space for development

## Quick Start

If you're experienced with Node.js and React development, here's the fastest way to get started:

```bash
# Clone and setup
git clone https://github.com/jayednahain/Video-Site-react-web.git
cd Video-Site-react-web
npm install && cd server && npm install && cd ..

# Start both servers (requires 2 terminals)
# Terminal 1 - Backend:
cd server && npm start

# Terminal 2 - Frontend:
npm run dev
```

Open `http://localhost:5173` in your browser.

## Detailed Installation

### Step 1: Install Prerequisites

#### Install Node.js
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS version for your operating system
3. Run the installer and follow the setup wizard
4. Verify installation:
   ```bash
   node --version  # Should show v16.x.x or higher
   npm --version   # Should show 8.x.x or higher
   ```

#### Install Git (if not already installed)
- **Windows**: Download from [git-scm.com](https://git-scm.com/)
- **macOS**: Install via Homebrew: `brew install git` or download from git-scm.com
- **Linux**: `sudo apt-get install git` (Ubuntu/Debian) or equivalent for your distro

### Step 2: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/jayednahain/Video-Site-react-web.git

# Navigate to the project directory
cd Video-Site-react-web

# Verify you're in the right directory
ls -la  # Should show README.md, package.json, src/, server/, etc.
```

### Step 3: Install Frontend Dependencies

```bash
# Install frontend dependencies
npm install

# This will create node_modules/ and may take 2-3 minutes
# You should see a success message when complete
```

**Expected output:**
```
added 190+ packages, and audited 191 packages in Xs

40 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

### Step 4: Install Backend Dependencies

```bash
# Navigate to server directory
cd server

# Install backend dependencies
npm install

# Return to root directory
cd ..
```

**Expected output:**
```
added 193 packages, and audited 194 packages in Xs

21 packages are looking for funding
  run `npm fund` for details
```

### Step 5: Start the Backend Server

Open a new terminal window/tab and run:

```bash
# Navigate to project directory
cd path/to/Video-Site-react-web

# Start the backend server
cd server
npm start
```

**Expected output:**
```
> lws-json-server-todos@1.0.0 start
> json-server --watch db_videos.json --no-cors true --port 9000

  \{^_^}/ hi!

  Loading db_videos.json
  Done

  Resources
  http://localhost:9000/videos
  http://localhost:9000/tags

  Home
  http://localhost:9000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```

🎉 **Backend is ready!** Keep this terminal open.

### Step 6: Start the Frontend Server

In your original terminal (or a new one):

```bash
# Make sure you're in the root directory
cd path/to/Video-Site-react-web

# Start the frontend development server
npm run dev
```

**Expected output:**
```
> video-site-redux@0.0.0 dev
> vite

  VITE v7.0.6  ready in 181 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

🎉 **Frontend is ready!** 

### Step 7: Open the Application

1. Open your web browser
2. Navigate to `http://localhost:5173`
3. You should see the video application homepage

## Verification

### Test the Application
1. **Homepage Loading**: Verify videos are displayed in a grid layout
2. **Search Function**: Try searching for "React" in the search bar
3. **Tag Filtering**: Click on different tags to filter videos
4. **Video Detail**: Click on any video to view its detail page
5. **API Connection**: Check browser console for any error messages

### Check Both Servers
- **Frontend**: `http://localhost:5173` - Should show the React application
- **Backend**: `http://localhost:9000/videos` - Should show JSON data

## Troubleshooting

### Common Issues and Solutions

#### "Port already in use" errors
```bash
# If port 5173 is in use:
npm run dev -- --port 3000

# If port 9000 is in use:
cd server
npx json-server --watch db_videos.json --port 9001
# Then update frontend API URL accordingly
```

#### Dependencies installation fails
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### "Module not found" errors
```bash
# Verify you're in the correct directory
pwd

# Reinstall dependencies
npm install

# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

#### API connection issues
1. Ensure backend server is running on port 9000
2. Check browser network tab for failed requests
3. Verify no firewall is blocking localhost connections

#### Frontend doesn't load properly
1. Check browser console for JavaScript errors
2. Ensure all dependencies installed correctly
3. Try refreshing the page or clearing browser cache

### Getting Help

If you encounter issues not covered here:

1. **Check the console**: Look for error messages in both terminal and browser console
2. **Verify setup**: Ensure all previous steps completed successfully
3. **Check versions**: Confirm Node.js and npm versions meet requirements
4. **Search issues**: Look at the [GitHub Issues](https://github.com/jayednahain/Video-Site-react-web/issues) page
5. **Create an issue**: If problem persists, create a detailed bug report

## Next Steps

Once installation is complete:

1. **Explore the Code**: Check out the project structure in your IDE
2. **Read the Documentation**: Review the main README.md for feature details
3. **Start Developing**: Make changes and see them update in real-time
4. **Learn Redux**: Study the state management patterns used
5. **Customize**: Modify colors, layout, or add new features

## Development Workflow

### Typical Development Session
```bash
# Start both servers (in separate terminals)
cd server && npm start          # Terminal 1
npm run dev                     # Terminal 2

# Make your changes in src/
# Browser will automatically reload with changes

# When done, stop servers with Ctrl+C
```

### Building for Production
```bash
# Build the frontend
npm run build

# Test the production build
npm run preview
```

## Additional Tools

### Recommended VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Auto Rename Tag
- Bracket Pair Colorizer

### Browser Extensions
- React Developer Tools
- Redux DevTools

---

🎉 **Congratulations!** You now have a fully working Video Site React Web application running locally. Happy coding!