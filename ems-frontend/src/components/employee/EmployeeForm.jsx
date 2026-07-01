const EmployeeForm = ({
  name,
  email,
  designation,
  salary,
  dateJoined,
  setName,
  setEmail,
  setDesignation,
  setSalary,
  setDateJoined,
  onSubmit,
  buttonText,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Designation</label>
        <input
          type="text"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
      </div>

      <div>
        <label>Salary</label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </div>

      <div>
        <label>Date Joined</label>
        <input
          type="date"
          value={dateJoined}
          onChange={(e) => setDateJoined(e.target.value)}
        />
      </div>

      <button type="submit">
        {buttonText}
      </button>
    </form>
  );
};

export default EmployeeForm;