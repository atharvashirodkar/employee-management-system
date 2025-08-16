import db from "../config/db.js";

//GET ALL Employees
const getAllEmployees = async (req, res) => {
    try {
        const data = await db.query('SELECT * FROM employees');
        if (!data) {
            return res.status(404).send({
                success: false,
                message: 'No employees found'
            });
        }
        res.status(200).send({
            success: true,
            message: 'Employees fetched successfully',
            totalEmployees: data[0].length,
            data: data[0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Error while fetching employees',
            error
        });
    }
};

//GET Employee by ID
const getEmployeeById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await db.query('SELECT * FROM employees WHERE id = ?', [id]);
        if (!data[0].length) {
            return res.status(404).send({
                success: false,
                message: 'Employee not found'
            });
        }
        res.status(200).send({
            success: true,
            message: 'Employee fetched successfully',
            data: data[0][0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Error while fetching employee',
            error
        });
    }
}

export {getAllEmployees, getEmployeeById};