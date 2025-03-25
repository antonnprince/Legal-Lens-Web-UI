import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import User from './User';
import Chat from './Chat'
import ProfilePage from "./ProfilePage"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' index element={ <LoginForm />}/>
        <Route path='/signup' element={<SignupForm/>}/>
        <Route path='/chat' element={<Chat/>} />
        <Route path='/search' element={<User/>} />
        <Route path='/profile' element={<ProfilePage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
