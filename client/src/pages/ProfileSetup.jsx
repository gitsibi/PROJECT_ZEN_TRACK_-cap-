import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfileSetup = () => {
  const { state } = useLocation();  
  const navigate = useNavigate();
  
  const user = state?.user;  

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    workType: '',
    deviceUsed: '',
    workHours: '',
    breakInterval: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const profileData = {
      userId: user?._id,  
      workType: formData.workType,
      deviceUsed: formData.deviceUsed,
      workHours: formData.workHours,
      breakInterval: formData.breakInterval,
    };

    try {
      await axios.post('http://localhost:5000/api/profile/profile', profileData, {
        withCredentials: true,
      });
      alert('Profile saved successfully!');
      navigate('/dashboard');
    } catch (err) {
      console.error('Profile save failed:', err);
      alert('Failed to save profile!');
    }
  };

  if (!user) {
    return <div>User not found. Please login again.</div>;
  }

  return (
    <div className="h-screen flex items-center justify-center bg-violet-500">
      <div className="w-full max-w-6xl h-[90vh] border-2 border-violet-300 rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-full">
          <img
            src="/images/profilesetup1.jpg"
            alt="Profile Setup"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="w-full md:w-1/2 h-full overflow-auto p-10 bg-violet-200">
          <h2 className="text-2xl font-bold text-center mb-6 text-violet-700">
            Complete Your Profile
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name (readonly) */}
            <div>
              <label className="block text-violet-700 font-bold mb-1">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-100 text-black"
              />
            </div>

            {/* Email (readonly) */}
            <div>
              <label className="block text-violet-700 font-bold mb-1">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                readOnly
                className="w-full px-4 py-2 border rounded-md bg-gray-100 text-black"
              />
            </div>

            {/* Work Type */}
            <div>
              <label className="block text-violet-700 font-bold mb-1">Work Type:</label>
              <select
                name="workType"
                value={formData.workType}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md bg-white mt-2 
                  ${formData.workType === "" ? "text-gray-400" : "text-black"}`}
                required
              >
                <option value="">Choose your work type</option>
                <option>Student</option>
                <option>Freelancer</option>
                <option>Employee</option>
                <option>Other</option>
              </select>
            </div>

            {/* Device Used */}
            <div>
              <label className="block text-violet-700 font-bold mb-1">Device Used:</label>
              <select
                name="deviceUsed"
                value={formData.deviceUsed}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md bg-white mt-2 
                  ${formData.deviceUsed === "" ? "text-gray-400" : "text-black"}`}
                required
              >
                <option value="">Choose your device</option>
                <option>Web</option>
                <option>Mobile</option>
                <option>Laptop</option>
                <option>Tab</option>
              </select>
            </div>

            {/* Work Hours */}
            <div>
              <label className="block text-violet-700 font-bold mb-1">Work Hours per Day:</label>
              <input
                type="number"
                name="workHours"
                value={formData.workHours}
                onChange={handleChange}
                placeholder="Enter your working hours"
                className="w-full px-4 py-2 border rounded-md bg-white text-black mt-2"
                min="0"
                required
              />
            </div>

            {/* Break Interval */}
            <div>
              <label className="block text-violet-700 font-bold mb-1">Break Interval (in mins):</label>
              <input
                type="number"
                name="breakInterval"
                value={formData.breakInterval}
                onChange={handleChange}
                placeholder="Enter your break timing"
                className="w-full px-4 py-2 border rounded-md bg-white text-black mt-2"
                min="0"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition"
            >
              Save Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
