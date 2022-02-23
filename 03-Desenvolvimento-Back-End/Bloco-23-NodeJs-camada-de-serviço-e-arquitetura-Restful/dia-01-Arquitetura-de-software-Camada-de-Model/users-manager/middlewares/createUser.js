    const Joi = require('joi');
    const rescue = require('express-rescue');
    const UserModel = require('../models/userModel');

    // Primeiro definimos qual o schema da nossa requisição
    const createUserSchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    })

    module.exports = [
        (req, _res, next) => {
            const { error } = createUserSchema.validate(req.body);
            if (error) return next(error);
            next();
        },

        rescue(async (req, res, next) => {
        const { firstName, lastName, email, password } = req.body;
        
        const newUser = await UserModel.createUser({
            firstName,
            lastName,
            email,
            password});
        res.status(201).json(newUser);
        }),
    ];
