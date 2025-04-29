import React,{useState} from 'react';

function Home () {
  return (
   <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
       <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
         <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
               {/* Left Section */}
               <div className="flex flex-col justify-center space-y-4">
               <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                     Master Your Time, Elevate Your Productivity
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                     ZenTrack helps you monitor and improve your productivity with Pomodoro techniques, session tracking, and AI-powered insights.
                  </p>
               </div>
               <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a href="/signup">
                     <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-violet-500 h-11 rounded-md px-8 gap-1">
                     Get Started
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right h-4 w-4"
                     >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                     </svg>
                     </button>
                  </a>
                  <a href="/features">
                     <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8">
                     Learn More
                     </button>
                  </a>
               </div>
               </div>

               {/* Right Section */}
               <div className="flex items-center justify-center">
               <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden bg-gradient-to-br from-violet-500 to-purple-700 shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="text-white text-center p-6">
                     <div className="w-32 h-32 rounded-full border-8 border-white mx-auto mb-6 flex items-center justify-center">
                        <span className="text-3xl font-bold">25:00</span>
                     </div>
                     <h3 className="text-2xl font-bold mb-2">Pomodoro Timer</h3>
                     <p className="text-white/80">Focus. Break. Repeat.</p>
                     </div>
                  </div>
               </div>
               </div>
            </div>
         </div>
       </section>

       <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
         <div className="container px-4 md:px-6">
         <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features</h2>
               <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
               Everything you need to boost your productivity and track your progress
               </p>
            </div>
         </div>

         <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {[
               {
               icon: (
                  <svg className="lucide lucide-clock h-12 w-12 text-violet-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                     <circle cx="12" cy="12" r="10" />
                     <polyline points="12 6 12 12 16 14" />
                  </svg>
               ),
               title: "Pomodoro Timer",
               description: "Stay focused with customizable Pomodoro sessions to maximize your productivity",
               },
               {
               icon: (
                  <svg className="lucide lucide-chart-no-axes-column h-12 w-12 text-violet-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                     <line x1="18" x2="18" y1="20" y2="10" />
                     <line x1="12" x2="12" y1="20" y2="4" />
                     <line x1="6" x2="6" y1="20" y2="14" />
                  </svg>
               ),
               title: "Weekly Reports",
               description: "Visualize your productivity patterns with detailed weekly reports and insights",
               },
               {
               icon: (
                  <svg className="lucide lucide-zap h-12 w-12 text-violet-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                     <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                  </svg>
               ),
               title: "Session Tracking",
               description: "Track your work sessions and analyze your productivity trends over time",
               },
               {
               icon: (
                  <div className="relative">
                     <svg className="lucide lucide-sparkles h-12 w-12 text-violet-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                     <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                     <path d="M20 3v4" />
                     <path d="M22 5h-4" />
                     <path d="M4 17v2" />
                     <path d="M5 18H3" />
                     </svg>
                     <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1 rounded">Free</span>
                  </div>
               ),
               title: "AI Suggestions",
               description: "Get personalized productivity tips based on your work patterns",
               },
               {
               icon: (
                  <svg className="h-12 w-12 text-violet-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                     <rect width="18" height="18" x="3" y="3" rx="2" />
                     <path d="M4 11h16" />
                     <path d="M12 3v18" />
                  </svg>
               ),
               title: "Heatmap",
               description: "Visualize your productivity with color-coded heatmaps showing your most productive times",
               },
               {
               icon: (
                  <svg className="h-12 w-12 text-violet-500" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                     <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                     <circle cx="12" cy="12" r="3" />
                  </svg>
               ),
               title: "Cross-Device Sync",
               description: "Access your productivity data from any device with real-time synchronization",
               },
            ].map((feature, index) => (
               <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
               {feature.icon}
               <h3 className="text-xl font-bold">{feature.title}</h3>
               <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{feature.description}</p>
               </div>
            ))}
         </div>
         </div>
       </section>

       <section className="w-full py-12 md:py-24 lg:py-32 bg-violet-600 text-white">
         <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
               <div className="space-y-2">
               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Boost Your Productivity?
               </h2>
               <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                  Join thousands of users who have transformed their work habits with ZenTrack.
               </p>
               </div>
               <div className="flex flex-col gap-2 min-[400px]:flex-row">
               <a href="/signup">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 bg-white text-violet-600 hover:bg-gray-100">
                     Get Started for Free
                  </button>
               </a>
               </div>
            </div>
         </div>
      </section>


      {/* Footer */}
      <footer className="w-full border-t bg-background">
         <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
               <a className="flex items-center gap-2" href="/">
               <div className="relative h-6 w-6">
                  <svg
                     viewBox="0 0 40 40"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-full w-full"
                  >
                     <circle cx="20" cy="20" r="20" fill="url(#logo-gradient)"></circle>
                     <circle cx="20" cy="20" r="16" fill="white" className="dark:fill-gray-900"></circle>
                     <path
                     d="M20 10V20L26 26"
                     stroke="#8b5cf6"
                     strokeWidth="2.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="dark:stroke-violet-400"
                     ></path>
                     <circle cx="20" cy="8" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400"></circle>
                     <circle cx="26" cy="10" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400"></circle>
                     <circle cx="30" cy="16" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400"></circle>
                     <circle cx="32" cy="20" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400"></circle>
                     <circle cx="30" cy="26" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400"></circle>
                     <circle cx="26" cy="30" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400"></circle>
                     <circle cx="20" cy="32" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400"></circle>
                     <circle cx="14" cy="30" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400"></circle>
                     <circle cx="10" cy="26" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400"></circle>
                     <circle cx="8" cy="20" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400"></circle>
                     <circle cx="10" cy="14" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400"></circle>
                     <circle cx="14" cy="10" r="1.5" fill="#8b5cf6" className="dark:fill-violet-400"></circle>
                     <defs>
                     <linearGradient
                        id="logo-gradient"
                        x1="0"
                        y1="0"
                        x2="40"
                        y2="40"
                        gradientUnits="userSpaceOnUse"
                     >
                        <stop stopColor="#c4b5fd"></stop>
                        <stop offset="1" stopColor="#7c3aed"></stop>
                     </linearGradient>
                     </defs>
                  </svg>
               </div>
               <span className="text-sm font-bold">ZenTrack</span>
               </a>
               <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
               © 2025 ZenTrack. All rights reserved.
               </p>
            </div>
            <div className="flex gap-4">
               <a className="text-sm text-muted-foreground underline underline-offset-4" href="/terms">
               Terms
               </a>
               <a className="text-sm text-muted-foreground underline underline-offset-4" href="/privacy">
               Privacy
               </a>
               <a className="text-sm text-muted-foreground underline underline-offset-4" href="/contact">
               Contact
               </a>
            </div>
         </div>
      </footer>   
   </div>
  )
}

export default Home
