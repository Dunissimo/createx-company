import React, { FC } from "react";
import CircleButton from "./Buttons/CircleButton";
import Title from "./Title";

const Testimonials: FC = () => {
  return (
    <section className="py-24 bg-[#F4F5F7]">
      <div className="container lg:max-w-[70%] mx-auto">
        <div className="text-center mb-16">
          <Title
            text={{
              h3: "TESTIMONIALS",
              h2: "What our students say",
            }}
          />
        </div>

        <div className="testimonials bg-white mt-20 px-16 py-16 relative">
          <div className="slider-controls absolute top-1/2 left-0 lg:left-[-10%]">
            <CircleButton />
          </div>
          <div className="wrapper w-[95%] lg:w-[75%] mx-auto relative before:content-[url('/public/images/homepage/testimonials/braces.png')] before:absolute before:top-0 before:left-[-15%] lg:before:left-[-7%]">
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
              amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar
              eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis
              non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque
              pharetra arcu diam maecenas diam integer in.
            </p>
            <div className="row flex">
              <img src="./images/homepage/testimonials/testi.png" alt="" />
              <div className="text ml-5">
                <p>Eleanor Pena</p>
                <p className="text-[#787A80]">Position, Course</p>
              </div>
            </div>
          </div>
          <div className="slider-controls absolute top-1/2 right-0 lg:right-[-10%]">
            <CircleButton isRotate />
          </div>
        </div>
        <div className="dots flex items-center gap-4 mt-16 w-1/2 mx-auto justify-center">
          <button>
            <div className="dot active w-10 h-[5px] bg-[#B3B7BC] "></div>
          </button>
          <button>
            <div className="dot w-10 h-[5px] bg-[#B3B7BC] "></div>
          </button>
          <button>
            <div className="dot w-10 h-[5px] bg-[#B3B7BC] "></div>
          </button>
          <button>
            <div className="dot w-10 h-[5px] bg-[#B3B7BC] "></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
