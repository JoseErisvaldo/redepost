import NewPost from '../../Components/NewPost'
import Posts from '../../Components/Post'
import Stories from '../../Components/Stories'

export default function Home() {
  return (
    <div>
      <Stories />
      <NewPost />
      <Posts />
    </div>
  )
}
