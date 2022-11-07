import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  errorTeam,
  fetchTeam,
  loadTeam,
} from "../../../redux/slices/teamSlice";
import CircleButton from "../../components/Buttons/CircleButton";
import TeamCard from "../../components/TeamCard";
import Title from "../../components/Title";
import { BASE_URL, get } from "../../utils/api";

const HomeTeam: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    get(`${BASE_URL}/team`, dispatch, {
      fetchAction: fetchTeam,
      loadAction: loadTeam,
      errorAction: errorTeam,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = useAppSelector((state) => state.team);
  const { team, loading, error } = data;

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error!</h2>;

  return (
    <section className="bg-[#F4F5F7] py-32">
      <div className="container mx-auto">
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
            if (tm.id > 4) return null;
            return <TeamCard key={tm.id} team={tm} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeTeam;
