import React, { FC } from "react";
import CircleButton from "../../components/Buttons/CircleButton";

const Testimonials: FC = () => {
  return (
    <section className="pb-24 bg-[#F4F5F7]">
      <div className="container max-w-[70%] mx-auto">
        <div className="title text-center">
          <h3 className="uppercase tracking-[1px]">TESTIMONIALS</h3>
          <h2 className="font-black text-4xl">What our students say</h2>
        </div>

        <div className="testimonials bg-white mt-20 px-16 py-16 relative">
          <div className="slider-controls absolute top-1/2 left-[-10%]">
            <CircleButton />
          </div>
          <div className="wrapper w-[75%] mx-auto relative">
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
          <div className="slider-controls absolute top-1/2 right-[-10%]">
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
