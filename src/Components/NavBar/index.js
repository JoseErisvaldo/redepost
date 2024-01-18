import { TiHomeOutline } from 'react-icons/ti'
import { PiPlanetBold } from 'react-icons/pi'
import { BiPlusMedical } from 'react-icons/bi'
import { VscAccount } from 'react-icons/vsc'
import { VscHeartFilled } from 'react-icons/vsc'
import { VscSearch } from 'react-icons/vsc'
import './style.css'
import { Link } from 'react-router-dom'
import { FaRegComment } from 'react-icons/fa'

export default function NavBar() {
  return (
    <div id="containerNav">
      <div className="navBar">
        <Link to={'/'} className="link">
          <div className="home">
            <TiHomeOutline />
          </div>
        </Link>
        <Link to={'planet'} className="link">
          <div className="planet">
            <PiPlanetBold />
          </div>
        </Link>
        <Link to={'/addpost'} className="link">
          <div className="post">
            <BiPlusMedical />
          </div>
        </Link>
        <Link to={'/pesquisar'} className="link">
          <div className="search">
            <VscSearch />
          </div>
        </Link>
        <Link to={'/favoritos'} className="link">
          <div className="favorite">
            <VscHeartFilled />
          </div>
        </Link>
        <Link to={'/mensagem+'} className="link">
          <div className="mensagem">
            <FaRegComment />
          </div>
        </Link>
        <Link to={'account'} className="link">
          <div className="account">
            <VscAccount />
          </div>
        </Link>
      </div>
    </div>
  )
}
