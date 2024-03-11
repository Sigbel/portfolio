// Swiper
import {Swiper} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules"

// Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";

export default function Slider({ settings, children }) {
  return (
    <Swiper modules={[Navigation, Pagination]} {...settings}>
      {children}
    </Swiper>
  );
}
