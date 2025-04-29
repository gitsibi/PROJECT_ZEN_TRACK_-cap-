import React,{useState} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';


function LoginPage () {
  const navigate=useNavigate();
  const [formData,setFormData]=useState({
    email:'',
    password:''
  });

  const[error,setError]=useState('');

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  }

  const handleHomepage=()=>{
    navigate('/');
  }
  const handleSignup=()=>{
     navigate('/signup')
  }

  const handleSubmit=async(e) => {
    e.preventDefault();
    setError('');
    const {email,password}=formData;
    try{
      const response = await axios.post("http://localhost:5000/api/user/login",
        {email,password},
        {withCredentials: true}
      );

      console.log(response.data);
      alert("Logged in sucessfully!");

    }
    catch(error){
      console.error("There was an error logging in!", error);
      setError("Login failed. Please try again.");


    }
  }
  return (
     <>
       <section className='min-h-screen dark:bg-black mt-3'>
           <div className="flex justify-center mt-12">
              <h1 className='font-bold text-black text-3xl tracking-tighter dark:text-white'>Welcome Back</h1>
           </div>
           <div className=' flex justify-center mt-3 text-xl'>
              <p className='text-gray-500 dark:text-gray-300 text-base'>Enter your credentials to access your account</p>
           </div>

           <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white border-2 border-violet-200 py-8 px-4 shadow sm:rounded-lg sm:px-10 dark:border-gray-300">
                <form onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="email" className='block text-sm font-medium text-black'>
                        Email
                      </label>

                      <input type="email"
                      name='email'
                      autoComplete='email'
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block border-2 text-left pl-3 rounded-lg border-violet-200 px-1 py-2 w-full mt-2 appearance-none bg-violet-100 
                      hover:border-violet-500 focus:border-violet-500 focus:ring-2 outline-none dark:bg-gray-100 dark:border-gray-300 dark:hover:border-grey-500 focus:border-grey-500"                       />
                  </div>

                  <div>
                    <label htmlFor="password" className='block text-sm font-medium text-black mt-7'>
                      Password
                    </label>

                    <input type="password"
                    name='password'
                    autoComplete='passwords'
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="block border-2 text-left pl-3 rounded-lg border-violet-200 px-1 py-2 w-full mt-2 appearance-none bg-violet-100 
                    hover:border-violet-500 focus:border-violet-500 focus:ring-2 outline-none dark:bg-gray-100 dark:border-gray-300 dark:hover:border-grey-500 focus:border-grey-500"                     />
                </div>
                
                <button type="submit" className="w-full mt-9 py-2 px-4 bg-violet-500 text-white rounded-md hover:bg-violet-800 focus:border-violet-300 focus:ring-2 outline-none dark:bg-black dark:hover:bg-gray-800" onClick={handleHomepage}>
                  Login
                </button>
                </form>

                <div className="flex items-center mt-6">
                  <div className="flex-grow h-px bg-gray-300"></div>
                  <span className="mx-4 text-xs text-violet-500 dark:text-red-600">OR CONTINUE WITH</span>
                  <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                <div className="mt-6">
                  <button className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-100 hover:border-black focus:border-gray-700 focus:ring-2 outline-none">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWnfKCTC_IKif9-5A8_cbz15c9fvac9r_Nkw&s"
                      alt="Google"
                      className="w-5 h-5 mr-2"
                    />
                    <span className="text-sm text-gray-700 ">Continue with Google</span>
                  </button>
                  </div>
                  <p className="mt-4 text-center text-base text-black ">
                  Don't have an account?{" "}
                  <span className="text-violet-500 hover:underline cursor-pointer dark:text-red-600" onClick={handleSignup}>
                    Create new account
                  </span>
                </p>
            </div>

          </div>
       </section>
     </>
  )
}

export default LoginPage
