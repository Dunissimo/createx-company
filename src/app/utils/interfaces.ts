export interface ICourse {
  type: string;
  title: string;
  price: number;
  author: string;
  imgName: string;
  id: number;
}

export interface IEvent {
  date: {
    time: string;
    day: number;
    month: string;
  };
  text: {
    title: string;
    p: string;
  };
  id: number;
}

export interface IPost {
  type: string;
  imgName: string;
  details: {
    theme: string;
    date: string;
    duration?: string;
  };
  title: string;
  p: string;
  id: number;
}
export interface ITeam {
  imgName: string;
  name: string;
  job: string;
  id: number;
}
