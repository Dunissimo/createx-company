import React, { FC } from "react";

interface IProps {
  title: string;
}

const CourseHeader: FC<IProps> = ({ title }) => {
  return (
    <div className="container mx-auto py-20 text-center">
      <h2 className="text-[#FF3F3A] uppercase mb-4">Course</h2>
      <h3 className="text-2xl md:text-5xl font-black w-[90%] mx-auto">
        {title}
      </h3>
    </div>
  );
};

export default CourseHeader;
