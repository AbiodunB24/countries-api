
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Country from './pages/Country';
import Test from './pages/Test';

const App = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <NavBar/>
      <Routes>
        <Route path='/country' element={<Country/>} />
        <Route path='/test' element={<Test/>} />
      </Routes>
    </div>
  )
}

export default App;