# Unit-fourteen-homework

<img src='https://img.shields.io/badge/License-MIT-yellow.svg'>

## Description

CMS-style blog site where developers can publish blog posts and articles, as well as comment on other developers' posts. Homepage contains existing blog posts, navigation links (homepage, dashboard, login/logout).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [License](#license)

## Installation

- Navigate to heroku site below

## Usage

Navigation links:

- Homepage: takes user to the homepage which contains existing blog posts (includes: title, date created).
  - When click on existing blog, presents title, contents, creator's username, date created, option to leave comment.
    - When click submit comment, page is updated to display the comment, comment creator's username, and date comment was created.
- Dashboard: takes user to the dashboard which shows blog posts the user has already created, along with an option to add a new blog post.
  - If user clicks to add new blog post, user is prompted to enter post title and contents. If user clicks button to create the post, then the title and contents of the post are saved and user is brought back to the updated dashboard showing the new post.
  - If user clicks on one of their existing posts in dashboard, they are given the option to delete or update the post and after are taken back to updated dashboard.
- Login: If click login, option to log in/sign up. If logged in, option changes to logout.
  - If idle on site for more than alloted time, user is logged out and unable to add, update, or delete comments. They can still view comments.

## Credits

Libraries:

- MySQL2 to connect to MySQL database
- Express.js API to create back end of web application
- Sequelize for object–relational mapping
- Dotenv package to use environmental variables to store sensitive data
- Handlebars.js for templating language (express-handlebars package to implement Handlebar.js)
- Express-session and connect-session-sequelize for authentication
- Heroku to deploy
- Bcrypt to hash passwords

## Contribution Guidelines

Utilize <a href= "https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md">The Contributor Covenant</a> as reference for appropriate contribution guidelines.

## Test Instructions

n/a

## License

License type: MIT

    "Copyright 2021 <COPYRIGHT HOLDER>

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."

Source for licensing information: <a href="https://opensource.org/licenses/MIT">Link to MIT license information</a>

## Screenshots

Screenshot of Homepage

<img src='public\images\screenshot-homepage.png' alt = 'Screenshot of homepage'>

Screenshot of Login Page

<img src='public\images\screenshot-login.png' alt = 'Screenshot of login page'>

Screenshot of Add Post Page

<img src='public\images\screenshot-add-post.png' alt = 'Screenshot of Add Post Page'>

## URLs

<a href="https://github.com/mlward639/Unit-fourteen-homework">Link to GitHub Repository</a>

<a href="https://peaceful-thicket-32012.herokuapp.com/">Link to Deployed Heroku Site</a>
