function DashboardCard({
  title,
  value,
  color,
}) {
  return (
    <div className={`card text-white bg-${color}`}>
      <div className="card-body">

        <h5>{title}</h5>

        <h2>{value}</h2>

      </div>
    </div>
  );
}

export default DashboardCard;
