import { useState } from 'react'
import './style.css'
import api from '../../Services'
export default function NewPost() {
  const [postData, setPostData] = useState({
    idPost: '',
    name: '',
    comment: '',
    photo: '',
    created_at: '',
    id: ''
  })

  // Função para manipular a submissão do formulário
  const handleSubmit = async e => {
    e.preventDefault()

    try {
      // Faça a requisição POST usando Axios
      const response = await api.post(
        'https://api-redepost.vercel.app/posts',
        postData
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
        value={postData.comment}
        onChange={e => setPostData({ ...postData, comment: e.target.value })}
      />
      <input type="file" />
      <button type="submit">Enviar POST</button>
    </form>
  )
}
