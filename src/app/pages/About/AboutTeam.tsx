import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import TeamCard from "../../components/TeamCard";
import Title from "../../components/Title";
import { getTeam } from "../../utils/api";

const AboutTeam: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getTeam(dispatch);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { team, loading, error } = useAppSelector((state) => state.team);

  return (
    <div className="container mx-auto py-20">
      <div className="text-center mb-16">
        <Title text={{ h3: "Best tutors are all here", h2: "Meet our team" }} />
      </div>
      <div className="team grid grid-rows-2 grid-cols-4 gap-8">
        {team.map((tm) => {
          return <TeamCard key={tm.id} team={tm} />;
        })}
      </div>
    </div>
  );
};

export default AboutTeam;
