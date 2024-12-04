# Blog Context

A ReactJS blog application built using the Context API for state management.

## Features

* Displays a list of blog posts with pagination
* Allows users to navigate to individual blog post pages
* Supports filtering by tags and categories
* Includes a header and footer component
* Uses a custom context API for state management

## Usage

1. Clone the repository to your local machine
2. Install the required dependencies using `npm install` or `yarn install`
3. Start the application using `npm start` or `yarn start`
4. Open the application in a web browser at `http://localhost:3000`

## Code Structure

The code is organized into the following folders:

* `src`: contains the source code for the application
* `src/components`: contains reusable React components
* `src/context`: contains the custom context API code
* `src/pages`: contains the page-level components
* `src/assets`: contains static assets such as images and fonts

## Components

The following components are used in the application:

* [App](cci:1://file:///c:/Users/HP/OneDrive/Desktop/DotBatchProjects/selfPractice/Reactjs/BlogContext/src/App.jsx:14:0-52:1): the main application component
* [Header](cci:1://file:///c:/Users/HP/OneDrive/Desktop/DotBatchProjects/selfPractice/Reactjs/BlogContext/src/components/Header.jsx:2:0-10:1): the header component
* `Footer`: the footer component
* `BlogList`: the blog list component
* [BlogPost](cci:1://file:///c:/Users/HP/OneDrive/Desktop/DotBatchProjects/selfPractice/Reactjs/BlogContext/src/context/AppContext.jsx:15:4-43:5): the individual blog post component
* [Pagination](cci:1://file:///c:/Users/HP/OneDrive/Desktop/DotBatchProjects/selfPractice/Reactjs/BlogContext/src/components/Pagination.jsx:3:0-22:1): the pagination component

## Context API

The application uses a custom context API for state management. The context API is defined in `src/context/AppContext.js` and provides the following values:

* `blogPosts`: an array of blog post objects
* `currentPage`: the current page number
* `totalPages`: the total number of pages
* [fetchBlogPosts](cci:1://file:///c:/Users/HP/OneDrive/Desktop/DotBatchProjects/selfPractice/Reactjs/BlogContext/src/context/AppContext.jsx:15:4-43:5): a function to fetch blog posts from the API

## API

The application uses a mock API to fetch blog post data. The API is defined in `src/api.js` and provides the following endpoints:

* `GET /api/blog-posts`: returns an array of blog post objects
* `GET /api/blog-post/:id`: returns a single blog post object

## License

This code is licensed under the MIT License.