export interface ILesson {
  numberOfLesson: number | string;
  head: string;
  text: string;
}

export interface ICurator {
  name: string;
  job: string;
  rating: number;
  coursesCount: number;
  studentsCount: number;
  text: string;
  socialMediaLinks: string[];
}

export interface ISteps {
  first: {
    head: string;
    p: string;
  };
  second: {
    head: string;
    p: string;
  };
  third: {
    head: string;
    p: string;
  };
  fourth: {
    head: string;
    p: string;
  };
}

export interface ICoursesContent {
  id: number;
  content: {
    title: string;
    discount: number;
    info: {
      date: string;
      duration: string;
      price: number;
    };
    about: string;
    willLearn: string[];
    curator: ICurator;
    steps: ISteps;
    listForWhom: string[];
    whatWillULearn: {
      lessons: ILesson[];
    };
  };
}

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
