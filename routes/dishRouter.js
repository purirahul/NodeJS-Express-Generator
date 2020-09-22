const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
   res.statusCode = 200;
   res.setHeader('Content-type', 'text/plain');
   next();
})
.get((req, res, next) => {
    res.end("Will send dishes data ");
})
.post((req, res, next) => {
    res.end("will add the dish "+ req.body.name + " with details " + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation will not supported");
})
.delete((req, res, next) => {
    res.end("Deleting all the dishes ");
});



dishRouter.route('/:dishId')
.get((req, res, next) => {
    res.end("Will send details of the dish: " + req.params.dishId);
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end("POST operation will not supported on /dishes/" + req.params.dishId);
})
.put((req, res, next) => {
    res.write("Updating dish " + req.params.dishId + "\n");
    res.end("Will update the dish: " + req.body.name + " with details " + req.body.description );
})
.delete((req, res, next) => {
    res.end("Deleting the dish: " + req.params.dishId);
});


module.exports = dishRouter;
