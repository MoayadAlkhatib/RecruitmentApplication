# Recruitment Application
A recruitment application for an amusement park.

The application uses Express.js for back-end, Mysql for the database, MVC  structure for front-end and jest for testing.

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
```
npm start  
open http://localhost:8080 to view it in any browser of your choice.
``` 

### 5. Tests:

To run the tests for this application, enter the following command from the root directory:

```
npm run test
```





# Folder Structure
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
