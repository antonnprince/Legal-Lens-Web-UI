import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Chat from './Chat'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path='/' index element={ <LoginForm />}/>
=======
        <Route path='/login' index element={ <LoginForm />}/>
>>>>>>> origin/main
        <Route path='/signup' element={<SignupForm/>}/>
        <Route path='/chat' element={<Chat/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
