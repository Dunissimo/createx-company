import { FC, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { useAlert } from "../../utils/hooks";
import FillButton from "../Buttons/FillButton";
import Alert from "../Feedback/Alert";

interface IProps {
  clickHandler: MouseEventHandler;
}

const SignIn: FC<IProps> = ({ clickHandler }) => {
  const { isOpen, showAlert } = useAlert(2500);

  return (
    <div className="top mb-8 border-b-2 border-gray-300 px-6 py-4 2xlpx-12 2xl:py-12">
      <div className="modal-container  mx-auto">
        <div className="text-center mb-6 relative">
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
          <button className="text-[#FF3F3A]" onClick={clickHandler}>
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
