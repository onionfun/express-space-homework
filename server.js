// DEPENDENCIES
const express = require('express');
const app = express();
const Missions = require('./models/marsMissions')
//main functions: app.get < http verb.  /missions is the route the URL, anything can go there it's just what's typed into url, like an href
app.get('/missions', (req, res) =>{
  res.send(Missions)
})

// app.get('/missions/:index', (req, res)=>{
//   res.render('index.ejs', {
//     missions: Missions[req.params.index]
//   })
// })

// app.get('/missions/:index', (req, res)=>{
//     res.send(Missions[req.params.index]);
//   })
//like a .on(click) function, when someone requests this route, this function triggers
  app.get('/missions', (req, res)=>{
    //how do we send template? res.render() fills in the blanks on those templates
    //render vs send - send will just give the string ALWAYS USE RENDER gives the template or res.json which sends json formatted stuff
    res.render('index.ejs', {
      missions: Missions  //missions is name of variable in template, Missions is the value that will get filled in

    })
  })

  app.get('/missions/:index', (req, res)=>{
  //req.params is an object that express generates for us, if we have a route /hello/:name/:var if somoene sends that a req it reads through the parameters of :name and :var, the route has vars, req.params is an object with key names and the values are whatever we put in so if :name = Bill and :var = cool
    res.render('show.ejs', {
      mission: Missions[req.params.index]  //mission key can be any declared variable name
    }
      )

  })

 
  //how do we send data along to a template - we need to get it out of missions can send render a context obj - hwer are the variables you have access to and heres the data key name: and value of variables
//if the tests already exist 
// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * Make it so you can click on a mission’s name on the index page, and be taken to that mission’s show page
// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages

// NOTES:
// ejs has not been installed DONE
// views folder has not been created  DONE
// views/missions folder has not been created   DONE

// PORT
const port = 3000;

// DATA - put into marsMissions.js file inside of a models folder, for module.exports  DONE
// remember to require it in the server  DONE


// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// display the mission names as <li> in a <ul> with the class name "missions"

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission



// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
