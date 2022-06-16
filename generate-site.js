const fs = require('fs');
function generateSite(data){

return `# ${data.Title}


# Description
# ${data.description}


#  Table of Contents
* [Installation](#installation)
* [Usage](#Usage) 
* [tests](#tests) 
* [License](#license) 
* [Questions](#questions) 



# Installation

The following dependencies must be installed to run the application properly: ${data.installation}


#  Usage
How will a user use your app ? ${data.usage}


# License

This project is licensed under the : ${data.license}


# Tests
The following is needed to run the test : ${data.test}

# Questions

If you have any questions about the repo, you can contact me at : https://github.com/${data.username}

Email: ${data.Email}
`



};

module.exports = generateSite;


// # Badges

// ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

// Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

