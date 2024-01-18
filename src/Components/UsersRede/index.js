import { Link } from 'react-router-dom'
import './style.css'

export default function UserRede({ id, status }) {
  return (
    <div>
      <div id="container-rede">
        <div className="card-rede">
          <div className="card-users-rede">
            <Link className="link-dados-users" to={'/profile'}>
              <div className="img-users-rede"></div>
              <div className="name-users-rede">{id}</div>
            </Link>
            <div className="status-users-rede">
              <button className="btn-users-rede">{status}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
