# JM-Social-Network-API

### License Badge
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

As a social media startup, it's important to incorporate NoSQL in your social media database so that your website can handle large amounts of unstructured data. To solve this issue, I have developed a NoSQL API utilizing the 'Mongoose' package for MongoDB, allowing the seamless interaction of data between developers and users.

## Table of Contents

- [Title](#jm-social-network-api)
- [License Badge](#license-badge)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contribution](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

Either: 

1. Clone the repo and open in VS Studio, seed database before running the server. Open in Insomnia and test routes.

2. Watch the walkthrough video.

## Usage

Upon cloning the application, users can initiate the setup process by running 'npm run seed'. This will populate documents within a newly created database named 'JMsocialNetwork_db'. If users do not have NoSQL/MongoDB on their device, this application will not work. 

Once seeded, the command 'node .\server.js' or 'npm run start' must be used to start up the server. This will initialize the connection from the 'config' folder while running the express server and sync the Mongoose schemas to the database. If successful, a log stating 'Server up at http://localhost:5013' will appear in the terminal. 

Go to Insomnia and copy paste the 'http://localhost:5013' URL in your request bar. Users can use these four api routes:

- '/api/users'

- '/api/users/:userId/friends/:friendId

- '/api/thoughts'

- '/api/reactions'

Each route besides '/userId/friends' and '/api/reactions' has a GET, ID GET, POST, PUT, and DELETE capabilities. The friend route will only use POST/DELETE routes, whilst reactions will only use GET, ID GET, POST & DELETE. To utilize ID GET, PUT and DELETE requests, users must provide the id value of the element they want to edit in the url parameters after the path. Additionally, POST and PUT requests must incorporate a request body, especially for user usernames and emails, as they are required inputs.

Related schemas, such as friends, thoughts, and thought reactions can be created in a POST/PUT request by implementing the id of a specified element into a request body array, for example:

``{
    "reactions": ["652dd6102c1a9f5b54d06a16"]
}``

Video Walkthrough:
https://watch.screencastify.com/v/1IpV1PvDL7o5TcWo9vjP


Github Repo: 
https://github.com/jujusoi/JM-Social-Network-API

## Features

- Entering the command to invoke the application starts the server and syncs the Mongoose models to the MongoDB database
- Opening API GET routes in Insomnia for users and thoughts will display data for each of the routes in formatted JSON
- API POST, PUT and DELETE routes allow users to create, update, and delete users, thoughts and reactions
- POST and DELETE friend routes allow users to add and delete friends from their friend list.

## Contributing

N/A

## Tests

N/A

## Questions

N/A

GitHub user:
- jujusoi, https://www.github.com/jujusoi/

If further inquiry is necessary, reach out to me through my email address: 
- jalxmcdonald@hotmail.com

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  
