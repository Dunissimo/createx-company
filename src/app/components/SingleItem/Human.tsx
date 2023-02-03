import { FC, ReactNode } from "react";
import { SiFacebook, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";
import { Link } from "react-router-dom";
import Container from "../Container";
import Row from "../Row";

interface IProps {
  human: {
    image: string;
    who: string;
    name: string;
    job: string;
  };
  about: string;
  children: ReactNode;
}

const Human: FC<IProps> = ({
  human: { image, who, name, job },
  about,
  children,
}) => {
  const left = (
    <div className="lg:w-2/3 bg-yellow-300 flex justify-center">
      <img src={`../images/${image}`} alt="404" />
    </div>
  );

  const right = (
    <>
      <div className="mb-8">
        <h3 className="uppercase">{who}</h3>
        <h2 className="font-black text-5xl mt-2 mb-4">{name}</h2>
        <p className="opacity-50">{job}</p>
      </div>
      <p className="my-8 opacity-75">{about}</p>
      {children}
      <div className="socialMedia human flex gap-4 mt-8">
        <Link to="/">
          <SiFacebook
            className="hover:fill-[red] transition-none"
            size="1.5rem"
          />
        </Link>
        <Link to="/">
          <SiInstagram
            className="hover:fill-[red] transition-none"
            size="1.5rem"
          />
        </Link>
        <Link to="/">
          <SiTwitter
            className="hover:fill-[red] transition-none"
            size="1.5rem"
          />
        </Link>
        <Link to="/">
          <SiLinkedin
            className="hover:fill-[red] transition-none"
            size="1.5rem"
          />
        </Link>
      </div>
    </>
  );

  return (
    <div className="py-20">
      <Container>
        <Row left={left} right={right} />
      </Container>
    </div>
  );
};

export default Human;
