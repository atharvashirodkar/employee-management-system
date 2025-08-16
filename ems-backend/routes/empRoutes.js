import express from 'express';
import {getAllEmployees, getEmployeeById} from '../controller/empController.js';


//router object
const router = express.Router();

//routes
router.get('', getAllEmployees);
router.get('/:id', getEmployeeById);

export default router;