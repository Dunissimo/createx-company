import React, { FC } from "react";
import Container from "../../components/Container";
import Title from "../../components/Title";
import { ISteps } from "../../utils/interfaces";

interface IProps {
  steps: ISteps;
}

const LearningProcess: FC<IProps> = ({ steps }) => {
  return (
    <div className="py-20">
      <Container>
        <div className="text-center">
          <Title text={{ h3: "main steps", h2: "Online learning process" }} />
        </div>
        <div className="steps flex flex-col lg:flex-row items-start gap-8 mt-20 justify-center">
          <div className="step lg:w-1/4">
            <div className="head w-full flex items-center">
              <h2 className="text-5xl font-black opacity-30 mr-4">01</h2>
              <hr className="w-full border-dashed border-2 border-x-none border-b-none" />
            </div>
            <h3 className="text-xl mt-4 mb-2">{steps.first.head}</h3>
            <p className="opacity-50">{steps.first.p}</p>
          </div>
          <div className="step lg:w-1/4">
            <div className="head w-full flex items-center">
              <h2 className="text-5xl font-black opacity-30 mr-4">02</h2>
              <hr className="w-full border-dashed border-2 border-x-none border-b-none" />
            </div>
            <h3 className="text-xl mt-4 mb-2">{steps.second.head}</h3>
            <p className="opacity-50">{steps.second.p}</p>
          </div>
          <div className="step lg:w-1/4">
            <div className="head w-full flex items-center">
              <h2 className="text-5xl font-black opacity-30 mr-4">03</h2>
              <hr className="w-full border-dashed border-2 border-x-none border-b-none" />
            </div>
            <h3 className="text-xl mt-4 mb-2">{steps.third.head}</h3>
            <p className="opacity-50">{steps.third.p}</p>
          </div>
          <div className="step lg:w-1/4">
            <div className="head w-full flex items-center">
              <h2 className="text-5xl font-black mr-4 text-[#FF3F3A]">04</h2>
            </div>
            <h3 className="text-xl mt-4 mb-2">{steps.fourth.head}</h3>
            <p className="opacity-50">{steps.fourth.p}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LearningProcess;
