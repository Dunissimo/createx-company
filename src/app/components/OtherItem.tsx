import { FC } from "react";
import { Link } from "react-router-dom";
import FillButton from "./Buttons/FillButton";
import Container from "./Container";
import Slider from "./Slider";
import Title from "./Title";

interface IProps {
  data: {
    h3: string;
    h2: string;
    linkTo: "/courses" | "/events" | "/blog";
    bottom: string;
    bottomInBtn: string;
    slidesToShow: number;
  };
  slides: any[];
}

const OtherItem: FC<IProps> = ({ data, slides }) => {
  const { h3, h2, linkTo, bottom, bottomInBtn, slidesToShow } = data;
  return (
    <div className="container px-4 mx-auto py-20">
      <Container>
        <div className="flex justify-between">
          <Title text={{ h3, h2 }} />
        </div>
        <div className="py-20">
          <Slider slidesToShow={slidesToShow}>
            {slides.map((slide) => {
              return (
                <div key={slide.id} className="px-4">
                  {slide}
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="flex items-center justify-center">
          <h3 className="text-2xl mr-8">{bottom}</h3>
          <Link to={linkTo}>
            <FillButton text={bottomInBtn} />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default OtherItem;
