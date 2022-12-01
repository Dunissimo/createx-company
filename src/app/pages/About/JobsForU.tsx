import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import Container from "../../components/Container";
import ErrorBoundary from "../../components/Indicators/ErrorBoundary";
import ErrorIndicator from "../../components/Indicators/ErrorIndicator";
import LoadingIndicator from "../../components/Indicators/LoadingIndicator";
import Title from "../../components/Title";
import { getJobs } from "../../utils/api";

const JobsForU: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getJobs(dispatch);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { jobs, loading, error } = useAppSelector((state) => state.jobs);

  if (loading) return <LoadingIndicator />;

  if (error) return <ErrorIndicator />;

  return (
    <ErrorBoundary>
      <div className="bg-[#F4F5F7] py-20">
        <Container>
          <div className="text-center mb-16">
            <Title
              text={{ h3: "best jobs for you", h2: "Our students work here" }}
            />
          </div>
          <div className="jobs grid grid-cols-2 md:grid-rows-2 md:grid-cols-5">
            {jobs.map((job, i) => (
              <Link to="/" key={i} className="flex justify-center">
                <img src={`./images/aboutPage/jobs/${job}`} alt="" />
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </ErrorBoundary>
  );
};

export default JobsForU;
