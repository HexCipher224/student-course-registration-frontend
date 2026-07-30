import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import DashboardCard from "../components/DashboardCard";
import api from "../services/api";

function Dashboard() {
  const [stats, setStats] = useState({
    courses: 0,
    departments: 0,
    enrollments: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const [courses, departments, enrollments] = await Promise.all([
        api.get("/courses/"),
        api.get("/departments/"),
        api.get("/enrollments/"),
      ]);

      console.log("Courses:", courses.data);
      console.log("Departments:", departments.data);
      console.log("Enrollments:", enrollments.data);

      setStats({
        courses: courses.data.length,
        departments: departments.data.length,
        enrollments: enrollments.data.length,
      });

      console.log("Setting stats:", {
      courses: courses.data.length,
      departments: departments.data.length,
      enrollments: enrollments.data.length,
      });

    } catch (error) {
      console.error("Dashboard Error:", error);
    }
  }
        console.log("Current stats state:", stats);

  return (
    <Layout>
      <h2 className="mb-4">Dashboard</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <DashboardCard
            title="Courses"
            value={stats.courses}
            color="primary"
          />
        </div>

        <div className="col-md-4">
          <DashboardCard
            title="Departments"
            value={stats.departments}
            color="success"
          />
        </div>

        <div className="col-md-4">
          <DashboardCard
            title="Enrollments"
            value={stats.enrollments}
            color="warning"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;