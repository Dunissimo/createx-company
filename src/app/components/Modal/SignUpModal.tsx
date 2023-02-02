import { FC } from "react";
import { useAlert } from "../../utils/hooks";
import FillButton from "../Buttons/FillButton";
import Alert from "../Feedback/Alert";

interface IProps {
  clickHandler: () => void;
}

const SignUp: FC<IProps> = ({ clickHandler }) => {
  const { isOpen, showAlert } = useAlert(2500);

  return (
    <div>
      <div className="top mb-8 border-b-2 border-gray-300 px-6 py-4 2xlpx-12 2xl:py-12">
        <div className="modal-container  mx-auto">
          <div className="text-center mb-6 relative">
            <h2 className="text-2xl mb-4">Sign up</h2>
            <p className="opacity-50 text-base">
              Registration takes less than a minute but gives you full control
              over your studying.
            </p>
          </div>
          <form action="post">
            <div className="flex flex-col gap-2 mb-4">
              <label className="font-normal" htmlFor="fullName-modal">
                Full Name
              </label>
              <input
                className="register-input"
                placeholder="Your full name"
                type="text"
                name="fullName"
                id="fullName-modal"
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label className="font-normal" htmlFor="email-modal">
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
            <div className="flex flex-col gap-2 mb-4">
              <label className="font-normal" htmlFor="password">
                Confirm paswword
              </label>
              <input
                className="register-input"
                placeholder="Confirm paswword"
                type="password"
                name="password"
                id="confirm-password"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input type="checkbox" name="keepSignIn" id="keepSignIn" />
                <label htmlFor="keepSignIn" className="font-normal ml-2">
                  Remember me
                </label>
              </div>
            </div>
            <FillButton
              text="Sign up"
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
            Already have an account?{" "}
            <button className="text-[#FF3F3A]" onClick={clickHandler}>
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
