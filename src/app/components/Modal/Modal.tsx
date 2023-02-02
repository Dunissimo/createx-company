import { FC, MouseEventHandler, useState } from "react";
import SocialMediaIcons from "../SocialMediaIcons";
import SignIn from "./SignInModal";
import SignUp from "./SignUpModal";

interface IProps {
  close: () => void;
}

const Modal: FC<IProps> = ({ close }) => {
  const [type, setType] = useState("in");

  const closeHandler: MouseEventHandler = () => {
    close();
  };

  const changeTypeHandler = () => {
    switch (type) {
      case "in":
        setType("up");
        break;
      case "up":
        setType("in");
        break;
    }
  };

  return (
    <>
      <div onClick={closeHandler} className={`wrapper open`}></div>
      <div className="modal open w-full lg:w-auto absolute z-50 lg:top-[5%] left-[50%] translate-x-[-50%] bg-white">
        <div className="close-modal absolute top-2 right-2">
          <button className="hover:text-[gray]" onClick={closeHandler}>
            &#x2715;
          </button>
        </div>
        {type === "in" ? (
          <SignIn clickHandler={changeTypeHandler} />
        ) : (
          <SignUp clickHandler={changeTypeHandler} />
        )}
        <div className="bottom text-center pb-8">
          <h3 className="opacity-50 font-normal">Or sign in with</h3>
          <div className="social-media flex justify-center mt-4">
            <SocialMediaIcons theme="black" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
