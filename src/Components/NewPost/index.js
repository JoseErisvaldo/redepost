import { useState } from 'react'
import './style.css'
import api from '../../Services'
export default function NewPost() {
  const [postData, setPostData] = useState({
    id: '5',
    name: '',
    file: ''
  })

  // Função para manipular a submissão do formulário
  const handleSubmit = async e => {
    e.preventDefault()

    try {
      // Faça a requisição POST usando Axios
      const response = await api.post(
        'https://sheetdb.io/api/v1/nhadsl9su5cg0',
        postData,
        {
          method: 'GET',
          headers: {
            Authorization: 'Basic ' + btoa('pkldys0h:sgqtwfgi9fzsakrxdoj9')
          }
        }
      )
      console.log('Resposta do servidor:', response.data)
    } catch (error) {
      console.error('Erro ao fazer a requisição POST:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} id="container-input-card">
      <textarea
        type="text"
        value={postData.name}
        onChange={e => setPostData({ ...postData, name: e.target.value })}
      />
      <input type="file" />
      <button type="submit">Enviar POST</button>
    </form>
  )
}
