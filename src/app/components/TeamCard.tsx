import React, { FC } from "react";
import { ITeam } from "../utils/interfaces";

interface IProps {
  team: ITeam;
}

const TeamCard: FC<IProps> = ({ team }) => {
  return (
    <div className="team rounded text-center">
      <div className="img relative px-6 pt-6">
        <div className="hidden bg absolute bottom-[-0.25rem] left-0 w-full h-full"></div>
        <img src={`./images/homepage/team/team/${team.imgName}`} alt="" />
        <ul className="hidden items-center gap-4 text-white absolute bottom-3 right-2">
          <li>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32px"
                height="32px"
              >
                <path d="M 16 4 C 9.3844276 4 4 9.3844276 4 16 C 4 22.615572 9.3844276 28 16 28 C 22.615572 28 28 22.615572 28 16 C 28 9.3844276 22.615572 4 16 4 z M 16 6 C 21.534692 6 26 10.465308 26 16 C 26 21.027386 22.311682 25.161277 17.488281 25.878906 L 17.488281 18.916016 L 20.335938 18.916016 L 20.783203 16.023438 L 17.488281 16.023438 L 17.488281 14.443359 C 17.488281 13.242359 17.882859 12.175781 19.005859 12.175781 L 20.810547 12.175781 L 20.810547 9.6523438 C 20.493547 9.6093438 19.822688 9.515625 18.554688 9.515625 C 15.906688 9.515625 14.355469 10.913609 14.355469 14.099609 L 14.355469 16.023438 L 11.632812 16.023438 L 11.632812 18.916016 L 14.355469 18.916016 L 14.355469 25.853516 C 9.6088556 25.070647 6 20.973047 6 16 C 6 10.465308 10.465308 6 16 6 z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32px"
                height="32px"
              >
                <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32px"
                height="32px"
              >
                <path d="M 9.6113281 5 C 7.0767063 5 5 7.0767063 5 9.6113281 L 5 22.388672 C 5 24.923294 7.0767063 27 9.6113281 27 L 22.388672 27 C 24.923294 27 27 24.923294 27 22.388672 L 27 9.6113281 C 27 7.0767063 24.923294 5 22.388672 5 L 9.6113281 5 z M 9.6113281 7 L 22.388672 7 C 23.84205 7 25 8.15795 25 9.6113281 L 25 22.388672 C 25 23.84205 23.84205 25 22.388672 25 L 9.6113281 25 C 8.15795 25 7 23.84205 7 22.388672 L 7 9.6113281 C 7 8.15795 8.15795 7 9.6113281 7 z M 17 9 L 17 19 C 17 20.116666 16.116666 21 15 21 C 13.883334 21 13 20.116666 13 19 C 13 17.883334 13.883334 17 15 17 L 15 15 C 12.802666 15 11 16.802666 11 19 C 11 21.197334 12.802666 23 15 23 C 17.197334 23 19 21.197334 19 19 L 19 12.888672 C 19.827834 13.529766 20.809277 13.98411 21.927734 14 L 21.957031 12 C 20.310764 11.976611 19 10.654231 19 9 L 17 9 z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <h3 className="text-black mt-4">{team.name}</h3>
      <h4 className="text-[#787A80]">{team.job}</h4>
    </div>
  );
};

export default TeamCard;
