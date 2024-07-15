import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
