import React from "react";

export const BTNDashboard = ({ customClass, label, ...attrs }) => {
  return (
    <button className={`btn ${customClass}`} {...attrs}>
      {label}
    </button>
  );
};
