import React, { FC } from "react";

const Certificate: FC = () => {
  return (
    <section className="relative">
      <div className="container py-24 mx-auto">
        <div className="left w-1/3 ">
          <h3 className="uppercase  tracking-[1px]">Createx certificate</h3>
          <h2 className="text-5xl font-black mt-2 mb-12">
            Your expertise will be confirmed
          </h2>
          <p className="text-[#424551] font-normal">
            We are accredited by international professional organizations and
            institutes:
          </p>
          <ul className="flex items-center gap-14 mt-10">
            <li>
              <img src="./images/homepage/certificate/strategy.png" alt="" />
            </li>
            <li>
              <img src="./images/homepage/certificate/consulting.png" alt="" />
            </li>
            <li>
              <img src="./images/homepage/certificate/national.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <img
        className="absolute top-0 right-0 mt-24"
        src="./images/homepage/certificate/certificate.png"
        alt="certificate"
      />
    </section>
  );
};

export default Certificate;
