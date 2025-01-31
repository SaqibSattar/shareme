import React, { useEffect } from 'react';
import { GoogleLogin, googleLogout  } from '@react-oauth/google';

import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';

import { createOrGetUser } from '../utils';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../utils/fetchUser';

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = fetchUser();

    if (user) {
      // If user exists in localStorage, redirect to '/'
      navigate('/');
    }
  }, []);

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" />
          </div>

          <div className="shadow-2xl">
            <GoogleLogin
              onSuccess={(response) => createOrGetUser(response, navigate)}  // Pass navigate function
              onError={() => console.log('Login Failed')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;