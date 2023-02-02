import { FC, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { useAlert } from "../utils/hooks";
import FillButton from "./Buttons/FillButton";
import SocialMediaIcons from "./SocialMediaIcons";
import Alert from "./Feedback/Alert";

interface IProps {
  close: () => void;
}

const Modal: FC<IProps> = ({ close }) => {
  const { isOpen, showAlert } = useAlert(2500);

  const clickHandler: MouseEventHandler = () => {
    close();
  };

  return (
    <>
      <div onClick={clickHandler} className={`wrapper open`}></div>
      <div className="modal open w-full lg:w-auto absolute z-50 lg:top-[5%] left-[50%] translate-x-[-50%] bg-white">
        <div className="top mb-8 border-b-2 border-gray-300 px-6 py-4 2xlpx-12 2xl:py-12">
          <div className="modal-container  mx-auto">
            <div className="text-center mb-6 relative">
              <div className="close-modal absolute top-2 right-2">
                <button className="hover:text-[gray]" onClick={clickHandler}>
                  &#x2715;
                </button>
              </div>
              <h2 className="text-2xl mb-4">Sign in</h2>
              <p className="opacity-50 text-base">
                Sign in to your account using email and password provided during
                registration.
              </p>
            </div>
            <form action="post">
              <div className="flex flex-col gap-2 mb-4">
                <label className="font-normal" htmlFor="email">
                  Email
                </label>
                <input
                  className="register-input"
                  placeholder="Your working email"
                  type="email"
                  name="email"
                  id="email-modal"
                />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <label className="font-normal" htmlFor="password">
                  Password
                </label>
                <input
                  className="register-input"
                  placeholder="Password"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input type="checkbox" name="keepSignIn" id="keepSignIn" />
                  <label htmlFor="keepSignIn" className="font-normal ml-2">
                    Keep me signed in
                  </label>
                </div>
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    showAlert();
                  }}
                  className="font-normal text-base text-[#FF3F3A]"
                >
                  Forgot password?
                </Link>
              </div>
              <FillButton
                text="Sign in"
                onClick={(e) => {
                  e.preventDefault();
                  showAlert();
                }}
              />
              <Alert
                text="Эта функция появится позже"
                position="right-bottom"
                type="info"
                isOpen={isOpen}
              />
            </form>
            <p className="font-normal mt-4">
              Don't have an account?{" "}
              <Link className="text-[#FF3F3A]" to="/">
                Sign up
              </Link>
            </p>
          </div>
        </div>
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
