const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Controller = require('./controller');
const categorySchema = require('../models/category');

class CategoryController extends Controller {
    constructor(req,res,next){
        super(req,res,next);
    }

    addCategory = () => {
        const { name , description, iconName } = this.req.body;
        let category = new categorySchema({
            id: uuidv4(),
            name: name,
            description: description,
            iconName: iconName
        });
        category.save((err,product) => {
            if(err) return res.status(500);
            this.res.json(product);
        });
    }

    getAllCategories = () => {
        const fetchData = async () => {
            try {
                const response = await categorySchema.find();
                this.res.json(response);
            } catch(e){
                console.log(e);
            }
        };
        fetchData();
       
    };
}

module.exports = CategoryController;