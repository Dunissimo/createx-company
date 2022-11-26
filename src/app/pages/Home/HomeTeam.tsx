import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import CircleButton from "../../components/Buttons/CircleButton";
import Container from "../../components/Container";
import TeamCard from "../../components/TeamCard";
import Title from "../../components/Title";
import { getTeam } from "../../utils/api";

interface IProps {
  count?: number;
}

const HomeTeam: FC<IProps> = ({ count }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getTeam(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { team, loading, error } = useAppSelector((state) => state.team);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error!</h2>;

  return (
    <section className="bg-[#F4F5F7] py-32">
      <Container>
        <div className="row flex flex-col items-center text-center lg:text-left  lg:flex-row lg:items-end justify-between my-16">
          <Title
            text={{
              h3: "BEST TUTORS ARE ALL HERE",
              h2: "Meet our team",
            }}
          />
          <div className="slider-controls flex">
            <CircleButton />
            <CircleButton isRotate />
          </div>
        </div>
        <div className="team flex items-center justify-between">
          {team.map((tm) => {
            if (count) {
              if (tm.id > count) return null;
            }
            return <TeamCard key={tm.id} team={tm} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export default HomeTeam;
