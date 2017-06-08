# CFA-Project-No3  
 *Overall  
  This is a questionnaire application for my client, visa agency.  
  My visa agency has a problem that that they would like to reconsider their degital marketing.
  For visa agency, their user review is very important for their marketing and company reliability.  
  If they get a good review from their customer(students, working holiday people), they can get more trust from other students and people who browse their website. So getting their user review is a part of their marketing process.   
  And currently they are doing some revision by email or paper but they think it is not enough and they want to improve their revision process.  
  However they are very busy in their daily work, their task priority toword revision process tends to be lower.  

  So as a technology solution, I would like to propose revision process with questionnaire application.  

  <img src="https://image.ibb.co/nyapTF/Screen_Shot_2017_06_08_at_10_10_58.png" alt="Screen_Shot_2017_06_08_at_10_10_58" border="0">  


# Function  
   *As an admin, the user(my visa agency) can create questions, once created they are reflected to React side.  
   *In react side, users(students, working holiday people) can answer each question and submit a questionnaire form.  
   *Once a questionnaire form is submitted, the data goes back to Node.js sisde again and display each result.  
   *The admin user can edit and delete questions.  
   *Each question has its question type and according to this question type, answer field is determined.  
   *Each quesiton and answer field are connected with the unique key.  

# Installation  
*Basic Installation  
 $express app name --view=ejs  
 $npm install  
 $npm install mongoose --save  
 $npm install jsonwebtoken --save  
 (*dotenv, bootstrap)  
 $npm i -g yarn   

*Node.js side:  
 axios  
 bootstrap  
 dotenv  
 ejs  
 express  
 jsonwebtoken  
 mongoose  

*React side:  
 axios  
 cors
 bootstrap    
 react-bootstrap  

*For testing       
 $yarn add mocha chai --dev  
 $mkdir test  
 $yarn run test  
 ($yarn run watch)  
 $touch test/app.test.js  
 $yarn run test  
 $yarn add supertest --dev  


# Challenges  
 *Routes issue in Node.js side  
  At first my Node app had two routes as "home routes", one was index.js, another was questionnaire.js but in that structure it was confusing to setup api authentication in questionnaire page so integrated in index.js.  

 *Node API which can have different answer field in the same question lists.  
  Created two question types by having each question two different value as question_type.  
  When creating a question, admin-user is required to select question type, and it will connect switching a question's value.  
  And with each value of question type, seperate answer field in React app side.  

 *Link between each questions and answers  

 *Link between submit button with questions & answers in React side.

 *Call a list of questions & answers from React to Node.js side.  


#  Trello  
 <img src="https://image.ibb.co/jbAm8F/Screen_Shot_2017_06_07_at_23_04_42.png" alt="Screen Shot 2017 06 07 at 23 04 42" border="0" />  


# Original Image for the dashboard  
 <img src="https://image.ibb.co/nfyL2a/original_image.jpg" alt="original image" border="0" />  
 <img src="https://image.ibb.co/b6THFv/moqup_layout.png" alt="moqup layout" border="0" />  
 <img src="https://image.ibb.co/e6LHha/react_questionnaire.jpg" alt="react questionnaire" border="0" />  


# The database structure  
 <img src="https://image.ibb.co/eVFToF/database_structure.jpg" alt="database structure" border="0" />  
 <img src="https://image.ibb.co/iXh2Fv/database_structure2.jpg" alt="database structure2" border="0" />  


# ERD  
 <img src="https://image.ibb.co/mBe4TF/erd_pic.jpg" alt="erd pic" border="0" />  
 <img src="https://image.ibb.co/ibJ0kv/Screen_Shot_2017_06_09_at_09_16_24.png" alt="Screen_Shot_2017_06_09_at_09_16_24" border="0">  


# Future plan  
 *Create the question field and unique key edit & delete page in Node.js side.  
 *Create the display limitation according to each questions so that the admin user can choose which question and answer to display.  
 *User authentication in React side.  
 *Implement Trello API and link it with Slack API.  
 *Implement google analytics API.  
 *Implement google calendar API.
