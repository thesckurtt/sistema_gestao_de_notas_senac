import React from "react";
import { useAuth } from "../context/AuthContext";

export const NavbarDashboard = () => {
  const { logout } = useAuth();
  return (
    <nav className="navbar navbar-dark bg-dark w-100">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Gestão de notas</span>
        <span className="navbar-brand mb-0 h1" style={{ cursor: "pointer" }}>
          <i className="fa-solid fa-right-from-bracket" onClick={logout}></i>
        </span>
      </div>
    </nav>
  );
};
