import express from 'express';
import {createEmployee, getAllEmployees, getEmployeeById} from '../controller/empController.js';


//router object
const router = express.Router();

//routes

//GET ALL EMPLOYEES LIST || GET
router.get('', getAllEmployees);

//GET EMPLOYEE BY ID || GET
router.get('/:empId', getEmployeeById);

//Create EMPLOYEE || POST
router.post('', createEmployee)

export default router;