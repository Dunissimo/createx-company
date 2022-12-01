import React, { FC, useEffect } from "react";
import Footer from "../../components/Reuse/Footer";
import ItemHeader from "../../components/SingleItem/ItemHeader";
import Navbar from "../../components/Reuse/Navbar";
import AboutEvent from "./AboutEvent";
import Speaker from "./Speaker";
import ForWhom from "../../components/SingleItem/ForWhom";
import Subscribe from "./Subscribe";
import Registration from "./Registration";
import OtherEvents from "./OtherEvents";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import ErrorIndicator from "../../components/Indicators/ErrorIndicator";
import LoadingIndicator from "../../components/Indicators/LoadingIndicator";
import { getEventsContent } from "../../utils/api";

const SingleEvent: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    getEventsContent(dispatch, +id!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const { loading, error, content } = useAppSelector((state) => state.event);
  const { title, themes, info, speaker, listForWhom } = content.data;

  if (loading)
    return (
      <>
        <Navbar />
        <LoadingIndicator />
      </>
    );

  if (error) {
    return (
      <div className="bg-[#bd1414]">
        <div className="bg-[#FEDBD3]">
          <Navbar />
        </div>
        <ErrorIndicator />
      </div>
    );
  }
  return (
    <div>
      <header className="bg-[#FEDBD3]">
        <Navbar />
        <ItemHeader type="Online Lecture" title={title} />
      </header>
      <AboutEvent themes={themes} info={info} />
      <Speaker speaker={speaker} />
      <ForWhom type="event" list={listForWhom} />
      <Subscribe />
      <Registration />
      <OtherEvents />
      <Footer />
    </div>
  );
};

export default SingleEvent;
