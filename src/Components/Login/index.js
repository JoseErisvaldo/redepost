import { Link } from 'react-router-dom'
import Logo from '../Logo'
import './style.css'

export default function CompoLogin({ dadosEmail, entrar }) {
  return (
    <div id="container-login">
      <div className="card-login">
        <div>
          <Logo />
          <h1>Fazer Login</h1>
        </div>
        <input
          onChange={e => dadosEmail(e.target.value)}
          type="email"
          placeholder="Digite seu email"
        />
        <input type="password" placeholder="Digite sua senha" />
        <button onClick={entrar}>Entrar</button>
        <div className="dados-login">
          <Link className="link">
            <div className="esqueci-senha">Esqueci senha</div>{' '}
          </Link>
          <Link className="link">
            <div className="cadastra-se">Cadastre-se</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
