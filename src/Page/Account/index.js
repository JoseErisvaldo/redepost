import api from '../../Services'
import './style.css'
import { useEffect, useState } from 'react'
import { VscHeart } from 'react-icons/vsc'
import { FaRegComment } from 'react-icons/fa'
import { MdOutlineSave } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import { IoMdClose } from 'react-icons/io'

Modal.setAppElement('#root')
export default function Account() {
  const userId = 1
  const [user, setUser] = useState([])
  const [post, setPost] = useState([])
  const [conta, setConta] = useState([])
  const [newDados, setNewDados] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const usersResponse = api.get('/users')
        const postsResponse = api.get('/posts')
        const contaResponse = api.get('/conta')

        const [users, posts, contaData] = await Promise.all([
          usersResponse,
          postsResponse,
          contaResponse
        ])

        setUser(users.data)
        setPost(posts.data)
        setConta(contaData.data)

        // Chame dados dentro de fetchData após todas as solicitações assíncronas serem resolvidas
        dados(users.data, posts.data, contaData.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  const filterId = newDados.filter(item => item.id == userId)

  function dados(users, posts, conta) {
    if (users && posts && conta) {
      let spredDados = users.map(usuarioAtual => {
        let postsDoUsuario = posts.filter(
          postagem => postagem.id === usuarioAtual.id
        )
        let resConta = conta.filter(seguindo => seguindo.id === usuarioAtual.id)

        return {
          ...usuarioAtual,
          posts: postsDoUsuario ? postsDoUsuario : null,
          progresso: resConta ? resConta : null
        }
      })
      setNewDados(spredDados)
    }
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '300px',
      height: '80vh'
    }
  }
  let subtitle
  const [modalIsOpenSeguidores, setIsOpen] = useState(false)
  const [modalIsOpenSeguindo, setIsOpenSeguindo] = useState(false)

  function openModalSeguidores() {
    setIsOpen(true)
  }
  function openModalSeguindo() {
    setIsOpenSeguindo(true)
  }

  function afterOpenModalSeguidores() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#black'
  }
  function afterOpenModalSeguindo() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#black'
  }

  function closeModalSeguidores() {
    setIsOpen(false)
  }
  function closeModalSeguindo() {
    setIsOpenSeguindo(false)
  }

  return (
    <div id="card-container-profile">
      {filterId.map(item => (
        <div className="container-profile" key={item.id}>
          <div className="photo-profile">
            <img src={item.image} alt={`Image ${item.id}`} />
          </div>
          <div className="name-account">
            {item.firstName} {item.lastName}
          </div>
          <div>
            <div className="dados-account">
              <div className="publicacao-profile">
                <span>{item.posts.length}</span>
                <span>publicações</span>
              </div>
              <div>
                <button
                  className="count-seguidores"
                  onClick={openModalSeguidores}
                >
                  {item.progresso.map(item => (
                    <>{item.seguidores.length}</>
                  ))}{' '}
                  Seguidores
                </button>
              </div>
              <Modal
                isOpen={modalIsOpenSeguidores}
                onAfterOpen={afterOpenModalSeguidores}
                onRequestClose={closeModalSeguidores}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <button
                  className="btn-close-modal"
                  onClick={closeModalSeguidores}
                >
                  <IoMdClose />
                </button>

                <h2 ref={_subtitle => (subtitle = _subtitle)}>
                  Seus seguidores
                </h2>
                {item.progresso.map(item => (
                  <div>
                    {item.seguidores.map(seguidores => (
                      <Link className="link" to={`/profile/${seguidores.id}`}>
                        <div className="seguidores">
                          <div className="">
                            {seguidores.id} - {seguidores.dataSeguido}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ))}
              </Modal>
              <div className="seguindo">
                <button className="count-seguindo" onClick={openModalSeguindo}>
                  {item.progresso.map(item => (
                    <>{item.seguindo.length}</>
                  ))}{' '}
                  Seguindo
                </button>{' '}
                <Modal
                  isOpen={modalIsOpenSeguindo}
                  onAfterOpen={afterOpenModalSeguindo}
                  onRequestClose={closeModalSeguindo}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <button
                    className="btn-close-modal"
                    onClick={closeModalSeguindo}
                  >
                    <IoMdClose />
                  </button>

                  <h2 ref={_subtitle => (subtitle = _subtitle)}>Seguindo</h2>
                  {item.progresso.map(item => (
                    <div>
                      {item.seguindo.map(seguindo => (
                        <div className="seguidores">
                          <Link className="link" to={`/profile/${seguindo.id}`}>
                            <div className="">
                              {seguindo.id} - {seguindo.dataSeguido}
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  ))}
                </Modal>
              </div>
            </div>

            <div className="bio-profile">
              {item.bio && <div>{item.bio}</div>}
            </div>
          </div>
          <div id="card-container-profile">
            {filterId.map(item => (
              <div className="container-profile" key={item.id}>
                <div>
                  <div className="bio-profile">
                    {item.bio && <div>{item.bio}</div>}
                  </div>
                </div>
                {item.posts.map(postItem => (
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
        </div>
      ))}
    </div>
  )
}
