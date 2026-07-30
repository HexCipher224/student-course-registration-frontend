import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    code: "",
    credits: "",
    description: "",
    department_id: "",
 });

  useEffect(() => {
    loadCourses();
    loadDepartments();
  }, []);

  async function loadCourses() {
    try {
      const res = await api.get("/courses/");
      setCourses(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function loadDepartments() {
    try {
      const res = await api.get("/departments/");
      setDepartments(res.data);
    } catch (err) {
      console.error(err);
    }
  }
  function handleChange(e) {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
  }

  async function handleSubmit(e) {
  e.preventDefault();

  try {
    await api.post("/courses/", formData);

    setShowModal(false);

    setFormData({
      title: "",
      code: "",
      credits: "",
      description: "",
      department_id: "",
    });

    loadCourses();
  } catch (err) {
    console.error("Full error:", err);
    console.error("Response:", err.response);
    console.error("Data:", err.response?.data);

    alert(
        err.response?.data?.message ||
        err.response?.status ||
        "Unknown error"
    );

    }
  }

  return (
    <Layout>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Courses</h2>

        <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
        >
            Add Course
        </button>
      </div>

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Code</th>
            <th>Title</th>
            <th>Credits</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.code}</td>
              <td>{course.title}</td>
              <td>{course.credits}</td>
              <td>{course.department_id}</td>

              <td>
                <button className="btn btn-warning btn-sm me-2">
                  Edit
                </button>

                <button className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div
            className="modal d-block"
            style={{ backgroundColor: "rgba(0,0,0,.5)" }}
        >
            <div className="modal-dialog">
                <div className="modal-content">

                    <form onSubmit={handleSubmit}>

                        <div className="modal-header">
                            <h5>Add Course</h5>

                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => setShowModal(false)}
                            />
                        </div>

                        <div className="modal-body">

                            <input
                                className="form-control mb-3"
                                placeholder="Course Title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                            />

                            <input
                                className="form-control mb-3"
                                placeholder="Course Code"
                                name="code"
                                value={formData.code}
                                onChange={handleChange}
                             />

                            <input
                                className="form-control mb-3"
                                placeholder="Credits"
                                type="number"
                                name="credits"
                                value={formData.credits}
                                onChange={handleChange}
                            />

                            <textarea
                                className="form-control mb-3"
                                placeholder="Description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            />

                            <select
                                className="form-select"
                                name="department_id"
                                value={formData.department_id}
                                onChange={handleChange}
                            >
                                <option value="">Select Department</option>

                                {departments.map((dept) => (
                                    <option
                                         key={dept.id}
                                         value={dept.id}
                                      >
                                        {dept.name}
                                    </option>
                                ))}
                            </select>

                         </div>

                        <div className="modal-footer">

                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>

                            <button
                                className="btn btn-primary"
                                type="submit"
                            >
                                Save Course
                            </button>

                        </div>

                    </form>

                 </div>
             </div>
        </div>
    )}
    </Layout>
  );
}

export default Courses;