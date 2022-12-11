import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Container: FC<IProps> = ({ children }) => {
  return <div className="container px-4 mx-auto">{children}</div>;
};

export default Container;
