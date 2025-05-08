import React from "react";

const Dashboard = () => {
  const hours = ["5 PM", "6 PM", "7 PM", "8 PM"];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Sample productivity data (levels 0–5)
  const productivity = {
    "5 PM": [5, 5, 5, 4, 3, 2, 1],
    "6 PM": [5, 5, 5, 4, 3, 2, 0],
    "7 PM": [4, 4, 3, 3, 2, 1, 0],
    "8 PM": [3, 3, 2, 2, 1, 0, 0],
  };

  const getBgClass = (level) => {
    const lightMode = [
      "bg-gray-100",    // 0 - None
      "bg-violet-100",  // 1 - Low
      "bg-violet-300",  // 2 - Medium
      "bg-violet-500",  // 3 - High
      "bg-violet-700",  // 4 - Very High
    ];
    const darkMode = [
      "dark:bg-gray-800",
      "dark:bg-violet-900",
      "dark:bg-violet-700",
      "dark:bg-violet-500",
      "dark:bg-violet-300",
    ];
    return `${lightMode[level] || ""} ${darkMode[level] || ""}`;
  };

  return (
  <main className="flex-1 md:ml-64">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="container mx-auto p-4 md:p-6">
            <div class="mb-6"><h1 class="text-2xl font-bold mb-2">Welcome back, sibishree2002!</h1>
            <p class="text-gray-500 dark:text-gray-400">Track your productivity and stay focused with ZenTrack.</p>
          </div>
          <div className="w-full max-w-4xl mx-auto mt-8 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
                Weekly Productivity Timeline
              </h2>
              <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                Hover over each block to see productivity level by hour
              </p>
            </div>
            <div className="col-span-1 row-span-1">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        {/* Header */}
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="text-2xl font-semibold leading-none tracking-tight">
            Pomodoro Timer
          </div>
          <div className="text-sm text-muted-foreground">
            Stay focused with timed work sessions and breaks
          </div>
        </div>

                {/* Timer Block */}
                <div className="p-6 flex flex-col items-center justify-center py-6">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full border-8 border-violet-100 dark:border-violet-900 flex items-center justify-center">
                      <span className="text-3xl font-bold">25:00</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      0 completed
                    </div>
                  </div>

                  {/* Dropdown */}
                  <button
                    type="button"
                    role="combobox"
                    aria-controls="radix-«r3»"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-full mb-4"
                  >
                    <span style={{ pointerEvents: "none" }}>Work (25 min)</span>
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
                      className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>

                  {/* Start and Reset Buttons */}
                  <div className="flex gap-2 w-full">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex-1">
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
                        className="lucide lucide-play mr-2 h-4 w-4"
                      >
                        <polygon points="6 3 20 12 6 21 6 3"></polygon>
                      </svg>
                      Start
                    </button>

                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
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
                        className="lucide lucide-rotate-ccw h-4 w-4"
                      >
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                        <path d="M3 3v5h5"></path>
                      </svg>
                      <span className="sr-only">Reset</span>
                    </button>
                  </div>
                </div>

                {/* Mark as Completed */}
                <div className="flex items-center p-6 pt-0">
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full text-green-600 hover:text-green-700 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-900/20"
                    disabled
                  >
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
                      className="lucide lucide-circle-check-big mr-2 h-4 w-4"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    Mark as Completed
                  </button>
                </div>
              </div>
            </div>
            

            <div class="col-span-1 row-span-1">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div class="flex flex-col space-y-1.5 p-6">
                <div class="text-2xl font-semibold leading-none tracking-tight">Weekly Stats</div>
                <div class="text-sm text-muted-foreground">Your productivity summary for this week</div>
              </div>

              <div class="p-6 pt-0">
                <div class="grid grid-cols-2 gap-4 mb-4">
                  <div class="rounded-lg border p-3 text-center">
                    <p class="text-sm text-muted-foreground">Total Sessions</p>
                    <p class="text-2xl font-bold">41</p>
                  </div>
                  <div class="rounded-lg border p-3 text-center">
                    <p class="text-sm text-muted-foreground">Total Time</p>
                    <p class="text-2xl font-bold">17h 5m</p>
                  </div>
                </div>

                <div class="h-[200px] w-full">
                  <canvas id="weeklyChart" class="w-full h-full"></canvas>
                </div>
              </div>
            </div>
          </div>
           



                  <div className="col-span-1 row-span-1">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                {/* Header */}
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="text-2xl font-semibold leading-none tracking-tight">Weekly Stats</div>
                  <div className="text-sm text-muted-foreground">Your productivity summary for this week</div>
                </div>

                {/* Stats */}
                <div className="p-6 pt-0">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="rounded-lg border p-3 text-center">
                      <p className="text-sm text-muted-foreground">Total Sessions</p>
                      <p className="text-2xl font-bold">41</p>
                    </div>
                    <div className="rounded-lg border p-3 text-center">
                      <p className="text-sm text-muted-foreground">Total Time</p>
                      <p className="text-2xl font-bold">17h 5m</p>
                    </div>
                  </div>

                  {/* Chart Area Placeholder */}
                  <div className="h-[200px] w-full">
                    <canvas id="weeklyChart" className="w-full h-full"></canvas>
                  </div>
                </div>
              </div>
            </div>
            

            <div className="col-span-1 row-span-1">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        {/* Header */}
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-semibold leading-none tracking-tight">AI Suggestions</div>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">
                Free
              </div>
            </div>
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
              className="lucide lucide-sparkles h-5 w-5 text-violet-500"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              <path d="M20 3v4" />
              <path d="M22 5h-4" />
              <path d="M4 17v2" />
              <path d="M5 18H3" />
            </svg>
          </div>
          <div className="text-sm text-muted-foreground">
            Personalized productivity tips based on your work patterns
          </div>
        </div>

        {/* Suggestions Area */}
        <div className="p-6 pt-0">
          <div className="space-y-4">
            <div className="rounded-lg border p-4 min-h-[100px] flex items-center">
              <div>
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-2">
                  Timing
                </div>
                <p>
                  You're most productive between 9-11 AM. Consider scheduling your most important tasks during this time window.
                </p>
              </div>
            </div>

            {/* Buttons for helpful/feedback */}
            <div className="flex justify-between">
              <div className="flex gap-2">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
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
                    className="lucide lucide-thumbs-up h-4 w-4 mr-1"
                  >
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
                  </svg>
                  Helpful
                </button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
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
                    className="lucide lucide-thumbs-down h-4 w-4 mr-1"
                  >
                    <path d="M17 14V2" />
                    <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
                  </svg>
                  Not Useful
                </button>
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
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
                  className="lucide lucide-refresh-cw h-4 w-4 mr-1"
                >
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5" />
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                  <path d="M8 16H3v5" />
                </svg>
                New Tip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      

    <div className="col-span-1 md:col-span-2 lg:col-span-3">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
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
            className="lucide lucide-quote h-6 w-6 text-violet-500 mb-4"
          >
            <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
          </svg>
          <p className="text-lg md:text-xl font-medium mb-2">
            The key is not to prioritize what's on your schedule, but to
            schedule your priorities.
          </p>
          <p className="text-sm text-muted-foreground text-right">
            — Stephen Covey
          </p>
        </div>
      </div>
    </div>

    <div className="col-span-1 md:col-span-2 lg:col-span-3">
       <div className="w-full">
           {/* Day Labels */}
           <div className="grid grid-cols-8 gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
              <div className="w-16 text-right pr-2">Hour</div>
              {days.map((day) => (
                <div key={day} className="text-center">
                  {day}
                </div>
              ))}
            </div>

            {/* Time Blocks */}
            <div className="space-y-1">
              {hours.map((hour) => (
                <div key={hour} className="grid grid-cols-8 gap-2 items-center">
                  <div className="w-16 text-sm text-right pr-2 text-gray-500 dark:text-gray-400">
                    {hour}
                  </div>
                  {productivity[hour].map((level, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-10 m-0.5 rounded hover:opacity-80 transition-opacity ${getBgClass(level)}`}
                      title={`${days[i]} at ${hour}: Productivity level ${level}`}
                    ></div>
                  ))}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
              <div className="text-xs text-muted-foreground">Productivity Level:</div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded bg-gray-100 dark:bg-gray-800"></div>
                <div className="text-xs text-muted-foreground">None</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded bg-violet-100 dark:bg-violet-900"></div>
                <div className="text-xs text-muted-foreground">Low</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded bg-violet-300 dark:bg-violet-700"></div>
                <div className="text-xs text-muted-foreground">Medium</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded bg-violet-500 dark:bg-violet-500"></div>
                <div className="text-xs text-muted-foreground">High</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded bg-violet-700 dark:bg-violet-300"></div>
                <div className="text-xs text-muted-foreground">Very High</div>
              </div>
            </div>
       </div>
    </div>
            
          </div>
        </div>
      </div>
    </div>
  </main>
  );
};

export default Dashboard;
