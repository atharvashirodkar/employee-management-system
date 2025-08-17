import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigator = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          textAlign: "center"
        }}
      >
        <h1 style={{ marginBottom: "1rem", color: "#0d6efd" }}>
          Employee Management System
        </h1>
        <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem", color: "#6c757d" }}>
          A simple system to manage employees efficiently. <br/> 
          View, add, and maintain employee records with ease.
        </p>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => navigator("/employees")}
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            borderRadius: "10px"
          }}
        >
          🚀 View Employees
        </button>
      </div>
    </div>
  );
};

export default Home;
