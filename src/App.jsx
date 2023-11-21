import { Route, Routes } from 'react-router-dom'
import { EresPrd } from './pages/EresPrd'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<EresPrd />} />
    </Routes>
  )
}

export default App
