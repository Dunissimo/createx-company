import React, { FC } from "react";
import { SiFacebook, SiInstagram, SiTiktok } from "react-icons/si";
import { Link } from "react-router-dom";
import { ITeam } from "../utils/interfaces";

interface IProps {
  team: ITeam;
}

const TeamCard: FC<IProps> = ({ team }) => {
  return (
    <div className="team rounded text-center px-8 md:px-0 mb-8 md:mb-0 overflow-hidden">
      <div className="img flex justify-center relative px-6 pt-6">
        <div className="bg absolute bottom-[-0.25rem] left-0 w-full h-0 rounded"></div>
        <img src={`./images/homepage/team/team/${team.imgName}`} alt="" />
        <ul className="hidden items-center gap-4 text-white absolute bottom-3 right-2">
          <li>
            <Link to="/">
              <SiFacebook size="1.2rem" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <SiInstagram size="1.2rem" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <SiTiktok size="1.2rem" />
            </Link>
          </li>
        </ul>
      </div>

      <h3 className="text-black mt-4">{team.name}</h3>
      <h4 className="text-[#787A80] whitespace-nowrap ">{team.job}</h4>
    </div>
  );
};

export default TeamCard;
