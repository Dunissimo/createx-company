import React, { FC } from "react";
import Title from "../../components/Title";

const Process: FC = () => {
  return (
    <div className="container mx-auto py-20 ">
      <Title text={{ h3: "Studying process", h2: "That`s how we do it" }} />
      <div className="flex items-center">
        <div className="left w-1/2">
          <div className="process flex flex-col">
            <div className="step1 step">
              <h4>Step 1</h4>
              <h3>Watching online video lectures</h3>
              <p>
                Aliquam turpis viverra quam sit interdum blandit posuere
                pellentesque. Nisl, imperdiet gravida massa neque.
              </p>
            </div>
            <div className="step2 step">
              <h4>Step 2</h4>
              <h3>Passing test</h3>
              <p>
                Facilisis pellentesque quis accumsan ultricies. Eu egestas eget
                feugiat lacus, amet, sollicitudin egestas laoreet etiam.
              </p>
            </div>
            <div className="step3 step">
              <h4>Step 3</h4>
              <h3>Curator`s feedback</h3>
              <p>
                Eget amet, enim pharetra leo egestas nisi, odio imperdiet
                facilisis. Aliquet orci varius volutpat egestas facilisi
                lobortis.
              </p>
            </div>
            <div className="step4 step">
              <h4>Step 4</h4>
              <h3>Corrections if needed</h3>
              <p>
                Non tempor pulvinar tincidunt aliquam. Placerat ultricies
                malesuada dui auctor.
              </p>
            </div>
          </div>
        </div>
        <div className="right w-1/2">
          <img
            className="w-full"
            src="./images/aboutPage/illustration-2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Process;
