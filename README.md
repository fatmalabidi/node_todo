# node_todo
A simple checklist application using nodeJS
to create the package.json

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

4. [Insttall and setup Docker](https://docs.docker.com/engine/install/fedora/)   

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
### Building your docker image
* Run the docker engine:

```shell
 sudo systemctl start docker
 ```
 
 * build the docker image for the application:

```shell
 sudo docker build .
 ```
 check if the image exists:
```shell
 sudo docker images 
 ```
or
```shell
 sudo docker image ls
 ```
* Run the image




### Useful links
* [Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
* [Building Efficient Dockerfiles - Node.js](http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/)   
* [Introducing `npm ci` for faster, more reliable builds](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)
