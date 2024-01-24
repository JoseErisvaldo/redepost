// RoutesApp.js
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../Page/Home'
import Header from '../Components/Header'
import Pesquisar from '../Page/Pesquisar'
import AddPost from '../Page/AddPost'
import Favoritos from '../Page/Favoritos'
import Seguidores from '../Page/Seguidores'
import Seguindo from '../Page/Seguindo'
import Account from '../Page/Account'
import PageProfile from '../Page/Profile'
import Login from '../Page/Login'
import { AuthProvider, useAuth } from '../Components/Contexts'

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  )
}

function AppContent() {
  const { isAuthenticated } = useAuth()

  return (
    <>
      {isAuthenticated && <Header />}
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/pesquisar"
          element={isAuthenticated ? <Pesquisar /> : <Navigate to="/login" />}
        />
        <Route
          path="/addpost"
          element={isAuthenticated ? <AddPost /> : <Navigate to="/login" />}
        />
        <Route
          path="/favoritos"
          element={isAuthenticated ? <Favoritos /> : <Navigate to="/login" />}
        />
        <Route
          path="/account"
          element={isAuthenticated ? <Account /> : <Navigate to="/login" />}
        />
        <Route
          path="/seguidores/:id"
          element={isAuthenticated ? <Seguidores /> : <Navigate to="/login" />}
        />
        <Route
          path="/seguindo"
          element={isAuthenticated ? <Seguindo /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile/:id"
          element={isAuthenticated ? <PageProfile /> : <Navigate to="/login" />}
        />
        {/* Adicione mais rotas conforme necessário */}
      </Routes>
    </>
  )
}
