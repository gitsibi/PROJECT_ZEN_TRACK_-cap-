
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const ProfileSetup = ({ user }) => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: user.name || '',
//     email: user.email || '',
//     workType: user.workType || '' ,
//     deviceUsed: user.deviceUsed || '' ,
//     workHours: user.workHours ,
//     breakInterval: user.breakInterval,
//   });

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const res = await axios.get('http://localhost:5000/api/user/profile', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (res.data && res.data.user) {
//           setFormData((prev) => ({
//             ...prev,
//             name: res.data.user.name || prev.name,
//             email: res.data.user.email || prev.email,
//             workType: res.data.user.workType || prev.workType,
//             deviceUsed: res.data.user.deviceUsed || prev.deviceUsed,
//             workHours: res.data.user.workHours || prev.workHours,
//             breakInterval: res.data.user.breakInterval || prev.breakInterval,
//           }));
//         }

//         setLoading(false);
//       } catch (err) {
//         console.error('Failed to fetch user data', err);
//       }
//     };

//     fetchData();
//   }, [user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');

//     try {
//       await axios.put(
//         'http://localhost:5000/api/user/setup-profile',
//         { ...formData },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert('Profile setup successful!');
//       navigate('/dashboard');
//     } catch (err) {
//       console.error('Error updating profile', err);
//       alert('Profile setup failed!');
//     }
//   };

//   if (loading) return <p className="text-center text-gray-500 mt-8">Loading...</p>;

//   return (
//     // <div className="flex max-w-4xl mx-auto mt-10 bg-violet-100 shadow-lg rounded-xl overflow-hidden">
//     //   {/* Image Section */}
//     //   <div className="w-1/2 hidden md:block">
//     //     <img
//     //       src="/images/profilesetup2.jpg"
//     //       alt="Profile Setup"
//     //       className="object-cover object-center "
//     //               />
//     //   </div>

//     //   {/* Form Section */}
//     //   <div className="w-full md:w-1/2 p-10 bg-violet-200">
//     //     <h1 className="text-lg font-semibold mb-2">Hello, {formData.name}</h1>
//     //     <h2 className="text-2xl font-bold text-center mb-6 text-violet-700">Complete Your Profile</h2>
//     //     <form onSubmit={handleSubmit} className="space-y-4">
//     //       <div>
//     //         <label className="block text-gray-700 font-medium mb-1">Name:</label>
//     //         <input
//     //           type="text"
//     //           name="name"
//     //           value={formData.name}
//     //           onChange={handleChange}
//     //           className="w-full px-4 py-2 border rounded-md"
//     //           required
//     //         />
//     //       </div>
//     //       <div>
//     //         <label className="block text-gray-700 font-medium mb-1">Email:</label>
//     //         <input
//     //           type="email"
//     //           name="email"
//     //           value={formData.email}
//     //           onChange={handleChange}
//     //           className="w-full px-4 py-2 border rounded-md"
//     //           required
//     //         />
//     //       </div>
//     //       <div>
//     //         <label className="block text-gray-700 font-medium mb-1">Work Type:</label>
//     //         <select
//     //           name="workType"
//     //           value={formData.workType}
//     //           onChange={handleChange}
//     //           className="w-full px-4 py-2 border rounded-md"
//     //         >
//     //           <option>Student</option>
//     //           <option>Freelancer</option>
//     //           <option>Employee</option>
//     //           <option>Other</option>
//     //         </select>
//     //       </div>
//     //       <div>
//     //         <label className="block text-gray-700 font-medium mb-1">Device Used:</label>
//     //         <select
//     //           name="deviceUsed"
//     //           value={formData.deviceUsed}
//     //           onChange={handleChange}
//     //           className="w-full px-4 py-2 border rounded-md"
//     //         >
//     //           <option>Web</option>
//     //           <option>Mobile</option>
//     //           <option>Laptop</option>
//     //         </select>
//     //       </div>
//     //       <div>
//     //         <label className="block text-gray-700 font-medium mb-1">Work Hours per Day:</label>
//     //         <input
//     //           type="number"
//     //           name="workHours"
//     //           value={formData.workHours}
//     //           onChange={handleChange}
//     //           className="w-full px-4 py-2 border rounded-md"
//     //           min="0"
//     //           required
//     //         />
//     //       </div>
//     //       <div>
//     //         <label className="block text-gray-700 font-medium mb-1">Break Interval (in mins):</label>
//     //         <input
//     //           type="number"
//     //           name="breakInterval"
//     //           value={formData.breakInterval}
//     //           onChange={handleChange}
//     //           className="w-full px-4 py-2 border rounded-md"
//     //           min="0"
//     //           required
//     //         />
//     //       </div>
//     //       <button
//     //         type="submit"
//     //         className="w-full py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition"
//     //       >
//     //         Save Profile
//     //       </button>
//     //     </form>
//     //   </div>
//     // </div>

// <div className="h-screen flex items-center justify-center bg-violet-500">
//   <div className="w-full max-w-6xl h-[90vh] border-2 border-violet-300 rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row">
    
//     <div className="w-full md:w-1/2 h-full">
//       <img
//         src="/images/profilesetup1.jpg"
//         alt="Profile Setup"
//         className="w-full h-full object-cover object-center"
//       />
//     </div>

//     <div className="w-full md:w-1/2 h-full overflow-auto p-10 bg-violet-200">
//       <h1 className="text-lg text-center text-pink-600 font-semibold mb-2">Hello, {formData.name}</h1>
//       <h2 className="text-2xl font-bold text-center mb-6 text-violet-700">Complete Your Profile</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-violet-700 font-bold mb-1">Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-md block  text-left pl-3  bg-white  mt-2 appearance-none 
//                   hover:border-violet-500 focus:border-violet-500 focus:ring-2 outline-none dark:bg-gray-100 dark:border-gray-300 dark:hover:border-grey-500 focus:border-grey-500"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-violet-700 font-bold mb-1">Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-md block  text-left pl-3  bg-white  mt-2 appearance-none 
//                   hover:border-violet-500 focus:border-violet-500 focus:ring-2 outline-none dark:bg-gray-100 dark:border-gray-300 dark:hover:border-grey-500 focus:border-grey-500"
//             required
//           />
//         </div>
//         {/* <div>
//           <label className="block text-violet-700 font-bold mb-1">Work Type:</label>
//           <select
//             name="workType"
//             value={formData.workType}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-md block  text-left pl-3  bg-white  mt-2 appearance-none 
//                   hover:border-violet-500 focus:border-violet-500 focus:ring-2 outline-none dark:bg-gray-100 dark:border-gray-300 dark:hover:border-grey-500 focus:border-grey-500"
            
//           >
//             <option value=""  >
//               Choose your work type
//             </option>
//             <option>Student</option>
//             <option>Freelancer</option>
//             <option>Employee</option>
//             <option>Other</option>
//           </select>
//         </div> */}
        
//         <div>
//           <label className="block text-violet-700 font-bold mb-1">Work Type:</label>
//           <select
//             name="workType"
//             value={formData.workType}
//             onChange={handleChange}
//             className={`w-full px-4 py-2 border rounded-md block text-left pl-3 bg-white mt-2 appearance-none 
//                         hover:border-violet-500 focus:border-violet-500 focus:ring-2 outline-none
//                         dark:bg-gray-100 dark:border-gray-300 dark:hover:border-grey-500 focus:border-grey-500 
//                         ${formData.workType === "" ? "text-gray-400" : "text-black"}`}
//             required
//           >
//             <option value="" disabled>
//               Choose your work type
//             </option>
//             <option>Student</option>
//             <option>Freelancer</option>
//             <option>Employee</option>
//             <option>Other</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-violet-700 font-bold mb-1">Device Used:</label>
//           <select
//             name="deviceUsed"
//             value={formData.deviceUsed}
//             onChange={handleChange}
//             className={`w-full px-4 py-2 border rounded-md block text-left pl-3 bg-white mt-2 appearance-none 
//               hover:border-violet-500 focus:border-violet-500 focus:ring-2 outline-none
//               dark:bg-gray-100 dark:border-gray-300 dark:hover:border-grey-500 focus:border-grey-500 
//               ${formData.deviceUsed === "" ? "text-gray-400" : "text-black"}`}
//               required
// >            
//             <option value="" >
//               Choose your device
//             </option>
//             <option>Web</option>
//             <option>Mobile</option>
//             <option>Laptop</option>
//             <option>Tab</option>
//           </select>
//         </div>
//         <div>
//           <label className="block text-violet-700 font-bold mb-1">Work Hours per Day:</label>
//           <input
//             type="number"
//             name="workHours"
//             value={formData.workHours}
//             onChange={handleChange}
//             placeholder='Enter you working hours'
//             className="w-full px-4 py-2 border rounded-md block  text-left pl-3  bg-white  mt-2 appearance-none 
//                   hover:border-violet-500 focus:border-violet-500 focus:ring-2 outline-none dark:bg-gray-100 dark:border-gray-300 dark:hover:border-grey-500 focus:border-grey-500"
//             min="0"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-violet-700 font-bold mb-1">Break Interval (in mins):</label>
//           <input
//             type="number"
//             name="breakInterval"
//             value={formData.breakInterval}
//             onChange={handleChange}
//             placeholder='Enter you break timing'
//             className="w-full px-4 py-2 border rounded-md"
//             min="0"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full py-2 mt-4 bg-violet-600 text-yellow-50 rounded-md hover:bg-violet-600 transition"
//         >
//           Save Profile
//         </button>
//       </form>
//     </div>
//   </div>
// </div>


//   );
// };

// export default ProfileSetup;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfileSetup = ({ user }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    workType: user?.workType || '',
    deviceUsed: user?.deviceUsed || '',
    workHours: user?.workHours || '',
    breakInterval: user?.breakInterval || '',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/user/profile', {
          withCredentials: true,
        });

        if (res.data?.user) {
          setFormData((prev) => ({
            ...prev,
            name: res.data.user.name || prev.name,
            email: res.data.user.email || prev.email,
            workType: res.data.user.workType || prev.workType,
            deviceUsed: res.data.user.deviceUsed || prev.deviceUsed,
            workHours: res.data.user.workHours || prev.workHours,
            breakInterval: res.data.user.breakInterval || prev.breakInterval,
          }));
        }
      } catch (err) {
        console.error('Failed to fetch user data', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        'http://localhost:5000/api/user/setup-profile',
        formData,
        {
          withCredentials: true, // ensures cookies (with token) are sent
        }
      );

      alert('Profile setup successful!');
      navigate('/dashboard');
    } catch (err) {
      console.error('Error updating profile', err);
      alert('Profile setup failed!');
    }
  };

  if (loading) return <p className="text-center mt-8 text-gray-500">Loading...</p>;

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
          <h1 className="text-lg text-center text-pink-600 font-semibold mb-2">
            Hello, {formData.name}
          </h1>
          <h2 className="text-2xl font-bold text-center mb-6 text-violet-700">
            Complete Your Profile
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-violet-700 font-bold mb-1">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md bg-white outline-none hover:border-violet-500 focus:border-violet-500 focus:ring-2"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-violet-700 font-bold mb-1">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md bg-white outline-none hover:border-violet-500 focus:border-violet-500 focus:ring-2"
                required
              />
            </div>

            {/* Work Type */}
            <div>
              <label className="block text-violet-700 font-bold mb-1">Work Type:</label>
              <select
                name="workType"
                value={formData.workType}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md bg-white outline-none mt-2 appearance-none hover:border-violet-500 focus:border-violet-500 focus:ring-2 ${
                  formData.workType === '' ? 'text-gray-400' : 'text-black'
                }`}
                required
              >
                <option value="" disabled>
                  Choose your work type
                </option>
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
                className={`w-full px-4 py-2 border rounded-md bg-white outline-none mt-2 appearance-none hover:border-violet-500 focus:border-violet-500 focus:ring-2 ${
                  formData.deviceUsed === '' ? 'text-gray-400' : 'text-black'
                }`}
                required
              >
                <option value="" disabled>
                  Choose your device
                </option>
                <option>Web</option>
                <option>Mobile</option>
                <option>Laptop</option>
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
                className="w-full px-4 py-2 border rounded-md bg-white outline-none hover:border-violet-500 focus:border-violet-500 focus:ring-2"
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
                className="w-full px-4 py-2 border rounded-md bg-white outline-none hover:border-violet-500 focus:border-violet-500 focus:ring-2"
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
