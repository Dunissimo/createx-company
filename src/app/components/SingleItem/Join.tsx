import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface IProps {
  children: ReactNode;
  type: string;
}

const Join: FC<IProps> = ({ type, children }) => {
  return (
    <div className="flex lg:justify-end">
      <div className="lg:w-2/3 blocks px-8 py-10 shadow-regular border-2 border-[#E5E8ED]">
        {children}
        <Link to="/">
          <button className="w-full mt-6 py-3 rounded-lg bg-gradient-to-l from-[#ff3f3a] to-[#f75e05] text-white hover:drop-shadow-xl hover:scale-95">
            Join the {type}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
