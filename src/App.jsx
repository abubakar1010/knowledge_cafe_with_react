
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  // set book mark

  const [bookmark, setBookmark] = useState([])

  function handleBookmark(blog){
    const newBookmarks = [...bookmark,blog];
    setBookmark(newBookmarks)
  }

  // set reading time

  const [readingTime, setREadingTime] = useState(0);

  function handleReadingTime(id,time){
    // console.log("reading time", time);

    const newTime = parseInt(readingTime) + parseInt(time)
    setREadingTime(newTime)
    const filteredBookmark = bookmark.filter( bookmark => bookmark.id !== id);
    setBookmark(filteredBookmark)
  }


  return (
    <>
    <div className=' container mx-auto'>

    <Header />
    <div className=' flex gap-7'>
    <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime} />
    <Bookmarks bookmark={bookmark} readingTime={readingTime}/>

    </div>
    </div>
    </>
  )
}

export default App
