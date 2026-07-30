import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-dark bg-primary px-4">
      <span className="navbar-brand fw-bold">
        Student Course Registration
      </span>

      <div className="d-flex align-items-center text-white">
        <span className="me-3">
          {user?.first_name} {user?.last_name}
        </span>

        <button
          className="btn btn-light btn-sm"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;