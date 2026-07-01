import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createEmployee, getEmployeeById, updateEmployee } from "../services/EmployeeService";
import EmployeeForm from "../components/employee/EmployeeForm";

const AddUpdateEmployee = () => {
    const { id } = useParams();

    const navigator = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [designation, setDesignation] = useState("");
    const [date_joined, setDateJoined] = useState("");
    const [salary, setSalary] = useState("");
    let isEdit

    useEffect(() => {
        if (id) {
            getEmployeeById(id).then((data) => {
                setName(data.name);
                setEmail(data.email);
                setDesignation(data.designation);
                setSalary(data.salary);
                setDateJoined(new Date(data.date_joined).toISOString().split("T")[0]);
            }).catch((error) => {
                console.error("Error fetching employee data:", error);
            });
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const employeeData = {
            name,
            email,
            designation,
            salary,
            date_joined
        };

        try {
            if (id) {
                await updateEmployee(id, employeeData);
            }
            else {
                await createEmployee(employeeData);
            }
            navigator("/employees");
        } catch (error) {
            console.error("Error while creating employee:", error);
        }
    }

    if (id) {
        isEdit = true
    }

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                    backgroundColor: "#f8f9fa",
                    fontFamily: "Arial, sans-serif",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        maxWidth: "500px",
                        backgroundColor: "#fff",
                        padding: "2rem",
                        borderRadius: "12px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "20px",
                        }}
                    >
                        <button
                            type="button"
                            onClick={() => navigator(-1)}
                            style={{
                                backgroundColor: "#424446ff",
                                color: "#fff",
                                border: "none",
                                padding: "8px 16px",
                                borderRadius: "6px",
                                cursor: "pointer",
                            }}
                        >
                            Back
                        </button>
                        <h2
                            style={{
                                textAlign: "center",
                                flexGrow: 1,
                                color: "#0d6efd",
                                margin: 0,
                            }}
                        >
                            {id ? "Update Employee" : "Add New Employee"}
                        </h2>
                    </div>


                    <EmployeeForm
                        name={name}
                        email={email}
                        designation={designation}
                        salary={salary}
                        dateJoined={date_joined}
                        setName={setName}
                        setEmail={setEmail}
                        setDesignation={setDesignation}
                        setSalary={setSalary}
                        setDateJoined={setDateJoined}
                        onSubmit={handleSubmit}
                        buttonText={isEdit ? "Update" : "Save"}
                    />
                </div>
            </div>
        </>
    )
}

export default AddUpdateEmployee