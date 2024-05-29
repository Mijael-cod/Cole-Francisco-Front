import { Suspense, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Public } from './routes/public/auth';
import Home from './pages/public/home/Home';
import Nosotros from './pages/public/nosotros/Nosotros';
import Matricula from './pages/public/matricula/Matricula';
import Login from './pages/auth/login/Login';
import { Private } from './routes/private/auth';
import Dashboard from './pages/private/admin/dashboard/Dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>

          <Route path={Public.home} element={<Home />} />
          {/* <Route path={Public.nosotros} element={<Nosotros />} />  */}
          <Route path={Public.matricula} element={<Matricula />} />
          <Route path={Public.authLogin} element={<Login />} />
          <Route path={Private.dashboard} element={<Dashboard />} />


        </Routes>
      </Suspense>
    </BrowserRouter>

    


  )
}


export default App
