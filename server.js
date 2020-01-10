const config = require('./config');
const restify = require('restify');
//const router = require('restify-router')
const mongoose = require('mongoose');
const restifyPlugins = require('restify-plugins');
var errs = require('restify-errors');

//load versioning router
const routerVersioning = require('./RouterVersioning.js');
const router = routerVersioning.router;

// declare server and server plugins
const server = restify.createServer({
  name: config.name,
  version: config.version
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser({ mapParams: true }));
server.use(restify.plugins.bodyParser({ mapParams: true }));
//add plugin for authorization and function to call to authenticate the user before processing the controller
//add skip endpoint to skip the authentication ex: home.html, index.html

//load all controllers
router.applyRoutes(server);

//add static html folder path here for routing Or create viewsController

server.listen(config.port, function() {
    // brew services status mongodb-community@4.2
    // establish connection to mongodb
  	mongoose.Promise = global.Promise;
  	mongoose.connect(config.db.uri, { useMongoClient: true });

  	const db = mongoose.connection;

  	db.on('error', err => {
  		console.error(err);
  		process.exit(1);
  	});

  	db.once('open', () => {
  		//require('./routes')(server);
  		console.log('%s listening at %s', server.name, server.url);
      //console.log(`Server is listening on port ${config.port}`);
  	});

  //console.log('%s listening at %s', server.name, server.url);
});
