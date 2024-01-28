import { useEffect, useState } from 'react'
import api from '../../Services'
import './style.css'

import Modal from 'react-modal'
import BtnInteracao from '../BtnIteracao'
import BtnPadrao from '../BtnPadrao'
import BtnClose from '../Btns'
import { Link } from 'react-router-dom'

Modal.setAppElement('#root')
export default function Posts() {
  const [listPost, setPost] = useState([])
  const [comentarios, setComentarios] = useState([])
  const [listLikes, setLikes] = useState([])
  const [newView, setNewView] = useState([])
  const [users, setUsers] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const commentsResponse = await api.get('/comentarios')
        const postsResponse = await api.get('/posts')
        const likesResponse = await api.get('/likes')
        const usersResponse = await api.get('/users')
        const [comment, posts, likes, users] = await Promise.all([
          commentsResponse,
          postsResponse,
          likesResponse,
          usersResponse
        ])

        setComentarios(comment.data)
        setPost(posts.data)
        setLikes(likes.data)
        setUsers(users.data)
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

        const nameUser = users.filter(user => user.id === post.id)

        return { ...post, listComments, listLike, nameUser }
      })
      setNewView(mapList)
    }
  }

  useEffect(() => {
    if (listPost && comentarios && listLikes) {
      spredComments()
    }
  }, [listPost, comentarios, listLikes])

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }
  const [clicar, setClicar] = useState([])
  let subtitle
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal(e) {
    setClicar(e)
    setIsOpen(true)
  }

  const [dadosModal, setDadosModal] = useState([])
  useEffect(() => {
    const idPost = clicar

    const modalComments = comentarios.filter(
      comments => comments.idPost === idPost
    )
    const resModal = modalComments.map(comments => {
      const user = users.filter(user => user.id === comments.id)

      return { ...comments, user }
    })
    setDadosModal(resModal)
  }, [clicar])

  function afeterOpenModal() {
    subtitle.style.color = 'black'
  }
  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div id="container-post">
      {newView.map(item => (
        <div className="card-post" key={item.idPost}>
          <Link className="link" to={`/profile/${item.id}`}>
            <div className="card-title-post">
              <div className="card-perfil">
                <div className="perfil-photo">
                  {item.nameUser.map(photo => (
                    <>
                      <img src={photo.image} key={photo.id} />
                    </>
                  ))}
                </div>
                <div> {item.name}</div>
              </div>
              <div className="post-name">
                {item.nameUser.map(item => (
                  <div key={item.id}>
                    {item.firstName} {item.lastName}
                  </div>
                ))}
              </div>
              <div>{item.creat_att}</div>
            </div>
          </Link>
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
            <div className="open-comments">
              <button
                onClick={e => {
                  openModal(item.idPost)
                }}
              >
                {item.listComments.length > 0 && (
                  <span>
                    Comentado por ID: {item.listComments.find(item => true).id}{' '}
                  </span>
                )}
                {item.listComments.length >= 2 && (
                  <span>e outras {item.listComments.length} pessoas</span>
                )}
              </button>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afeterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <BtnClose onClick={closeModal} />
                <div className="container-modal">
                  <h2 ref={_subtitle => (subtitle = _subtitle)}>Comentarios</h2>
                  <textarea
                    className="comments-textarea"
                    placeholder="Comentar"
                  ></textarea>
                  <BtnPadrao id={'Enviar'} />
                  {dadosModal.map(item => (
                    <div className="container-comments" key={item.id}>
                      <Link to={`/profile/${item.id}`}>
                        <div className="comments-users">
                          {item.user.map(user => (
                            <>
                              <div className="comments-img" key={user.idPost}>
                                <img src={user.image} />
                              </div>
                              <div className="comments-name">
                                {user.firstName}
                              </div>
                            </>
                          ))}
                        </div>
                      </Link>
                      <div className="comments-comments">{item.comentario}</div>
                      <BtnInteracao />
                      <div className="comments-resposta">Responder</div>
                    </div>
                  ))}
                </div>
              </Modal>
            </div>
          </div>
          <BtnInteracao />
        </div>
      ))}
    </div>
  )
}
