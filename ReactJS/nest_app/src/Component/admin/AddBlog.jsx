import Sidebar from "./Sidebar"
import Blog from './Blog'

export default function AddBlog() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Blog />
      </div>
    </>
  )
}
