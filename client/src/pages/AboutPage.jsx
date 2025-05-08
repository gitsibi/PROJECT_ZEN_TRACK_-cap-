import React from 'react';

const AboutPage = () => {
  return (
    <main className="flex-1 md:ml-64 dark:bg-black dark:text-white">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="container mx-auto p-4 md:p-6">
            {/* About Section */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">About ZenTrack</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Our mission is to help you achieve your productivity goals
              </p>
            </div>
            <div className="mx-auto max-w-3xl space-y-8">
              {/* Mission Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  At ZenTrack, we believe that productivity isn't just about working harder—it's about working smarter. Our mission is to provide tools that help you understand your work patterns, optimize your focus time, and achieve a healthier work-life balance.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  We created ZenTrack to make productivity tracking accessible, insightful, and actionable. By combining proven techniques like the Pomodoro method with data visualization and AI-powered insights, we help you take control of your time and maximize your potential.
                </p>
              </div>
              {/* Benefits Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Benefits of Productivity Tracking</h2>
                <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-green-500 mt-0.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span><strong>Increased Focus:</strong> The Pomodoro technique helps you maintain concentration and avoid burnout.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-green-500 mt-0.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span><strong>Data-Driven Insights:</strong> Visualize your productivity patterns to identify when you're most effective.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-green-500 mt-0.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span><strong>Goal Achievement:</strong> Track your progress and stay motivated as you work toward your objectives.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-green-500 mt-0.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span><strong>Work-Life Balance:</strong> Establish healthier work habits and prevent overworking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-green-500 mt-0.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span><strong>Continuous Improvement:</strong> Use AI-powered suggestions to refine your approach over time.</span>
                  </li>
                </ul>
              </div>
              {/* Commitment Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Commitment</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  ZenTrack is committed to providing a high-quality productivity tool that's accessible to everyone. That's why our core features are free for all users, with only advanced AI features available as premium options.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  We believe in transparency, data privacy, and user-centered design. Your productivity data belongs to you, and we're dedicated to creating a tool that adapts to your needs, not the other way around.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
