import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from '../../hooks'
import { AlertErrorAuth } from '../components';
import { AuthContext } from '../context';
import { authentication } from '../helpers';

export const LoginPage = () => {

  const {login} = useContext(AuthContext);

  const [alertErrorAuth, setAlertErrorAuth] = useState(false);
  
  const {email, password, onInputChange} = useForm({
    email: '',
    password: ''
  });

  useEffect(() => {
    if (alertErrorAuth) {
      setAlertErrorAuth(() => !alertErrorAuth);
    }
  }, [email, password]);

  const onLoginSubmit = (event) => {
    event.preventDefault();
    if ((email.trim().length <= 1) || (password.length <= 6)) return;

    const autenticated = authentication(email, password);

    if(autenticated) {
      login(autenticated.name);

    } else {
      setAlertErrorAuth(() => !alertErrorAuth);
    }
  }

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='w-72 md:w-96 h-80 bg-white rounded-lg shadow-xl'>
          <div className='w-full h-16 rounded-t-lg text-center border-b border-gray-400 flex justify-center items-center'>
            <h1 className='text-rose-700 text-3xl font-bold'>Login</h1>
          </div>
          <AlertErrorAuth show={alertErrorAuth}/>
          <form onSubmit={onLoginSubmit}>
            <div className='flex flex-col justify-center items-center gap-5 px-8 pt-10 pb-4'>
              <input 
                className='w-full h-12 px-5 border rounded-md border-gray-400 placeholder:text-gray-400' 
                type="email" 
                placeholder='Email'
                name="email"
                aria-label='email'
                value={email}
                onChange={onInputChange}
              />
              <input 
                className='w-full h-12 px-5 border rounded-md border-gray-400 placeholder:text-gray-400' 
                type="password" 
                placeholder='Password'
                name="password"
                aria-label='input-password'
                value={password}
                onChange={onInputChange}
              />
            </div>
            <div className='flex justify-end items-center gap-3 p-8'>
              <button className='bg-rose-700 hover:bg-rose-800 text-white font-bold rounded-md px-10 py-2 scale-100 hover:scale-105 transition duration-200'>Ok</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
