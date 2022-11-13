import React, { FC } from "react";

const Statistics: FC = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="watch flex items-center gap-4">
        <button onClick={() => alert("Пока что не работает!")}>
          <img src="/images/homepage/header/small.png" alt="" />
        </button>
        <p>Watch video</p>
      </div>
      <div className="flex items-center mt-10">
        <div className="left w-1/2">
          <img
            className="w-full"
            src="./images/aboutPage/notebook.png"
            alt=""
          />
        </div>
        <div className="right w-1/2 flex justify-center">
          <ul className="statistics statistics-about flex flex-col gap-4">
            <li>
              <span>1200</span>
              <p>students graduated</p>
            </li>
            <li>
              <span>84</span>
              <p>completed courses</p>
            </li>
            <li>
              <span>16</span>
              <p>qualified tutors</p>
            </li>
            <li>
              <span>5</span>
              <p>years of experience</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
