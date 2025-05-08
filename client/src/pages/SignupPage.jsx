import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

function SignupPage({ setUser }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    conformpassword: ''
  });

  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const { name, email, password, conformpassword } = formData;

    if (password !== conformpassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/signup",
        { name, email, password },
        { withCredentials: true }
      );

      const user = response.data.user;
      console.log("Signup successful:", response.data.message);
      setUser(user); 

      const profileCheckResponse = await axios.post(
        "http://localhost:5000/api/user/check-user-profile",
        { userId: user.id },
        { withCredentials: true }
      );

      if (profileCheckResponse.data.profileComplete) {
        navigate('/dashboard');
      } else {
        navigate('/profilesetup', { state: { user } });
      }
    } catch (error) {
      console.error("There was an error signing up!", error);
      setError("Signup failed. Please try again.");
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/google-login",
        { token: credentialResponse.credential },
        { withCredentials: true }
      );

      const user = response.data.user;
      console.log("Google Login Success:", user);
      alert("Google Login Successful!");
      setUser(user);

      const profileCheckResponse = await axios.post(
        "http://localhost:5000/api/user/check-user-profile",
        { userId: user.id },
        { withCredentials: true }
      );

      if (profileCheckResponse.data.profileComplete) {
        navigate('/dashboard');
      } else {
        navigate('/profilesetup', { state: { user } });
      }
    } catch (error) {
      console.error("Google Login Failed:", error);
      alert("Google Login Failed!");
    }
  };

  const handleGoogleFailure = (error) => {
    console.error(error);
    alert("Google Login Failed!");
  };

  return (
    <>
      <section className="min-h-screen dark:bg-black">
        <div className="flex justify-center mt-12">
          <h1 className="font-bold text-black text-3xl tracking-tighter dark:text-white">
            Create an account
          </h1>
        </div>
        <div className="flex justify-center mt-3 text-xl">
          <p className="text-gray-500 dark:text-gray-300 text-base">
            Enter your information to get started with ZenTrack
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white border-2 border-violet-200 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="block border-2 text-left pl-3 rounded-lg border-violet-200 px-1 py-2 w-full mt-2 appearance-none bg-violet-100 
                  hover:border-violet-500 focus:border-violet-500 focus:ring-2 outline-none dark:bg-gray-100 dark:border-gray-300 dark:hover:border-grey-500 focus:border-grey-500"                 
                />
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium text-black">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block border-2 text-left pl-3 rounded-lg border-violet-200 px-1 py-2 w-full mt-2 appearance-none bg-violet-100 
                  hover:border-violet-500 focus:border-violet-500 focus:ring-2 outline-none dark:bg-gray-100 dark:border-gray-300 dark:hover:border-grey-500 focus:border-grey-500"      
                />
              </div>

              <div className="mt-4 relative">
                <label htmlFor="password" className="block text-sm font-medium text-black">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block border-2 text-left pl-3 pr-10 rounded-lg border-violet-200 px-1 py-2 w-full mt-2 appearance-none bg-violet-100 
                      hover:border-violet-500 focus:border-violet-500 focus:ring-2 outline-none dark:bg-gray-100 dark:border-gray-300 dark:hover:border-grey-500 focus:border-grey-500" 
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-10 right-3 cursor-pointer text-sm"
                  title="Toggle password visibility"
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>

              <div className="mt-4 relative">
                <label htmlFor="conformpassword" className="block text-sm font-medium text-black">
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="conformpassword"
                  autoComplete="new-password"
                  required
                  value={formData.conformpassword}
                  onChange={handleChange}
                  className="block border-2 text-left pl-3 pr-10 rounded-lg border-violet-200 px-1 py-2 w-full mt-2 appearance-none bg-violet-100 
                      hover:border-violet-500 focus:border-violet-500 focus:ring-2 outline-none dark:bg-gray-100 dark:border-gray-300 dark:hover:border-grey-500 focus:border-grey-500" 
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-10 right-3 cursor-pointer text-sm"
                  title="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </span>
              </div>

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

              <button
                type="submit"
                className="w-full mt-6 py-2 px-4 bg-violet-500 text-white rounded-md hover:bg-violet-800 focus:border-violet-300 focus:ring-2 outline-none dark:bg-black"
              >
                Sign Up
              </button>
            </form>

            <div className="flex items-center mt-6">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="mx-4 text-xs text-violet-500 dark:text-red-600">OR CONTINUE WITH</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

                <div className='mb-5'></div>
                      {/* Google Login Button */}
                      <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={handleGoogleFailure}
                        useOneTap
                      />


            <p className="mt-4 text-center text-base text-black">
              Already have an account?{" "}
              <span
                className="text-violet-500 hover:underline cursor-pointer dark:text-red-600"
                onClick={() => navigate('/login')}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignupPage;
