function Card({
  title,
  subtitle,
  value,
  icon,
  children,
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition duration-200">

      {(title || value) && (
        <div className="flex items-center justify-between">

          <div>

            {title && (
              <h3 className="text-sm font-semibold text-gray-500 uppercase">
                {title}
              </h3>
            )}

            {value && (
              <p className="mt-2 text-3xl font-bold text-slate-800">
                {value}
              </p>
            )}

            {subtitle && (
              <p className="mt-2 text-sm text-gray-500">
                {subtitle}
              </p>
            )}

          </div>

          {icon && (
            <div className="rounded-full bg-blue-100 p-4 text-3xl">
              {icon}
            </div>
          )}

        </div>
      )}

      {children}

    </div>
  );
}

export default Card;