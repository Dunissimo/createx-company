import React, { FC } from "react";
import Container from "../../components/Container";
import ErrorBoundary from "../../components/Indicators/ErrorBoundary";
import RegistrationForm from "../../components/SingleItem/RegistrationForm";

interface IProps {
  discount: number | string;
}

const Discount: FC<IProps> = ({ discount }) => {
  return (
    <ErrorBoundary>
      <Container>
        <div className="px-12 py-20 bg-[#FEDBD3]">
          <div className="mb-8 head flex flex-col lg:flex-row items-center text-center lg:text-left lg:justify-between">
            <p className="text-3xl font-black mb-8 lg:mb-0">
              {discount}% discount for early birds!
            </p>
            <div className="timer flex items-center gap-8">
              <div className="days text-center">
                <p className="text-xl">06</p>
                <p className="font-normal">days</p>
              </div>
              <div className="hours text-center">
                <p className="text-xl">18</p>
                <p className="font-normal">hours</p>
              </div>
              <div className="mins text-center">
                <p className="text-xl">24</p>
                <p className="font-normal">mins</p>
              </div>
              <div className="sec text-center">
                <p className="text-xl">12</p>
                <p className="font-normal">sec</p>
              </div>
            </div>
          </div>

          <RegistrationForm isFlex type="course" />
        </div>
      </Container>
    </ErrorBoundary>
  );
};

export default Discount;
