import React from 'react'

export const ContainerFlexDashboard = ({children}) => {
  return (
    <div className="d-flex flex-row w-100 h-100 flex-grow-1">{children}</div>
  )
}
