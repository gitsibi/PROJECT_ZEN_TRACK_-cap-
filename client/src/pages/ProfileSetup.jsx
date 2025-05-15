


// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const ProfileSetup = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const user = state?.user;

//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add('dark');
//     } else {
//       document.body.classList.remove('dark');
//     }
//   }, [darkMode]);

//   const [formData, setFormData] = useState({
//     name: user?.name || '',
//     email: user?.email || '',
//     workType: '',
//     deviceUsed: '',
//     workHours: '',
//     breakInterval: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const profileData = {
//       userId: user?._id,
//       workType: formData.workType,
//       deviceUsed: formData.deviceUsed,
//       workHours: formData.workHours,
//       breakInterval: formData.breakInterval,
//     };

//     try {
//       await axios.post('http://localhost:5000/api/profile/profile', profileData, {
//         withCredentials: true,
//       });
//       alert('Profile saved successfully!');
//       navigate('/profile', { state: { user } });
//     } catch (err) {
//       console.error('Failed to save profile:', err);
//       alert('Failed to save profile.');
//     }
//   };

//   if (!user) {
//     return <div className="text-center p-4">User data not available. Please login again.</div>;
//   }

//   return (
//     <div className={`h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
//       <div className="absolute top-4 right-4">
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="text-2xl p-2 rounded-full transition"
//           title="Toggle Theme"
//         >
//           {darkMode ? '☀️' : '🌙'}
//         </button>
//       </div>

//       <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
//         <h2 className="text-2xl font-bold text-center mb-6 text-violet-600">Profile Setup</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name and Email - read-only */}
//           <div>
//             <label className="block font-bold mb-1 text-violet-700">Name:</label>
//             <input type="text" value={formData.name} readOnly className="w-full px-4 py-2 border rounded-md bg-gray-100" />
//           </div>

//           <div>
//             <label className="block font-bold mb-1 text-violet-700">Email:</label>
//             <input type="email" value={formData.email} readOnly className="w-full px-4 py-2 border rounded-md bg-gray-100" />
//           </div>

//           {/* Other fields */}
//           <div>
//             <label className="block font-bold mb-1 text-violet-700">Work Type:</label>
//             <select name="workType" value={formData.workType} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required>
//               <option value="">Choose your work type</option>
//               <option>Student</option>
//               <option>Freelancer</option>
//               <option>Employee</option>
//               <option>Other</option>
//             </select>
//           </div>

//           <div>
//             <label className="block font-bold mb-1 text-violet-700">Device Used:</label>
//             <select name="deviceUsed" value={formData.deviceUsed} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required>
//               <option value="">Choose your device</option>
//               <option>Web</option>
//               <option>Mobile</option>
//               <option>Laptop</option>
//               <option>Tab</option>
//             </select>
//           </div>

//           <div>
//             <label className="block font-bold mb-1 text-violet-700">Work Hours:</label>
//             <input type="number" name="workHours" value={formData.workHours} onChange={handleChange} min="0" required className="w-full px-4 py-2 border rounded-md" />
//           </div>

//           <div>
//             <label className="block font-bold mb-1 text-violet-700">Break Interval (in mins):</label>
//             <input type="number" name="breakInterval" value={formData.breakInterval} onChange={handleChange} min="0" required className="w-full px-4 py-2 border rounded-md" />
//           </div>

//           <button type="submit" className="w-full py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition">
//             Save Profile
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProfileSetup;


