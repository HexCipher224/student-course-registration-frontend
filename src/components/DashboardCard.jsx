function DashboardCard({
  title,
  value,
  color,
}) {
  return (
    <div className="row g-4">

  <div className="col-md-4">
    <div className="card border-0 shadow bg-primary text-white">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6>Total Courses</h6>
            <h2>{stats.totalCourses}</h2>
          </div>

          <i className="bi bi-book-fill fs-1"></i>
        </div>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card border-0 shadow bg-success text-white">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6>Departments</h6>
            <h2>{stats.totalDepartments}</h2>
          </div>

          <i className="bi bi-building fs-1"></i>
        </div>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card border-0 shadow bg-warning text-dark">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6>Enrollments</h6>
            <h2>{stats.totalEnrollments}</h2>
          </div>

          <i className="bi bi-person-check-fill fs-1"></i>
        </div>
      </div>
    </div>
  </div>

</div>
  );
}

export default DashboardCard;
