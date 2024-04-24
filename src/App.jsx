import { Suspense, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Public } from './routes/public/auth';
import Home from './pages/public/home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>

          <Route path={Public.home} element={<Home />} />


        </Routes>
      </Suspense>
    </BrowserRouter>

    


  )
}


export default App
