import express from 'express';
import getAllEmployees from '../controller/empController.js';


//router object
const router = express.Router();

//routes
router.get('', getAllEmployees);

export default router;