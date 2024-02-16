import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Swipercard.css";

import { useEffect, useState } from "react";

const Swipercard = () => {
  const [slidesPerView, setSlidePerView] = useState(2);

  const data = [
    { id: "1", image: "src/assets/portfolio/b_layout_v.png" },
    { id: "2", image: "src/assets/portfolio/booking_manager.png" },
    { id: "3", image: "src/assets/portfolio/calculator-figure.png" },
    { id: "4", image: "src/assets/portfolio/crud_c_sql_server.png" },
    { id: "5", image: "src/assets/portfolio/hb_portfolio.png" },
    { id: "6", image: "src/assets/portfolio/python_training_projects.png" },
  ];

  // useEffect(() => {
  //   function handleResize() {
  //     if (window.innerWidth < 720) {
  //       setSlidePerView(1);
  //     } else {
  //       setSlidePerView(2);
  //     }
  //   }
  //   handleResize();
  // }, []);
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <img src={item.image} alt="slider" className="slidw-item" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swipercard;
