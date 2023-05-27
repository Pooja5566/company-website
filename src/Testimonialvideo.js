import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { VideoPlayer } from "./VideoPlayer";

const Testimonial = () => {
  const videos = [
    { url: "https://youtu.be/GnAHSR7zCok" },
    { url: "https://youtu.be/tZl_Ent1xeM" },
    { url: "https://youtu.be/WhLE6vH7WE0s" },
    { url: "https://www.youtube.com/watch?v=Hk7UG60U5C0&t=1446s" },
    { url: "https://www.youtube.com/watch?v=hR9hALjpQ-I" },
    { url: "https://www.youtube.com/watch?v=Xy1w3lhu0sE" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <Slider {...settings}>
        {videos.map((item) => (
          <VideoPlayer url={item.url} />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
