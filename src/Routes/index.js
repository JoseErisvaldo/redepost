import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Page/Home'
import Header from '../Components/Header'
import Pesquisar from '../Page/Pesquisar'
import AddPost from '../Page/AddPost'
import Favoritos from '../Page/Favoritos'

import Seguidores from '../Page/Seguidores'
import Seguindo from '../Page/Seguindo'
import Account from '../Page/Account'

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pesquisar" element={<Pesquisar />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/account" element={<Account />} />
        <Route path="/seguidores" element={<Seguidores />} />
        <Route path="/seguindo" element={<Seguindo />} />
      </Routes>
    </BrowserRouter>
  )
}
