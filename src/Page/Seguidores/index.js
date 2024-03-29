import React, { useEffect, useState } from 'react'
import UserRede from '../../Components/UsersRede'
import api from '../../Services'
import BtnReturn from '../../Components/BtnReturn'
import { useParams } from 'react-router-dom'

export default function Seguidores() {
  const { id } = useParams()
  const [combinedData, setCombinedData] = useState([])
  useEffect(() => {
    async function loadingUsers() {
      try {
        // Obtendo dados relacionados aos seguidores
        const responseContaSeguidores = await api.get('/conta')
        const resSeguidores = responseContaSeguidores.data

        // Obtendo dados do usuário
        const responseUsers = await api.get('/users')
        const resUsers = responseUsers.data

        // Combinando dados com base no ID
        const join = resUsers.map(users => {
          const seguidores = resSeguidores.find(item => item.id == users.id)

          return {
            ...users,
            progresso: seguidores
          }
        })
        setCombinedData(join)
        console.log(join)
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    }

    loadingUsers()
  }, [])
  const filterJoin = combinedData
    .filter(item => item.id == id)
    .map(item => {
      return item.progresso
    })
  console.log(filterJoin)
  return (
    <div>
      <BtnReturn />
      {filterJoin.map(item =>
        item.seguidores.map(seguidor => (
          <UserRede name={seguidor.firstName} status={'Seguidores'} />
        ))
      )}
    </div>
  )
}
