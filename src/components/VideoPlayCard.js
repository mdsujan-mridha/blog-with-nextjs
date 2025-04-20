

import React, { useState } from 'react';

const VideoPlayCard = ({ video }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    // console.log(video)
    return (
        <div className="w-full rounded-lg overflow-hidden shadow-md">
            {isPlaying ? (
                <video
                    controls
                    autoPlay
                    className="w-full h-full"
                    src={video.video_url}
                />
            ) : (
                <div
                    className="w-full h-full cursor-pointer relative"
                    onClick={() => setIsPlaying(true)}
                >
                    <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16 text-white opacity-80 hover:opacity-100 transition"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            )}
            
        </div>
    );
};

export default VideoPlayCard;