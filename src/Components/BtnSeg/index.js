import './style.css'

export default function BtnSeg({ status }) {
  return (
    <div className="status-users-rede">
      <button className="btn-users-rede">{status}</button>
    </div>
  )
}
