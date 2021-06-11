const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Controller = require('./controller');
const userSchema = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
    createUser = async () => {
        const { name, email, password } = this.req.body;
        const handler = async () => {
            try {
                let user = new userSchema({
                    id: uuidv4(),
                    name: name,
                    email: email,
                    password: bcrypt.hashSync(password,10)
                });
                const response = await userSchema.create(user);
                const token = jwt.sign({email},'secret');
                return this.res.status(201).json({ 
                    token,
                    userId: response.id,
                    userInfo: response 
                });
            } catch(error) {
                return this.res.status(400).json({
                    status: 400,
                    message: error,
                });
            }
        };
        handler();
    };

    signInUser = () => {
        const { password , email } = this.req.body;
        const signInUser = async () => {
            try {
                const userRecord = await userSchema.findOne({
                    email: email
                });
                if(userRecord) {
                   if(bcrypt.compareSync(password,userRecord.password)){
                    const token = jwt.sign({email},'secret');
                    return this.res.status(200).json({ token });
                   }
                }
                return this.res.status(401).json({
                    status: 401,
                    message: '¡Tu email o contraseña son incorrectos, por favor, veríficalo!',
                });
            } catch (e) {
                return this.res.status(401).json({
                    status: 401,
                    message: '¡Tu email o contraseña son incorrectos, por favor, veríficalo!',
                });
            }
        } 
        signInUser();
    }

    validateExistentUser = async (email) => {
        try {
            const response = await userSchema.find({ email: email});
            return response.length > 0 ? response : false;
        } catch (error) {
            return false;
        }
    };
}

module.exports = UserController;