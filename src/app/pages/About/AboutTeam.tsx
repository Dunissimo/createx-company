import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Container from "../../components/Container";
import ErrorIndicator from "../../components/Indicators/ErrorIndicator";
import LoadingIndicator from "../../components/Indicators/LoadingIndicator";
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

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorIndicator />;

  return (
    <div className="py-20">
      <Container>
        <div className="text-center mb-16">
          <Title
            text={{ h3: "Best tutors are all here", h2: "Meet our team" }}
          />
        </div>
        <div className="team md:grid grid-rows-2 grid-cols-4 gap-8">
          {team.map((tm) => {
            return <TeamCard key={tm.id} team={tm} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default AboutTeam;
