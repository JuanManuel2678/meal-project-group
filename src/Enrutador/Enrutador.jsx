import { Route, Routes } from "react-router";
import { Main } from '../components/Meals/Main'

export const Enrutador = () => {

  return (

    <Routes>
      <Route path='/' element={<h1>Hola mundo</h1>}/>
      <Route path='/meals/:category' element={<Main /> }/>
      <Route path='/juanMa' element={<h1>Me llamo juan </h1>}/>
    </Routes>
  )
}


