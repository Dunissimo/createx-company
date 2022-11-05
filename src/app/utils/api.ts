import {
  fetchCourses,
  loadCourses,
  errorCourses,
} from "../../redux/coursesSlice";
import { AppDispatch } from "../../redux/store";
import { ICourse, IEvent, IPost } from "./interfaces";

const URL = "https://api.npoint.io/66466e607109c64c28f2";

// function getData(dispatch: AppDispatch, url: string) {
//   fetch(url)
//     .then((res) => {
//       dispatch(fetchCourses());
//       return res.json();
//     })
//     .then((data: ICourse[] | IEvent[] | IPost) => loadCourses(data))
//     .catch((reason) => {
//       console.error(`Something went wrong!`, reason);
//       errorCourses();
//     });
// }

// TODO Похоже, придется делать для каждого типа данных свой запрос с копированием кода.
// TODO Пока не понимаю, как сделать по принципам DRY
