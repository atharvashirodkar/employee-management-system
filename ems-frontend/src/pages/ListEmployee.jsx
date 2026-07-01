import { useEffect, useState } from "react"
import { deleteEmployee, getEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import LoadingState from "../components/common/LoadingState";
import EmptyState from "../components/common/EmptyState";
import ErrorState from "../components/common/ErrorState";
import EmployeeTable from "../components/employee/EmployeeTable";

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchEmployees = async () => {
    try {

      setError(null);
      setLoading(true);

      const response = await getEmployees();
      setEmployees(response.data.data);

    } catch (error) {
      console.error(error)
      setError("Failed to fetch employees data")
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchEmployees()
  }, []);

  if (loading) {
    return <LoadingState message="Loading Employees..." />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  if (employees.length === 0) {
    return <EmptyState message="No employees found." />;
  }

  const handleEdit = (id) => {
    navigate(`/update-employee/${id}`)
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await deleteEmployee(id);
        setEmployees((prev) =>
          prev.filter((employee) => employee.id !== id));
      } catch (error) {
        console.error("Failed to delete employee:", error);

      }
    }
  }

  return (
    <>
      <div
        style={{
          margin: "0 auto",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
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
            onClick={() => navigate(-1)}
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
            onClick={() => navigate("/add-employee")}
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
        <EmployeeTable employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </>
  )
}

export default ListEmployee