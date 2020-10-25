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
2. install our dependencies (`--save` will save the to `dependencies` in `package.json`, replace it by `--save-dev` to save them in `devDependencies` in `package.json`): 

```shell
npm install ejs --save 
```
```shell
npm install body-parser --save
```

```shell
npm install mongoose --save  
```
3. Use [mlab](https://mlab.com/) to create your noSql database and get you connection string to be able to connect to it using `mongoose`.

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
