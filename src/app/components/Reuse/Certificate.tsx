import React, { FC } from "react";
import Container from "../Container";
import Title from "../Title";

const Certificate: FC = () => {
  return (
    <section className="relative py-20">
      <Container>
        <div className="left lg:w-1/3 ">
          <Title
            text={{
              h3: "CREATEX CERTIFICATE",
              h2: "Your expertise will be confirmed",
            }}
          />
          <p className="text-[#424551] font-normal mt-16">
            We are accredited by international professional organizations and
            institutes:
          </p>
          <ul className="flex items-center gap-14 mt-10">
            <li>
              <img src={"./images/homepage/certificate/strategy.png"} alt="" />
            </li>
            <li>
              <img
                src={"./images/homepage/certificate/consulting.png"}
                alt=""
              />
            </li>
            <li>
              <img src={"./images/homepage/certificate/national.png"} alt="" />
            </li>
          </ul>
        </div>
      </Container>
      <img
        className="hidden z-10 lg:block absolute top-0 right-0 mt-24 w-[60%] h-[60%] xl:w-auto xl:h-auto "
        src={"./images/homepage/certificate/certificate.png"}
        alt="certificate"
      />
    </section>
  );
};

export default Certificate;
