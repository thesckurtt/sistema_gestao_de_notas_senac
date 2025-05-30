import React from 'react'

const InptAuthForm = ({ name, type, text = null, placeholder, value, setValue }) => {
  return (
    <div class="mb-3">
      <label for={name} class="form-label fw-medium">{text}</label>
      <input type={type ?? 'text'} class="form-control" value={value} onChange={(e) => setValue(e.target.value)} id={name} placeholder={placeholder} />
    </div>
  )
}

export default InptAuthForm
