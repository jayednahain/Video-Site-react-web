# API Documentation

This document describes the REST API endpoints provided by the JSON Server backend for the Video Site React Web application.

## Base URL
```
http://localhost:9000
```

## Table of Contents
- [Videos API](#videos-api)
- [Tags API](#tags-api)
- [Query Parameters](#query-parameters)
- [Response Format](#response-format)
- [Error Handling](#error-handling)
- [Examples](#examples)

## Videos API

### Get All Videos
Retrieve a list of all videos.

**Endpoint:** `GET /videos`

**Response:**
```json
[
  {
    "id": 1,
    "title": "যে ১০ টি ভুল বিগিনার রিয়্যাক্ট ডেভেলপাররা করে থাকেন",
    "description": "আপনারা যারা বিগিনার হিসেবে রিয়্যাক্ট জেস নিয়ে কাজ করা শুরু করেছেন...",
    "author": "Learn with Sumit",
    "avatar": "https://avatars.githubusercontent.com/u/73503432?v=4",
    "date": "May 10, 2022",
    "duration": "10:12",
    "views": "2.1k",
    "link": "https://www.youtube-nocookie.com/embed/6O4s7v28nlw",
    "thumbnail": "https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg",
    "tags": ["javascript", "react", "tips"],
    "likes": 0,
    "unlikes": 0
  }
  // ... more videos
]
```

### Get Single Video
Retrieve details of a specific video by ID.

**Endpoint:** `GET /videos/{id}`

**Parameters:**
- `id` (integer) - The unique identifier of the video

**Response:**
```json
{
  "id": 1,
  "title": "যে ১০ টি ভুল বিগিনার রিয়্যাক্ট ডেভেলপাররা করে থাকেন",
  "description": "আপনারা যারা বিগিনার হিসেবে রিয়্যাক্ট জেস নিয়ে কাজ করা শুরু করেছেন...",
  "author": "Learn with Sumit",
  "avatar": "https://avatars.githubusercontent.com/u/73503432?v=4",
  "date": "May 10, 2022",
  "duration": "10:12",
  "views": "2.1k",
  "link": "https://www.youtube-nocookie.com/embed/6O4s7v28nlw",
  "thumbnail": "https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg",
  "tags": ["javascript", "react", "tips"],
  "likes": 0,
  "unlikes": 0
}
```

### Create New Video
Add a new video to the collection.

**Endpoint:** `POST /videos`

**Request Body:**
```json
{
  "title": "New Video Title",
  "description": "Video description here...",
  "author": "Author Name",
  "avatar": "https://example.com/avatar.jpg",
  "date": "Dec 15, 2023",
  "duration": "5:30",
  "views": "100",
  "link": "https://www.youtube-nocookie.com/embed/VIDEO_ID",
  "thumbnail": "https://example.com/thumbnail.jpg",
  "tags": ["tag1", "tag2"],
  "likes": 0,
  "unlikes": 0
}
```

**Response:**
```json
{
  "id": 8,
  "title": "New Video Title",
  "description": "Video description here...",
  // ... rest of the video data
}
```

### Update Video
Update an existing video's information.

**Endpoint:** `PUT /videos/{id}`

**Parameters:**
- `id` (integer) - The unique identifier of the video

**Request Body:**
```json
{
  "title": "Updated Video Title",
  "description": "Updated description...",
  "likes": 5,
  "unlikes": 1
  // ... other fields to update
}
```

### Partial Update Video
Update specific fields of a video.

**Endpoint:** `PATCH /videos/{id}`

**Parameters:**
- `id` (integer) - The unique identifier of the video

**Request Body:**
```json
{
  "likes": 10,
  "unlikes": 2
}
```

### Delete Video
Remove a video from the collection.

**Endpoint:** `DELETE /videos/{id}`

**Parameters:**
- `id` (integer) - The unique identifier of the video

**Response:** `200 OK` (empty body)

## Tags API

### Get All Tags
Retrieve all available tags.

**Endpoint:** `GET /tags`

**Response:**
```json
[
  "javascript",
  "react",
  "tips",
  "vscode",
  "tailwind",
  "css",
  "debounce",
  "sass",
  "ui",
  "router"
]
```

## Query Parameters

### Pagination
- `_page` - Page number (starts from 1)
- `_limit` - Number of items per page

**Example:**
```
GET /videos?_page=1&_limit=5
```

### Sorting
- `_sort` - Field to sort by
- `_order` - Sort order (`asc` or `desc`)

**Example:**
```
GET /videos?_sort=date&_order=desc
```

### Filtering
- `{field}` - Filter by exact match
- `{field}_like` - Filter by partial match
- `{field}_ne` - Filter by not equal

**Examples:**
```
GET /videos?author=Learn with Sumit
GET /videos?tags_like=react
GET /videos?id_ne=1
```

### Search
- `q` - Full-text search across all fields

**Example:**
```
GET /videos?q=react tutorial
```

### Range Filtering
- `{field}_gte` - Greater than or equal
- `{field}_lte` - Less than or equal

**Example:**
```
GET /videos?likes_gte=5
```

## Response Format

### Success Response
All successful responses return JSON data with appropriate HTTP status codes:
- `200 OK` - Successful GET, PUT, PATCH requests
- `201 Created` - Successful POST requests
- `204 No Content` - Successful DELETE requests

### Pagination Headers
When using pagination, responses include these headers:
- `X-Total-Count` - Total number of items
- `Link` - Links to first, prev, next, and last pages

### Error Response
Error responses follow this format:
```json
{
  "error": "Error message description"
}
```

## Error Handling

### Common HTTP Status Codes
- `200 OK` - Request successful
- `201 Created` - Resource created successfully
- `400 Bad Request` - Invalid request data
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error

### Error Examples

**404 Not Found:**
```
GET /videos/999
```
Response:
```json
{
  "error": "Video not found"
}
```

**400 Bad Request:**
```
POST /videos
Content-Type: application/json

{
  "invalid": "data"
}
```

## Examples

### Get Videos with Pagination
```bash
curl "http://localhost:9000/videos?_page=1&_limit=3"
```

### Search Videos
```bash
curl "http://localhost:9000/videos?q=javascript"
```

### Filter by Tags
```bash
curl "http://localhost:9000/videos?tags_like=react"
```

### Get Popular Videos (by likes)
```bash
curl "http://localhost:9000/videos?_sort=likes&_order=desc"
```

### Create a New Video
```bash
curl -X POST "http://localhost:9000/videos" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Tutorial",
    "description": "Learn something new",
    "author": "New Author",
    "avatar": "https://example.com/avatar.jpg",
    "date": "Dec 15, 2023",
    "duration": "8:45",
    "views": "50",
    "link": "https://www.youtube-nocookie.com/embed/NEW_ID",
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
  -d '{
    "likes": 25,
    "unlikes": 3
  }'
```

### Delete a Video
```bash
curl -X DELETE "http://localhost:9000/videos/1"
```

## Frontend Integration

### Using with Axios
```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9000'
});

// Get all videos
const videos = await api.get('/videos');

// Search videos
const searchResults = await api.get('/videos?q=react');

// Update video likes
await api.patch(`/videos/${videoId}`, {
  likes: newLikeCount
});
```

### Using with Fetch
```javascript
// Get videos with error handling
async function fetchVideos() {
  try {
    const response = await fetch('http://localhost:9000/videos');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const videos = await response.json();
    return videos;
  } catch (error) {
    console.error('Failed to fetch videos:', error);
    throw error;
  }
}
```

## Rate Limiting

Currently, there are no rate limits imposed by the JSON Server. In a production environment, consider implementing rate limiting to prevent abuse.

## CORS Configuration

The server is configured with `--no-cors true` to allow cross-origin requests from the frontend during development. For production deployment, configure CORS properly based on your frontend domain.

## Development vs Production

### Development
- Base URL: `http://localhost:9000`
- No authentication required
- Full CORS access
- No rate limiting

### Production Recommendations
- Use a proper database (PostgreSQL, MongoDB, etc.)
- Implement authentication and authorization
- Add input validation and sanitization
- Configure proper CORS policies
- Implement rate limiting
- Add request logging and monitoring
- Use HTTPS

---

For more information about JSON Server capabilities, visit the [official documentation](https://github.com/typicode/json-server).