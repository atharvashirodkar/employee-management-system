import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1/employees';

export const getEmployees = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching employees:", error);
        throw error;
    }
}

export const createEmployee = async (employeeData) => {
    try {
        const response = await axios.post(API_BASE_URL, employeeData);
        return response.data;
    } catch (error) {
        console.error("Error creating employee:", error);
        throw error;
    }
}