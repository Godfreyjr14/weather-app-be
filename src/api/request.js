const SERVER_URL = 'http://localhost:5000';

const request = async (url, method = 'GET', data = null) => { 
    // This function makes a request to the server
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (method !== 'GET' && data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${SERVER_URL}${url}`, options); // This line sends the request to the server

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }  // This function makes a request to the server and returns the response as JSON
  export default request; // 