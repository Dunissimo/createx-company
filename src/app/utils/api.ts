import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
} from "@reduxjs/toolkit";
import {
  errorCourseContent,
  fetchCourseContent,
  loadCourseContent,
} from "../../redux/slices/coursesContentSlice";
import {
  errorCourses,
  fetchCourses,
  loadCourses,
} from "../../redux/slices/coursesSlice";
import {
  errorEvents,
  fetchEvents,
  loadEvents,
} from "../../redux/slices/eventsSlice";
import { errrorJobs, fetchJobs, loadJobs } from "../../redux/slices/jobsSlice";
import {
  errorPosts,
  fetchPosts,
  loadPosts,
} from "../../redux/slices/postsSlice";
import { fetchTeam, loadTeam, errorTeam } from "../../redux/slices/teamSlice";

import { AppDispatch } from "../../redux/store";

export const BASE_URL = "https://api.npoint.io/66466e607109c64c28f2";

interface IGet {
  fetchAction: ActionCreatorWithoutPayload;
  loadAction:
    | ActionCreatorWithPayload<any[], string>
    | ActionCreatorWithPayload<any, string>;
  errorAction: ActionCreatorWithoutPayload;
}

export const get = (
  url: string,
  dispatch: AppDispatch,
  { fetchAction, loadAction, errorAction }: IGet
) => {
  fetch(url)
    .then((res) => {
      dispatch(fetchAction());
      return res.json();
    })
    .then((data: any) => dispatch(loadAction(data)))
    .catch((reason) => {
      dispatch(errorAction());
      console.error(`Something went wrong!`, reason);
    });
};

export const getCourses = (dispatch: AppDispatch) => {
  get(`${BASE_URL}/courses`, dispatch, {
    fetchAction: fetchCourses,
    loadAction: loadCourses,
    errorAction: errorCourses,
  });
};

export const getCourseContent = (dispatch: AppDispatch, id: number) => {
  get(`${BASE_URL}/courses-content/${id - 1}/`, dispatch, {
    fetchAction: fetchCourseContent,
    loadAction: loadCourseContent,
    errorAction: errorCourseContent,
  });
};

export const getEvents = (dispatch: AppDispatch) => {
  get(`${BASE_URL}/events`, dispatch, {
    fetchAction: fetchEvents,
    loadAction: loadEvents,
    errorAction: errorEvents,
  });
};

export const getEventsContent = (dispatch: AppDispatch, id: number) => {
  get(`${BASE_URL}/events-content/${id - 1}/`, dispatch, {
    fetchAction: fetchCourseContent,
    loadAction: loadCourseContent,
    errorAction: errorCourseContent,
  });
};

export const getPosts = (dispatch: AppDispatch) => {
  get(`${BASE_URL}/posts`, dispatch, {
    fetchAction: fetchPosts,
    loadAction: loadPosts,
    errorAction: errorPosts,
  });
};

export const getTeam = (dispatch: AppDispatch) => {
  get(`${BASE_URL}/team`, dispatch, {
    fetchAction: fetchTeam,
    loadAction: loadTeam,
    errorAction: errorTeam,
  });
};

export const getJobs = async (dispatch: AppDispatch) => {
  get(`${BASE_URL}/jobs`, dispatch, {
    fetchAction: fetchJobs,
    loadAction: loadJobs,
    errorAction: errrorJobs,
  });
};
