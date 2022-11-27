import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import Container from "../../components/Container";
import ErrorBoundary from "../../components/Indicators/ErrorBoundary";
import ErrorIndicator from "../../components/Indicators/ErrorIndicator";
import LoadingIndicator from "../../components/Indicators/LoadingIndicator";
import Title from "../../components/Title";
import { getCourses } from "../../utils/api";
import TeachingItem from "./TeachingItem";

const images = [
  "image-teach-5.png",
  "image-teach-4.png",
  "image-teach-3.png",
  "image-teach-2.png",
  "image-teach-1.png",
];

const TeachingList: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCourses(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { courses, loading, error } = useAppSelector((state) => state.courses);

  const temp = courses.map((course) => course.type);
  const types = Array.from(new Set(temp));

  if (loading) return <LoadingIndicator />;

  if (error) return <ErrorIndicator />;

  return (
    <ErrorBoundary>
      <div className="py-20">
        <Container>
          <div className="text-center mb-16">
            <Title
              text={{ h3: "our main directions", h2: "What do we teach" }}
            />
          </div>
          <div className="teaching-list px-4 md:px-0 md:grid gap-8 grid-rows-2 grid-cols-3">
            {types.map((type, i) => (
              <TeachingItem
                key={courses[i].id}
                type={type}
                imgName={images[i]}
              />
            ))}
            <div className="empty-item bg-gray-300 text-center flex flex-col justify-center items-center mt-8 md:mt-0">
              <p className="w-1/2 text-[#424551]">
                New studying program coming soon...
              </p>
            </div>
          </div>
        </Container>
      </div>
    </ErrorBoundary>
  );
};

export default TeachingList;
