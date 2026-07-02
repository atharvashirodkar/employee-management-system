const EmployeeTable = ({
    employees,
    onEdit,
    onDelete,
}) => {
    return (
        <table border="1" cellPadding="10">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Designation</th>
                    <th>Salary</th>
                    <th>Date Joined</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.designation}</td>
                        <td>{employee.salary}</td>
                        <td>{new Date(employee.date_joined).toLocaleDateString('en-GB')}</td>

                        <td>
                            <button
                                onClick={() => onEdit(employee.id)}
                            >
                                Update
                            </button>

                            <button
                                onClick={() => onDelete(employee.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EmployeeTable;