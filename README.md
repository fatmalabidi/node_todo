# node_todo
A simple checklist application using nodeJS
to create the package.json

### Requirements
* Node Package Manager: [npm](https://www.npmjs.com/get-npm)
* [NodeJS](https://nodejs.org/en/download/)
### Setup the envirement
1. initialisation od the project to create the  `package.json`:
```shell
 npm init 
```
2. install our dependencies (`--save` will save the package to `dependencies` in `package.json`, replace it by `--save-dev` to save them in `devDependencies` in `package.json`): 
* install [EJS](https://ejs.co/) (Embedded JavaScript templating): used to be able to write Javascript code with the HTML files

```shell
npm install ejs --save 
```
* install `body-parser` that will be used to parse the http request
```shell
npm install body-parser --save
```
* install [mongoose](https://mongoosejs.com/docs/) to connect to our databse
```shell
npm install mongoose --save  
```
3. Use [mlab](https://mlab.com/) to create your noSql database and get your connection string to be able to connect to it using `mongoose`.

### Run the app 
Before running the app you need to create a user in the MongoDB (mlab) database and put the credentials in `config.json`
also change the connection string in index.js file.
* Development:
```shell
nodemon app.js  
```
* Otherwise 
```shell
node app.js
```
