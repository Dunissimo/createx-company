import React, { FC } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ContactInfo from "./ContactInfo";
import Questions from "./Questions";

const Contacts: FC = () => {
  return (
    <>
      <Navbar />
      <ContactInfo />
      <Questions />
      <Footer />
    </>
  );
};

export default Contacts;
