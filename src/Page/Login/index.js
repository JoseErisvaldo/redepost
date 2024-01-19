// Exemplo simplificado do componente Login
import React, { useState } from 'react'
import CompoLogin from '../../Components/Login'
import api from '../../Services/index.js'
import { useAuth } from '../../Components/Contexts/index.js'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [emailList, setEmailList] = useState([])
  const [inputEmail, setInputEmail] = useState('')
  const { isAuthenticated, setIsAuthenticated } = useAuth()
  const navigate = useNavigate()

  async function loadUsers() {
    try {
      const response = await api.get('/users')
      setEmailList(response.data)
    } catch (error) {
      console.error('Error loading users:', error)
    }
  }
  loadUsers()
  function dadosEmail(e) {
    setInputEmail(e)
  }

  function entrar() {
    const foundUser = emailList.find(item => item.email === inputEmail)

    if (foundUser) {
      console.log('Sim')
      setIsAuthenticated(true)
      navigate('/')
    } else {
      console.log('Não')
    }
  }

  return <CompoLogin dadosEmail={dadosEmail} entrar={entrar} />
}
