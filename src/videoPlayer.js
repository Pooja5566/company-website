import React from "react";
import ReactPlayer from "react-player";

export const VideoPlayer = () => {
  return (
    <>
      <ReactPlayer
        url={"https://youtu.be/WhLE6vH7WE0s"}
        controls={true}
        width="100%"
        height="auto"
      />
    </>
  );
};
