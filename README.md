# Recruitment Application
A recruitment application for an amusement park.


# Project Explained
The recruitment  application is made for an amusement park where applicants are able to apply for a position at the said company. It also enables the recruiters to recieve the applications to then make the decision wheteher or not the applicant  will proceed on the application process.


# Tools
###### The application uses:
###### Git for version control.
###### npm for Project management.
###### nodemon for automatic restart.
###### Handlebars as template engine.
###### Express.js for back-end.
###### Mysql for the database.
###### MVC structure for front-end and jest for testing. 
###### The application is also deployed on AWS Cloud platform.

# Frameworks
###### bcrypt
###### body-parser
###### cookie-parser
###### dotenv 
###### express
###### jsonwebtoken
###### mysql2
###### sequelize
###### jest
###### nodemon


# Architecture
The group have chosen to implement Version 2, i.e chosen Client-Side Rendering with a Monolithic Architecture.  
More information regarding our decision can be find [here](https://github.com/MoayadAlkhatib/RecruitmentApplication/wiki/Decision-Log)


Our application currently implemets the following use cases:
#### Use case 5.1: User can create an account.
#### Use case 5.2: User can login.
#### Use case 5.3: An authenticated user can apply for a job.



# Get started
### 1. Download or Clone this repo:
Start by cloning the repository to your local machine. <br />
```
git clone https://github.com/MoayadAlkhatib/RecruitmentApplication.git
```

### 2. Install node.js:
[Follow the link](https://nodejs.org/en/)



### 3. Install dependencies:
Navigate to the cloned repo’s directory and enter the following command <br />
```
npm install     # To install all dependencies
```

### 4. Run the application:
#### 4.1 Follow these stepes:
 1. Copy everythin from .env.example
 2. Create a new .env file.
 3. Paste inside the new .env file.
 4. Add your own configration for the database and the JWT_SECRET

#### 4.2 Crete the old database:
Run the script oldDataBase.sql to create the Mysql database with the old data.

#### 4.3 Migrations
This applications uses [sequelize-cli](https://www.npmjs.com/package/sequelize-cli) to migrate the data from the old data base to the new one.
Follow these steps:
1. Run the following command to install [sequelize-cli](https://www.npmjs.com/package/sequelize-cli) globally on your machine. 

```
npm i -g sequelize-cli
``` 
2. Run the migrations inside migrations folder by running this command:

```
sequelize db:migrate
```
3. Run the script passwordEncryption.js to encrypt the old passwords by running:

```
npm run migratePass
```
4. Run this command to run the application on port 8080

```
npm run start  
open http://localhost:8080 to view it in any browser of your choice.
npm run dev //That will run the application using nodemon.
``` 

### 5. Tests:

To run the tests for this application, enter the following command from the root directory:

```
npm run test
```
### 6. Development process:
Use [projects](https://github.com/MoayadAlkhatib/RecruitmentApplication/projects/1) to add components or to change current status of a component.

### 7. Deployment:
This application uses AWS as cloud platform. 
This application is up and running on : https://alkhatib.ddns.net





# Folder Structure
The following diagram will give a clear picture of what our directory looks like. And also how those diffrent layers works and communicate with each other.
```
|               
+---public
|   \---css
|           background.jpg
|           style.css
|           
+---src
|   |   app.js
|   |   
|   +---controller
|   |       Controller.js
|   |       
|   +---integration
|   |       DAO.js
|   |       
|   +---model
|   |       Competence.js
|   |       CompetenceValidation.js
|   |       LogIn.js
|   |       Registration.js
|   |       User.js
|   |       
|   +---routes
|   |   |   Dashboard.js
|   |   |   LogIn.js
|   |   |   Main.js
|   |   |   Registration.js
|   |   |   
|   |   \---auth
|   |           Auth.js
|   |           
|   +---util
|   |       Validators.js
|   |       
|   \---views
|       |   dashboard.handlebars
|       |   login.handlebars
|       |   main.handlebars
|       |   registration.handlebars
|       |   
|       \---layouts
|               default.handlebars
|               
+---tests
|   +---controller
|   |       Controller.test.js
|   |       
|   +---model
|   |       Registration.test.js
|   |       
|   \---util
|           Validators.test.js

```
