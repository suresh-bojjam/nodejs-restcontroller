//user controllers
var Router = require('restify-router').Router;
var errors = require('restify-errors');

var routerInstance = new  Router();

function respond(req,res,next){
  res.send("Hello from PaymentController");
  next();
}

routerInstance.get('/payment/hello1',respond);
routerInstance.get('/payment/hello2',respond);
module.exports =  {
  router :routerInstance
}
