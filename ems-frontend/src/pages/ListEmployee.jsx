import { useEffect, useState } from "react"
import { getEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    getEmployees().then((data) => {
      setEmployees(data);
    })
  }, []);
  return (
    <>
      <div
        style={{
          margin: "0 auto",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Header Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={() => navigator(-1)}
            style={{
              backgroundColor: "#0d6efd",
              color: "#fff",
              border: "none",
              padding: "8px 16px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Back
          </button>

          <h2 style={{ textAlign: "center", flexGrow: 1, margin: 0 }}>
            Employee List
          </h2>

          <button
            onClick={() => navigator("/employees/add")}
            style={{
              backgroundColor: "#0d6efd",
              color: "#fff",
              border: "none",
              padding: "8px 16px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Add Employee
          </button>
        </div>

        {/* Table Section */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
          }}
        >
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
            {employees.map((emp) => (
              <tr key={emp.id} style={{ textAlign: "center" }}>
                <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>{emp.id}</td>
                <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>{emp.name}</td>
                <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>{emp.email}</td>
                <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>{emp.designation}</td>
                <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>{emp.salary}</td>
                <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                  {moment(emp.date_joined).format("DD-MM-YYYY")}
                </td>
                <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
                  <button
                    style={{
                      marginRight: "8px",
                      backgroundColor: "#198754",
                      color: "#fff",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Update
                  </button>
                  <button
                    style={{
                      backgroundColor: "#dc3545",
                      color: "#fff",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "5px",
                      cursor: "pointer",
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
  )
}

export default ListEmployee