//user controllers
var Router = require('restify-router').Router;
var errors = require('restify-errors');
var json = require('JSON');
var logger = require('pino')();
//var logger = require('restify-pino-logger')();
var routerInstance = new Router();

function respond(req,res,next){
  //read body,params all required inputs and do input validation then call the service method
  //call the service to run business logic
  logger.info("responding hello world..");
  res.send("Hello from UserController");
  next();
}

function respondPost(req,res,next){
  //read body,params all required inputs and do input validation then call the service method
  //call the service to run business logic
  if(req.body === null || req.body === undefined){
    logger.info("responding hello world..");
    next(res.send("Failed"));

  }else{
    var userId = JSON.parse(req.body.userId);
    logger.info("responding hello world. " +userId);
    res.send("Hello from UserController: "+userId);
    next();
  }

}

//register controller endpoint's
routerInstance.get('/user/hello1',respond);
routerInstance.get('/user/hello2',respond);
routerInstance.post('/user',respondPost);


module.exports =  {
  router :routerInstance
}
