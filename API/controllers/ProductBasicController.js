const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const controller = require('./controller');
const productBasicModel = require('../models/basicProduct');

class ProductBasicController extends controller {
    constructor(req,res,next) {
        super(req,res,next);
    }
    
    findAllProducts = () => {
        productBasicModel.find((err,products) => {
            if(err) this.res.send(500, err.message);
            this.res.json(products);
        })
    };

    addProduct = () => {
        const { title, description, price } = this.req.body;
        let product = new productBasicModel({
            id: uuidv4(),
            title: title,
            description: description,
            price: price
        });
        product.save((err,product) => {
            if(err) return res.status(500).send(err.message);
            this.res.send(product);
        });
    }

    getProductById = () => {
        const { id } = this.req.body;
        let product = productBasicModel.find({
            id : id
        },(err, product) => {
            if(err) return res.status(500).send(err.message);
            this.res.send(product)
        });
    };
}

module.exports = ProductBasicController;