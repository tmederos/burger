# Burger - Node Express Handlebars


Overview
Eat the Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger on the left side of the page in the "Burgers not Eaten!" list. Each burger in the waiting area has an "Eat!" button. When the user clicks it, the burger will move to the right side of the page in the "Burgers Eaten!" list. The user can delete burgers from the "Burgers Eaten!" list by clicking the "Delete" button. New burgers can be added to the "Burgers not Eaten!" list by adding the new burger name in the Add a Burger field and clicking the Add Burger button. This app was created with with MySQL, Node, Express, Handlebars and a homemade ORM. It follows the MVC design pattern; using Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.

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

!Screenshot
(https://github.com/tmederos/burger)

---
Technologies used
* Node.js - https://nodejs.org/en/
* MySQL - https://www.mysql.com/
* Handlebars - http://handlebarsjs.com/
* Bootstrap (http://getbootstrap.com)
* body-parser NPM Package - https://www.npmjs.com/package/inquirer
* express NPM Package - https://www.npmjs.com/package/express
* mysql NPM Package - https://www.npmjs.com/package/mysql
* handlebars NPM Package - https://www.npmjs.com/package/handlebars
* express-handlbars NPM Package - https://www.npmjs.com/package/express-handlebars

!Built With
Sublime Text - Text Editor
Visual Studio Code - Text Editor
Bootstrap
MySql Workbench

Author
Trish Mederos
