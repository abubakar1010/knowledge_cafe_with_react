
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'

function App() {

  return (
    <>
    <div className=' container mx-auto'>

    <Header />
    <div className=' flex gap-7'>
    <Blogs />
    <Bookmark />

    </div>
    </div>
    </>
  )
}

export default App
