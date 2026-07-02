const EmployeeTable = ({
    employees,
    onEdit,
    onDelete,
}) => {
    const cellStyle = {
        border: "1px solid #dee2e6",
        padding: "8px",
        textAlign: "center",
    };
    const actionButtonStyle = {
        color: "#fff",
        border: "none",
        padding: "6px 12px",
        borderRadius: "5px",
        cursor: "pointer",
    };
    return (
        <>
            <div>
                <table border="1" cellPadding="10"
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
                    }}>
                    <thead>
                        <tr style={{ backgroundColor: "#f1f3f5" }}>
                            {[
                                "Employee ID",
                                "Name",
                                "Email",
                                "Designation",
                                "Salary",
                                "Date Joined",
                                "Actions",
                            ].map((heading) => (
                                <th
                                    key={heading}
                                    style={{
                                        border: "1px solid #dee2e6",
                                        padding: "10px",
                                        textAlign: "center",
                                    }}
                                >
                                    {heading}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {employees.map((employee, index) => (
                            <tr key={employee.id}
                                style={{
                                    backgroundColor:
                                        index % 2 === 0 ? "#ffffff" : "#efefefed",
                                }}
                            >
                                <td style={cellStyle}>{employee.id}</td>
                                <td style={cellStyle}>{employee.name}</td>
                                <td style={cellStyle}>{employee.email}</td>
                                <td style={cellStyle}>{employee.designation}</td>
                                <td style={cellStyle}>{employee.salary}</td>
                                <td style={cellStyle}>{new Date(employee.date_joined).toLocaleDateString('en-GB')}</td>

                                <td style={{ ...cellStyle, display: "flex", justifyContent: "space-evenly" }}>
                                    <button
                                        onClick={() => onEdit(employee.id)}
                                        style={{
                                            ...actionButtonStyle,
                                            backgroundColor: "#198754",
                                        }}
                                    >
                                        Update
                                    </button>

                                    <button
                                        onClick={() => onDelete(employee.id)}
                                        style={{
                                            backgroundColor: "#dc3545",
                                            ...actionButtonStyle
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default EmployeeTable;