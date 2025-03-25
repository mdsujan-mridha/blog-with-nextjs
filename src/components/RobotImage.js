

import React from 'react';
import robot from "@/app/assets/robot.jpg";
import Image from 'next/image';
import TechImage from "@/app/assets/tech.jpg";
const RobotImage = () => {
    return (
        <div className='relative h-96 w-2/3 mx-auto'>
            <Image src={robot} alt="robot" className=' w-96 h-96 object-cover blur-sm' />
            <Image src={TechImage} alt="robot" className=' w-96 h-96 object-cover blur-sm' />
        </div>
    );
};

export default RobotImage;