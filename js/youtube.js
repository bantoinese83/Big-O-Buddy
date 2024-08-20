const API_KEY = 'AIzaSyD4lbSelnYbAsBipYpFam6v9ccVa__v4IQ';
const API_URL = 'https://www.googleapis.com/youtube/v3/search';
const MAX_RESULTS = 22;
let currentPage = 1;
let totalPages = 1;
let allVideos = [];

// Function to fetch YouTube videos related to "Big O Notation"
async function fetchTopYouTubeVideos(pageToken = '') {
  try {
    const response = await fetch(`${API_URL}?part=snippet&maxResults=${MAX_RESULTS}&q=Big+O+Notation&type=video&pageToken=${pageToken}&key=${API_KEY}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return { items: [], nextPageToken: '' };
  }
}

// Function to sort videos based on views, likes, comments
function sortVideos(videos) {
  return videos.sort((a, b) => {
    const aViews = a.statistics ? parseInt(a.statistics.viewCount) : 0;
    const bViews = b.statistics ? parseInt(b.statistics.viewCount) : 0;
    return bViews - aViews;
  });
}

// Function to display videos in a grid
function displayVideosInGrid(videos) {
  const videoGrid = document.getElementById("video-grid");
  videoGrid.innerHTML = ""; // Clear existing content

  videos.forEach(video => {
    if (video && video.id && video.id.videoId) {
      const videoItem = document.createElement("div");
      videoItem.classList.add("video-item");
      videoItem.innerHTML = `
        <iframe width="100%" height="200" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
        <h3>${video.snippet.title}</h3>
        <p>${video.snippet.description}</p>
      `;
      videoGrid.appendChild(videoItem);
    }
  });
}

// Function to handle pagination
async function handlePagination() {
  const data = await fetchTopYouTubeVideos();
  allVideos = allVideos.concat(data.items);
  totalPages = Math.ceil(allVideos.length / MAX_RESULTS);
  const sortedVideos = sortVideos(allVideos);
  displayVideosInGrid(sortedVideos.slice((currentPage - 1) * MAX_RESULTS, currentPage * MAX_RESULTS));
}

// Initialize the app
async function init() {
  await handlePagination();
  document.getElementById('next-page').addEventListener('click', async () => {
    if (currentPage < totalPages) {
      currentPage++;
      await handlePagination();
    }
  });
  document.getElementById('prev-page').addEventListener('click', async () => {
    if (currentPage > 1) {
      currentPage--;
      await handlePagination();
    }
  });
}

// Call the init function to load videos on page load
document.addEventListener('DOMContentLoaded', init);
