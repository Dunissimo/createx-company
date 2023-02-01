import React, { FC } from "react";
import Container from "../../components/Container";
import Title from "../../components/Title";

const CoreValues: FC = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="text-center mb-16">
          <Title text={{ h3: "We always stand for", h2: "Our core values" }} />
        </div>
        <div className="cores w-2/3 mx-auto flex flex-col md:flex-row gap-8 md:gap-0 items-center">
          <div className="cores-item">
            <img src="./images/aboutPage/cores/structure.svg" alt="" />
            <h3>Structured Approach</h3>
            <p>
              Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.{" "}
            </p>
          </div>
          <div className="cores-item">
            <img src="./images/aboutPage/cores/chat.svg" alt="" />
            <h3>Structured Approach</h3>
            <p>
              Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.{" "}
            </p>
          </div>
          <div className="cores-item">
            <img src="./images/aboutPage/cores/target.svg" alt="" />
            <h3>Structured Approach</h3>
            <p>
              Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.{" "}
            </p>
          </div>
          <div className="cores-item">
            <img src="./images/aboutPage/cores/calendar.svg" alt="" />
            <h3>Structured Approach</h3>
            <p>
              Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.{" "}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CoreValues;
