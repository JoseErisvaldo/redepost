import { TiHomeOutline } from 'react-icons/ti'
import { PiPlanetBold } from 'react-icons/pi'
import { BiPlusMedical } from 'react-icons/bi'
import { VscAccount } from 'react-icons/vsc'
import { VscHeartFilled } from 'react-icons/vsc'
import { VscSearch } from 'react-icons/vsc'
import './style.css'

export default function NavBar() {
  return (
    <div id="containerNav">
      <div className="navBar">
        <div className="home">
          <TiHomeOutline />
        </div>
        <div className="planet">
          <PiPlanetBold />
        </div>
        <div className="post">
          <BiPlusMedical />
        </div>
        <div className="search">
          <VscSearch />
        </div>
        <div className="favorite">
          <VscHeartFilled />
        </div>
        <div className="account">
          <VscAccount />
        </div>
      </div>
    </div>
  )
}
