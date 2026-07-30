import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";

function Departments() {
  const [departments, setDepartments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    description: "",
  });

  useEffect(() => {
    loadDepartments();
  }, []);

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

  function editDepartment(department) {
    setEditingId(department.id);

    setFormData({
      name: department.name,
      code: department.code,
      description: department.description,
    });

    setShowModal(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (editingId) {
        await api.put(`/departments/${editingId}`, formData);
      } else {
        await api.post("/departments/", formData);
      }

      setShowModal(false);
      setEditingId(null);

      setFormData({
        name: "",
        code: "",
        description: "",
      });

      loadDepartments();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Unable to save department.");
    }
  }

  async function deleteDepartment(id) {
    if (!window.confirm("Delete this department?")) return;

    try {
      await api.delete(`/departments/${id}`);
      loadDepartments();
      alert("Department deleted successfully.");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Unable to delete department.");
    }
  }

  return (
    <Layout>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Departments</h2>

        <button
          className="btn btn-primary"
          onClick={() => {
            setEditingId(null);

            setFormData({
              name: "",
              code: "",
              description: "",
            });

            setShowModal(true);
          }}
        >
          Add Department
        </button>
      </div>

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Code</th>
            <th>Name</th>
            <th>Description</th>
            <th width="180">Actions</th>
          </tr>
        </thead>

        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.code}</td>
              <td>{department.name}</td>
              <td>{department.description}</td>

              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => editDepartment(department)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteDepartment(department.id)}
                >
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
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleSubmit}>
                <div className="modal-header">
                  <h5>
                    {editingId ? "Edit Department" : "Add Department"}
                  </h5>

                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => {
                      setShowModal(false);
                      setEditingId(null);
                    }}
                  />
                </div>

                <div className="modal-body">
                  <input
                    className="form-control mb-3"
                    placeholder="Department Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <input
                    className="form-control mb-3"
                    placeholder="Department Code"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    required
                  />

                  <textarea
                    className="form-control"
                    placeholder="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="3"
                  />
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setShowModal(false);
                      setEditingId(null);
                    }}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    {editingId ? "Update Department" : "Save Department"}
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

export default Departments;