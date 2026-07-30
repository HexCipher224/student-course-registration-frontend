import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  async function loadCourses() {
    try {
      const res = await api.get("/courses/");
      setCourses(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Layout>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Courses</h2>

        <button className="btn btn-primary">
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
    </Layout>
  );
}

export default Courses;
