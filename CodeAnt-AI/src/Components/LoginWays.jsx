import React from 'react';
import image from '/image1.png'

const LoginWays = ({text,logo}) => {
    return (
        <>
            <div className='h-16 w-8/12 border border-gray-200 rounded-lg mb-4 font-semibold flex flex-row items-center justify-center gap-3'>
                <img src={logo} alt="" className='h-6 w-6'/>
                {text}
            </div>
        </>
    );
}

export default LoginWays;
