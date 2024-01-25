import { useEffect, useState } from 'react'
import api from '../../Services'
import './style.css'
import { VscHeart } from 'react-icons/vsc'
import { FaRegComment } from 'react-icons/fa'
import { MdOutlineSave } from 'react-icons/md'

export default function Posts() {
  const [listPost, setPost] = useState([])
  useEffect(() => {
    async function loadingPosts() {
      const response = await api.get('/posts')
      setPost(response.data)
    }
    loadingPosts()
  }, [])

  return (
    <div id="container-post">
      {listPost.map(item => (
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
  )
}
