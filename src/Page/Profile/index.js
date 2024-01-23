import { useParams } from 'react-router-dom'
import Profile from '../../Components/Profile'
import api from '../../Services'
import { useEffect, useState } from 'react'
import PostsPerfil from '../../Components/PostsPerfil'

export default function PageProfile() {
  const { id } = useParams()
  const [profile, setProfile] = useState(null)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    try {
      async function loadingUser() {
        const response = await api.get(`/users/${id}`)
        setProfile(response.data) // Assumindo que o endpoint retorna um objeto
      }

      async function loadingPosts() {
        const response = await api.get(`/posts`)
        setPosts(response.data)
      }

      // Carregar dados
      loadingUser()
      loadingPosts()
    } catch (error) {
      console.error('Erro na API:', error)
    }
  }, [id])

  useEffect(() => {
    if (profile && Array.isArray(profile) && posts.length > 0) {
      const resMap = posts.map(item => {
        const resPro = profile.find(pro => pro.id === item.userId) // Supondo que o campo de usuário no post seja userId
        console.log(resPro)
      })
    }
  }, [profile, posts])
  return (
    <div>
      {profile && (
        <div>
          <Profile
            key={profile.id}
            id={profile.id}
            name={profile.firstName}
            image={profile.image}
          />
        </div>
      )}

      {posts.map(post => (
        <PostsPerfil
          key={post.id}
          name={post.name}
          comment={post.comment}
          criado={post.created_at}
          photo={post.photo}
        />
      ))}
      {posts.length === 0 && <p>Sem posts disponíveis.</p>}

      <div>Teste</div>
    </div>
  )
}
