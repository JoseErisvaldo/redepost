import { VscHeart } from 'react-icons/vsc'
import { FaRegComment } from 'react-icons/fa'
import { MdOutlineSave } from 'react-icons/md'
import './style.css'
export default function BtnInteracao() {
  return (
    <>
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
    </>
  )
}
