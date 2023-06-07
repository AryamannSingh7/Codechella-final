import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Register';
import ForgotPassword from './Components/ForgotP';
import Landing from './Components/Landing';
import {Toaster} from 'react-hot-toast';
function App() {
  return (
    <>
      <div>
        <Toaster position='top-right' toastOptions={{success: {theme:{primary: '#4aed88',},},}}></Toaster>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/forgotpassword' element={<ForgotPassword/>} />
          <Route path="/landing" element={<Landing/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
