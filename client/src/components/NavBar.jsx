
// import React, { useState } from 'react';
// import {
//   SunIcon,
//   MoonIcon,
//   Cog6ToothIcon,
//   UserCircleIcon,
//   HomeIcon,
//   ChartBarIcon,
//   ClockIcon,
//   ArrowRightOnRectangleIcon,
//   XMarkIcon
// } from '@heroicons/react/24/outline';
// import { NavLink } from 'react-router-dom';

// const NavBar = ({ darkMode, setDarkMode }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => setIsOpen(!isOpen);

//   const commonClasses = darkMode
//     ? 'bg-white text-black'
//     : 'bg-gradient-to-b from-violet-600/95 to-purple-600/95 text-white';

//   const SidebarContent = ({ isMobile = false }) => (
//     <div
//       className={`flex flex-col h-full justify-between w-64 p-6 shadow-md border-r ${commonClasses}`}
//     >
//       {/* Top Section */}
//       <div>
//         {/* Mobile Close Button */}
//         {isMobile && (
//           <div className="flex justify-end mb-4">
//             <button onClick={toggleMenu}>
//               <XMarkIcon className="h-6 w-6 text-black dark:text-white" />
//             </button>
//           </div>
//         )}

//         {/* Logo */}
//         <div className="flex items-center gap-3 mb-8">
//           <svg viewBox="0 0 40 40" className="h-10 w-10" xmlns="http://www.w3.org/2000/svg">
//             <circle cx="20" cy="20" r="20" fill="url(#logo-gradient)" />
//             <circle cx="20" cy="20" r="16" fill="white" />
//             <path
//               d="M20 10V20L26 26"
//               stroke="#8b5cf6"
//               strokeWidth="2.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <defs>
//               <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40">
//                 <stop stopColor="#c4b5fd" />
//                 <stop offset="1" stopColor="#7c3aed" />
//               </linearGradient>
//             </defs>
//           </svg>
//           <span className="text-xl font-bold whitespace-nowrap">Zen Track</span>
//         </div>
//         <div className="h-px bg-gray-300 w-[200px] mb-6"></div>

//         {/* Navigation */}
//         <nav className="space-y-4">
//           <NavLink to="/" className="flex items-center gap-2 hover:text-yellow-300">
//             <HomeIcon className="h-5 w-5" /> Dashboard
//           </NavLink>
//           <NavLink to="/reports" className="flex items-center gap-2 hover:text-yellow-300">
//             <ChartBarIcon className="h-5 w-5" /> Reports
//           </NavLink>
//           <NavLink to="/pomodoro" className="flex items-center gap-2 hover:text-yellow-300">
//             <ClockIcon className="h-5 w-5" /> Pomodoro
//           </NavLink>
//         </nav>

//         {/* Settings */}
//         <div className="mt-10 space-y-4">
//           <NavLink to="/profile" className="flex items-center gap-2 hover:text-yellow-300">
//             <UserCircleIcon className="h-5 w-5" /> Profile
//           </NavLink>
//           <NavLink to="/settings" className="flex items-center gap-2 hover:text-yellow-300">
//             <Cog6ToothIcon className="h-5 w-5" /> Settings
//           </NavLink>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="space-y-2">
//         <div className="text-sm">
//           <p className="font-medium">Signed in as</p>
//           <p>you@example.com</p>
//         </div>
//         <div className="flex items-center gap-2">
//           <ArrowRightOnRectangleIcon className="h-5 w-5" />
//           <button className="hover:text-yellow-300 font-semibold">Sign Out</button>
//           <button onClick={() => setDarkMode(!darkMode)} className="ml-auto">
//             {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="flex">
//       {/* Desktop Sidebar */}
//       <aside className="hidden md:block fixed top-0 left-0 h-screen z-40">
//         <SidebarContent />
//       </aside>

//       {/* Mobile Header */}
//       <header className="md:hidden flex items-center justify-between p-4">
//         <div className="flex items-center gap-4">
//           <button
//             onClick={toggleMenu}
//             className="md:hidden bg-violet-600 text-white rounded p-2"
//           >
//             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {isOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>
//       </header>

//       {/* Mobile Slide-in Sidebar */}
//       {isOpen && (
//         <div
//           className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50"
//           onClick={toggleMenu}
//         >
//           <div
//             className="absolute top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <SidebarContent isMobile={true} />
//           </div>
//         </div>
//       )}

      // {/* Main Content Area */}
      // <main className="flex-1 ml-0 md:ml-64 p-6">
      //   <h2 className="text-2xl font-semibold">Main Content</h2>
      //   {/* Routed content goes here */}
      // </main>
