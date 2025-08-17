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
      <div className="container" style={{ justifyContent: "center"}}>
        <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px"
        }}
        >
          <button
            className="btn btn-primary"
            onClick={() => navigator(-1)}
          >
            Back
          </button>
          <h2 style={{
            textAlign: "center",
            flexGrow: 1,
          }}>Employee List</h2>
          <button
            className="btn btn-primary"
            onClick={() => navigator('/employees/add')}
          >
            Add Employee
          </button>
        </div>
        <div className="row">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th
                  className="text-center"
                >Employee ID</th>
                <th
                  className="text-center"
                >Name</th>
                <th
                  className="text-center"
                >Email</th>
                <th
                  className="text-center"
                >Designation</th>
                <th
                  className="text-center"
                >Salary</th>
                <th
                  className="text-center"
                >Date Joined</th>
                <th
                  className="text-center"
                >Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                employees.map((emp) => (
                  <tr key={emp.id}>
                    <td className="text-center">{emp.id}</td>
                    <td className="text-center">{emp.name}</td>
                    <td className="text-center">{emp.email}</td>
                    <td className="text-center">{emp.designation}</td>
                    <td className="text-center">{emp.salary}</td>
                    <td className="text-center">{moment(emp.date_joined).format("DD-MM-YYYY")}</td>
                    <td className="text-center">
                      <button>Update</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ListEmployee