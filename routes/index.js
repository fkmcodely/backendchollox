var express = require('express');
var router = express.Router();
const BasicProductController = require('../API/controllers/ProductBasicController');
const CategoryController = require('../API/controllers/Category');

router.get('/product/getAll', function(req, res, next) {
  const controller = new BasicProductController(req,res,next);
  controller.findAllProducts();
});

router.post('/product/create', function(req, res, next) {
  const controller = new BasicProductController(req,res,next);
  controller.addProduct();
});

router.post('/product/getid', function(req, res, next) {
  const controller = new BasicProductController(req,res,next);
  controller.getProductById();
});

router.post('/category/create',(req,res,next) => {
  const controller = new CategoryController(req,res,next);
  controller.addCategory();
});

router.get('/category/getall',(req,res,next) => {
  const controller = new CategoryController(req,res,next);
  controller.getAllCategories();
});

module.exports = router;
