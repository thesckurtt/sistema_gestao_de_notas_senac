import React from 'react'

export const BTNDashboard = ({customClass, label, action}) => {
  return (
    <button className={`btn ${customClass}`} onClick={action}>{label}</button>
  )
}
