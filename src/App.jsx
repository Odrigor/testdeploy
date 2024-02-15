import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import QS from './Pages/QS'
import Servicios from './Pages/Servicios'
import Articulos from './Pages/Articulos'
import BlogPostOne from './Articulos/BlogPostOne'
import BlogPostTwo from './Articulos/BlogPostTwo'
import BlogPostThree from './Articulos/BlogPostThree'
import Contacto from './Pages/Contacto'
import Marcas from './components/Marcas'
import BarBrands from './components/BarBrands'
import Baar from './components/Baar'
import BarraMarcas from './components/BarraMarcas'

function App() {


  return (
<Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<QS></QS>}></Route>
        <Route path='/services' element={<Servicios></Servicios>}></Route>
        <Route path='/articles' element={<Articulos></Articulos>}></Route>
        <Route path='/articleone' element={<BlogPostOne></BlogPostOne>}></Route>
        <Route path='/articletwo' element={<BlogPostTwo></BlogPostTwo>}></Route>
        <Route path='/articlethree' element={<BlogPostThree></BlogPostThree>}></Route>
        <Route path='/contact' element={<Contacto></Contacto>}></Route>
        <Route path='/m' element={<Marcas></Marcas>}></Route>
        <Route path='/mm' element={<BarraMarcas></BarraMarcas>}></Route>
      </Routes>
    </Router>

  )
}

export default App