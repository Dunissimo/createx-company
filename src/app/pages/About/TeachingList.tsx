import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
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

  if (loading) <h2>Loading...</h2>;
  if (error) <h2>Error!</h2>;

  return (
    <div className="container mx-auto py-20">
      <div className="text-center mb-16">
        <Title text={{ h3: "our main directions", h2: "What do we teach" }} />
      </div>
      <div className="teaching-list grid gap-8 grid-rows-2 grid-cols-3">
        {types.map((type, i) => (
          <TeachingItem key={courses[i].id} type={type} imgName={images[i]} />
        ))}
        <div className="empty-item bg-gray-300 text-center flex flex-col justify-center items-center">
          <p className="w-1/2 text-[#424551]">
            New studying program coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeachingList;
