import { VscHeart } from 'react-icons/vsc'
import { FaRegComment } from 'react-icons/fa'
import { MdOutlineSave } from 'react-icons/md'
import './style.css'
export default function PostsPerfil({ name, comment, criado, photo }) {
  return (
    <div className="container-card-profile">
      <div className="post-card-profile">
        <img src={photo} alt="" />
        <div className="post-details">
          <span>{name}</span>
          <p>{comment}</p>
          <div className="post-date">{criado}</div>
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
    </div>
  )
}
