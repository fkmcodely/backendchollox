var express = require('express');
var router = express.Router();
const UserController = require('../API/controllers/User');

/* GET users listing. */
router.post('/create', function(req, res, next) {
  const userController = new UserController(req,res,next);
  userController.createUser();
});

router.post('/signin',(req,res,next) => {
  const userController = new UserController(req,res,next);
  userController.signInUser();
});

router.post('/getall', async function(req, res, next) {
  const userController = new UserController(req,res,next);
  await userController.getUsers();
});

module.exports = router;
