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

### Week 1.3 task

 1. Install mongodb locally on your machine. https://www.mongodb.com/home
 2. Install GUI (MongoDB Compass or Robo3T, or any another. Based on your preferences)
 3. In your express application create connection to mongo. Connection need to be inside config/mongoConnection.js. All operations with database need to be with Mongoose https://mongoosejs.com/.
 4. Add events when mongo connected: 'connected', 'error', 'open'. And add logger on this events.
 5. Create Schema for User inside your component in model.js. User need to have fields: email, firstName, lastName, password. Email need to have unique index. Password need to be hashed with bcrypt. You can use Mongoose middleware pre('save').
 6. On your route /create (or another when you have create operation for user) you need to pass body params with email, password, firstName, lastName. All this params need to be validated in controller. User creation (Mongoose operation) need to be in Service.

### Week 1.4 task

 1. Create Component Tasks
 2. Tasks will be protected by JWT Header Authorization (that you retrieve on sign-in action)
 3. Tasks model fields:

```
assignee - userId (MongoId),
title - Title of tasks
description - Small description of task
estimatedTime - Time to complete the task
createdBy - Who creates Task (e.g Project Manager, QA, Teach Lead)
```
4. **POST** action /v1/task create Task for user. Please, create/generate minimum 10-20 tasks for your
5. **PATCH** v1/task/:id update Task field. For now let's change only estimated time field
6. **GET** v1/task?page=0 Return first 5 tasks for user. Here you can use default find, and skip/limit. No need to write aggregation here. https://mongoosejs.com/docs/api/query.html#query_Query-skip . Response also need to have totalTasks field. Also, pagination should work for all "page" params.
Response:
```
{
    code: 200,
    data: {
        tasks: [your 5 tasks],
        totalTasks: your total tasks for user
    }
```
7. **GET** v1/tasks/all Returns all tasks for user. Here you need to write aggregation. All modifications of result need to be done in aggregation. Don't modify result in JavaScript. Result for this operation:
```
{
    "tasks" : [
        {
            "_id" : ObjectId("63a052a863131dbdbbd67480"),
            "assignee" : ObjectId("6390f1f319c435e8b55f98f7"),
            "title" : "Upload files 3",
            "description" : "Upload images to S3. Previously need to compress them, and create small thumbnail with size 24x24px. Need to save 2 urls. Original (compressed), and small thumbnail url",
            "estimatedTime" : 22,
            "createdBy" : "Project Manager"
        },
        {
            "_id" : ObjectId("63a0529a63131dbdbbd6747b"),
            "assignee" : ObjectId("6390f1f319c435e8b55f98f7"),
            "title" : "Upload files 2",
            "description" : "Upload images to S3. Previously need to compress them, and create small thumbnail with size 24x24px. Need to save 2 urls. Original (compressed), and small thumbnail url",
            "estimatedTime" : 12,
            "createdBy" : "Project Manager"
        },
        {
            "_id" : ObjectId("63a04be263131dbdbbd672ec"),
            "assignee" : ObjectId("6390f1f319c435e8b55f98f7"),
            "title" : "Upload files",
            "description" : "Upload images to S3. Previously need to compress them, and create small thumbnail with size 24x24px. Need to save 2 urls. Original (compressed), and small thumbnail url",
            "estimatedTime" : 8,
            "createdBy" : "Project Manager"
        }
    ],
    "name" : "John Doe",
    "totalTasks" : 3,
    "totalEstimation" : 42
}
```

**Please, note that array of tasks sorted by estimatedTime from bigger to lower.**


Useful links:
 - https://www.mongodb.com/docs/manual/meta/aggregation-quick-reference/
 - https://studio3t.com/knowledge-base/articles/mongodb-aggregation-framework/


### Week 1.5 task

 1. Create Migrations for tasks. Need to add status field. Tasks that have estimatedTime more than 10 need to be set in 'done', less than 10 or equal - 'in progress'. Migration "UP" will create this fields, please add "DOWN" that will erase this data. Npm library to use - https://www.npmjs.com/package/migrate-mongo. Also, don't forget to include status field in your Tasks mongoose Schema
 Your schema with status:

```
assignee - userId (MongoId),
title - Title of tasks
description - Small description of task
estimatedTime - Time to complete the task
createdBy - Who creates Task (e.g Project Manager, QA, Teach Lead)
status - Task status (in progress/ done)
```

2. Swagger documentation. I've prepared for you swagger with connected to your app. Please, cover Tasks components with swagger.
Materials:
 - https://levelup.gitconnected.com/how-to-add-swagger-ui-to-existing-node-js-and-express-js-project-2c8bad9364ce
 - https://www.section.io/engineering-education/documenting-node-js-rest-api-using-swagger/
 - https://www.npmjs.com/package/swagger-ui-express

3.  Testing your application. Need to cover Tasks component with Unit tests. I've prepared small test for you on /v1/demo route.
Materials:
 - https://www.chaijs.com/api/bdd/
 - https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai
 - https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
 - https://mochajs.org/
Run tests with:
```
npm run test
```


