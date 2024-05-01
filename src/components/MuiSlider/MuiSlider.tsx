import Carousel from "react-material-ui-carousel";
import SliderImage1 from "../../assets/images/stock1.jpg";
import SliderImage2 from "../../assets/images/stock2.jpg";
import SliderImage3 from "../../assets/images/stock3.jpg";
import SliderImage4 from "../../assets/images/stock4.jpg";

export const MuiSlider = () => {
  type Items = {
    image: string;
  }[];

  var items: Items = [
    {
      image: SliderImage1,
    },
    {
      image: SliderImage2,
    },
    {
      image: SliderImage3,
    },
    {
      image: SliderImage4,
    },
  ];

  return (
    <Carousel
      className="w-full h-60"
      animation="slide"
      duration={1500}
      interval={4000}
      swipe={true}
    >
      {items.map((item, i) => (
        <img
          key={i}
          className="d-block w-100"
          src={item.image}
          alt="First slide"
        />
      ))}
    </Carousel>
  );
};
