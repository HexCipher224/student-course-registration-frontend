import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const features = [
    {
      icon: "bi-book-half",
      title: "Course Management",
      description:
        "Create, update and organize university courses with ease."
    },
    {
      icon: "bi-building",
      title: "Departments",
      description:
        "Manage academic departments from one centralized dashboard."
    },
    {
      icon: "bi-mortarboard",
      title: "Student Enrollments",
      description:
        "Register students into courses and monitor their progress."
    },
    {
      icon: "bi-shield-lock",
      title: "Secure Authentication",
      description:
        "JWT authentication keeps student and administrator data secure."
    }
  ];

  const stats = [
    {
      number: "500+",
      label: "Students"
    },
    {
      number: "60+",
      label: "Courses"
    },
    {
      number: "12",
      label: "Departments"
    },
    {
      number: "100%",
      label: "Secure"
    }
  ];

  return (
    <>
      {/* Navigation */}

      <nav className="navbar navbar-expand-lg navbar-dark home-navbar shadow-sm">
        <div className="container">

          <span className="navbar-brand fw-bold">
            🎓 Student Course Registration
          </span>

          <div className="ms-auto">

            <Link
              to="/login"
              className="btn btn-outline-light me-2"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="btn btn-warning fw-semibold"
            >
              Register
            </Link>

          </div>
        </div>
      </nav>

      {/* Hero */}

      <section className="hero-section">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <h1 className="display-3 fw-bold mb-4">
                Manage Students,
                <span className="text-warning">
                  {" "}Courses
                </span>
                {" "}and Departments
              </h1>

              <p className="lead text-light mb-4">

                A modern Student Course Registration System
                built with React, Flask and PostgreSQL
                to simplify university administration.

              </p>

              <div>

                <Link
                  to="/register"
                  className="btn btn-warning btn-lg me-3"
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  className="btn btn-outline-light btn-lg"
                >
                  Login
                </Link>

              </div>

            </div>

            <div className="col-lg-6 text-center">

              <img
                src="https://undraw.co/api/illustrations/education.svg"
                alt="Students"
                className="img-fluid hero-image"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="py-5 bg-light">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold">
              System Features
            </h2>

            <p className="text-muted">

              Everything needed for efficient
              student registration.

            </p>

          </div>

          <div className="row g-4">

            {features.map((feature, index) => (

              <div
                className="col-md-6 col-lg-3"
                key={index}
              >

                <div className="card feature-card h-100 border-0 shadow-sm">

                  <div className="card-body text-center">

                    <i
                      className={`bi ${feature.icon} feature-icon`}
                    ></i>

                    <h5 className="mt-3">
                      {feature.title}
                    </h5>

                    <p className="text-muted">
                      {feature.description}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="py-5 stats-section">

        <div className="container">

          <div className="row text-center">

            {stats.map((stat, index) => (

              <div
                className="col-md-3"
                key={index}
              >

                <h2 className="display-5 fw-bold text-warning">
                  {stat.number}
                </h2>

                <p className="text-white">
                  {stat.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
            {/* How It Works */}

      <section className="py-5">

        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">How It Works</h2>

            <p className="text-muted">
              Register, enroll and manage everything in a few simple steps.
            </p>
          </div>

          <div className="row g-4">

            <div className="col-md-3">
              <div className="card h-100 shadow-sm border-0 text-center p-4">
                <i className="bi bi-person-plus display-4 text-primary"></i>
                <h5 className="mt-3">1. Register</h5>
                <p>Create your account securely.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card h-100 shadow-sm border-0 text-center p-4">
                <i className="bi bi-box-arrow-in-right display-4 text-success"></i>
                <h5 className="mt-3">2. Login</h5>
                <p>Access your personalized dashboard.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card h-100 shadow-sm border-0 text-center p-4">
                <i className="bi bi-journal-check display-4 text-warning"></i>
                <h5 className="mt-3">3. Enroll</h5>
                <p>Select available courses quickly.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card h-100 shadow-sm border-0 text-center p-4">
                <i className="bi bi-graph-up-arrow display-4 text-danger"></i>
                <h5 className="mt-3">4. Manage</h5>
                <p>Track and update enrollments anytime.</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="py-5 bg-light">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <h2 className="fw-bold mb-4">
                Why Choose Our Platform?
              </h2>

              <ul className="list-group list-group-flush">

                <li className="list-group-item">
                  ✅ Fast and responsive interface
                </li>

                <li className="list-group-item">
                  ✅ Secure JWT authentication
                </li>

                <li className="list-group-item">
                  ✅ Easy course management
                </li>

                <li className="list-group-item">
                  ✅ Department organization
                </li>

                <li className="list-group-item">
                  ✅ Student enrollment tracking
                </li>

                <li className="list-group-item">
                  ✅ Built with React & Flask
                </li>

              </ul>

            </div>

            <div className="col-lg-6 text-center">

              <i
                className="bi bi-mortarboard-fill text-primary"
                style={{ fontSize: "220px" }}
              ></i>

            </div>

          </div>

        </div>

      </section>

      {/* Call To Action */}

      <section className="cta-section text-center text-white py-5">

        <div className="container">

          <h2 className="fw-bold">
            Ready to Start?
          </h2>

          <p className="lead mb-4">
            Join the Student Course Registration System today.
          </p>

          <Link
            to="/register"
            className="btn btn-warning btn-lg me-3"
          >
            Create Account
          </Link>

          <Link
            to="/login"
            className="btn btn-outline-light btn-lg"
          >
            Login
          </Link>

        </div>

      </section>

      {/* Footer */}

      <footer className="footer-section text-center py-4">

        <div className="container">

          <h5 className="fw-bold">
            Student Course Registration System
          </h5>

          <p className="mb-1">
            Built with ❤️ using React, Flask & PostgreSQL
          </p>

          <small>
            © 2026 Student Course Registration System. All Rights Reserved.
          </small>

        </div>

      </footer>

    </>
  );
}

export default Home;