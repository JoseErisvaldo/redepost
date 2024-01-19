import { useEffect, useState } from 'react'
import UserRede from '../../Components/UsersRede'
import api from '../../Services'

export default function Pesquisar() {
  const userId = 1
  const [list, setList] = useState([])
  useEffect(item => {
    async function loadingApi() {
      try {
        const response = await api.get('/users')
        const res = response.data
        setList(res)
      } catch (error) {}
    }
    loadingApi()
  }, [])
  const listFilter = list.filter(item => item.id != userId)
  return (
    <div>
      {listFilter.map(item => (
        <div>
          <UserRede id={item.id} name={item.firstName} status={'Seguir'} />
        </div>
      ))}
    </div>
  )
}
