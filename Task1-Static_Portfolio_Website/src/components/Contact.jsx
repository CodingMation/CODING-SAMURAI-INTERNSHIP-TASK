import axios from 'axios';
import React from 'react';
import {useForm} from 'react-hook-form'
import toast from 'react-hot-toast';

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message
    }
    try{
      await axios.post('https://getform.io/f/akknjnza', userInfo);
      toast.success("Your message has been sent successfully");
    } catch(error){
      console.log(error);
      toast.error("Something went wrong");
    }
  }
  return (
    <>
      <div name="Contact" className='bg-white max-w-screen-2xl container mx-auto px-4 md:px-16 my-16'>
        <h1 className='text-3xl font-bold mb-4'>Contact Me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className='flex flex-col items-center justify-center mt-5'>
          <form 
            onSubmit={handleSubmit(onSubmit)}
            //action="https://getform.io/f/akknjnza" 
            //method="POST"
            className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
            <h1 className='text-xl font-semibol mb-4'>
              Send Your Message
            </h1>
            <div className='flex flex-col mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                FullName
              </label>
              <input 
                {...register("name", { required: true })}
                type="text" 
                name="name"
                id="name"
                className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder="Enter your fullname" />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className='flex flex-col mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Email Address
              </label>
              <input 
                {...register("email", { required: true })}
                type="text" 
                name="email"
                id="email"
                className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder="Enter your email address"
                />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className='flex flex-col mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Message
              </label>
              <textarea 
                {...register("message", { required: true })}
                type="text" 
                name="message"
                id="message"
                className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder="Type Your Message Here" />
              {errors.message && <span>This field is required</span>}
            </div>
            <button type='submit' className='bg-black hover:bg-slate-700 duration-300 text-white py-2 px-3 rounded-xl'>
              Send Message
            </button> 
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;