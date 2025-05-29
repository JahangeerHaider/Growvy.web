import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import './App.css'
import Pricing from './Pages/Pricing'
import Home from './Pages/Home'
import Jobs from './Pages/Jobs'
import Success from './Pages/Success'
import Services from './Pages/Services'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar/>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/jobs' element={<Jobs/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
         </Routes>
        </BrowserRouter>
       
      </div>
    </>
  )
}

export default App
