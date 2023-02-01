import { FC } from "react";
import { Link } from "react-router-dom";

import {
  SiFacebook,
  SiTwitter,
  SiYoutube,
  SiTelegram,
  SiInstagram,
  SiLinkedin,
} from "react-icons/si";

interface IProps {
  theme: string;
}

const SocialMediaIcons: FC<IProps> = ({ theme }) => {
  return (
    <ul
      className={`social-media ${theme} flex gap-6 justify-between lg:justify-start items-center`}
    >
      <li className="facebook">
        <Link to="/">
          <SiFacebook size="1.2rem" />
        </Link>
      </li>
      <li className="twitter">
        <Link to="/">
          <SiTwitter size="1.2rem" />
        </Link>
      </li>
      <li className="youtube">
        <Link to="/">
          <SiYoutube size="1.2rem" />
        </Link>
      </li>
      <li className="telegram">
        <Link to="/">
          <SiTelegram size="1.2rem" />
        </Link>
      </li>
      <li className="instagram">
        <Link to="/">
          <SiInstagram size="1.2rem" />
        </Link>
      </li>
      <li className="linkedIn">
        <Link to="/">
          <SiLinkedin size="1.2rem" />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMediaIcons;
