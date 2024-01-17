import { Link } from 'react-router-dom'
import './style.css'

export default function UsereRede({ id }) {
  return (
    <div>
      <div id="container-rede">
        <div className="card-rede">
          <div className="card-users-rede">
            <Link className="link-dados-users" to={'/myaccount'}>
              <div className="img-users-rede"></div>
              <div className="name-users-rede">{id}</div>
            </Link>
            <div className="status-users-rede">
              <button className="btn-users-rede">Remover</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
