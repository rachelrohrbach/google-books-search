## Google Books Search

## Table of Contents
* [General Information](#general-information)
* [Technologies](#technologies)
* [Screenshot](#screenshot)
* [Credits](#credits)
* [License](#license)

## General Information
This application is React-based Google Books Search app. It is a full-stack application using the MERN (MongoDB, Express, React, Node) stack.  You can search for books using the Google Books API by typing in a book title and clicking on "Search". From the results the user can click "View" to navigate to the book on the Google Play Store or click "Save" to save the book to the database. They can view the books they've saved on the Save Page and also delete them from the saved list.  

You can view the deployed application here: 

Alternatively, the application can be run locally by cloning the repository and then running following command in the terminal to install the dependencies required:
```sh
npm install
```
Then in a separate terminal window activate MongoDB with:
```sh
mongod
```
The application is then invoked with the following command:
```sh
npm run start
```
Your browser will automatically open to localhost:3000.

## Technologies
This project is created with: 
* MongoDB
* Express
* React 
* Node.js 
* JSX
* JavaScript
* HTML
* CSS
* Bootstrap
* Font Awesome

## Screenshot
![app gif](./readme-assets/app-demo.gif)


## Credits
I used the Google Books API (https://developers.google.com/books/docs/v1/using) for the book data and I consulted React (https://reactjs.org/), MDN Web Docs (https://developer.mozilla.org/en-US/), Stack Overflow (www.stackoverflow.com), and the GitLab repository from my course extensively in creating this application. 

## License
MIT License

Copyright (c) [2020] [Rachel Rohrbach]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.