import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigator = useNavigate();
  return (
    <>
        <h1>Welcome to the Employee Management System</h1>
        <button
          className="btn btn-primary"
          onClick={() => navigator('/employees')}
        >
          View Employees
        </button>
    </>
  )
}

export default Home