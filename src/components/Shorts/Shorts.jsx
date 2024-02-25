import React, { useState, useRef, useEffect } from "react";
import "./Shorts.scss";
import videoData from "./VideoData";
import { FaPlay } from "react-icons/fa";
import { IoIosPause } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import { BiSolidComment } from "react-icons/bi";
import { FaShare } from "react-icons/fa6";

const Shorts = () => {
  // For liked video
  const [like, setLike] = useState(0);
  // for show video
  const [videoIndex, setVideoIndex] = useState(0);
  // for play & pause video
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  // for progress bar
  const [currentTime, setCurrentTime] = useState(0);
  // for reffrence
  const vidRef = useRef();

  // For liked video
  const handleLike = () => {
    setLike((prevLike) => (prevLike === 1 ? 0 : 1));
  };

  // for play & pause video
  const onVideoClick = () => {
    if (isVideoPlaying) {
      vidRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      vidRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  const onArrowClick = (direction) => {
    if (direction === "left") {
      if (videoIndex > 0) {
        setVideoIndex(videoIndex - 1);
      }
    } else {
      if (videoIndex < videoData.length - 1) {
        setVideoIndex(videoIndex + 1);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        onArrowClick("left");
      } else if (e.key === "ArrowUp") {
        onArrowClick("right");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [videoIndex]);

  // for progress bar
  const handleUpdate = () => {
    setCurrentTime(vidRef.current.currentTime);
  };

  const handleTouchStart = (e) => {
    setIsVideoPlaying(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    const deltaY = e.touches[0].clientY - isVideoPlaying;
    if (deltaY > 50) {
      console.log("swipe down");
    } else if (deltaY < -50) {
      console.log("swipe up");
    }
  };

  return (
    <>
      <div className="shorts">
        <div className="shorts-container">
          <div className="video-card">
            <video
              src={videoData[videoIndex].video}
              ref={vidRef}
              loop
              onClick={onVideoClick}
              onTimeUpdate={handleUpdate}
              controls
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            />
            <div className="video-controls">
              <button onClick={onVideoClick}>
                {isVideoPlaying ? (
                  <IoIosPause className="ply" />
                ) : (
                  <FaPlay className="ply" />
                )}
              </button>
            </div>
            <div className="user-info">
              <FaRegUserCircle />
              <div className="video-title">{videoData[videoIndex].title}</div>
              <button className="subscribe">Subscribe</button>
            </div>
          </div>

          <div className="public">
            <div className="public-container">
              <div className="public-use">
                <div className="video-icons">
                  <AiTwotoneLike
                    className="icons"
                    onClick={() => handleLike()}
                  />
                </div>
                <div>
                  <p>{like}</p>
                </div>
              </div>

              <div className="public-use">
                <div className="video-icons">
                  <AiTwotoneDislike className="icons" />
                </div>
                <div>
                  <p>Dislike</p>
                </div>
              </div>

              <div className="public-use">
                <div className="video-icons">
                  <BiSolidComment className="icons" />
                </div>
                <div>
                  <p>Comment</p>
                </div>
              </div>

              <div className="public-use">
                <div className="video-icons">
                  <FaShare className="icons" />
                </div>
                <div>
                  <p>Share</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shorts;
