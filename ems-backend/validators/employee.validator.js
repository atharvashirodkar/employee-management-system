import Joi from "joi";

const createEmployeeSchema = Joi.object({
    name: Joi.string().trim().min(2).max(100).required(),
    email: Joi.string().email().required(),
    designation: Joi.string().trim().min(2).max(100).required(),
    salary: Joi.number().positive().required(),
    date_joined: Joi.date().required()
})

export {createEmployeeSchema}