import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";

function Enrollments() {
  const [enrollments, setEnrollments] = useState([]);
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    user_id: "",
    course_id: "",
    semester: "",
    status: "Active",
  });

  useEffect(() => {
    loadEnrollments();
    loadStudents();
    loadCourses();
  }, []);

  async function loadEnrollments() {
    try {
      const res = await api.get("/enrollments/");
      setEnrollments(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  async function loadStudents() {
    try {
      const res = await api.get("/users/");
      setStudents(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  async function loadCourses() {
    try {
      const res = await api.get("/courses/");
      setCourses(res.data);
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

  return (
    <Layout>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Enrollments</h2>

        <button
          className="btn btn-primary"
          onClick={() => setShowModal(true)}
        >
          Add Enrollment
        </button>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Student</th>
            <th>Course</th>
            <th>Semester</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {enrollments.map((enrollment) => (
            <tr key={enrollment.id}>
              <td>{enrollment.id}</td>
              <td>{enrollment.user_id}</td>
              <td>{enrollment.course_id}</td>
              <td>{enrollment.semester}</td>
              <td>{enrollment.status}</td>
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

              <div className="modal-header">
                <h5>Add Enrollment</h5>

                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                />
              </div>

              <form>
                <div className="modal-body">

                  <select
                    className="form-select mb-3"
                    name="user_id"
                    value={formData.user_id}
                    onChange={handleChange}
                  >
                    <option value="">Select Student</option>

                    {students.map((student) => (
                      <option key={student.id} value={student.id}>
                        {student.name || student.email}
                      </option>
                    ))}
                  </select>

                  <select
                    className="form-select mb-3"
                    name="course_id"
                    value={formData.course_id}
                    onChange={handleChange}
                  >
                    <option value="">Select Course</option>

                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.title}
                      </option>
                    ))}
                  </select>

                  <input
                    className="form-control mb-3"
                    placeholder="Semester"
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                  />

                  <select
                    className="form-select"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option>Active</option>
                    <option>Completed</option>
                    <option>Dropped</option>
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
                    type="submit"
                    className="btn btn-primary"
                  >
                    Save Enrollment
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

export default Enrollments;