import React, { FC } from "react";
import Footer from "../../components/Reuse/Footer";
import Navbar from "../../components/Reuse/Navbar";
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
