import React, { FC } from "react";
import { Link } from "react-router-dom";
import FillButton from "../../components/Buttons/FillButton";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Title from "../../components/Title";

const WhoWeAre: FC = () => {
  const left = (
    <img
      className="w-full"
      src="./images/homepage/whoWeAre/who.png"
      alt="whoweare"
    />
  );

  const right = (
    <div className="ml-12">
      <Title
        text={{
          h3: "WHO WE ARE",
          h2: "Why Createx?",
        }}
      />
      <ul className="whoWeAre-list lg:w-2/3 pl-6 mt-16">
        <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
        <li>Vulputate placerat amet pulvinar lorem nisl.</li>
        <li>
          Consequat feugiat habitant gravida quisque elit bibendum id adipiscing
          sed.
        </li>
        <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>
        <li>Tincidunt sagittis neque sem ac eget.</li>
        <li>
          Ultricies amet justo et eget quisque purus vulputate dapibus tortor.
        </li>
      </ul>
      <Link to="/about">
        <FillButton text="More about us" />
      </Link>
    </div>
  );

  return (
    <section className="py-32">
      <Container>
        <Row left={left} right={right} />
      </Container>
    </section>
  );
};

export default WhoWeAre;
