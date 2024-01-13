import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home/Home'
import { SwiperProyects } from './Components/MyProyects/swiper'

function App() {

  return (
    <HashRouter>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/MyProyects' element={<SwiperProyects/>} />
        
      </Routes>
    </HashRouter>
  )
}

export default App
