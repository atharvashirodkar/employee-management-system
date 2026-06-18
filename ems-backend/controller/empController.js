import db from "../config/db.js";

//GET ALL EMPLOYEES LIST || GET
const getAllEmployees = async (req, res) => {
    try {
        const [data] = await db.query('SELECT * FROM employees');

        if (data.length === 0) {
            return res.status(404).send({
                success: false,
                message: 'No employees found'
            });
        }
        res.status(200).send({
            success: true,
            message: 'Employees fetched successfully',
            totalEmployees: data.length,
            data: data
        });

    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Error while fetching employees',
        });
    }
};

//GET Employee by ID
const getEmployeeById = async (req, res) => {
    try {
        const empId = req.params.empId;
        if (!empId) {
            return res.status(400).send({
                success: false,
                message: "Invalid or Provide Employee Id",
            });
        }
        const [data] = await db.query(`SELECT * FROM employees WHERE id = ?`, [empId]);

        if (data.length === 0) {
            return res.status(404).send({
                success: false,
                message: 'Employee not found'
            });
        }
        res.status(200).send({
            success: true,
            message: 'Employee fetched successfully',
            employeeDetails: data[0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Error while fetching employee'
        });
    }
};

//CREATE EMPLOYEE
const createEmployee = async (req, res) => {
    try {
        const { name, email, designation, salary, date_joined } = req.body;
        if (!name || !email || !designation || !salary || !date_joined) {
            return res.status(400).send({
                success: false,
                message: 'All fields are required'
            });
        }
        const [result] = await db.query(`INSERT INTO employees (name, email, designation, salary, date_joined) VALUES (?, ?, ?, ?, ?)`,
            [name, email, designation, salary, date_joined]);
        if (result.affectedRows === 0) {
            return res.status(404).send({
                success: false,
                message: "Error in INSERT QUERY"
            });
        }
        res.status(201).send({
            success: true,
            message: 'Employee created successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Error while creating employee',
        });
    }
};

//UPDATE EMPLOYEE
const updateEmployee = async (req, res) => {
    try {
        const empId = req.params.empId;
        if (!empId) {
            return res.status(404).send({
                success: false,
                message: "Invalid or Provide Employee Id",
            });
        }
        const { name, email, designation, salary } = req.body;

        if (!name && !email && !designation && !salary) {
            return res.status(400).send({
                success: false,
                message: 'At least one field is required for update'
            });
        }
        const [[existingEmployee]] = await db.query(`SELECT * FROM employees WHERE id = ?`, [empId]);

        if (!existingEmployee) {
            return res.status(404).send({
                success: false,
                message: "Employee not found"
            });
        }

        const updatedName = name || existingEmployee.name;
        const updatedEmail = email || existingEmployee.email;
        const updatedDesignation = designation || existingEmployee.designation;
        const updatedSalary = salary || existingEmployee.salary;
        const date_joined = existingEmployee.date_joined;

        const [result] = await db.query(
            `UPDATE employees SET name = ?, email = ?, designation = ?, salary = ?, date_joined = ? WHERE id = ?`,
            [updatedName, updatedEmail, updatedDesignation, updatedSalary, date_joined, empId]);

        if (result.affectedRows === 0) {
            return res.status(400).send({
                success: false,
                message: "Employee update failed"
            });
        }
        res.status(200).send({
            success: true,
            message: 'Employee updated successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Error while updating employee',
        })

    }
};

//DELETE EMPLOYEE
const deleteEmployee = async (req, res) => {
    try {
        const empId = req.params.empId;
        const [data] = await db.query(`SELECT * FROM employees WHERE id = ?`, [empId]);
        if (data.length == 0) {
            return res.status(404).send({
                success: false,
                message: "Provide a valid Employee Id"
            });
        }

        const [result] = await db.query(`DELETE FROM employees WHERE id = ?`, [empId]);

        if (result.affectedRows === 0) {
            return res.status(404).send({
                success: false,
                message: "Employee could not be deleted"
            });
        }
        res.status(200).send({
            success: true,
            message: 'Employee deleted successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Error while deleting employee',
        });
    }
};

export { getAllEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee };