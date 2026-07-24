function StatsCard({
  title,
  value,
  icon,
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div className="text-4xl text-blue-600">
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatsCard;