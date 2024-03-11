// Swiper
import { SwiperSlide } from "swiper/react";

// Chakra Ui
import { Center } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

// Hooks
import { useState, useEffect } from "react";

// Components
import Card from "../../Cards/Card/Card";
import Slider from "../../Common/Slider/Slider";


const CardSlider = ({ cards }) => {
  if (cards.length === 1) {
    return (
      <Center>
        <Card
          key={cards[0].title}
          title={cards[0].title}
          content={cards[0].content}
          image={cards[0].image}
          link={cards[0].link}
        ></Card>
      </Center>
    );
  }

  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isLargerThan720] = useMediaQuery("(min-width: 720px)");
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  useEffect(() => {
    if (isLargerThan1280) {
      setSlidesPerView(cards.length < 3 ? cards.length : 3);
    } else if (isLargerThan720) {
      setSlidesPerView(cards.length < 2 ? cards.length : 2);
    } else {
      setSlidesPerView(1);
    }
  }, [cards.length, isLargerThan720, isLargerThan1280]);

  const settings = {
    spaceBetween: 50,
    navigation: cards.length >= 3,
    pagination: cards.length >= 3 && {
      clickable: true,
    },
    draggable: cards.length >= 3,
    loop: cards.length >= 3,
    slidesPerView: slidesPerView
    // breakpoints: {
    //   300: {
    //     slidesPerView: 1,
    //     navigation: false,
    //     slidesPerGroup: 1,
    //   },
    //   720: {
    //     slidesPerView: cards.length < 2 ? cards.length : 2,
    //   },
    //   1280: {
    //     slidesPerView: cards.length < 3 ? cards.length : 3,
    //   },
    // },
  };

  return (
    <Slider settings={settings}>
      {cards.map((card) => (
        <SwiperSlide key={card.title}>
          <Card
            key={card.title}
            title={card.title}
            content={card.content}
            image={card.image}
            link={card.link}
          ></Card>
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default CardSlider;
