function Button({
  children,
  type = "button",
  variant = "primary",
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
}) {
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "bg-slate-700 hover:bg-slate-800 text-white",

    success:
      "bg-green-600 hover:bg-green-700 text-white",

    danger:
      "bg-red-600 hover:bg-red-700 text-white",

    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        rounded-lg
        px-5
        py-3
        font-medium
        transition
        duration-200

        disabled:opacity-50
        disabled:cursor-not-allowed

        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
      `}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}

export default Button;