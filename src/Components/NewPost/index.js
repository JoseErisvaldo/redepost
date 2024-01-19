import { useState } from 'react'
import './style.css'
import api from '../../Services'
export default function NewPost() {
  const [postData, setPostData] = useState({
    // Defina os dados que você deseja enviar no corpo da requisição POST
    comment: '',
    photo: '',
    userId: '3'
  })

  // Função para manipular a submissão do formulário
  const handleSubmit = async e => {
    e.preventDefault()

    try {
      // Faça a requisição POST usando Axios
      const response = await api.post('http://localhost:3000/posts', postData)
      console.log('Resposta do servidor:', response.data)
    } catch (error) {
      console.error('Erro ao fazer a requisição POST:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Se você quiser um formulário controlado, pode vincular os campos aos estados */}
      <input
        type="text"
        value={postData.comment}
        onChange={e => setPostData({ ...postData, comment: e.target.value })}
      />
      <input
        type="text"
        value={postData.photo}
        onChange={e => setPostData({ ...postData, photo: e.target.value })}
      />
      <button type="submit">Enviar POST</button>
    </form>
  )
}
