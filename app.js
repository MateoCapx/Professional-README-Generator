const inquirer = require('inquirer');  // In place to be able to use the inquirer package from NPM
const generateSite = require('./generate-site'); // Grabbing this file and using it with this application
const fs = require("fs");
 const path =require("path")

return inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title for your Project (Required)',
      validate: projectTitle => {
        if (projectTitle) {
          return true;
        } else {
          console.log('You need to enter a project name!');
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to enter a project description!');
          return false;
        }
      }
    },

    //Table of contents section 
    {
      type: 'input',
      name: 'Table of Contents',
      message: 'Table of Contents',
    },

    //How will you test your app
    {
      type: 'input',
      name: 'test',
      message: 'How will you test this app?',
    },

    //Enter what license you'd like to use 
    {
      type: 'checkbox',
      name: 'license',
      message: 'What License would you like to use? (Check all that apply)',
      choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0']
    },

    //Enter what needed to install this application
    {
      type: 'checkbox',
      name: 'installation',
      message: 'What dependecies must be installed to run the application properly ? (Check all that apply)',
      choices: ['inquire', 'fs', 'util', 'node.js',]
    },

    //Enter GitHub Username section
    {
      type: 'input',
      name: 'username',
      message: 'Enter the GitHub Username. (Required)',
      validate: gitUsername => {
        if (gitUsername) {
          return true;
        } else {
          console.log('You need to enter a valid Githib username!');
          return false;
        }
      }
    },

    //Enter email section
    {
      type: 'input',
      name: 'Email',
      message: 'Enter your e-mail address. (Required)',
      validate: emailValidate => {
        if (emailValidate) {
          return true;
        }
        else {
          console.log("Enter a vaild E-mail Address")
          return false;
        }
      }

    },
  ]).then(function (data) {


    createFile(data)

  })
function createFile(data) {
  console.log('---------------->', data)
fs.writeFileSync(path.join(process.cwd(),"GenerateReadMe.md"), generateSite(JSON.stringify(data)))

}

