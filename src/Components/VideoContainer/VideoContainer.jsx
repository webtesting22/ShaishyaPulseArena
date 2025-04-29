import React, { useRef, useState, useEffect } from "react";
import { Play, Pause } from 'lucide-react';
import "./VideoContainer.css";

const headings = [
    "Feel the Pulse of Play at Shaishya Pulse Arena",
    "Where Every Shot Sparks a New Story",
    "Unite. Play. Thrive. — The Pulse of Shaishya",
    "Pickleball and Box Cricket — Action Awaits!",
    "Play Bold. Play Fast. Play Together",
    "Step into the Game at Shaishya Pulse Arena",
    "Thrill, Skill, and Team Spirit in Every Moment",
];

const VideoContainer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const videoRef = useRef(null);
    const timerRef = useRef(null);
    const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
        }, 2000); // 2 seconds

        return () => clearInterval(interval);
    }, []);

    // Toggle play/pause
    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Handle mouse enter
    const handleMouseEnter = () => {
        setIsHovering(true);
        clearTimeout(timerRef.current);
    };

    // Handle mouse leave
    const handleMouseLeave = () => {
        if (isPlaying) {
            timerRef.current = setTimeout(() => {
                setIsHovering(false);
            }, 2000);
        } else {
            setIsHovering(true);
        }
    };

    // Clean up timeout on unmount
    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    return (
        <>
            <div id="VideoContainer">
                <div className="VideoContainerContent sectionPadding">
                    <div className="VideoBackColorContainer">
                        <div className="VideoContainer">
                            <div className="VideoDesignElement">
                                <div key={currentHeadingIndex} className="fade-slide">
                                    [{headings[currentHeadingIndex]}]
                                </div>
                            </div>
                            <div className="VideoPlace">
                                <div
                                    className="video-wrapper"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <video
                                        ref={videoRef}
                                        src="https://prepseed.s3.ap-south-1.amazonaws.com/ShaishyaPulseArenaVideo.mp4"
                                        className="video"
                                        loop
                                        muted
                                        preload="auto" // Preload video for smoother experience
                                        autoPlay={false} // Will not autoplay unless clicked
                                        onClick={togglePlay}
                                    />

                                    {/* Center play/pause button with animation */}
                                    <button
                                        className={`center-play-button ${(isPlaying && !isHovering) ? 'hide' : ''}`}
                                        onClick={togglePlay}
                                    >
                                        {isPlaying ?
                                            <Pause size={24} color="#007A33" /> :
                                            <Play size={24} color="#007A33" />
                                        }
                                    </button>

                                    {/* Hover controls overlay */}
                                    <div
                                        className={`controls-overlay ${isHovering ? 'show' : ''}`}
                                    >
                                        <button
                                            className="control-button"
                                            onClick={togglePlay}
                                        >
                                            {isPlaying ?
                                                <Pause size={18} color="white" /> :
                                                <Play size={18} color="white" />
                                            }
                                        </button>
                                        <div className="status-text">
                                            {isPlaying ? 'Now playing' : 'Paused'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="VideoContainerText">
                                <p>At Shaishya Pulse Arena, energy meets excitement with pickleball and box cricket.
                                    Whether you're smashing shots or swinging paddles, every moment is built for fun and connection.
                                    Unite. Play. Thrive — where sports bring people together.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoContainer;
