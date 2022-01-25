# Note Taker 

# Summary: 
For this assignment, we were asked to modify starter code to create an applicaton that can be used to write and save notes, this application was to be deployed to Heroku.

The end result was this: <!-- WEBSITE LINK -->


# Installation:
To install the Note Taker application on your machine, you must follow the following steps: 

- Git Clone the repository using SSH or HTTPS in your command-line.

- After the files are installed in your machine, you must do an "npm i" to install the required node modules to get the app to work, for example like "fs", "path" and "express".

- After you have npm installed, you can "npm start", and the application should start on port 3002!


# Issues:
One issue that I had while running the application, was that in my terminal, I would get a callback function error whenever I would save a note in the app. Because of this error, it also would not save notes in the db.json file, so when the application was closed and restarted on the browser, then the notes that were previously written were no longer there. After doing some research, I found a solution on Stack Overflow, which helped me not only fix the terminal error, but as well as save notes in the db.json file.

# Final Screenshots: 

![note-taker](https://user-images.githubusercontent.com/87496972/150908365-a33f07aa-e108-472e-a82c-8faf961970d1.gif)
