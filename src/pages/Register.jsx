import React, { useState } from 'react'
import InptAuthForm from '../components/InptAuthForm'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const { register } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await register({ name, email, password })
      if (response.error) {
        setError(response.error)
      } else {
        navigate('/login', { replace: true })
      }
    } catch (error) {
      setError('Erro inesperado, tente novamente.')
    }
  }

  return (
    <div className="login-card">
      <h3 className="text-center mb-4">Login</h3>
      {error &&
        <div className="alert alert-danger" role="alert">
          This is a danger alert—check it out!
        </div>
      }
      <form onSubmit={(e) => handleSubmit(e)}>
        <InptAuthForm type={'text'} value={name} setValue={setName} text={"Nome"} placeholder={'João Vitor'} />
        <InptAuthForm type={'email'} value={email} setValue={setEmail} text={"E-mail"} placeholder={'email@example.com'} />
        <InptAuthForm type={'password'} value={password} setValue={setPassword} text={"Senha"} placeholder={'********'} />
        <button type="submit" className="btn btn-primary w-100">Registrar</button>
        <div className="text-center mt-3">
          <span>Possuí uma conta? <Link to={'/login'} replace={true}>Entre aqui</Link></span>
        </div>
      </form>
    </div>
  )
}

export default Register
