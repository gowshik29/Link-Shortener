document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('long-url');
    const shortenBtn = document.getElementById('shorten-btn');
    const shortUrlContainer = document.getElementById('short-url-container');
    const shortUrl = document.getElementById('short-url').querySelector('a');
    const copyBtn = document.getElementById('copy-btn');
  
    shortenBtn.addEventListener('click', async () => {
      const longUrl = input.value;
  
      // Check if the input is empty
      if (!longUrl) {
        alert('Please enter a URL before shortening.');
        return;
      }
  
      try {
        // Generate a unique short code using the Bitly API
        const response = await fetch(`https://api-ssl.bitly.com/v4/shorten`, {
          method: 'POST',
          headers: {
            'Authorization': 'af3224912fb6c96c5ec36ea25f7fccb180b3c274', // Replace with your actual Bitly API key
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            long_url: longUrl
          })
        });
  
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
  
        const data = await response.json();
  
        // Display the shortened URL to the user
        const shortUrlValue = data.link;
        shortUrl.href = shortUrlValue;
        shortUrl.textContent = shortUrlValue;
        shortUrlContainer.style.display = 'block';
      } catch (error) {
        console.error(error);
        alert('An error occurred while shortening the URL.');
      }
    });
  
    copyBtn.addEventListener('click', () => {
      const range = document.createRange();
      range.selectNode(shortUrl);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
      alert('Shortened URL copied to clipboard!');
    });
  });
  