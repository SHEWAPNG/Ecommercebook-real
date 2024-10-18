[13:13, 10/1/2024] Adesewa56: 
// Replace with your actual API key
const apiKey = "AIzaSyADGOJhYuyNW0giKVualamYVZkT9u46PSc";

// The query to search for books. You can change this to whatever topic you like
const query = "architecture";

// URL to fetch data from Google Books API
const url = https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey};

// Fetch data from the API
fetch(url)
  .then((response) => {
    // Check if the response is okay (status code 200)
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json(); // Convert the response to JSON
  })
  .then((data) => {
    const booksContainer = document.getElementById("books");

    // Check if there are any items in the response
    if (data.items && data.items.length > 0) {
      // Loop through each book in the response
      data.items.forEach((book) => {
        // Extract relevant book information
        const title = book.volumeInfo.title;
        const authors = book.volumeInfo.authors
          ? book.volumeInfo.authors.join(", ")
          : "Unknown Author";
        const thumbnail = book.volumeInfo.imageLinks
          ? book.volumeInfo.imageLinks.thumbnail
          : "";

        // Create HTML for each book and add it to the books container
        booksContainer.innerHTML += `
                    <div class="book-box">
                        <h3>${title}</h3>
                        <p>Author(s): ${authors}</p>
                        ${
                          thumbnail
                            ? <img src="${thumbnail}" alt="${title}">
                            : "<p>No image available</p>"
                        }
                    </div>
                `;
      });
    } else {
      booksContainer.innerHTML = "<p>No books found.</p>"; // Message if no books are returned
    }
  })
  .catch((error) => {
    console.error("Error fetching books:", error);
    const booksContainer = document.getElementById("books");
    booksContainer.innerHTML =
      "<p>Error fetching books. Please try again later.</p>"; // Error message
  });
[14:18, 10/1/2024] Adesewa56: <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>University E-Commerce Site</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <div class="logo">University Shop</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Orders</a></li>
          <li><a href="#">Customers</a></li>
          <li><a href="#">Analytics</a></li>
        </ul>
      </nav>
    </header>

    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to the University E-Shop</h1>
        <p>Shop branded and institution-based products!</p>
        <button>Explore Products</button>
      </div>
    </section>

    <section class="features">
      <div class="feature-box">
        <h2>Product Management</h2>
        <p>Manage all the available products on the platform.</p>
      </div>
      <div class="feature-box">
        <h2>Order Management</h2>
        <p>Track and manage orders placed by customers.</p>
      </div>
      <div class="feature-box">
        <h2>Customer Management</h2>
        <p>View and manage customer information.</p>
      </div>
      <div class="feature-box">
        <h2>Sales Analytics</h2>
        <p>Analyze sales data to track performance.</p>
      </div>
    </section>

    <section id="book-list" class="book-list">
      <h2>Available Books</h2>
      <div id="books"></div>
      <!-- Placeholder for books -->
    </section>

    <footer>
      <p>&copy; 2024 University E-Shop. All Rights Reserved.</p>
    </footer>

    <!-- Link to your JavaScript file -->
    <script src="script.js"></script>
  </body>
</html>
[14:23, 10/1/2024] Adesewa56: // script.js

// Replace with your actual API key
const apiKey = "AIzaSyADGOJhYuyNW0giKVualamYVZkT9u46PSc";

// The query to search for books. You can change this to whatever topic you like
const query = "architecture";

// URL to fetch data from Google Books API
const url = https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey};

// Fetch data from the API
fetch(url)
  .then((response) => {
    // Check if the response is okay (status code 200)
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json(); // Convert the response to JSON
  })
  .then((data) => {
    const booksContainer = document.getElementById("books");

    // Check if there are any items in the response
    if (data.items && data.items.length > 0) {
      // Loop through each book in the response
      data.items.forEach((book) => {
        // Extract relevant book information
        const title = book.volumeInfo.title;
        const authors = book.volumeInfo.authors
          ? book.volumeInfo.authors.join(", ")
          : "Unknown Author";
        const thumbnail = book.volumeInfo.imageLinks
          ? book.volumeInfo.imageLinks.thumbnail
          : "";

        // Create HTML for each book and add it to the books container
        booksContainer.innerHTML += `
                    <div class="book-box">
                        <h3>${title}</h3>
                        <p>Author(s): ${authors}</p>
                        ${
                          thumbnail
                            ? <img src="${thumbnail}" alt="${title}">
                            : "<p>No image available</p>"
                        }
                    </div>
                `;
      });
    } else {
      booksContainer.innerHTML = "<p>No books found.</p>"; // Message if no books are returned
    }
  })
  .catch((error) => {
    console.error("Error fetching books:", error);
    const booksContainer = document.getElementById("books");
    booksContainer.innerHTML =
      "<p>Error fetching books. Please try again later.</p>"; // Error message
  });