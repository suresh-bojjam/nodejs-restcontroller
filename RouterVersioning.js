var Router = require('restify-router').Router;
var routerInstance = new Router();

//import required controllers for routing
const userController = require('./src/controllers/UserController.js');
const paymentController = require('./src/controllers/PaymentController.js');
const userRouter = userController.router;
const paymentRouter = paymentController.router;

routerInstance.add('/v1',userRouter);
routerInstance.add('/v1',paymentRouter);

module.exports =  {
  router :routerInstance
}
