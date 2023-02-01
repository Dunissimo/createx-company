import { FC } from "react";
import Container from "../Container";
import Slider from "../Slider";
import Title from "../Title";

const Testimonials: FC = () => {
  return (
    <section className="py-24 bg-[#F4F5F7]">
      <div className="lg:max-w-[70%] mx-auto">
        <Container>
          <div className="text-center mb-16">
            <Title
              text={{
                h3: "TESTIMONIALS",
                h2: "What our students say",
              }}
            />
          </div>

          <Slider slidesToShow={1}>
            <div className="testimonials bg-white py-4 px-4 lg:px-16 lg:py-16 relative">
              <div className="wrapper w-[95%] lg:w-[75%] mx-auto relative lg:before:content-[url('/public/images/homepage/testimonials/braces.png')] before:absolute before:top-0 before:left-[-15%] lg:before:left-[-7%]">
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Justo, amet lectus quam viverra mus lobortis fermentum amet,
                  eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus
                  ornare turpis quis non. Congue tortor in euismod vulputate
                  etiam eros. Pulvinar neque pharetra arcu diam maecenas diam
                  integer in.
                </p>
                <div className="row flex">
                  <img
                    src={"./images/homepage/testimonials/testi.png"}
                    alt=""
                  />
                  <div className="text ml-5">
                    <p>Eleanor Pena</p>
                    <p className="text-[#787A80]">Position, Course</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials bg-white py-4 px-4 lg:px-16 lg:py-16 relative">
              <div className="wrapper w-[95%] lg:w-[75%] mx-auto relative lg:before:content-[url('/public/images/homepage/testimonials/braces.png')] before:absolute before:top-0 before:left-[-15%] lg:before:left-[-7%]">
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Justo, amet lectus quam viverra mus lobortis fermentum amet,
                  eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus
                  ornare turpis quis non. Congue tortor in euismod vulputate
                  etiam eros. Pulvinar neque pharetra arcu diam maecenas diam
                  integer in.
                </p>
                <div className="row flex">
                  <img
                    src={"./images/homepage/testimonials/testi.png"}
                    alt=""
                  />
                  <div className="text ml-5">
                    <p>Eleanor Pena</p>
                    <p className="text-[#787A80]">Position, Course</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials bg-white py-4 px-4 lg:px-16 lg:py-16 relative">
              <div className="wrapper w-[95%] lg:w-[75%] mx-auto relative lg:before:content-[url('/public/images/homepage/testimonials/braces.png')] before:absolute before:top-0 before:left-[-15%] lg:before:left-[-7%]">
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Justo, amet lectus quam viverra mus lobortis fermentum amet,
                  eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus
                  ornare turpis quis non. Congue tortor in euismod vulputate
                  etiam eros. Pulvinar neque pharetra arcu diam maecenas diam
                  integer in.
                </p>
                <div className="row flex">
                  <img
                    src={"./images/homepage/testimonials/testi.png"}
                    alt=""
                  />
                  <div className="text ml-5">
                    <p>Eleanor Pena</p>
                    <p className="text-[#787A80]">Position, Course</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials bg-white py-4 px-4 lg:px-16 lg:py-16 relative">
              <div className="wrapper w-[95%] lg:w-[75%] mx-auto relative lg:before:content-[url('/public/images/homepage/testimonials/braces.png')] before:absolute before:top-0 before:left-[-15%] lg:before:left-[-7%]">
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Justo, amet lectus quam viverra mus lobortis fermentum amet,
                  eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus
                  ornare turpis quis non. Congue tortor in euismod vulputate
                  etiam eros. Pulvinar neque pharetra arcu diam maecenas diam
                  integer in.
                </p>
                <div className="row flex">
                  <img
                    src={"./images/homepage/testimonials/testi.png"}
                    alt=""
                  />
                  <div className="text ml-5">
                    <p>Eleanor Pena</p>
                    <p className="text-[#787A80]">Position, Course</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>

          {/* TODO: сделать dots */}

          {/* <div className="dots flex items-center gap-4 mt-16 w-1/2 mx-auto justify-center">
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
          </div> */}
        </Container>
      </div>
    </section>
  );
};

export default Testimonials;
