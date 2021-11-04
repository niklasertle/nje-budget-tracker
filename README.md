# Budget Tracker

# Table of Contents

[Description](#description) -
[Usage](#usage) - 
[Technologies](#technologies) -
[Links](#links) - 
[Contact](#contact) -
[Technologies](#technologies) -
[License](#license)

## Description

The goal for this app was to allow for an offline experience using IndexDB and cached data. This was done using a webmanifest and service worker that would register on app load. This then caches a list of files that are specified in the service worker script. With this in place it allows the app to be installed from chrome and easily installed to any device. IndexDB was setup using a seperate javascript file that makes a request to the database and uses this to store transactions offline whenever the fetch request to post to the database fails. This allows us to catch the information and create a new database fetch when the application comes online, storing all the data from when the app was offline. The biggest challenge was getting the database to register a connection and keep that in a variable to be able to create the post requests when the applcation comes back online.

## Install

Please use **'npm i'** in the command line to install the dependencies. This program uses MongoDB, Mongoose, and ExpressJS.

## Usage

When ready use **'npm start'** into the command line to run.

## Links

![Screenshot of App](./assets/website-screenshot.JPG) <br>
[Walkthrough Video](https://youtu.be/-cWCMUWPRsw) <br>
[Deployed App](https://peaceful-falls-49920.herokuapp.com/) <br>
[GitHub](https://github.com/niklasertle/nje-budget-tracker)

## Contact

[GitHub Profile](https://github.com/niklasertle)<br>
[Email Me](mailto:nik.ertle16@gmail.com)

## Technologies

![HTML5](https://img.shields.io/static/v1?style=for-the-badge&message=HTML5&color=E34F26&logo=HTML5&logoColor=FFFFFF&label=)
![CSS3](https://img.shields.io/static/v1?style=for-the-badge&message=CSS3&color=1572B6&logo=CSS3&logoColor=FFFFFF&label=)
![JavaScript](https://img.shields.io/static/v1?style=for-the-badge&message=JavaScript&color=222222&logo=JavaScript&logoColor=F7DF1E&label=)
![Node.JS](https://img.shields.io/static/v1?style=for-the-badge&message=Node.JS&color=222222&logo=Node.JS&logoColor=F7DF1E&label=)
![Express.JS](https://img.shields.io/static/v1?style=for-the-badge&message=Express.JS&color=222222&label=)
![MongoDB](https://img.shields.io/static/v1?style=for-the-badge&message=MongoDB&color=222222&label=)
