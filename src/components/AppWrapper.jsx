import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import App from '../App'
import Counter from './Counter'
import Header from './Header'
import Info from './Info'
import Menu from './Menu'
const AppWrapper = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/header' element={<Header/>}/>
          <Route path='/info' element={<Info />} />
          <Route path='/Menu' element={<Menu />} />
          
        </Routes>
      </BrowserRouter>
  )
}

export default AppWrapper