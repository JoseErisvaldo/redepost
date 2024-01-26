import { useEffect, useState } from 'react'
import api from '../../Services'
import './style.css'
import { VscHeart } from 'react-icons/vsc'
import { FaRegComment } from 'react-icons/fa'
import { MdOutlineSave } from 'react-icons/md'

export default function Posts() {
  const [listPost, setPost] = useState([])
  const [comentarios, setComentarios] = useState([])
  const [listLikes, setLikes] = useState([])
  const [newView, setNewView] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const commentsResponse = await api.get('/comentarios')
        const postsResponse = await api.get('/posts')
        const likesResponse = await api.get('/likes')

        const [comment, posts, likes] = await Promise.all([
          commentsResponse,
          postsResponse,
          likesResponse
        ])

        setComentarios(comment.data)
        setPost(posts.data)
        setLikes(likes.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  function spredComments() {
    if (listPost && comentarios && listLikes) {
      const mapList = listPost.map(post => {
        const listComments = comentarios.filter(
          comment => comment.idPost === post.idPost
        )
        const listLike = listLikes.filter(likes => likes.idPost === post.idPost)
        return { ...post, listComments, listLike }
      })
      setNewView(mapList)
      console.log(newView)
    }
  }

  useEffect(() => {
    if (listPost && comentarios && listLikes) {
      spredComments()
    }
  }, [listPost, comentarios, listLikes])
  return (
    <div id="container-post">
      {newView.map(item => (
        <div className="card-post" key={item.id}>
          <div className="card-title-post">
            <div className="card-perfil">
              <div className="perfil-photo"></div>
              <div> {item.name}</div>
            </div>
            <div>{item.creat_att}</div>
          </div>
          <div className="card-img">
            <img className="post-img" src={item.photo} />
          </div>
          <div className="post-mensagem">{item.comment}</div>
          <div className="status-interacao-likes">
            {item.listLike.length > 0 && (
              <div>Curtido por ID: {item.listLike.find(item => true)?.id} </div>
            )}
            <div>
              {item.listLike.length > 1 && (
                <div>
                  {' '}
                  <span> e mais </span> <span> {item.listLike.length} </span>{' '}
                  pessoa{' '}
                </div>
              )}{' '}
            </div>
          </div>
          <div className="status-interacao-comments">
            {item.listComments.length > 0 && (
              <div>
                Comentado por ID: {item.listComments.find(item => true).id}{' '}
              </div>
            )}
            {item.listComments.length >= 2 && (
              <div>e outras {item.listComments.length}</div>
            )}
          </div>
          <div cla ssName="interacao-post">
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
  )
}
