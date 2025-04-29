// import React,{useState} from 'react'
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import Home from './pages/Home';
// import LoginPage from './pages/LoginPage';
// const App = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   return (
//     <BrowserRouter>
//       <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/login' element={<LoginPage/>}/>
//         {/* <Route path="/signup" element={<SignupPage />} /> */}
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Set the dark mode class to body element based on the darkMode state
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className={`${darkMode ? 'dark' : ''}`}>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
