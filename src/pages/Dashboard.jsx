import Layout from "../components/Layout";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <Layout>

      <h2 className="mb-4">
        Dashboard
      </h2>

      <div className="row g-4">

        <div className="col-md-4">
          <DashboardCard
            title="Courses"
            value="3"
            color="primary"
          />
        </div>

        <div className="col-md-4">
          <DashboardCard
            title="Departments"
            value="2"
            color="success"
          />
        </div>

        <div className="col-md-4">
          <DashboardCard
            title="Enrollments"
            value="1"
            color="warning"
          />
        </div>

      </div>

    </Layout>
  );
}

export default Dashboard;