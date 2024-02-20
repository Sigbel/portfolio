import { Center, VStack } from "@chakra-ui/react";
import Card from "../../Cards/Card/Card";
import Slider from "../../Common/Slider/Slider";
import { SwiperSlide } from "swiper/react";

const CardSlider = ({ cards }) => {
  if (cards.length === 1) {
    return (
      <Center>
        <Card
          ckey={cards[0].title}
          title={cards[0].title}
          content={cards[0].content}
          image={cards[0].image}
        ></Card>
      </Center>
    );
  }

  const settings = {
    spaceBetween: 50,
    slidesPerView: cards.length < 3 ? cards.length : 3,
    navigation: cards.length >= 3,
    pagination: cards.length >= 3 && {
      clickable: true,
    },
    draggable: cards.length >= 3,
    loop: cards.length >= 3,
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
          ></Card>
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default CardSlider;
