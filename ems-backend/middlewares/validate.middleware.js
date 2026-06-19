const validate = (schema, source="body") => {

    return (req, res, next) => {
        const { error, value } = schema.validate(req[source]);
        let queryData         

        if (error) {
            res.status(400).send({
                success: false,
                message: error.details[0].message
            });
        }

        req.queryData = value;

        next();
    }
}

export default validate