//     </div>
//   );
// };

// export default NavBar;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SunIcon,
  MoonIcon,
  Cog6ToothIcon,
  UserCircleIcon,
  HomeIcon,
  ChartBarIcon,
  ClockIcon,
  ArrowRightOnRectangleIcon,
  XMarkIcon,
  StarIcon, InformationCircleIcon
} from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const NavBar = ({ darkMode, setDarkMode, user }) => {
  const navigate=useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  console.log("User",user);
  const handletohome=()=>{
      navigate('/')
  }

  const commonClasses = darkMode
    ? 'bg-white text-black'
    : 'bg-gradient-to-b from-violet-600/95 to-purple-600/95 text-white';

  const SidebarContent = ({ isMobile = false }) => (
    <div
      className={`flex flex-col h-full justify-between w-64 p-6 shadow-md border-r ${commonClasses} relative`}
    >
      {/* Mobile Close Button in Top Right */}
      {isMobile && (
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 z-50"
        >
          <XMarkIcon className="h-6 w-6 text-white" />
        </button>
      )}

      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8" onClick={handletohome}>
          <svg viewBox="0 0 40 40" className="h-10 w-10" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="url(#logo-gradient)" />
              <circle cx="20" cy="20" r="16" fill="white" />
              {/* Inner violet circle to match stroke color */}
              <circle cx="20" cy="8" r="1.5" fill="#8b5cf6" /> 
              {/* Clock hand path */}
              <path
                d="M20 10V20L26 26"
                stroke="#8b5cf6"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40">
                  <stop stopColor="#c4b5fd" />
                  <stop offset="1" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
        </svg>

          <span className="text-xl font-bold whitespace-nowrap" onClick={handletohome}>Zen Track</span>
        </div>
        <div className="h-px bg-gray-300 w-[200px] mb-6"></div>

        {/* Navigation */}
        <nav className="space-y-4">
          <NavLink to="/dashboard" className="flex items-center gap-2 hover:text-yellow-300">
            <HomeIcon className="h-5 w-5" /> Dashboard
          </NavLink>
          <NavLink to="/reports" className="flex items-center gap-2 hover:text-yellow-300">
            <ChartBarIcon className="h-5 w-5" /> Reports
          </NavLink>
          <NavLink to="/pomodoro" className="flex items-center gap-2 hover:text-yellow-300">
            <ClockIcon className="h-5 w-5" /> Pomodoro
          </NavLink>
        </nav>

        <div className="mt-10 space-y-4">
          <NavLink to="/feature" className="flex items-center gap-2 hover:text-yellow-300">
            <StarIcon className="h-5 w-5" /> Features
          </NavLink>
          <NavLink to="/about" className="flex items-center gap-2 hover:text-yellow-300">
            <InformationCircleIcon className="h-5 w-5" /> About
          </NavLink>
        </div>

        {/* Settings */}
        <div className="mt-10 space-y-4">
          <NavLink to="/profile" className="flex items-center gap-2 hover:text-yellow-300">
            <UserCircleIcon className="h-5 w-5" /> Profile
          </NavLink>
          <NavLink to="/settings" className="flex items-center gap-2 hover:text-yellow-300">
            <Cog6ToothIcon className="h-5 w-5" /> Settings
          </NavLink>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-2">
        <div className="text-sm">
        <div className="h-0.5 bg-gray-200 w-[108%] mb-2 -ml-1"></div>       
        <div className='text-left'>
        {user ? (
          <div className="flex items-center gap-3">
            <img
              src={user.profilePic}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />

            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-300">{user.email}</p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-center italic text-gray-300">Not signed in</p>
        )}
        </div>




          </div>
        <div className="flex items-center gap-2">
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
          <button className="hover:text-yellow-300 font-semibold">Sign Out</button>
          <button onClick={() => setDarkMode(!darkMode)} className="ml-auto">
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block fixed top-0 left-0 h-screen z-40">
        <SidebarContent />
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 w-full">
        <button
          onClick={toggleMenu}
          className="bg-violet-600 text-white rounded p-2"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            
          </svg>
        </button>
      </header>

      {/* Mobile Slide-in Sidebar */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={toggleMenu}
        >
          <div
            className="absolute top-0 left-0 w-64 h-full shadow-lg transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <SidebarContent isMobile={true} />
          </div>
        </div>
      )}

      
    </div>
  );
};

export default NavBar;


