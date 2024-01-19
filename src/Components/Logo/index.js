import './style.css'
import { CiMedicalCross } from 'react-icons/ci'

export default function Logo() {
  return (
    <div>
      <h1 className="logo">
        <span className="rede">Rede</span>
        <span className="mais">
          <CiMedicalCross />
        </span>
      </h1>
    </div>
  )
}
