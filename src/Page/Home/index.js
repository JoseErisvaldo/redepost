import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import './style.css'

export default function Home() {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }

  let subtitle

  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalIsOpenSeguidores, setIsOpenSeguidores] = useState(false)

  Modal.setAppElement('#root')

  const id = 1
  const usuarios = [
    {
      id: 1,
      name: 'José da Silva',
      idade: 25,
      email: 'jose@example.com',
      cep: '12345-678',
      sexo: 'Masculino',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Solteiro'
    },
    {
      id: 2,
      name: 'Lucia Oliveira',
      idade: 30,
      email: 'lucia@example.com',
      cep: '98765-432',
      sexo: 'Feminino',
      nacionalidade: 'Brasileira',
      estadoCivil: 'Casada'
    },
    {
      id: 3,
      name: 'Naldo Santos',
      idade: 22,
      email: 'naldo@example.com',
      cep: '54321-876',
      sexo: 'Masculino',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Solteiro'
    },
    {
      id: 4,
      name: 'Telma Almeida',
      idade: 28,
      email: 'telma@example.com',
      cep: '87654-321',
      sexo: 'Feminino',
      nacionalidade: 'Brasileira',
      estadoCivil: 'Divorciada'
    },
    {
      id: 5,
      name: 'Davi Pereira',
      idade: 35,
      email: 'davi@example.com',
      cep: '23456-789',
      sexo: 'Masculino',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Casado'
    },
    {
      id: 6,
      name: 'Thor Oliveira',
      idade: 27,
      email: 'thor@example.com',
      cep: '76543-210',
      sexo: 'Masculino',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Solteiro'
    },
    {
      id: 7,
      name: 'Kaike Silva',
      idade: 32,
      email: 'kaike@example.com',
      cep: '32165-098',
      sexo: 'Masculino',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Casado'
    },
    {
      id: 8,
      name: 'Maria Oliveira',
      idade: 29,
      email: 'maria@example.com',
      cep: '87698-543',
      sexo: 'Feminino',
      nacionalidade: 'Brasileira',
      estadoCivil: 'Solteira'
    },
    {
      id: 9,
      name: 'Pedro Rocha',
      idade: 31,
      email: 'pedro@example.com',
      cep: '23456-789',
      sexo: 'Masculino',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Casado'
    },
    {
      id: 10,
      name: 'Ana Souza',
      idade: 26,
      email: 'ana@example.com',
      cep: '67890-123',
      sexo: 'Feminino',
      nacionalidade: 'Brasileira',
      estadoCivil: 'Solteira'
    },
    // Adicionando mais 25 usuários
    {
      id: 11,
      name: 'Carlos Lima',
      idade: 28,
      email: 'carlos@example.com',
      cep: '54321-987',
      sexo: 'Masculino',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Solteiro'
    },
    {
      id: 12,
      name: 'Raquel Pereira',
      idade: 33,
      email: 'raquel@example.com',
      cep: '87654-321',
      sexo: 'Feminino',
      nacionalidade: 'Brasileira',
      estadoCivil: 'Casada'
    },
    {
      id: 13,
      name: 'Eduardo Silva',
      idade: 29,
      email: 'eduardo@example.com',
      cep: '23456-789',
      sexo: 'Masculino',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Divorciado'
    },
    {
      id: 14,
      name: 'Camila Oliveira',
      idade: 26,
      email: 'camila@example.com',
      cep: '67890-123',
      sexo: 'Feminino',
      nacionalidade: 'Brasileira',
      estadoCivil: 'Solteira'
    },
    {
      id: 15,
      name: 'Rafael Santos',
      idade: 30,
      email: 'rafael@example.com',
      cep: '34567-890',
      sexo: 'Masculino',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Casado'
    },
    {
      id: 16,
      name: 'Juliana Almeida',
      idade: 31,
      email: 'juliana@example.com',
      cep: '67890-234',
      sexo: 'Feminino',
      nacionalidade: 'Brasileira',
      estadoCivil: 'Solteira'
    },
    {
      id: 17,
      name: 'Fernando Rocha',
      idade: 27,
      email: 'fernando@example.com',
      cep: '12345-890',
      sexo: 'Masculino',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Casado'
    },
    {
      id: 18,
      name: 'Gabriela Souza',
      idade: 29,
      email: 'gabriela@example.com',
      cep: '45678-901',
      sexo: 'Feminino',
      nacionalidade: 'Brasileira',
      estadoCivil: 'Solteira'
    },
    {
      id: 19,
      name: 'Marcos Lima',
      idade: 34,
      email: 'marcos@example.com',
      cep: '89012-345',
      sexo: 'Masculino',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Casado'
    },
    {
      id: 20,
      name: 'Carolina Pereira',
      idade: 28,
      email: 'carolina@example.com',
      cep: '23456-789',
      sexo: 'Feminino',
      nacionalidade: 'Brasileira',
      estadoCivil: 'Divorciada'
    },
    {
      id: 21,
      name: 'Renato Silva',
      idade: 32,
      email: 'renato@example.com',
      cep: '56789-012',
      sexo: 'Masculino',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Solteiro'
    },
    {
      id: 22,
      name: 'Aline Oliveira',
      idade: 29,
      email: 'aline@example.com',
      cep: '12345-678',
      sexo: 'Feminino',
      nacionalidade: 'Brasileira',
      estadoCivil: 'Casada'
    },
    {
      id: 23,
      name: 'Ricardo Santos',
      idade: 33,
      email: 'ricardo@example.com',
      cep: '87654-321',
      sexo: 'Masculino',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Solteiro'
    },
    {
      id: 24,
      name: 'Camila Lima',
      idade: 27,
      email: 'camila@example.com',
      cep: '76543-210',
      sexo: 'Feminino',
      nacionalidade: 'Brasileira',
      estadoCivil: 'Casada'
    },
    {
      id: 25,
      name: 'Luiz Oliveira',
      idade: 30,
      email: 'luiz@example.com',
      cep: '32165-098',
      sexo: 'Masculino',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Solteiro'
    },
    {
      id: 26,
      name: 'Mariana Silva',
      idade: 28,
      email: 'mariana@example.com',
      cep: '87698-543',
      sexo: 'Feminino',
      nacionalidade: 'Brasileira',
      estadoCivil: 'Casada'
    },
    {
      id: 27,
      name: 'Diego Rocha',
      idade: 31,
      email: 'diego@example.com',
      cep: '23456-789',
      sexo: 'Masculino',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Solteiro'
    },
    {
      id: 28,
      name: 'Bianca Souza',
      idade: 26,
      email: 'bianca@example.com',
      cep: '67890-123',
      sexo: 'Feminino',
      nacionalidade: 'Brasileira',
      estadoCivil: 'Casada'
    },
    {
      id: 29,
      name: 'João Lima',
      idade: 34,
      email: 'joao@example.com',
      cep: '12345-678',
      sexo: 'Masculino',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Solteiro'
    },
    {
      id: 30,
      name: 'Fernanda Oliveira',
      idade: 29,
      email: 'fernanda@example.com',
      cep: '87654-321',
      sexo: 'Feminino',
      nacionalidade: 'Brasileira',
      estadoCivil: 'Casada'
    },
    {
      id: 31,
      name: 'Alex Silva',
      idade: 33,
      email: 'alex@example.com',
      cep: '23456-789',
      sexo: 'Masculino',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Solteiro'
    },
    {
      id: 32,
      name: 'Renata Almeida',
      idade: 28,
      email: 'renata@example.com',
      cep: '67890-123',
      sexo: 'Feminino',
      nacionalidade: 'Brasileira',
      estadoCivil: 'Casada'
    },
    {
      id: 33,
      name: 'Gustavo Rocha',
      idade: 30,
      email: 'gustavo@example.com',
      cep: '12345-678',
      sexo: 'Masculino',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Solteiro'
    },
    {
      id: 34,
      name: 'Carla Oliveira',
      idade: 27,
      email: 'carla@example.com',
      cep: '87654-321',
      sexo: 'Feminino',
      nacionalidade: 'Brasileira',
      estadoCivil: 'Casada'
    },
    {
      id: 35,
      name: 'Raphael Silva',
      idade: 32,
      email: 'raphael@example.com',
      cep: '23456-789',
      sexo: 'Masculino',
      nacionalidade: 'Brasileiro',
      estadoCivil: 'Solteiro'
    }
  ]

  const listaConta = [
    {
      id: 1,
      seguidores: [
        { id: 2, data_seguindo: '2024/01/01' },
        { id: 3, data_seguindo: '2024/01/01' },
        { id: 4, data_seguindo: '2024/01/01' }
      ],
      seguindo: [
        { id: 6, data_seguindo: '2024/01/01' },
        { id: 7, data_seguindo: '2024/01/01' },
        { id: 8, data_seguindo: '2024/01/01' }
      ]
    },
    {
      id: 2,
      seguidores: [
        { id: 6, data_seguindo: '2024/01/01' },
        { id: 7, data_seguindo: '2024/01/01' },
        { id: 8, data_seguindo: '2024/01/01' }
      ],
      seguindo: [
        { id: 2, data_seguindo: '2024/01/01' },
        { id: 3, data_seguindo: '2024/01/01' },
        { id: 4, data_seguindo: '2024/01/01' },
        { id: 5, data_seguindo: '2024/01/01' },
        { id: 7, data_seguindo: '2024/01/01' },
        { id: 10, data_seguindo: '2024/01/01' }
      ]
    },
    {
      id: 3,
      seguidores: [
        { id: 15, data_seguindo: '2024/01/01' },
        { id: 35, data_seguindo: '2024/01/01' },
        { id: 1, data_seguindo: '2024/01/01' }
      ],
      seguindo: [
        { id: 35, data_seguindo: '2024/01/01' },
        { id: 19, data_seguindo: '2024/01/01' },
        { id: 4, data_seguindo: '2024/01/01' },
        { id: 5, data_seguindo: '2024/01/01' },
        { id: 11, data_seguindo: '2024/01/01' },
        { id: 10, data_seguindo: '2024/01/01' }
      ]
    },
    // Adicionando mais usuários até o 10
    {
      id: 4,
      seguidores: [
        { id: 6, data_seguindo: '2024/01/01' },
        { id: 8, data_seguindo: '2024/01/01' },
        { id: 10, data_seguindo: '2024/01/01' }
      ],
      seguindo: [
        { id: 2, data_seguindo: '2024/01/01' },
        { id: 7, data_seguindo: '2024/01/01' },
        { id: 9, data_seguindo: '2024/01/01' }
      ]
    },
    {
      id: 5,
      seguidores: [
        { id: 1, data_seguindo: '2024/01/01' },
        { id: 3, data_seguindo: '2024/01/01' },
        { id: 7, data_seguindo: '2024/01/01' }
      ],
      seguindo: [
        { id: 2, data_seguindo: '2024/01/01' },
        { id: 4, data_seguindo: '2024/01/01' },
        { id: 6, data_seguindo: '2024/01/01' }
      ]
    },
    {
      id: 6,
      seguidores: [
        { id: 5, data_seguindo: '2024/01/01' },
        { id: 7, data_seguindo: '2024/01/01' },
        { id: 8, data_seguindo: '2024/01/01' }
      ],
      seguindo: [
        { id: 1, data_seguindo: '2024/01/01' },
        { id: 3, data_seguindo: '2024/01/01' },
        { id: 9, data_seguindo: '2024/01/01' }
      ]
    },
    {
      id: 7,
      seguidores: [
        { id: 5, data_seguindo: '2024/01/01' },
        { id: 9, data_seguindo: '2024/01/01' },
        { id: 10, data_seguindo: '2024/01/01' }
      ],
      seguindo: [
        { id: 2, data_seguindo: '2024/01/01' },
        { id: 4, data_seguindo: '2024/01/01' },
        { id: 6, data_seguindo: '2024/01/01' }
      ]
    },
    {
      id: 8,
      seguidores: [
        { id: 1, data_seguindo: '2024/01/01' },
        { id: 3, data_seguindo: '2024/01/01' },
        { id: 5, data_seguindo: '2024/01/01' }
      ],
      seguindo: [
        { id: 2, data_seguindo: '2024/01/01' },
        { id: 6, data_seguindo: '2024/01/01' },
        { id: 9, data_seguindo: '2024/01/01' }
      ]
    },
    {
      id: 9,
      seguidores: [
        { id: 2, data_seguindo: '2024/01/01' },
        { id: 4, data_seguindo: '2024/01/01' },
        { id: 7, data_seguindo: '2024/01/01' }
      ],
      seguindo: [
        { id: 1, data_seguindo: '2024/01/01' },
        { id: 5, data_seguindo: '2024/01/01' },
        { id: 8, data_seguindo: '2024/01/01' }
      ]
    },
    {
      id: 10,
      seguidores: [
        { id: 1, data_seguindo: '2024/01/01' },
        { id: 3, data_seguindo: '2024/01/01' },
        { id: 5, data_seguindo: '2024/01/01' }
      ],
      seguindo: [
        { id: 2, data_seguindo: '2024/01/01' },
        { id: 6, data_seguindo: '2024/01/01' },
        { id: 8, data_seguindo: '2024/01/01' }
      ]
    }
  ]
  const [dados, setDados] = useState({})

  useEffect(() => {
    function teste() {
      const resUser = usuarios.find(item => item.id === id)
      const resListaSeguidores = listaConta.find(item => item.id === id)
      const resListaSeguido = listaConta.find(item => item.id === id)

      if (resUser && resListaSeguido && resListaSeguidores) {
        const listaSeguidores = resListaSeguidores.seguidores.map(
          seguidores => {
            const listaUser = usuarios.find(user => user.id === seguidores.id)

            return {
              ...seguidores,
              name: listaUser ? listaUser.name : null,
              email: listaUser ? listaUser.email : null
            }
          }
        )

        const listaSeguido = resListaSeguido.seguindo.map(seguindo => {
          const listaUser = usuarios.find(user => user.id === seguindo.id)

          return {
            ...seguindo,
            name: listaUser ? listaUser.name : null,
            email: listaUser ? listaUser.email : null
          }
        })

        setDados({ ...resUser, listaSeguidores, listaSeguido })
      }
    }
    teste()
  }, [])

  console.log(dados)

  return (
    <div>
      {/* Seus outros componentes */}
      {/* ... */}

      {dados && (
        <div>
          <div>
            <img src={dados.foto} alt="Foto do usuário" />
            <div>{dados.name}</div>
            <div>
              {dados.listaSeguidores && dados.listaSeguidores.length > 0 && (
                <>
                  <button onClick={() => setIsOpenSeguidores(true)}>
                    Seguidores:{' '}
                    {dados &&
                      dados.listaSeguidores &&
                      dados.listaSeguidores.length}
                  </button>
                </>
              )}
              <button onClick={() => setIsOpen(true)}>
                Seguindo:{' '}
                {dados && dados.listaSeguido && dados.listaSeguido.length}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Seus outros componentes */}
      {/* ... */}

      <div>
        <Modal
          isOpen={modalIsOpenSeguidores}
          onAfterOpen={() => {}}
          onRequestClose={() => setIsOpenSeguidores(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={() => setIsOpenSeguidores(false)}>close</button>
          <h2 ref={subtitleRef => (subtitle = subtitleRef)}>{dados.name}</h2>
          <div>Seus Seguidores:</div>
          <ul>
            {dados &&
              dados.listaSeguidores &&
              dados.listaSeguidores.map(seguidor => (
                <li key={seguidor.id}>
                  {seguidor.name} - {seguidor.email}
                </li>
              ))}
          </ul>
        </Modal>
      </div>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={() => {}}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={() => setIsOpen(false)}>close</button>
          <h2 ref={subtitleRef => (subtitle = subtitleRef)}>{dados.name}</h2>
          <div>Seguindo:</div>
          <ul>
            {dados &&
              dados.listaSeguido &&
              dados.listaSeguido.map(seguido => (
                <li key={seguido.id}>
                  {seguido.name} - {seguido.email}
                </li>
              ))}
          </ul>
        </Modal>
      </div>
    </div>
  )
}
