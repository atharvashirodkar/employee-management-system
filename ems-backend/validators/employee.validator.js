import Joi from "joi";

const createEmployeeSchema = Joi.object({
    name: Joi.string().trim().min(2).max(100).required(),
    email: Joi.string().email().required(),
    designation: Joi.string().trim().min(2).max(100).required(),
    salary: Joi.number().positive().required(),
    date_joined: Joi.date().required()
})

const paginationSchema = Joi.object({
    page: Joi.number()
        .integer()
        .min(1)
        .default(1),

    limit: Joi.number()
        .integer()
        .min(1)
        .default(5)
});

export { createEmployeeSchema, paginationSchema }