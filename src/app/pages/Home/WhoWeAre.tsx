import React, { FC } from "react";
import { Link } from "react-router-dom";
import FillButton from "../../components/Buttons/FillButton";

const WhoWeAre: FC = () => {
  return (
    <section className="whoWeAre py-32">
      <div className="container mx-auto">
        <div className="row flex items-start justify-between">
          <div className="left h-full w-1/2">
            <img src="./images/homepage/whoWeAre/who.png" alt="whoweare" />
          </div>
          <div className="right w-1/2 ml-20">
            <h3 className="uppercase tracking-[1px]">Who we are</h3>
            <h2 className="text-5xl font-black mb-10">Why Createx?</h2>
            <ul className="whoWeAre-list w-2/3 pl-6">
              <li>
                A fermentum in morbi pretium aliquam adipiscing donec tempus.
              </li>
              <li>Vulputate placerat amet pulvinar lorem nisl.</li>
              <li>
                Consequat feugiat habitant gravida quisque elit bibendum id
                adipiscing sed.
              </li>
              <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>
              <li>Tincidunt sagittis neque sem ac eget.</li>
              <li>
                Ultricies amet justo et eget quisque purus vulputate dapibus
                tortor.
              </li>
            </ul>
            <Link to="/about">
              <FillButton text="More about us" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
