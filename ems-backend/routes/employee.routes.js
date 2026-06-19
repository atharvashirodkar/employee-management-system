import express from 'express';
import {createEmployee, deleteEmployee, getAllEmployees, getEmployeeById, updateEmployee} from '../controllers/employee.controller.js';
import validate from "../middlewares/validate.middleware.js";
import { createEmployeeSchema } from "../validators/employee.validator.js";

//router object
const router = express.Router();

//routes

//GET ALL EMPLOYEES LIST || GET
router.get('', getAllEmployees);

//GET EMPLOYEE BY ID || GET
router.get('/:empId', getEmployeeById);

//Create EMPLOYEE || POST
router.post('', validate(createEmployeeSchema), createEmployee)

//Update EMPLOYEE || PUT
router.put('/:empId', updateEmployee);

//Delete EMPLOYEE || DELETE
router.delete('/:empId', deleteEmployee);

export default router;