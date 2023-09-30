import React, { useRef, useState } from 'react'
import Header from './Header'
import Footer from './common/Footer'
import { chaekValidation } from '../utils/validation';
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/slices/userSlice';
const Login = () => {


    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errMsg, setErrMsg] = useState(null);
    
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const dispatch = useDispatch()

    const handleButtonClick = () => {
        const message = chaekValidation(email.current.value, password.current.value);
        setErrMsg(message);
        if(message) return;

        //Sign In Sign Up logic
        if(!isSignInForm) {
            //Signup
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value,
                  }).then(() => {
                    // Profile updated!
                    const { uid, email, displayName} = auth.currentUser;
                    dispatch(addUser({uid: uid, email: email, displayName: displayName}));
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    setErrMsg(error.message);
                    // ...
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrMsg(errorCode + "-" +  errorMessage)
            })
    

        } else {
            //Sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrMsg(errorCode + "-" + errorMessage);  
            });

    
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div>
        <Header />
        <div className='absolute '>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="hero"/>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='bg-[#000000BF] p-12 absolute w-3/12 my-36 mx-auto right-0 left-0 flex flex-col shadow-4xl'>
            <h1 className='font-semibold text-white text-3xl mb-5'>{!isSignInForm? "Sign Up": "Sign In"}</h1>
            {
                !isSignInForm && (
                    <input ref={name} type="text" placeholder='Full Name' className='p-4 my-2  bg-[#333333] rounded-sm px-[20px] py-[16px] text-[#ffff]'/>
                )
            }
            <input ref={email} type="email" name="email" id="email" placeholder='Email or phone number' required className='p-4 my-2 w-full  bg-[#333333] rounded-sm px-[20px] py-[16px] text-[#ffff]' />
            <input ref={password} type="password" name="password" id="password" placeholder='password' required className='p-4 my-4 w-full bg-[#333333] rounded-sm px-[20px] py-[16px] text-[#ffff]' />
            <p className='text-red-600 font-semibold '>{errMsg}</p>
            <button className='text-white bg-[#E50914] px-[20px] py-[12px] rounded-md mt-8' onClick={() => handleButtonClick()}>
                {
                    isSignInForm ? "Sign In" : "Sign Up"
                }
            </button>

            <div className='flex justify-between'>
            <div className='flex gap-x-1 items-center'>
                <input type="checkbox" name="Remember me" className='bg-[#fff] text-black'/>
                <label htmlFor="" className='text-[#B3B3B3]'>Remember me</label>

            </div>
            <div>
                <a href="/" className='text-[#B3B3B3] text-sm'>Need help?</a>
            </div>
            </div>

            <div className='space-y-4 mb-10 mt-20'>
                <div className='text-white flex items-center gap-x-1 hover:cursor-pointer' onClick={() => toggleSignInForm()}>
                    {
                        isSignInForm ? (
                            <div className='flex gap-x-1 mb-4'>
                                <p className='text-[#737373]'>New to Netflix?</p>
                                <span>Sign up now</span>
                            </div>
                        ) : (
                            <div className='flex gap-x-1 mb-4'>
                                <p className='text-[#737373]'>Already have account?</p>
                                <span>Sign in now</span>
                            </div>
                        )
                    }
                </div>

                <p className='text-[#8c8c8c] text-[13px]'>This page is protected by Google recaptcha to ensure you're not a bot.
                    <span className='text-[#0071Eb]'>Learn more.</span>
                </p>
                
            </div>
        </form>

        <Footer />
        
    </div>
  )
}

export default Login