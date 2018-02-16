# Burger - Node Express Handlebars


Overview
In this assignment, I was asked to create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. I followed the MVC design pattern; using Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.

Check out the app running on heroku here: 

Installation Instructions
Fork this repo and clone the forked repo to your computer. You will need node.js installed on your system.
At the command line navigate to the apps folder and run npm install, this will install the npm dependencies from the package.json file.
Install mysql on your machine, if necessary -> https://www.mysql.com/
Set up your own localhost connection. In the /config/connection.js file in this repo, update the connection settings as follows:
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : <enter your user information>,
  password : <enter your password>,
  database : 'burgers_db'
});
In mysql Workbench, import schema.sql and seeds.sql from the db directory in this repo and run them to upload the db onto your localhost.
Then run node server.js the console should log the port number the app will be on (currently 3000).
Go to your browser and type http://localhost:3000/ into the address bar to bring up the app.
Screenshots

Built With
* Node.JS
* Express
* Handlebars
* MySQL
* ORM
* JavaScript
* JQuery
* Bootstrap
* HTML
* CSS

Technologies used
Node.js
MySQL
Handlebars - http://handlebarsjs.com/
body-parser NPM Package - https://www.npmjs.com/package/inquirer
express NPM Package - https://www.npmjs.com/package/express
mysql NPM Package - https://www.npmjs.com/package/mysql
handlebars NPM Package - https://www.npmjs.com/package/handlebars
express-handlbars NPM Package - https://www.npmjs.com/package/express-handlebars
Prerequisites
- Node.js - Download the latest version of Node https://nodejs.org/en/
- Materialize - Add CDN link http://materializecss.com/getting-started.html
Built With
Sublime Text - Text Editor
Materialize - Wireframe
MySql Workbench

Author
Trish Mederos
