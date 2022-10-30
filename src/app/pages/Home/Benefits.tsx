import React, { FC } from "react";
import Title from "../../components/Title";

const Benefits: FC = () => {
  return (
    <section className="benefits mb-28">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Title text={{ h3: "Our benefits", h2: "That’s how we do it" }} />
        </div>

        <ul className="benefits-list mb-20 row flex items-center justify-between w-full">
          <li className="border border-[#FF3F3A] text-[#FF3F3A] px-12 py-3">
            Experienced Tutors
          </li>
          <li>Feedback & Support</li>
          <li>24/7 Online Library</li>
          <li>Community</li>
        </ul>
        <div className="body flex items-center">
          <div className="text w-1/2">
            <h2 className="text-4xl font-black">Only practicing tutors</h2>
            <p className="font-normal mt-6 w-3/4 text-[#424551]">
              Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames
              dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis
              mollis augue. Nunc, sodales tortor sit diam mi amet massa.
              Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id
              dignissim massa ut amet. Amet enim, nisi tempus vehicula.
            </p>
          </div>
          <div className="img w-1/2">
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
