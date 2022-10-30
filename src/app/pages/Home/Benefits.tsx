import React, { FC } from "react";
import Title from "../../components/Title";

const Benefits: FC = () => {
  return (
    <section className="benefits mb-28">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Title text={{ h3: "Our benefits", h2: "That’s how we do it" }} />
        </div>

        <ul className="benefits-list w-full lg:mx-8 mb-20 text-center flex flex-col gap-4 md:flex-row md:gap-0 items-center justify-between">
          <li className="w-1/2 md:w-auto border border-[#FF3F3A] text-[#FF3F3A] rounded md:mx-4 px-2 py-1 xl:px-12 xl:py-3">
            Experienced Tutors
          </li>
          <li>Feedback & Support</li>
          <li>24/7 Online Library</li>
          <li>Community</li>
        </ul>
        <div className="body mx-4 lg:mx-0 flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-4xl font-black">Only practicing tutors</h2>
            <p className="font-normal mt-6 md:w-3/4 text-[#424551]">
              Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames
              dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis
              mollis augue. Nunc, sodales tortor sit diam mi amet massa.
              Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id
              dignissim massa ut amet. Amet enim, nisi tempus vehicula.
            </p>
          </div>
          <div className="img md:w-1/2 mt-6 md:mt-0">
            <img
              src="./images/homepage/benefits/benefits-illustration.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
