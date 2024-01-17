import React, { useEffect, useState } from 'react'
import UsereRede from '../../Components/UsersRede'
import api from '../../Services'
import BtnReturn from '../../Components/BtnReturn'
import './style.css'

export default function Seguindo() {
  const userId = 1
  const [dados, setDados] = useState([])
  useEffect(() => {
    async function LoadingApi() {
      try {
        const responseUsers = await api.get('/users')
        const resUsers = responseUsers.data

        const responseSeguindo = await api.get('/conta')
        const resSeguindo = responseSeguindo.data

        const join = resUsers.map(user => {
          const seguindo = resSeguindo.find(item => item.id == user.id)
          return {
            ...user,
            progresso: seguindo
          }
        })
        setDados(join)
      } catch (error) {
        console.log('Erro na api, ' + error)
      }
    }
    LoadingApi()
  }, [])
  const filterDados = dados
    .filter(item => item.id == userId)
    .map(item => {
      return item.progresso
    })
  console.log(filterDados)
  return (
    <div className="container-seguindo">
      <BtnReturn />
      {filterDados.map(item =>
        item.seguindo.map(seguindo => (
          <UsereRede
            key={seguindo.id}
            id={seguindo.firstName}
            status={'Seguindo'}
          />
        ))
      )}
    </div>
  )
}
