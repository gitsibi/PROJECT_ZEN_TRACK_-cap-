


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import Home from './pages/Home';
// import LoginPage from './pages/LoginPage';
// import SignupPage from './pages/SignupPage';
// import Dashboard from './pages/Dashboard';

// const App = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [user, setUser] = useState(null);
//   // Set the dark mode class to body element based on the darkMode state
//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add('dark');
//     } else {
//       document.body.classList.remove('dark');
//     }
//   }, [darkMode]);

//   return (
//     <BrowserRouter>
//       <div className={`${darkMode ? 'dark' : ''}`}>
//       <NavBar darkMode={darkMode} setDarkMode={setDarkMode} user={user} />
//       <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/login' element={<LoginPage setUser={setUser} />} />
//           <Route path="/signup" element={<SignupPage />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import AboutPage from './pages/AboutPage';
import Features from './pages/Feature';
import Profile from './pages/Profile';
import ProfileSetup from './pages/ProfileSetup';

// Separate component to access useLocation
const AppContent = ({ darkMode, setDarkMode, user, setUser }) => {
  const location = useLocation();

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      {/* 👇 Hide NavBar only on the home route */}
      {!['/', '/login', '/signup','/profilesetup'].includes(location.pathname) && (
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} user={user} />
      )}


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage setUser={setUser} />} />
        <Route path="/signup" element={<SignupPage setUser={setUser}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/feature" element={<Features />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profilesetup" element={<ProfileSetup user={user}/>} />
      </Routes>
    </div>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <AppContent 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        user={user}
        setUser={setUser}
      />
    </BrowserRouter>
  );
};

export default App;
