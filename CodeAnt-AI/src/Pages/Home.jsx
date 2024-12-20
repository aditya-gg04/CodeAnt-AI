import React, { useState } from 'react';
import MiddleSideBar from '../Components/MiddleSideBar';
import SmallSideBar from '../Components/SmallSideBar';
import Dropdown from '../Components/DropDown';
import Card from '../Components/Card';
import Sidebar from '../Components/Sidebar';
const Home = () => {
    return (
        <div className='flex md:flex-row w-screen flex-col'>

            {/*SideBar */}
            <Sidebar/>

            {/* center */}
            <div className='bg-gray-200 h-full w-full  flex items-center justify-center flex-col border border-t-gray-600 z-1'>

                <div className='h-42 md:h-40 w-full bg-white rounded-t-lg  flex flex-col '> {/*w-1000 mt-5*/}
                    <div className='flex flex-col md:flex-row mx-4 my-3 justify-between'>
                        <div className='flex flex-col'>
                            <div className='font-semibold text-2xl mb-1'>Repositories</div>
                            <div className='text-gray-600 text-sm'>33 Total Repositories</div>
                        </div>
                         <div className='flex flex-row justify-start mt-1 gap-4 items-center'>  {/* w-96 */}
                            <button className=' bg-gray-100 p-3 rounded-md w-32 border border-black flex flex-row justify-evenly items-center h-10'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.9609 10.4102C16.418 10.5508 16.6641 11.0078 16.5234 11.4648C15.5391 14.8047 12.4453 17.125 8.96484 17.125C6.1875 17.125 3.62109 15.6133 2.21484 13.2578V16.8438C2.21484 17.3359 1.86328 17.6875 1.37109 17.6875C0.914062 17.6875 0.527344 17.3359 0.527344 16.8438V11.2188C0.527344 10.7617 0.914062 10.375 1.37109 10.375H6.99609C7.48828 10.375 7.83984 10.7617 7.83984 11.2188C7.83984 11.7109 7.45312 12.0625 6.99609 12.0625H3.44531C4.5 14.1016 6.60938 15.4375 8.96484 15.4375C11.707 15.4375 14.168 13.6094 14.9062 10.9727C15.0469 10.5156 15.5039 10.2695 15.9609 10.4102ZM16.5938 0.8125C17.0508 0.8125 17.4375 1.19922 17.4375 1.65625V7.28125C17.4375 7.77344 17.0508 8.125 16.5938 8.125H10.9688C10.4766 8.125 10.125 7.77344 10.125 7.28125C10.125 6.82422 10.4766 6.4375 10.9688 6.4375H14.4844C13.4297 4.43359 11.3203 3.0625 9 3.0625C6.25781 3.0625 3.79688 4.92578 3.02344 7.52734C2.91797 7.98438 2.46094 8.23047 2.00391 8.08984C1.54688 7.98438 1.30078 7.49219 1.40625 7.07031C2.39062 3.73047 5.51953 1.375 9 1.375C11.7773 1.375 14.3438 2.92188 15.75 5.27734V1.65625C15.75 1.19922 16.1016 0.8125 16.5938 0.8125Z" fill="#414651" />
                            </svg>
                                <div>Refresh All</div></button>
                            <button className='bg-blue-500 px-3 text-white w-40 rounded-md border border-black flex flex-row justify-evenly items-center h-10'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.1875 8.25C15.1875 8.74219 14.8008 9.09375 14.3438 9.09375H8.71875V14.7188C8.71875 15.2109 8.33203 15.5977 7.875 15.5977C7.38281 15.5977 7.03125 15.2109 7.03125 14.7188V9.09375H1.40625C0.914062 9.09375 0.5625 8.74219 0.5625 8.28516C0.5625 7.79297 0.914062 7.40625 1.40625 7.40625H7.03125V1.78125C7.03125 1.32422 7.38281 0.972656 7.875 0.972656C8.33203 0.972656 8.71875 1.32422 8.71875 1.78125V7.40625H14.3438C14.8008 7.40625 15.1875 7.79297 15.1875 8.25Z" fill="white" />
                            </svg>


                                <div>Add Repository</div></button>
                        </div>

                    </div>
                    <div className='mx-4 border border-gray-600 bg-gray-100 w-72 flex flex-row items-center rounded-lg h-10 p-3 justify-start mb-2 md:mb-0' ><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7188 16.8086C18.0703 17.1602 18.0703 17.6875 17.7188 18.0039C17.5781 18.1797 17.3672 18.25 17.1562 18.25C16.9102 18.25 16.6992 18.1797 16.5234 18.0039L11.8125 13.293C10.5469 14.3125 8.96484 14.875 7.27734 14.875C3.26953 14.875 0 11.6055 0 7.5625C0 3.55469 3.23438 0.25 7.27734 0.25C11.2852 0.25 14.5898 3.55469 14.5898 7.5625C14.5898 9.28516 14.0273 10.8672 13.0078 12.0977L17.7188 16.8086ZM1.6875 7.5625C1.6875 10.6914 4.18359 13.1875 7.3125 13.1875C10.4062 13.1875 12.9375 10.6914 12.9375 7.5625C12.9375 4.46875 10.4062 1.9375 7.3125 1.9375C4.18359 1.9375 1.6875 4.46875 1.6875 7.5625Z" fill="#414651" />
                    </svg> <input type="text" placeholder='Search Repositories' className='outline-none mx-2 bg-gray-100' /></div>
                </div>

                <div className='bg-white w-full border border-b-slate-50 h-32 border-l-slate-50 border-r-slate-50 hover:bg-gray-200  '>
                    <Card title={"design-system"} framework={"React"} status={"Public"} size={7320} time={"1"} />
                </div>
                <div className='bg-white w-full border border-b-slate-50 h-32  border-l-slate-50 border-r-slate-50  hover:bg-gray-200 '>
                    <Card title={"codeant-ci-app"} framework={"Javascript"} status={"Private"} size={5871} time={2} />
                </div>
                <div className='bg-white w-full border border-b-slate-50 h-32  border-l-slate-50 border-r-slate-50  hover:bg-gray-200 '>
                    <Card title={"Analytics-dashboard"} framework={"Python"} status={"Private"} size={4521} time={5} />
                </div>
                <div className='bg-white w-full border border-b-slate-50 h-32   border-l-slate-50 border-r-slate-50 hover:bg-gray-200 '>
                    <Card title={"mobile-app"} framework={"Swift"} status={"Public"} size={3096} time={3} />
                </div>
                <div className='bg-white w-full border border-b-slate-50 h-32  border-l-slate-50 border-r-slate-50  hover:bg-gray-200 '>
                    <Card title={"e-commerce-platform"} framework={"Java"} status={"Private"} size={6210} time={6} />
                </div>

            </div>
        </div>
    );
}

export default Home;
