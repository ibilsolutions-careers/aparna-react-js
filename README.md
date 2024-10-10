# Bookshelf Application

This project is a simple **Bookshelf** application built with **React.js**. It uses the **New York Times Books API** to fetch and display a list of bestselling books. Users can view book details and save their favorite books to a virtual "bookshelf."

## Features

- Browse New York Times bestselling books.
- View detailed information about each book.
- Save favorite books to your personal bookshelf.

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** and **npm**: You can download them from [Node.js Official Website](https://nodejs.org/).
- A **New York Times Books API key**: Sign up at [New York Times Developer Network](https://developer.nytimes.com/) to get access to the API.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/bookshelf-app.git
    ```

2. Navigate into the project directory:

    ```bash
    cd bookshelf-app
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Set up the **New York Times Books API** key:

    - Create a `.env` file in the root directory of your project and add the following line:

      ```bash
      NEXT_PUBLIC_NYT_API_KEY=your_api_key_here
      ```

## Usage

1. Start the application:

    ```bash
    npm start
    ```

2. The application should open in your browser at `http://localhost:3000`.

3. Browse the list of bestsellers and click on any book to view more details. You can save favorite books to your virtual bookshelf.

## Technologies Used

- **React.js - NextJS Framework**: A JavaScript library for building user interfaces.
- **Axios**: For making HTTP requests to the New York Times Books API.
- **New York Times Books API**: Provides data on current bestsellers and book reviews.


