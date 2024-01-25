import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import './style.css'
import Stories from '../../Components/Stories'
import NewPost from '../../Components/NewPost'
import Posts from '../../Components/Post'

export default function Home() {
  return (
    <div>
      <Stories />
      <NewPost />
      <Posts />
    </div>
  )
}
