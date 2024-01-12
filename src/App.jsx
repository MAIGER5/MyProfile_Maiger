import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home/Home'
import { MyProyects } from './Components/MyProyects/MyProyects'

function App() {

  return (
    <HashRouter>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/MyProyects' element={<MyProyects/>} />
        
      </Routes>
    </HashRouter>
  )
}

export default App
