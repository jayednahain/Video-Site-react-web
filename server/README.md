# Video Site Backend API

A REST API server built with JSON Server providing video data for the Video Site React Web application.

## Overview

This backend serves as a mock API for the video streaming application, providing endpoints for:
- Video CRUD operations
- Tag-based filtering
- Search functionality
- Video metadata management

## Features

- **RESTful API**: Full CRUD operations for videos
- **JSON Server**: Lightweight, zero-configuration API server
- **CORS Enabled**: Cross-origin requests supported
- **Real-time Updates**: File watching for automatic data reloading
- **Flexible Querying**: Support for pagination, sorting, and filtering

## Installation

### Prerequisites
- Node.js (version 16+ recommended)
- npm (comes with Node.js)

### Setup
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Start the server
npm start
```

The server will start at `http://localhost:9000`

## API Endpoints

### Videos
- `GET /videos` - Get all videos
- `GET /videos/:id` - Get a specific video
- `POST /videos` - Create a new video
- `PUT /videos/:id` - Update a video completely
- `PATCH /videos/:id` - Update specific video fields
- `DELETE /videos/:id` - Delete a video

### Tags
- `GET /tags` - Get all available tags

## Example Usage

### Get All Videos
```bash
curl http://localhost:9000/videos
```

### Search Videos
```bash
curl "http://localhost:9000/videos?q=react"
```

### Filter by Tags
```bash
curl "http://localhost:9000/videos?tags_like=javascript"
```

### Get Paginated Results
```bash
curl "http://localhost:9000/videos?_page=1&_limit=5"
```

### Create a New Video
```bash
curl -X POST "http://localhost:9000/videos" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Tutorial",
    "description": "Learn something new",
    "author": "Author Name",
    "avatar": "https://example.com/avatar.jpg",
    "date": "Dec 15, 2023",
    "duration": "8:45",
    "views": "50",
    "link": "https://www.youtube-nocookie.com/embed/VIDEO_ID",
    "thumbnail": "https://example.com/thumb.jpg",
    "tags": ["tutorial", "beginner"],
    "likes": 0,
    "unlikes": 0
  }'
```

### Update Video Likes
```bash
curl -X PATCH "http://localhost:9000/videos/1" \
  -H "Content-Type: application/json" \
  -d '{"likes": 25, "unlikes": 3}'
```

### Delete a Video
```bash
curl -X DELETE "http://localhost:9000/videos/1"
```

## Data Structure

### Video Object
```json
{
  "id": 1,
  "title": "Video Title",
  "description": "Video description...",
  "author": "Author Name",
  "avatar": "https://example.com/avatar.jpg",
  "date": "May 10, 2022",
  "duration": "10:12",
  "views": "2.1k",
  "link": "https://www.youtube-nocookie.com/embed/VIDEO_ID",
  "thumbnail": "https://i3.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg",
  "tags": ["javascript", "react", "tips"],
  "likes": 0,
  "unlikes": 0
}
```

## Query Parameters

### Pagination
- `_page` - Page number (starts from 1)
- `_limit` - Number of items per page

### Sorting
- `_sort` - Field to sort by
- `_order` - Sort order (asc/desc)

### Filtering
- `{field}` - Exact match
- `{field}_like` - Partial match
- `q` - Full-text search

### Example Queries
```bash
# Get page 2 with 3 items per page
GET /videos?_page=2&_limit=3

# Sort by likes in descending order
GET /videos?_sort=likes&_order=desc

# Filter by author
GET /videos?author=Learn with Sumit

# Search in all fields
GET /videos?q=javascript tutorial
```

## Configuration

### Port Configuration
Default port is 9000. To change:
```bash
npx json-server --watch db_videos.json --port 3001
```

### CORS Configuration
CORS is enabled by default with `--no-cors true`. To customize:
```bash
npx json-server --watch db_videos.json --no-cors false
```

## Database File

The `db_videos.json` file contains all the video data. It's structured as:
```json
{
  "videos": [
    // Array of video objects
  ]
}
```

### Backup
It's recommended to backup the database file regularly:
```bash
cp db_videos.json db_videos_backup.json
```

## Development

### File Watching
The server automatically reloads when `db_videos.json` is modified.

### Adding New Videos
You can manually edit `db_videos.json` or use the API endpoints.

### Custom Routes
To add custom routes, create a `routes.json` file:
```json
{
  "/api/videos": "/videos",
  "/api/videos/:id": "/videos/:id"
}
```

Then start with:
```bash
npx json-server --watch db_videos.json --routes routes.json
```

## Production Considerations

For production use, consider:
- Using a proper database (MongoDB, PostgreSQL)
- Implementing authentication
- Adding input validation
- Setting up proper logging
- Implementing rate limiting
- Using environment variables for configuration

## Scripts

Available npm scripts:
```bash
npm start          # Start the JSON server
npm run start:prod # Start with production settings
```

## Environment Variables

Create a `.env` file for configuration:
```env
PORT=9000
NODE_ENV=development
```

## Links

- [JSON Server Documentation](https://github.com/typicode/json-server)
- [JSONView Chrome Extension](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc)
- [Learn with Sumit YouTube Channel](https://youtube.com/learnwithsumit)
- [Project Repository](https://github.com/jayednahain/Video-Site-react-web)

## Troubleshooting

### Common Issues

**Port already in use:**
```bash
npx json-server --watch db_videos.json --port 9001
```

**File not found:**
Ensure `db_videos.json` exists in the server directory.

**CORS errors:**
Check that `--no-cors true` is included in the start command.

## Support

For issues and questions:
- Check the [main project repository](https://github.com/jayednahain/Video-Site-react-web)
- Review the [JSON Server documentation](https://github.com/typicode/json-server)
- Create an issue in the project repository