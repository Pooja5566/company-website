import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { VideoPlayer } from "./videoPlayer";

export default class MultipleItems extends Component {
  render() {
    const videos = [
      "https://youtu.be/GnAHSR7zCok",
      "https://youtu.be/tZl_Ent1xeM",
      "https://youtu.be/WhLE6vH7WE0s",
    ];

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          {/* {videos?.map((url) => ( */}
          <>
            <VideoPlayer />
            <VideoPlayer />
            <VideoPlayer />
          </>
          {/* ))} */}
        </Slider>
      </div>
    );
  }
}
