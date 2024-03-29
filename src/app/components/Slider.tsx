import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";

interface IProps {
  children: ReactNode;
  slidesToShow: number;
}

const Slider: FC<IProps> = ({ children, slidesToShow }) => {
  const sliderTrack = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const initializeSlider = (slidesToShow: number) => {
    if (sliderTrack.current) {
      sliderTrack.current.childNodes.forEach((child: any) => {
        child.style.minWidth = `${100 / slidesToShow}%`;
      });
    }
  };

  const changeSlide = (direction: "prev" | "next") => {
    if (sliderTrack.current) {
      const arr = Array.from(sliderTrack.current.children);
      const width = arr[0].clientWidth;
      let maxWidth = 0;

      arr.forEach((child) => {
        maxWidth += child.clientWidth;
      });

      if (offset < 0) setOffset(0);
      if (offset >= maxWidth - width * slidesToShow) {
        setOffset(0 - width);
      }

      direction === "prev"
        ? setOffset((prevState) => (prevState -= width))
        : setOffset((prevState) => (prevState += width));
    }
  };

  useEffect(() => {
    const windowInnerWidth = window.innerWidth;

    if (windowInnerWidth < 768) {
      initializeSlider(1);
      return;
    }

    initializeSlider(slidesToShow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slidesToShow, children]);

  return (
    <div className="relative px-8">
      <button
        className="circle-btn left z-50"
        onClick={() => changeSlide("prev")}
      >
        <FiArrowLeftCircle
          size="2rem"
          className="hover:scale-[1.15] active:scale-95"
        />
      </button>
      <div className="slider overflow-hidden py-4">
        <div
          className="slider-track flex items-center transition-transform duration-[.75s]"
          style={{ transform: `translateX(-${offset}px)` }}
          ref={sliderTrack}
        >
          {children}
        </div>
      </div>
      <button className="circle-btn right" onClick={() => changeSlide("next")}>
        <FiArrowRightCircle
          size="2rem"
          className="hover:scale-[1.15] active:scale-95"
        />
      </button>
    </div>
  );
};

export default Slider;
