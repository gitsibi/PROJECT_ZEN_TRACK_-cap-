// // import React, { useState } from 'react';

// // const Navbar_app = ({ darkMode, setDarkMode }) => {
    
// //   return (
// //         <div className={`${darkMode ? 'bg-white text-black' : 'bg-violet-500 text-white'} `}>
// //                <div className="flex flex-col justify-start w-full">
// //                      <div className='flex items-center gap-2'>
//                         // <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
//                         //    <circle cx="20" cy="20" r="20" fill="url(#logo-gradient)" />
//                         //    <circle cx="20" cy="20" r="16" fill="white" className="dark:fill-gray-900" />
//                         //    <path d="M20 10V20L26 26" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="dark:stroke-violet-400" />
//                         //    <circle cx="20" cy="8" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                         //    <circle cx="26" cy="10" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                         //    <circle cx="30" cy="16" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                         //    <circle cx="32" cy="20" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                         //    <circle cx="30" cy="26" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                         //    <circle cx="26" cy="30" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                         //    <circle cx="20" cy="32" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                         //    <circle cx="14" cy="30" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                         //    <circle cx="10" cy="26" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                         //    <circle cx="8" cy="20" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                         //    <circle cx="10" cy="14" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                         //    <circle cx="14" cy="10" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                         //    <defs>
//                         //    <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
//                         //       <stop stopColor="#c4b5fd" />
//                         //       <stop offset="1" stopColor="#7c3aed" />
//                         //    </linearGradient>
//                         //    </defs>
//                         // </svg>

// //                           <div className={`${darkMode ? 'bg-white text-black text-xl font-semibold  whitespace-nowrap': 'text-xl font-semibold text-white whitespace-nowrap'}`}>Zen Track</div>
// //                      </div>
// //                 </div>
// //       </div>
// //   )
// // }

// // export default Navbar_app;


// import React, { useState } from 'react';

// const Navbar_app = ({ darkMode, setDarkMode }) => {
//   return (
//     <div className={`fixed top-0 left-0 h-full w-64 z-50 border-r shadow-md transition-all duration-300
//       ${darkMode ? 'bg-white text-black' : 'bg-gradient-to-b from-violet-600/95 to-purple-600/95 text-white'}
//       backdrop-blur supports-[backdrop-filter]:from-violet-600/80 supports-[backdrop-filter]:to-purple-600/80
//     `}>
//       <div className="flex flex-col items-start gap-6 p-4">
//         {/* Logo and Title */}
//         <a href="/" className="flex items-center gap-3">
//           <div className="relative h-10 w-10">
//           <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
//                            <circle cx="20" cy="20" r="20" fill="url(#logo-gradient)" />
//                            <circle cx="20" cy="20" r="16" fill="white" className="dark:fill-gray-900" />
//                            <path d="M20 10V20L26 26" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="dark:stroke-violet-400" />
//                            <circle cx="20" cy="8" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                            <circle cx="26" cy="10" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                            <circle cx="30" cy="16" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                            <circle cx="32" cy="20" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                            <circle cx="30" cy="26" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                            <circle cx="26" cy="30" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                            <circle cx="20" cy="32" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                            <circle cx="14" cy="30" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                            <circle cx="10" cy="26" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                            <circle cx="8" cy="20" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                            <circle cx="10" cy="14" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                            <circle cx="14" cy="10" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400" />
//                            <defs>
//                            <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
//                               <stop stopColor="#c4b5fd" />
//                               <stop offset="1" stopColor="#7c3aed" />
//                            </linearGradient>
//                            </defs>
//                         </svg>

//           </div>
//            <div className={`${darkMode ? 'bg-white text-black text-xl font-semibold  whitespace-nowrap': 'text-xl font-semibold text-white whitespace-nowrap'}`}>Zen Track</div>
//           </a>

//         {/* Theme Toggle Button */}
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="flex items-center gap-2 p-2 rounded hover:bg-white/10 transition"
//           aria-label="Toggle theme"
//         >
//           {/* Sun */}
//           <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${darkMode ? 'scale-0' : 'scale-100'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//             <circle cx="12" cy="12" r="4" />
//             <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
//           </svg>

//           {/* Moon */}
//           <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 absolute transition-transform ${darkMode ? 'scale-100' : 'scale-0'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//             <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
//           </svg>
//         </button>

//         {/* Navigation Placeholder (Add More Links Later) */}
//         <nav className="flex flex-col gap-2 mt-4 w-full">
//           <a href="#" className="hover:bg-white/10 px-3 py-2 rounded transition">Dashboard</a>
//           <a href="#" className="hover:bg-white/10 px-3 py-2 rounded transition">Projects</a>
//           <a href="#" className="hover:bg-white/10 px-3 py-2 rounded transition">Settings</a>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar_app;
