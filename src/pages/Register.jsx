import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    try {
      setLoading(true);

      await api.post("/auth/register", {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password,
      });

      alert("Registration successful!");

      navigate("/login");

    } catch (err) {
      console.error(err);

      alert(
        err.response?.data?.message ||
        "Registration failed."
      );

    } finally {
      setLoading(false);
    }
  }

    return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card shadow-lg p-4" style={{ width: "450px" }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">
            Student Course Registration
          </h2>

          <p className="text-muted">
            Create your account
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">
              First Name
            </label>

            <input
              type="text"
              className="form-control"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Last Name
            </label>

            <input
              type="text"
              className="form-control"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Password
            </label>

            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>

            <small className="text-muted">
              Minimum 8 characters
            </small>
          </div>

          <div className="mb-4">
            <label className="form-label">
              Confirm Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

          <div className="text-center mt-3">
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </div>

        </form>
      </div>
    </div>
  );

  }

export default Register;