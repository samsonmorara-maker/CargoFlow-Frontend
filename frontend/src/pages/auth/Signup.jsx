import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../../api/auth";

function Signup() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    role: "CUSTOMER",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await signupUser(formData);

    if (formData.role === "DRIVER") {
    alert(
    "Driver account created successfully. Your account is pending administrator approval."
        );
        } else {
        alert("Account created successfully.");
        }

navigate("/login");

      
    } catch (error) {
      console.error(error);

      const errors = error.response?.data;

    const message =
        errors?.detail ||
        errors?.email?.[0] ||
        errors?.password?.[0] ||
        errors?.confirm_password?.[0] ||
        errors?.role?.[0] ||
        errors?.non_field_errors?.[0] ||
        Object.values(errors || {})[0]?.[0] ||
        "Signup failed.";

      alert(message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-lg">

        <h1 className="text-center text-3xl font-bold">
          CargoFlow
        </h1>

        <p className="mb-6 text-center text-gray-500">
          Create your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
            required
          />

          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
            required
          />

          <input
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
            required
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          >
            <option value="CUSTOMER">Customer</option>
            <option value="DRIVER">Driver</option>
          </select>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
            required
          />

          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            value={formData.confirm_password}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
            required
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        <div className="pt-5 text-center">
          <span className="text-gray-600">
            Already have an account?{" "}
          </span>

          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Login
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Signup;