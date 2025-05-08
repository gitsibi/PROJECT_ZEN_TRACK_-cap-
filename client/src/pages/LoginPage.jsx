import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function LoginPage({ setUser }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // For confirm password visibility toggle

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const { email, password } = formData;

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        { email, password },
        { withCredentials: true }
      );

      const loggedInUser = response.data.user;
      setUser(loggedInUser);

      const profileCheckResponse = await axios.post(
        "http://localhost:5000/api/user/check-user-profile",
        { userId: loggedInUser._id },
        { withCredentials: true }
      );

      if (profileCheckResponse.data.profileComplete) {
        navigate('/dashboard');
      } else {
        navigate('/profilesetup', { state: { user: loggedInUser } });
      }

    } catch (error) {
      console.error(error);
      setError("Login failed, please check your credentials.");
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
      console.error(error);
      alert("Google Login Failed!");
    }
  };

  const handleGoogleFailure = (error) => {
    console.error(error);
    alert("Google Login Failed!");
  };

  return (
    <section className="min-h-screen dark:bg-black mt-3">
      <div className="flex justify-center mt-12">
        <h1 className="font-bold text-black text-3xl tracking-tighter dark:text-white">Welcome Back</h1>
      </div>
      <div className="flex justify-center mt-3 text-xl">
        <p className="text-gray-500 dark:text-gray-300 text-base">Enter your credentials to access your account</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white border-2 border-violet-200 py-8 px-4 shadow sm:rounded-lg sm:px-10 dark:border-gray-300">
          {error && <div className="text-red-500 text-center">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div>
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
                  hover:border-violet-500 focus:border-violet-500 focus:ring-2 outline-none dark:bg-gray-100 dark:border-gray-300"
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-black mt-7">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="block border-2 text-left pl-3 pr-10 rounded-lg border-violet-200 px-1 py-2 w-full mt-2 appearance-none bg-violet-100 
                  hover:border-violet-500 focus:border-violet-500 focus:ring-2 outline-none dark:bg-gray-100 dark:border-gray-300"
              />
              <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-10 right-3 cursor-pointer text-sm"
                  title="Toggle password visibility"
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
            </div>

            <button type="submit" className="w-full mt-9 py-2 px-4 bg-violet-500 text-white rounded-md hover:bg-violet-800 focus:border-violet-300 focus:ring-2 outline-none dark:bg-black dark:hover:bg-gray-800">
              Login 🚀
            </button>
          </form>

          <div className="flex items-center mt-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-4 text-xs text-violet-500 dark:text-red-600">OR CONTINUE WITH</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <div className='mb-5'></div>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
          />

          <p className="mt-4 text-center text-base text-black">
            Don't have an account?{" "}
            <span className="text-violet-500 hover:underline cursor-pointer dark:text-red-600" onClick={handleSignup}>
              Create new account 🌱
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
