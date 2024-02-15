import React from 'react'
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Country from './pages/Country';

const App = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <NavBar/>
      <Routes>
        <Route path='/country' element={<Country/>} />
      </Routes>
    </div>
  )
}

export default App;