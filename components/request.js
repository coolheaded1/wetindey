const API_KEY = "90c3cb30b968498087571d64d94e58d8";
const API_KEY_2 = "ea50cbefaa9640c788ff4880126188b7";
const BASE_URL = "https://newsapi.org/v2";
const request = {
   topHeadlines: `${BASE_URL}/top-headlines?apiKey=${API_KEY_2}`,
   topHeadlinesTechCrunch: `${BASE_URL}/top-headlines?sources=techcrunch&apiKey=${API_KEY}`,
};

export default request;
