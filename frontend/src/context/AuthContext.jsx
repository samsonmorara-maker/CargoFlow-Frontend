import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
  try {
    const saved = localStorage.getItem("user");

    if (!saved || saved === "undefined") {
      return null;
    }

    return JSON.parse(saved);
  } catch (error) {
    console.error(error);
    localStorage.removeItem("user");
    return null;
  }
});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(false);
  }, []);

  const login = ({ user, access, refresh }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);

    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}