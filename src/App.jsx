
import './App.css'
import Blogs from './components/Blogs/blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

import Header from './components/header/header'

function App() {
  

  return (
    <>
     
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
      
  

    </>
  )
}

export default App
