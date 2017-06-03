# Basic Installation  
 *$express app name --view=ejs  
 *$npm install  
 *$npm install mongoose --save  
 *$npm install jsonwebtoken --save  
 (*dotenv, bootstrap)  

# Challenges  
 *Routes issue in Node.js side  
  At first my Node app had two routes as "home routes", one was index.js, another was questionnaire.js but in that structure it was confusing to setup api authentication in questionnaire page so integrated in index.js.  

 *Node API which can have different answer field in the same question lists.  
  Created two question types by having each question two different value as question_type.  
  When creating a question, admin-user is required to select question type, and it will connect switching a question's value.  
  And with each value of question type, seperate answer field in React app side.  

 *Link between submit button and a list of questions & each answer field in React side.  
   
