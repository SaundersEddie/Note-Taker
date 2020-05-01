# Note Taker

## Description

A small web based app thbat can be used to write, save, and delete notes utilizing a json file to store the data.

# Table of Contents

* [User Story](#User%20Story)
* [Build Status](#Build%20Status)
* [Technology](#Code%20Style%20and%20Technology)
* [Use](#Usage)
* [Download](#Download)
* [Credits](#Credits)
* [Notes](#Notes)


# User Story
```
AS A user, I want to be able to write and save notes
I WANT to be able to delete notes I've written before
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

# Build Status
Passed testing on 1st May 2020<br/>
Code production candidate pushed 1st May 2020

# Code Style and Technology
This has been developed with HTML5, CSS3, Javascript, Node.js, express utilizing Visual Studio Code
Additional NPM packages: express
node_modules folder has been added to .gitignore

# Use
Application can be executed from the following URL:

https://eddie-note-app.herokuapp.com/

# Download
The source for this app can be downloaded here:

https://github.com/SaundersEddie/Note-Taker

# Credits
Javascript Coding - Eddie Saunders (https://github.com/SaundersEddie)
Front end code and design - Trilogy

# Notes
There was quite a bit of um and ahh over the acces to the json file. On one hand I felt having a standalone javascript file just for handling it was good, on the other hand, the code was too small to really warrant creating a new javascript file. I ended up just leaving everything in place in the apiRoute.js file.
