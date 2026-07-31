function DashboardCard({ 
  title,
  value,
  color,
  icon
}) {
  return (
    <div className="card border-0 shadow h-100">
      <div className={`card-body bg-${color} text-white rounded`}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6>{title}</h6>
            <h2>{value}</h2>
          </div>

          <i className={`${icon} fs-1`}></i>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;