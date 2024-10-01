// Import the 'http' module
import http from 'http';

// Define the port number the server will listen on
const port = 200;
// Create the server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hello, World!\n');
});

// The server listens on the defined port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
