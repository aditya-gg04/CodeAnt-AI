import React from 'react';
import LoginWays from '../Components/LoginWays';
import Stats from '../Components/Stats';
import Logo from '../Components/Logo';
import image2 from '/4.png'
const Login2 = () => {
    return (
        <div>
            <div>
                <div className='flex flex-row w-full h-screen '>
                    <div className='hidden xl:flex w-1/2 border border-gray-200   '>
                        <Stats />
                    </div>
                    <div className='flex justify-center items-center flex-col xl:w-1/2 w-full mx-4'>
                        <div className='flex justify-center items-center flex-col w-full border border-gray-200 p-4 rounded-lg'>
                            <div className='mb-4'><Logo /></div>
                            <div className='text-2xl font-semibold my-6'>Welcome to CodeAnt AI </div>
                            <div className='flex flex-row w-full items-center justify-center mx-5'>
                                <div className=' flex items-center justify-center bg-blue-500 h-16 xl:w-72 w-1/2 rounded-lg text-white font-bold text-lg'>SAAS</div>
                                <div className=' flex items-center justify-center bg-gray-100 h-16 xl:w-72 w-1/2 rounded-lg text-lg font-semibold'>Self Hosted</div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center flex-col w-full border  border-gray-200 p-4 rounded-lg'>
                            <LoginWays text={"Sign in with GitLab"} logo={image2} />
                            <div className='h-16 w-8/12 border border-gray-200 rounded-lg mb-4 font-semibold flex flex-row items-center justify-center gap-3'>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.125 6.125C13.125 5.46094 13.6719 4.875 14.375 4.875C15.0391 4.875 15.625 5.46094 15.625 6.125C15.625 6.82812 15.0391 7.375 14.375 7.375C13.6719 7.375 13.125 6.82812 13.125 6.125ZM13.125 14.25C12.7344 14.25 12.3828 14.25 12.0312 14.1719L10.9375 15.2266C10.7812 15.4219 10.5469 15.5 10.3125 15.5H8.75V17.0625C8.75 17.6094 8.32031 18 7.8125 18H6.25V19.5625C6.25 20.1094 5.82031 20.5 5.3125 20.5H0.9375C0.390625 20.5 0 20.1094 0 19.5625V15.1875C0 14.9531 0.078125 14.7188 0.273438 14.5234L6.32812 8.46875C6.25 8.11719 6.25 7.76562 6.25 7.375C6.25 3.58594 9.29688 0.5 13.125 0.5C16.9141 0.5 20 3.58594 20 7.375C20 11.2031 16.9141 14.25 13.125 14.25ZM13.125 12.375C15.8594 12.375 18.125 10.1484 18.125 7.375C18.125 4.64062 15.8594 2.375 13.125 2.375C10.3516 2.375 8.125 4.64062 8.125 7.375C8.125 7.64844 8.125 7.92188 8.16406 8.19531L8.32031 9.13281L1.83594 15.5781V18.625H4.33594V16.125H6.83594V13.625H9.92188L11.3672 12.1797L12.3047 12.3359C12.5781 12.375 12.8516 12.375 13.125 12.375Z" fill="#171717" />
                                </svg>

                                Sign in with SSO
                            </div>
                            <div className='h-32'>

                            </div>


                        </div>
                        <div className='mt-4'>
                            By signing up you agree to the <span className='font-bold'> Privacy Policy</span>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login2;
