### Week 1 task

Lets write another component, called "Users" in express server.
This route need to handle 4 requests: create users, find user, update user, and delete user.
No need to handle functionality with DataBase for now. You can manage this 4 operations with variable inside your app.

### Server start instuctions:
* `npm install` inside internship folder, to install eslint
* `npm install` inside week1 folder
* `npm install nodemon` https://www.npmjs.com/package/nodemon

### Run in terminal
* `nodemon` - if you install package global
* `npx nodemon` - if you install package local

### To test your requests check this tool:
https://www.postman.com/


### Week 1.2 task

 1. Install HTTP request logger and connect it to your server 
    - [Morgan npm](https://www.npmjs.com/package/morgan)
    - Examples:
        - https://levelup.gitconnected.com/how-to-use-morgan-in-your-nodejs-project-3d1a82de81ac
        - https://www.digitalocean.com/community/tutorials/nodejs-getting-started-morgan
 2. Lets start with validating input parameters to your controllers.
    - [Validation library](https://www.npmjs.com/package/joi)
    - Validate inputs on route level based on schema (Validation Middleware)
    - Validate inputs inside controller 
    - Examples:
        - https://softchris.github.io/pages/joi.html#introducing-joi
        - https://medium.com/geekculture/express-js-api-validation-with-joi-4840505f1e5f
 3. Create protected route /account. This will be managed by JWT.
    - Install [JWT](https://www.npmjs.com/package/jsonwebtoken)
    - Create another route /sign-in . This route need return token for user
    - In route /account you need to provide token as header and verify it in middleware that check is token valid.
    - Examples:
        - https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs
        - https://jsramblings.com/authentication-with-node-and-jwt-a-simple-example/
        - https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/

