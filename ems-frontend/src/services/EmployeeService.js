import axios from 'axios';
import { API_BASE_URL } from '../constants/api';

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

export const updateEmployee = async (id, employeeData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/${id}`, employeeData);
        return response.data;
    } catch (error) {
        console.error("Error updating employee:", error);
        throw error;
    }
}

export const getEmployeeById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        return response.data.employeeDetails;
    } catch (error) {
        console.error("Error fetching employee by ID:", error);
        throw error;
    }
}

export const deleteEmployee = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting employee:", error);
        throw error;
    }
}