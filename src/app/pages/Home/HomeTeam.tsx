import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Container from "../../components/Container";
import ErrorIndicator from "../../components/Indicators/ErrorIndicator";
import LoadingIndicator from "../../components/Indicators/LoadingIndicator";
import Slider from "../../components/Slider";
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

  if (loading) return <LoadingIndicator />;
  if (error)
    return (
      <div className="mt-32">
        <ErrorIndicator />
      </div>
    );

  const throwErr = () => {
    throw new Error("lox");
  };

  return (
    <section className="bg-[#F4F5F7] py-32">
      <Container>
        <div
          onClick={throwErr}
          className="row flex flex-col items-center text-center lg:text-left  lg:flex-row lg:items-end justify-between my-16"
        >
          <Title
            text={{
              h3: "BEST TUTORS ARE ALL HERE",
              h2: "Meet our team",
            }}
          />
        </div>
        <Slider slidesToShow={3}>
          {team.map((tm) => {
            return (
              <div key={tm.id} className="px-2">
                <TeamCard team={tm} />
              </div>
            );
          })}
        </Slider>
      </Container>
    </section>
  );
};

export default HomeTeam;
