import api from '../../Services'
import './style.css'
import { useEffect, useId, useState } from 'react'
import { VscHeart } from 'react-icons/vsc'
import { FaRegComment } from 'react-icons/fa'
import { MdOutlineSave } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function MyAccount() {
  const [user, setUser] = useState([])
  const userId = 1
  const [post, setPost] = useState([])
  const [conta, setConta] = useState([])

  useEffect(() => {
    async function loadingDados() {
      try {
        const response = await api.get('/users')
        setUser(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    loadingDados()

    async function loadingPost() {
      try {
        const response = await api.get('/posts')
        setPost(response.data)
      } catch (error) {
        console.log('Erro na api ' + error)
      }
    }
    loadingPost()

    async function loadingConta() {
      try {
        const response = await api.get('/conta')
        setConta(response.data)
      } catch (error) {
        console.log('Erro na api' + error)
      }
    }
    loadingConta()
  }, [])

  const filterId = user.filter(item => item.id == userId)
  const filterPost = post.filter(item => item.idUser == userId)
  const filterConta = conta.filter(item => {
    return item.id == userId
  })
  const resSeguindo = filterConta.map(item => {
    return item.seguindo.length
  })

  const resSeguidores = filterConta.map(item => {
    return item.seguidores.length
  })
  return (
    <div id="card-container-my-account">
      {filterId.map(item => (
        <div className="container-my-account" key={item.id}>
          <div className="photo-my-account">
            <img src={item.image} alt={`Image ${item.id}`} />
          </div>
          <div>
            <div className="dados-account">
              <div className="publicacao-my-accout">
                <span>{filterPost.length}</span> <span>publicações</span>
              </div>
              <Link className="link" to={'/seguidores'}>
                <div className="seguidores">
                  <span>{resSeguidores}</span> <span>Seguidores</span>{' '}
                </div>
              </Link>
              <div className="seguindo">
                <Link className="link" to={'/seguindo'}>
                  <span>{resSeguindo}</span> <span>Seguindo</span>{' '}
                </Link>
              </div>
            </div>
            <div className="bio-my-account">
              {item.bio && <div>{item.bio}</div>}
            </div>
          </div>
          {filterPost.map(postItem => (
            <div className="post-card" key={postItem.idPost}>
              <img src={postItem.photo} alt={`Post ${postItem.idPost}`} />
              <div className="post-details">
                <span>{postItem.name}</span>
                <p>{postItem.comment}</p>
                <div className="post-date">{postItem.creat_att}</div>
              </div>
              <div className="interacao-post">
                <div>
                  <VscHeart />
                </div>
                <div>
                  <FaRegComment />
                </div>
                <div>
                  <MdOutlineSave />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
