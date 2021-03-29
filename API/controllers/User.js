const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Controller = require('./controller');
const userSchema = require('../models/user');

class UserController extends Controller {
    constructor(req,res,next){
        super(req,res,next);
    }

    getUsers = () => {
        const handler = async () => {
            try{
                const response = await userSchema.find();
                this.res.send(response);
            } catch(e) {
                console.log(e)
            }
        }
        handler();
    }
    createUser = () => {
        const handler = async () => {
            const { name, email, password } = this.req.body;
            try {
                let user = new userSchema({
                    name: name,
                    email: email,
                    password: password
                });
                const response = await userSchema.create(user);
                this.res.send(response);
            } catch(e) {
                console.log(e);
            }
        };
        handler();
    };
}

module.exports = UserController;