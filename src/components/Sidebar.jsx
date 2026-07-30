import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{
        width: "240px",
        minHeight: "100vh",
      }}
    >
      <h5 className="mb-4">Menu</h5>

      <div className="d-flex flex-column gap-2">

        <NavLink className="btn btn-outline-light" to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink className="btn btn-outline-light" to="/courses">
          Courses
        </NavLink>

        <NavLink className="btn btn-outline-light" to="/departments">
          Departments
        </NavLink>

        <NavLink className="btn btn-outline-light" to="/enrollments">
          Enrollments
        </NavLink>

        <NavLink className="btn btn-outline-light" to="/profile">
          Profile
        </NavLink>

      </div>
    </div>
  );
}

export default Sidebar;