# Basic Installation  
 *$express app name --view=ejs  
 *$npm install  
 *$npm install mongoose --save  
 *$npm install jsonwebtoken --save  
 (*dotenv, bootstrap)  
 *$npm i -g yarn   

For testing       
 *$yarn add mocha chai --dev  
 *$mkdir test  
 *$yarn run test  
 (*$yarn run watch)  
 *$touch test/app.test.js  
 *$yarn run test  
 *$yarn add supertest --dev  


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


# Design journey
*Trello  
 <img src="https://image.ibb.co/jbAm8F/Screen_Shot_2017_06_07_at_23_04_42.png" alt="Screen Shot 2017 06 07 at 23 04 42" border="0" />  

*Original Image for the dashboard  
 <img src="https://image.ibb.co/nfyL2a/original_image.jpg" alt="original image" border="0" />  
 <img src="https://image.ibb.co/b6THFv/moqup_layout.png" alt="moqup layout" border="0" />  
 <img src="https://image.ibb.co/e6LHha/react_questionnaire.jpg" alt="react questionnaire" border="0" />  

*The database structure  
 <img src="https://image.ibb.co/eVFToF/database_structure.jpg" alt="database structure" border="0" />  
 <img src="https://image.ibb.co/iXh2Fv/database_structure2.jpg" alt="database structure2" border="0" />   

*ERD  
 <img src="https://image.ibb.co/mBe4TF/erd_pic.jpg" alt="erd pic" border="0" />  
 <img src="https://image.ibb.co/cTLKTF/cfa_pj3_erd.png" alt="cfa pj3 erd" border="0" />  


# Future plan  
 *Implement Trello API and link it with Slack API.  
 *Implement google analytics API.  
 *Implement google calendar API.  
