import { Link } from 'react-router-dom'
import './style.css'
import { IoIosArrowBack } from 'react-icons/io'

export default function BtnReturn() {
  return (
    <div>
      <Link className="link" to={'/profile'}>
        <div className="return-card-users-rede">
          <IoIosArrowBack />
        </div>
      </Link>
    </div>
  )
}
