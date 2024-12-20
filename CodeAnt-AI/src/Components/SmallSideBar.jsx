import React from 'react';

const SmallSideBar = ({prop,svg}) => {
    return (
        <div>
            <div className='w-full h-12 font-semibold rounded-md items-center justify-start flex-row flex'>
                {svg}
                
                <div className='mx-2'>{prop}</div>
            </div>
        </div>
    );
}

export default SmallSideBar;
