

import React from 'react';
import fakeData from '@/lib/fakeBlogData';
import VideoPlayCard from './VideoPlayCard';

const FeatureVideo = () => {


    const fakeVideoData = fakeData.fakeVideoData;
    const firstVideo = fakeVideoData[0];
    const otherVideos = fakeVideoData.slice(1, 5);

    return (
        <div className='px-12 flex gap-5 items-center h-96 w-full mb-10 pt-14' style={{marginTop: "100px",marginBottom:"150px"}}>
            <div className='w-1/2 h-full p-2 rounded-md relative'>
                <VideoPlayCard  key={firstVideo.id} video={firstVideo} className="w-ful"/>
            </div>
            <div className=' w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-96 gap-5'>
                {/* 2nd column */}
                {
                    otherVideos.map((video) => (
                        <VideoPlayCard key={video.id} video={video}/>
                    ))
                }

            </div>
        </div>
    );
};

export default FeatureVideo;