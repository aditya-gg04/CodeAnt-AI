import React from 'react';
import Stats from '../Components/Stats';
import Logo from '../Components/Logo';
import LoginWays from '../Components/LoginWays';
import image1 from '/3.png'
import image2 from '/4.png'
import image3 from '/2.png'
import image4 from '/image1.png'

const Login = () => {
    return (
        <div>
            <div className='flex flex-row w-full h-screen '>
                <div className='hidden xl:flex w-1/2 border border-gray-200'>
                   <Stats/>
                </div>
                <div className='flex justify-center items-center flex-col md:w-1/2 w-full mx-4'>
                    <div className='flex justify-center items-center flex-col w-full border border-gray-200 p-4 rounded-lg'>
                    <div className='mb-4'><Logo/></div>
                    <div className='text-2xl font-semibold my-6'>Welcome to CodeAnt AI </div>
                    <div className='flex flex-row w-full items-center justify-center mx-5'>
                        <div className=' flex items-center justify-center bg-blue-500 h-16 xl:w-72 w-1/2 rounded-lg text-white font-bold text-lg'>SAAS</div>
                        <div className=' flex items-center justify-center bg-gray-100 h-16 xl:w-72 w-1/2 rounded-lg text-lg font-semibold'>Self Hosted</div>
                    </div>
                    </div>
                    <div className='flex justify-center items-center flex-col w-full border  border-gray-200 p-4 rounded-lg'>
                        <LoginWays text={"Sign in with Github"} logo={image1} />
                        <LoginWays text={"Sign in with Bitbucket"} logo={image3} />
                        <LoginWays text={"Sign in with Azure Devops"} logo={image4} />
                        <LoginWays text={"Sign in with GitLab"} logo={image2} />
                       
                    </div>
                    <div className='mt-4'>
                    By signing up you agree to the <span className='font-bold'> Privacy Policy</span>.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
