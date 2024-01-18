import { Link } from 'react-router-dom'

import './style.css'

export default function Profile({ name, image, comment }) {
  return (
    <div id="card-container-profile">
      <div className="container-profile">
        <div className="photo-profile">
          <img src={image} alt="" />
        </div>
        <div>
          <div className="dados-account">
            <div className="publicacao-profile">
              <span>1</span> <span>publicações</span>
            </div>
            <Link className="link" to={'/seguidores'}>
              <div className="seguidores">
                <span>2</span> <span>Seguidores</span>{' '}
              </div>
            </Link>
            <div className="seguindo">
              <Link className="link" to={'/seguindo'}>
                <span>3</span> <span>Seguindo</span>{' '}
              </Link>
            </div>
          </div>
          <div className="bio-profile">Minha Bio</div>
        </div>
      </div>
    </div>
  )
}
