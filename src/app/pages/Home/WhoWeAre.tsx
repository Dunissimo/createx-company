import React, { FC } from "react";
import { Link } from "react-router-dom";
import FillButton from "../../components/Buttons/FillButton";
import Title from "../../components/Title";

const WhoWeAre: FC = () => {
  return (
    <section className="whoWeAre py-32">
      <div className="container mx-auto">
        <div className="row lg:flex items-start justify-between">
          <div className="left h-full w-full lg:w-1/2">
            <img
              className="w-full"
              src="./images/homepage/whoWeAre/who.png"
              alt="whoweare"
            />
          </div>
          <div className="right lg:w-1/2 mx-4 mt-8 lg:ml-20">
            <Title
              text={{
                h3: "WHO WE ARE",
                h2: "Why Createx?",
              }}
            />
            <ul className="whoWeAre-list lg:w-2/3 pl-6 mt-16">
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
