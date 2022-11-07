import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
} from "@reduxjs/toolkit";

import { AppDispatch } from "../../redux/store";

export const BASE_URL = "https://api.npoint.io/66466e607109c64c28f2";

interface IGet {
  fetchAction: ActionCreatorWithoutPayload;
  loadAction: ActionCreatorWithPayload<any[], string>;
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
