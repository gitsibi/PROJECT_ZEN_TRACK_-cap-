import React from "react";

const Features = () => {
  return (
    <main className="flex-1 md:ml-64 dark:bg-black dark:text-white">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="container mx-auto p-4 md:p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">Features</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Discover all the powerful tools ZenTrack offers to help you
                master your productivity
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon="clock"
                title="Pomodoro Timer"
                description="Our customizable Pomodoro timer helps you work in focused intervals, typically 25 minutes, followed by short breaks. This technique has been proven to increase productivity and reduce burnout."
                features={[
                  "Customizable work and break durations",
                  "Audio notifications",
                  "Session tracking and logging",
                ]}
              />
              <FeatureCard
                icon="zap"
                title="Session Tracking"
                description="Keep track of all your work sessions, including duration, tasks completed, and productivity ratings. This data helps you understand your work patterns and improve over time."
                features={[
                  "Detailed session logs",
                  "Task categorization",
                  "Productivity self-rating",
                ]}
              />
              <FeatureCard
                icon="chart-no-axes-column"
                title="Weekly Reports"
                description="Visualize your productivity with detailed weekly reports. See your most productive days, average session length, and progress toward your goals."
                features={[
                  "Visual charts and graphs",
                  "Productivity trends",
                  "Exportable data",
                ]}
              />
              <FeatureCard
                icon="sparkles"
                title="AI Suggestions"
                description="Receive personalized productivity tips based on your work patterns. Our AI analyzes your data to provide actionable suggestions to help you improve."
                features={[
                  "Personalized recommendations",
                  "Pattern recognition and analysis",
                  "Actionable improvement tips",
                ]}
                freeTag="Free"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const FeatureCard = ({ icon, title, description, features, freeTag }) => {
  const icons = {
    clock: (
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
        className="lucide lucide-clock h-6 w-6 text-violet-600 dark:text-violet-300"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    zap: (
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
        className="lucide lucide-zap h-6 w-6 text-violet-600 dark:text-violet-300"
      >
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
      </svg>
    ),
    "chart-no-axes-column": (
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
        className="lucide lucide-chart-no-axes-column h-6 w-6 text-violet-600 dark:text-violet-300"
      >
        <line x1="18" x2="18" y1="20" y2="10"></line>
        <line x1="12" x2="12" y1="20" y2="4"></line>
        <line x1="6" x2="6" y1="20" y2="14"></line>
      </svg>
    ),
    sparkles: (
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
        className="lucide lucide-sparkles h-6 w-6 text-violet-600 dark:text-violet-300"
      >
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
        <path d="M20 3v4"></path>
        <path d="M22 5h-4"></path>
        <path d="M4 17v2"></path>
        <path d="M5 18H3"></path>
      </svg>
    ),
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900">
          {icons[icon]}
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
        {freeTag && (
          <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/20 dark:text-green-400 dark:ring-green-500/30">
            {freeTag}
          </span>
        )}
      </div>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
      <ul className="space-y-2 text-gray-500 dark:text-gray-400">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
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
              className="h-4 w-4 text-green-500"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
