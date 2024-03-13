
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmark, setBookmark] = useState([])

  function handleBookmark(blog){
    const newBookmarks = [...bookmark,blog];
    setBookmark(newBookmarks)
  }

  return (
    <>
    <div className=' container mx-auto'>

    <Header />
    <div className=' flex gap-7'>
    <Blogs handleBookmark={handleBookmark} />
    <Bookmarks bookmark={bookmark} />

    </div>
    </div>
    </>
  )
}

export default App
