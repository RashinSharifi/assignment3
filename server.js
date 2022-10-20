var express = require("express");
  var app = express();
  var HTTP_PORT = process.env.PORT || 8080;
  var dataprep=require('./data_prep');
  
  
  function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
  }
  
  app.get("/", function(req,res){
     let restext=("<h2>Declaretion</h2><p>I acknowledge the College's academic integrity policy-and my \
     own integrity-remain in effect whwther my work is</p><p>done remotely or onsite.Any test or assignment \
     is an act of trust between me and my instructor, and especially with</p><p>my classmates...even when no\
      one is watching. IdeclareI will not break that trust.</p><p>Name:<mark> Rashin Sharifi</mark></p><p>Student\
       Number: <mark>159653210</mark></p> <br> <a href='/CPA'>Click to visit CPA students</a> <br><a href='/highGPA'>\
       Click to see who has the highest GPA</a> <br>");
     
     res.send(restext);
  });
  
 
 