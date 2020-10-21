# node_todo
A simple checklist application using nodeJS
to create the package.json

### Setup the envirement
1. initialisation od the project to create the  `package.json`:
```shell
 npm init 
```
2. install our dependencies: 

```shell
npm install ejs --save-dev   
```
```shell
npm install body-parser --save-dev   
```

```shell
npm install mongoose --save-dev   
```
3. Use [mlab](https://mlab.com/) to create your noSql database and get you connection string to be able to connect to it using `mongoose`.

### Run the app 
* Development:
```shell
nodemon app.js  
```
* Otherwise 
```shell
node app.js
```
