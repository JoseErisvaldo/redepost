import { Link } from 'react-router-dom'
import './style.css'
import BtnSeg from '../BtnSeg'

export default function UserRede({ photo, name, id, status }) {
  return (
    <div>
      <div id="container-rede">
        <div className="card-rede">
          <div className="card-users-rede">
            <Link className="link-dados-users" to={`/profile/${id}`}>
              <div className="img-users-rede">
                <img src={photo} />
              </div>
              <div className="name-users-rede">{name}</div>
            </Link>
            <BtnSeg status={status} />
          </div>
        </div>
      </div>
    </div>
  )
}
