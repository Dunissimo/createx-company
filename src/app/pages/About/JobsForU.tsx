import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import Title from "../../components/Title";
import { getJobs } from "../../utils/api";

const JobsForU: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getJobs(dispatch);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { jobs, loading, error } = useAppSelector((state) => state.jobs);

  if (loading) <h2>Loading...</h2>;
  if (error) <h2>Error!</h2>;

  return (
    <div className="bg-[#F4F5F7]">
      <div className="container mx-auto py-20">
        <div className="text-center mb-16">
          <Title
            text={{ h3: "best jobs for you", h2: "Our students work here" }}
          />
        </div>
        <div className="jobs grid grid-rows-2 grid-cols-5">
          {jobs.map((job, i) => (
            <Link to="/" key={i} className="flex justify-center">
              <img src={`./images/aboutPage/jobs/${job}`} alt="" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsForU;
