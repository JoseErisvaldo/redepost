import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Page/Home'
import Header from '../Components/Header'
import Pesquisar from '../Page/Pesquisar'
import AddPost from '../Page/AddPost'
import Favoritos from '../Page/Favoritos'
import MyAccount from '../Page/MyAccount'
import Seguidores from '../Page/Seguidores'

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pesquisar" element={<Pesquisar />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/seguidores" element={<Seguidores />} />
      </Routes>
    </BrowserRouter>
  )
}
