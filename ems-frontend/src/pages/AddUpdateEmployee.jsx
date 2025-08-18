import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../services/EmployeeService";

const AddUpdateEmployee = () => {
    const navigator = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [designation, setDesignation] = useState("");
    const [date_joined, setDateJoined] = useState("");
    const [salary, setSalary] = useState("");

    const handdleOnSubmit = async (e) => {
        e.preventDefault();
        const employeeData = {
            name,
            email,
            designation,
            salary,
            date_joined
        };
        console.log("Submitting employee data:", employeeData);
        try {
            await createEmployee(employeeData);
            navigator("/employees");
        } catch (error) {
            console.error("Error adding employee:", error);
        }
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
                            Add New Employee
                        </h2>
                    </div>


                    <form onSubmit={handdleOnSubmit}>
                        <div style={{ marginBottom: "1rem" }}>
                            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
                                Name:
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    borderRadius: "6px",
                                    border: "1px solid #ced4da",
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: "1rem" }}>
                            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
                                Email:
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    borderRadius: "6px",
                                    border: "1px solid #ced4da",
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: "1rem" }}>
                            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
                                Designation:
                            </label>
                            <input
                                type="text"
                                value={designation}
                                onChange={(e) => setDesignation(e.target.value)}
                                required
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    borderRadius: "6px",
                                    border: "1px solid #ced4da",
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: "1rem" }}>
                            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
                                Date Joined:
                            </label>
                            <input
                                type="date"
                                value={date_joined}
                                onChange={(e) => setDateJoined(e.target.value)}
                                required
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    borderRadius: "6px",
                                    border: "1px solid #ced4da",
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: "1.5rem" }}>
                            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
                                Salary:
                            </label>
                            <input
                                type="number"
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                                required
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    borderRadius: "6px",
                                    border: "1px solid #ced4da",
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            style={{
                                width: "100%",
                                padding: "12px",
                                backgroundColor: "#0d6efd",
                                color: "#fff",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontSize: "1rem",
                                fontWeight: "bold",
                            }}
                        >
                            Add Employee
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddUpdateEmployee