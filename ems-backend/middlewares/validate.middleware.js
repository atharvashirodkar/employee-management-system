const validate = (schema) => {

    return (req, res, next) => {
        const { error } = schema.validate(req.body);

        if (error) {
            res.status(400).send({
                success: false,
                message: error.details[0].message
            });
        }
        next();
    }
}

export default validate