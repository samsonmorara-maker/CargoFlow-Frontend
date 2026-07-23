import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

function ProtectedRoute({
  children,
  allowedRoles = [],
}) {
  const { user } = useAuthContext();

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Admin
  if (user.is_staff) {
    if (
      allowedRoles.length &&
      !allowedRoles.includes("ADMIN")
    ) {
      return <Navigate to="/" replace />;
    }

    return children;
  }

  // Customer / Driver
  if (
    allowedRoles.length &&
    !allowedRoles.includes(user.role)
  ) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;