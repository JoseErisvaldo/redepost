import { useParams } from 'react-router-dom'
import Profile from '../../Components/Profile'
import api from '../../Services'
import { useEffect, useState } from 'react'
import PostsPerfil from '../../Components/PostsPerfil'

export default function PageProfile() {
  const { id } = useParams()
  const [profile, setProfile] = useState(null)
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    try {
      async function loadingUser() {
        const response = await api.get(`/users/${id}`)
        setProfile(response.data)
      }
      loadingUser()

      async function loadingPosts() {
        const response = await api.get(`/posts/${id}`)
        setPosts(response.data)
      }
      loadingPosts()
    } catch (error) {
      console.error('Erro na API:', error)
    }
  }, [id])

  return (
    <div>
      {profile && (
        <div>
          <Profile
            id={profile.id}
            name={profile.firstName}
            image={profile.image}
          />
        </div>
      )}
      {posts ? (
        <PostsPerfil
          name={posts.name}
          comment={posts.comment}
          criado={posts.created_at}
          photo={posts.photo}
        />
      ) : (
        <>Nenhum publicação !!!</>
      )}
    </div>
  )
}
