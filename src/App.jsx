import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [Error,setError] = useState({})
  const [IsSubmit,setIsSubmit] = useState(false)
   const [data,setData] = useState({
    name : "",
    email: "",
    password: "",
})
useEffect(() => {
    if(Object.keys(Error).length === 0 && IsSubmit) {
      console.log(data);
    }
},[Error])
  const HandleData = (event) => {
    setData({...data,[event.target.name] : event.target.value})
 }
 const SubmitData = (event) => {
  event.preventDefault()
  setError(Validate({data}))
  setIsSubmit(true);
 }
 const Validate = (values) => {
  const error = {};
  const patt1 = /^\S+@\S+\.\S+$/;
  if(!values.data.name) {
    error.name = 'Name is Required'
  }
  if(!values.data.email) {
    error.email = 'Email is Required'
  }
  else if(!patt1.test(values.data.email)) {
    error.email = "Enter Valid Email";
  }
  if(!values.data.password) {
    error.password = 'password is Required'
  }
  else if(values.data.password.length < 3 || values.data.password.length > 12) {
    error.password = 'Password must bhi of 3 to 12 characters';
  }
  return error;
  
 }
  return (
    <div className='w-[300px] h-[400px] bg-blue-200 rounded-lg border border-blue-600 p-3 justify-center items-center flex'>
      
      <form onSubmit={SubmitData}>
      <div className='mb-3 '>{JSON.stringify(data,undefined,2)}</div>
      <div className='mb-5 text-2xl font-sans font-bold text-blue-500'>Form Data</div>
        <input className='p-1 bg-gray-200 rounded-lg' type='text'  name='name' placeholder='Enter your name..' onChange={HandleData}/><br></br>
        <p className='mb-3 text-left ml-11 text-red-500'>{Error.name}</p>
        <input className='p-1 bg-gray-200 rounded-lg' type='text'  name='email' Required placeholder='Enter your email..' onChange={HandleData}/><br></br>
        <p className='mb-3 text-left ml-11 text-red-500'>{Error.email}</p>
        <input className='p-1 bg-gray-200 rounded-lg' type='password'  name='password' Required placeholder='Enter your password..' onChange={HandleData}/><br></br>
        <p className='mb-5 text-left ml-11 text-red-500'>{Error.password}</p>
        <input type='submit' value="Submit" className='bg-blue-500 w-[190px] rounded-lg p-1'/>
      </form>
    </div>
  )
}

export default App
