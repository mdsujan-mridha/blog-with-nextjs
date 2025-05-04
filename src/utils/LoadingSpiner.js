

import React from 'react';
import { RingLoader } from 'react-spinners';

const LoadingSpiner = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-gray-900 w-full'>
            <RingLoader
                color="#36d7b7"
                loading={true}
                cssOverride={{
                    display: 'block',
                    margin: '0 auto',
                    borderColor: 'red',
                }}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default LoadingSpiner;