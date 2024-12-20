import React from 'react';

const Card = ({ title, status, framework, size, time }) => {
    return (
        <div>
            <div className='w-fill h-full flex flex-col mx-4 my-4'>
                <div className='flex flex-row items-center justify-start gap-5 mb-3'>
                    <div className='text-xl font-medium'>{title}</div>
                    <div className='bg-blue-100 border border-blue-700 w-fill  rounded-3xl p-3 flex items-center justify-center h-8 text-blue-700'>{status}</div>
                </div>
                <div className='flex flex-row w-68 justify-start gap-10'>
                    <div className='flex flex-row items-center gap-2 text-normal font-normal'>{framework} <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#1570EF" />
                    </svg>
                    </div>
                    <div className='gap-2 flex flex-row items-center text-normal font-normal'><svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.25 12C2.34375 12 0 11.1797 0 10.125V1.875C0 0.84375 2.34375 0 5.25 0C8.13281 0 10.5 0.84375 10.5 1.875V10.125C10.5 11.1797 8.13281 12 5.25 12ZM9.375 2.03906L9.35156 2.01562C9.23438 1.92188 8.97656 1.75781 8.57812 1.61719C7.78125 1.33594 6.58594 1.125 5.25 1.125C3.89062 1.125 2.69531 1.33594 1.89844 1.61719C1.5 1.75781 1.24219 1.92188 1.125 2.01562V4.10156C1.42969 4.26562 1.85156 4.42969 2.39062 4.57031C3.1875 4.75781 4.17188 4.875 5.25 4.875C6.30469 4.875 7.28906 4.75781 8.08594 4.57031C8.625 4.42969 9.04688 4.26562 9.375 4.10156V2.03906ZM9.375 5.34375C9.04688 5.46094 8.71875 5.57812 8.34375 5.67188C7.45312 5.88281 6.375 6 5.25 6C4.10156 6 3.02344 5.88281 2.13281 5.67188C1.75781 5.57812 1.42969 5.46094 1.125 5.34375V7.10156C1.42969 7.26562 1.85156 7.42969 2.39062 7.57031C3.1875 7.75781 4.17188 7.875 5.25 7.875C6.30469 7.875 7.28906 7.75781 8.08594 7.57031C8.625 7.42969 9.04688 7.26562 9.375 7.10156V5.34375ZM1.125 10.0078C1.24219 10.1016 1.5 10.2656 1.89844 10.4062C2.69531 10.6875 3.89062 10.875 5.22656 10.875C6.58594 10.875 7.78125 10.6875 8.57812 10.4062C8.97656 10.2656 9.23438 10.1016 9.35156 10.0078L9.375 9.98438V8.34375C9.04688 8.46094 8.71875 8.57812 8.34375 8.67188C7.45312 8.88281 6.375 9 5.22656 9C4.10156 9 3.02344 8.88281 2.13281 8.67188C1.75781 8.57812 1.42969 8.46094 1.10156 8.34375V9.98438L1.125 10.0078ZM9.42188 9.9375L9.39844 9.96094C9.42188 9.9375 9.42188 9.9375 9.42188 9.9375ZM1.07812 9.96094C1.07812 9.9375 1.05469 9.9375 1.05469 9.9375L1.07812 9.96094ZM1.07812 2.0625C1.05469 2.08594 1.05469 2.08594 1.05469 2.08594L1.07812 2.0625ZM9.42188 2.08594C9.42188 2.08594 9.42188 2.08594 9.39844 2.0625L9.42188 2.08594Z" fill="#181D27"/>
</svg>
{size} KB</div>
                    <div className='font-normal text-normal'>Updated {time} day ago</div>

                </div>
            </div>

        </div>
    );
}

export default Card;
