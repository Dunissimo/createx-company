import { FC, useEffect } from "react";
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillExclamationCircle,
  AiFillInfoCircle,
} from "react-icons/ai";
import { close } from "../../../redux/slices/alertsSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

type tPosition = "left-top" | "left-bottom" | "right-top" | "right-bottom";
type tType = "success" | "info" | "warning" | "error";

interface IProps {
  text: string;
  position: tPosition;
  type: tType;
}

const Alert: FC<IProps> = ({ text, position, type }) => {
  const { isOpen } = useAppSelector((state) => state.alerts);

  const baseStyles = `alert text-[#000] fixed z-50 flex items-center m-6 px-4 py-2 rounded-[10px] font-normal border-2`;
  const options = {
    success: {
      styles: `bg-[#F6FFED] border-[#B7EB8F]`,
      icon: <AiFillCheckCircle color="#52C41A" size="1.2rem" />,
    },
    info: {
      styles: `bg-[#E6F4FF] border-[#91CAFF]`,
      icon: <AiFillInfoCircle color="#1677FF" size="1.2rem" />,
    },
    warning: {
      styles: `bg-[#FFFBE6] border-[#FFE58F]`,
      icon: <AiFillExclamationCircle color="#FAAD14" size="1.2rem" />,
    },
    error: {
      styles: `bg-[#FFF2F0] border-[#FFCCC7]`,
      icon: <AiFillCloseCircle color="#FF4D4F" size="1.2rem" />,
    },
  };
  const positionStyles = {
    "left-top": "top-0 left-0",
    "left-bottom": "bottom-0 left-0",
    "right-top": "top-0 right-0",
    "right-bottom": "bottom-0 right-0",
  };

  if (!isOpen) return null;

  return (
    <div
      className={`${baseStyles} ${options[type].styles} ${positionStyles[position]}`}
    >
      <div className="mr-2">{options[type].icon}</div>
      {text}
    </div>
  );
};

export default Alert;
