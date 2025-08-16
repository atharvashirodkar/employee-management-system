import db from "../config/db.js";

//GET ALL EMPLOYEES LIST || GET
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
    try {
        const empId = req.params.empId;
        if (!empId) {
            return res.status(400).send({
                success: false,
                message: "Invalid or Provide Employee Id",
            });
        }
        const [data] = await db.query(`SELECT * FROM employees WHERE id = ?`, [empId]);
        console.log(data);

        if (!data[0]) {
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
            message: 'Error while fetching employee',
            error
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
        const data = await db.query(`INSERT INTO employees (name, email, designation, salary, date_joined) VALUES (?, ?, ?, ?, ?)`,
            [name, email, designation, salary, date_joined]);
        if (!data) {
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
            error
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
        if (!name && !email && !designation && !salary && !date_joined) {
            return res.status(400).send({
                success: false,
                message: 'At least one field is required for update'
            });
        }
        const [[existingEmployee]] = await db.query(`SELECT * FROM employees WHERE id = ?`, [empId]);

        const updatedName = name || existingEmployee.name;
        const updatedEmail = email || existingEmployee.email;
        const updatedDesignation = designation || existingEmployee.designation;
        const updatedSalary = salary || existingEmployee.salary;
        const date_joined = existingEmployee.date_joined;
        await db.query(
            `UPDATE employees SET name = ?, email = ?, designation = ?, salary = ?, date_joined = ? WHERE id = ?`,
            [updatedName, updatedEmail, updatedDesignation, updatedSalary, date_joined, empId]);
        res.status(200).send({
            success: true,
            message: 'Employee updated successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Error while updating employee',
            error
        })

    }
};

//DELETE EMPLOYEE
const deleteEmployee = async (req, res) => {
    try {
        const empId = req.params.empId;
        if (!empId) {
            return res.status(404).send({
                success: false,
                message: "Invalid or Provide a valid Employee Id",
            });
        }
        await db.query(`DELETE FROM employees WHERE id = ?`, [empId]);
        res.status(200).send({
            success: true,
            message: 'Employee deleted successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Error while deleting employee',
            error
        });
    }
};

export { getAllEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee };