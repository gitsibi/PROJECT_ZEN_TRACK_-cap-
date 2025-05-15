// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Profile = ({ user }) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const locationUser = location.state?.user;
//   const effectiveUser = user || locationUser;

//   const [darkMode, setDarkMode] = useState(false);
//   const [editMode, setEditMode] = useState(false);

//   const [formData, setFormData] = useState({
//     name: effectiveUser?.name || '',
//     email: effectiveUser?.email || '',
//     workType: '',
//     deviceUsed: '',
//     workHours: '',
//     breakInterval: '',
//   });

//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add('dark');
//     } else {
//       document.body.classList.remove('dark');
//     }
//   }, [darkMode]);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       if (effectiveUser?._id) {
//         try {
//           const res = await axios.get(`http://localhost:5000/api/profile/profile/${effectiveUser._id}`, {
//             withCredentials: true,
//           });
//           if (res.data.profile) {
//             setFormData({
//               name: effectiveUser.name,
//               email: effectiveUser.email,
//               workType: res.data.profile.workType,
//               deviceUsed: res.data.profile.deviceUsed,
//               workHours: res.data.profile.workHours,
//               breakInterval: res.data.profile.breakInterval,
//             });
//           }
//         } catch (err) {
//           console.error('Failed to fetch profile:', err);
//         }
//       }
//     };

//     fetchProfile();
//   }, [effectiveUser]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const profileData = {
//       userId: effectiveUser._id,
//       workType: formData.workType,
//       deviceUsed: formData.deviceUsed,
//       workHours: formData.workHours,
//       breakInterval: formData.breakInterval,
//     };

//     try {
//       await axios.put(`http://localhost:5000/api/profile/profile/${effectiveUser._id}`, profileData, {
//         withCredentials: true,
//       });
//       alert('Profile updated successfully!');
//       setEditMode(false);
//     } catch (err) {
//       console.error('Failed to update profile:', err);
//       alert('Failed to update profile.');
//     }
//   };

//   if (!effectiveUser) {
//     return <div className="text-center p-4">User not found. Please login again.</div>;
//   }

//   return (
//     <div className={`min-h-screen flex items-center overflow-auto justify-center ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
//       {/* Toggle Button */}
//       <div className="absolute top-4 right-4">
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="text-2xl p-2 rounded-full transition"
//           title="Toggle Theme"
//         >
//           {darkMode ? '☀️' : '🌙'}
//         </button>
//       </div>

//       {/* Card Container */}
//       <div className="w-full max-w-4xl p-6 border-2 border-violet-500 rounded-lg shadow-2xl bg-violet-100 dark:bg-gray-800">
//         <div className="flex justify-between items-center mb-6">
//           {/* Profile Image */}
//           <div className="flex items-center">
//             <img
//               src={user.profilePic}
//               alt="Profile"
//               className="w-20 h-20 rounded-full border-2 border-violet-800 object-cover"
//             />
//             <div className="ml-4">
//               <h2 className="text-2xl font-bold text-violet-700 dark:text-white">
//                 {editMode ? '' : ''}
//               </h2>
//               <p className="text-2xl font-bold mr-5 text-black dark:text-gray-300">{effectiveUser?.name}</p>
//               <p className='ml-3 text-gray-600'>{formData.workType}</p>
//             </div>
//           </div>

//           {/* Edit Button */}
//           {!editMode && (
//             <button
//               onClick={() => setEditMode(true)}
//               className="px-6 py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition"
//             >
//               Edit
//             </button>
//           )}
//         </div>

//         {/* Form Mode */}
//         {editMode ? (
          
//           <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900 overflow-auto">
//               {/* Left Side Image */}
//               <div className="w-full md:w-1/2 h-64 md:h-auto">
//                 <img
//                   src="/images/profilesetup1.jpg"
//                   alt="Background"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Right Side Form */}
//               <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-violet-200">
//                 <form onSubmit={handleUpdate} className="space-y-4 w-full max-w-md ">
//                   {/* All form fields as you already wrote */}
//                   <div>
//                     <label className="block font-semibold mb-1 text-violet-700 dark:text-white">Name:</label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       readOnly
//                       className="w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
//                     />
//                   </div>
//                   {/* Repeat for the rest of the form fields */}
//                   <div>
//                     <label className="block font-semibold mb-1 text-violet-700 dark:text-white">Email:</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       readOnly
//                       className="w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
//                     />
//                   </div>

//                   <div>
//                     <label className="block font-semibold mb-1 text-violet-700 dark:text-white">Work Type:</label>
//                     <select
//                       name="workType"
//                       value={formData.workType}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
//                       required
//                     >
//                       <option value="">Choose your work type</option>
//                       <option>Student</option>
//                       <option>Freelancer</option>
//                       <option>Employee</option>
//                       <option>Other</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block font-semibold mb-1 text-violet-700 dark:text-white">Device Used:</label>
//                     <select
//                       name="deviceUsed"
//                       value={formData.deviceUsed}
//                       onChange={handleChange}
//                       className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
//                       required
//                     >
//                       <option value="">Choose your device</option>
//                       <option>Web</option>
//                       <option>Mobile</option>
//                       <option>Laptop</option>
//                       <option>Tab</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block font-semibold mb-1 text-violet-700 dark:text-white">Work Hours per Day:</label>
//                     <input
//                       type="number"
//                       name="workHours"
//                       value={formData.workHours}
//                       onChange={handleChange}
//                       min="0"
//                       className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="block font-semibold mb-1 text-violet-700 dark:text-white">Break Interval (in mins):</label>
//                     <input
//                       type="number"
//                       name="breakInterval"
//                       value={formData.breakInterval}
//                       onChange={handleChange}
//                       min="0"
//                       className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
//                       required
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full py-2 mt-4 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition"
//                   >
//                     Update
//                   </button>
//                 </form>
//               </div>
//         </div>


//         ) : (
//           // Display Mode
//           <div className="space-y-4 text-lg ml-5 text-gray-600 dark:text-white">
//             <p><strong className='text-black'>Work Type:</strong> {formData.workType}</p>
//             <p><strong className='text-black'>Device Used:</strong> {formData.deviceUsed}</p>
//             <p><strong className='text-black'>Work Hours per Day:</strong> {formData.workHours}</p>
//             <p><strong className='text-black'>Break Interval (in mins):</strong> {formData.breakInterval}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = ({ user }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationUser = location.state?.user;
  const effectiveUser = user || locationUser;

  const [darkMode, setDarkMode] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [formData, setFormData] = useState({
    name: effectiveUser?.name || '',
    email: effectiveUser?.email || '',
    workType: '',
    deviceUsed: '',
    workHours: '',
    breakInterval: '',
    workStartTime: '',
    workEndTime: '',
    breakTimings: '',
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const fetchProfile = async () => {
      if (effectiveUser?._id) {
        try {
          const res = await axios.get(`http://localhost:5000/api/profile/profile/${effectiveUser._id}`, {
            withCredentials: true,
          });
          if (res.data.profile) {
            setFormData({
              name: effectiveUser.name,
              email: effectiveUser.email,
              workType: res.data.profile.workType || '',
              deviceUsed: res.data.profile.deviceUsed || '',
              workHours: res.data.profile.workHours || '',
              breakInterval: res.data.profile.breakInterval || '',
              workStartTime: res.data.profile.workStartTime || '',
              workEndTime: res.data.profile.workEndTime || '',
              breakTimings: res.data.profile.breakTimings || '',
            });
          }
        } catch (err) {
          console.error('Failed to fetch profile:', err);
        }
      }
    };

    fetchProfile();
  }, [effectiveUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const profileData = {
      userId: effectiveUser._id,
      workType: formData.workType,
      deviceUsed: formData.deviceUsed,
      workHours: formData.workHours,
      breakInterval: formData.breakInterval,
      workStartTime: formData.workStartTime,
      workEndTime: formData.workEndTime,
      breakTimings: formData.breakTimings,
    };

    try {
      await axios.put(`http://localhost:5000/api/profile/profile/${effectiveUser._id}`, profileData, {
        withCredentials: true,
      });
      alert('Profile updated successfully!');
      setEditMode(false);
    } catch (err) {
      console.error('Failed to update profile:', err);
      alert('Failed to update profile.');
    }
  };

    const formattedBreaks = Array.isArray(formData.breakTimings)
  ? formData.breakTimings.map(b => `${b.start} - ${b.end}`).join(' , ')
  : '';

    
  if (!effectiveUser) {
    return <div className="text-center p-4">User not found. Please login again.</div>;
  }

  return (
    <div className={`min-h-screen flex items-center overflow-auto justify-center ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-2xl p-2 rounded-full transition"
          title="Toggle Theme"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="w-full max-w-4xl p-6 border-2 border-violet-500 rounded-lg shadow-2xl bg-violet-100 dark:bg-gray-800">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <img
              src={user.profilePic}
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-violet-800 object-cover"
            />
            <div className="ml-4">
              <p className="text-2xl font-bold text-black dark:text-white">{effectiveUser?.name}</p>
              <p className="ml-1 text-gray-600 dark:text-gray-400">{formData.workType}</p>
            </div>
          </div>

          {!editMode && (
            <button
              onClick={() => setEditMode(true)}
              className="px-6 py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition"
            >
              Edit
            </button>
          )}
        </div>

        {editMode ? (
          <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900 overflow-auto">
            <div className="w-full md:w-1/2 h-64 md:h-auto">
              <img
                src="/images/profilesetup1.jpg"
                alt="Background"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-violet-200">
              <form onSubmit={handleUpdate} className="space-y-4 w-full max-w-md">
                <div>
                  <label className="block font-semibold mb-1 text-violet-700 dark:text-white">Name:</label>
                  <input type="text" name="name" value={formData.name} readOnly className="w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white" />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-violet-700 dark:text-white">Email:</label>
                  <input type="email" name="email" value={formData.email} readOnly className="w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white" />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-violet-700 dark:text-white">Work Type:</label>
                  <select name="workType" value={formData.workType} onChange={handleChange} className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white" required>
                    <option value="">Choose your work type</option>
                    <option>Student</option>
                    <option>Freelancer</option>
                    <option>Employee</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-violet-700 dark:text-white">Device Used:</label>
                  <select name="deviceUsed" value={formData.deviceUsed} onChange={handleChange} className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white" required>
                    <option value="">Choose your device</option>
                    <option>Web</option>
                    <option>Mobile</option>
                    <option>Laptop</option>
                    <option>Tab</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-violet-700 dark:text-white">Work Hours per Day:</label>
                  <input type="number" name="workHours" value={formData.workHours} onChange={handleChange} min="0" className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white" required />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-violet-700 dark:text-white">Break Interval (in mins):</label>
                  <input type="number" name="breakInterval" value={formData.breakInterval} onChange={handleChange} min="0" className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white" required />
                </div>

                {formData.workType === 'Employee' && (
                  <>
                    <div>
                      <label className="block font-semibold mb-1 text-violet-700 dark:text-white">Work Start Time:</label>
                      <input type="time" name="workStartTime" value={formData.workStartTime} onChange={handleChange} className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white" />
                    </div>

                    <div>
                      <label className="block font-semibold mb-1 text-violet-700 dark:text-white">Work End Time:</label>
                      <input type="time" name="workEndTime" value={formData.workEndTime} onChange={handleChange} className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white" />
                    </div>

                    <div>
                      <label className="block font-semibold mb-1 text-violet-700 dark:text-white">Break Timings:</label>
                      <input type="text" name="breakTimings" value={formattedBreaks} onChange={handleChange} placeholder="e.g., 1:00 PM - 1:30 PM" className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white" />
                    </div>
                  </>
                )}

                <button type="submit" className="w-full py-2 mt-4 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition">
                  Update
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="space-y-4 text-lg ml-5 text-gray-600 dark:text-white">
            <p><strong className="text-black">Work Type:</strong> {formData.workType}</p>
            <p><strong className="text-black">Device Used:</strong> {formData.deviceUsed}</p>
            <p><strong className="text-black">Work Hours per Day:</strong> {formData.workHours}</p>
            <p><strong className="text-black">Break Interval (in mins):</strong> {formData.breakInterval}</p>
            {formData.workType === 'Employee' && (
              <>
                <p><strong className="text-black">Work Start Time:</strong> {formData.workStartTime}</p>
                <p><strong className="text-black">Work End Time:</strong> {formData.workEndTime}</p>
                <p><strong className="text-black">Break Timings:</strong> {formattedBreaks}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
