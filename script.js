// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

// Function to fetch news from the News API
async function fetchNews() {
  const apiKey = 'ae772234e85bd393da60fecbc291aaf3'; // Replace 'YOUR_API_KEY' with your actual API key
  // const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  const apiUrl = 'https://gnews.io/api/v4/search?q=example&apikey=ae772234e85bd393da60fecbc291aaf3https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=4658&manga=4199&manga=11608'

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (data.status === 'ok') {
      displayNews(data.articles);
    } else {
      console.error('Error fetching news:', data.message);
    }
  } catch (error) {
    console.error('Error fetching news:', error);
  }
}

// Function to display news on the webpage
function displayNews(articles) {
  const root = document.getElementById('root');
  root.innerHTML = '';

  articles.forEach(article => {
    const articleDiv = document.createElement('div');
    articleDiv.classList.add('w3-quarter');
    articleDiv.innerHTML = `
      <img src="${article.urlToImage}" alt="${article.title}" style="width:100%">
      <h3>${article.title}</h3>
      <p>${article.description}</p>
    `;
    root.appendChild(articleDiv);
  });
}

// Call fetchNews when the page loads
window.onload = fetchNews;