import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfileSetup = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const user = state?.user;

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    workType: '',
    deviceUsed: '',
    workHours: '',
    breakInterval: '',
  });

  // New states for Employee work timings and breaks
  const [workStartTime, setWorkStartTime] = useState('');
  const [workEndTime, setWorkEndTime] = useState('');
  const [breaks, setBreaks] = useState([{ start: '', end: '' }]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addBreak = () => {
    setBreaks((prev) => [...prev, { start: '', end: '' }]);
  };

  const handleBreakChange = (index, field, value) => {
    const newBreaks = [...breaks];
    newBreaks[index][field] = value;
    setBreaks(newBreaks);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const profileData = {
      userId: user?._id,
      workType: formData.workType,
      deviceUsed: formData.deviceUsed,
      workHours: formData.workHours,
      breakInterval: formData.breakInterval,
      ...(formData.workType === 'Employee' && {
        workStartTime,
        workEndTime,
        breakTimings: breaks,
      }),
    };

    try {
      await axios.post('http://localhost:5000/api/profile/profile', profileData, {
        withCredentials: true,
      });
      alert('Profile saved successfully!');
      navigate('/profile', { state: { user } });
    } catch (err) {
      console.error('Failed to save profile:', err);
      alert('Failed to save profile.');
    }
  };

  if (!user) {
    return <div className="text-center p-4">User data not available. Please login again.</div>;
  }

  return (
    <div className={`h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-2xl p-2 rounded-full transition"
          title="Toggle Theme"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-violet-600">Profile Setup</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name and Email - read-only */}
          <div>
            <label className="block font-bold mb-1 text-violet-700">Name:</label>
            <input type="text" value={formData.name} readOnly className="w-full px-4 py-2 border rounded-md bg-gray-100" />
          </div>

          <div>
            <label className="block font-bold mb-1 text-violet-700">Email:</label>
            <input type="email" value={formData.email} readOnly className="w-full px-4 py-2 border rounded-md bg-gray-100" />
          </div>

          {/* Other fields */}
          <div>
            <label className="block font-bold mb-1 text-violet-700">Work Type:</label>
            <select name="workType" value={formData.workType} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required>
              <option value="">Choose your work type</option>
              <option>Student</option>
              <option>Freelancer</option>
              <option>Employee</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block font-bold mb-1 text-violet-700">Device Used:</label>
            <select name="deviceUsed" value={formData.deviceUsed} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" required>
              <option value="">Choose your device</option>
              <option>Web</option>
              <option>Mobile</option>
              <option>Laptop</option>
              <option>Tab</option>
            </select>
          </div>

          <div>
            <label className="block font-bold mb-1 text-violet-700">Work Hours:</label>
            <input type="number" name="workHours" value={formData.workHours} onChange={handleChange} min="0" required className="w-full px-4 py-2 border rounded-md" />
          </div>

          <div>
            <label className="block font-bold mb-1 text-violet-700">Break Interval (in mins):</label>
            <input type="number" name="breakInterval" value={formData.breakInterval} onChange={handleChange} min="0" required className="w-full px-4 py-2 border rounded-md" />
          </div>

          {/* Conditional fields for Employee */}
          {formData.workType === 'Employee' && (
            <>
              <div>
                <label className="block font-bold mb-1 text-violet-700">Work Start Time:</label>
                <input
                  type="time"
                  value={workStartTime}
                  onChange={(e) => setWorkStartTime(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block font-bold mb-1 text-violet-700">Work End Time:</label>
                <input
                  type="time"
                  value={workEndTime}
                  onChange={(e) => setWorkEndTime(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block font-bold mb-1 text-violet-700">Break Timings:</label>
                {breaks.map((brk, idx) => (
                  <div key={idx} className="flex space-x-2 mb-2">
                    <input
                      type="time"
                      value={brk.start}
                      onChange={(e) => handleBreakChange(idx, 'start', e.target.value)}
                      required
                      className="w-1/2 px-4 py-2 border rounded-md"
                      placeholder="Break start"
                    />
                    <input
                      type="time"
                      value={brk.end}
                      onChange={(e) => handleBreakChange(idx, 'end', e.target.value)}
                      required
                      className="w-1/2 px-4 py-2 border rounded-md"
                      placeholder="Break end"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addBreak}
                  className="px-4 py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition"
                >
                  + Add Break
                </button>
              </div>
            </>
          )}

          <button type="submit" className="w-full py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition">
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetup;
