import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import BlogEditor from './pages/BlogEditor';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/editor/:id?' element={<BlogEditor />} />
        <Route path='/profile/:id' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
