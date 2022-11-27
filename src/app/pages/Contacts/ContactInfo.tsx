import React, { FC } from "react";
import Container from "../../components/Container";
import ErrorBoundary from "../../components/Indicators/ErrorBoundary";
import Row from "../../components/Row";
import SocialMediaIcons from "../../components/SocialMediaIcons";
import Title from "../../components/Title";

const ContactInfo: FC = () => {
  const left = (
    <>
      <Title text={{ h2: "Get in touch", h3: "Contact info" }} />
      <ul className="contacts-list mt-12">
        <li className="relative before:content-[url(/public/images/contactsPage/chat-contacts.svg)] before:absolute before:top-0 before:left-[-2rem] ml-8">
          <h3>Talk to us:</h3>
          <p>hello@createx.com</p>
        </li>
        <li className="relative before:content-[url(/public/images/contactsPage/phone-contacts.svg)] before:absolute before:top-0 before:left-[-2rem] ml-8">
          <h3>Call us:</h3>
          <p>(405) 555-0128</p>
        </li>
        <li className="relative before:content-[url(/public/images/contactsPage/address-contacts.svg)] before:absolute before:top-0 before:left-[-2rem] ml-8">
          <h3>Address:</h3>
          <p>2464 Royal Ln. Mesa, New Jersey 45463, USA</p>
        </li>
      </ul>
      <h2 className="uppercase mt-12 mb-6">Follow us:</h2>
      <SocialMediaIcons theme="black" />
    </>
  );

  const right = (
    <div className="mt-6 lg:mt-0">
      <div className="empty-map flex items-center justify-center w-full h-full min-h-[100px] md:min-h-[300px] bg-gray-400">
        <p>Here should have been a map :(</p>
      </div>
    </div>
  );

  return (
    <ErrorBoundary>
      <div className="py-20">
        <Container>
          <Row left={left} right={right} />
        </Container>
      </div>
    </ErrorBoundary>
  );
};

export default ContactInfo;
