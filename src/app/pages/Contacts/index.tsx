import React, { FC } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ContactInfo from "./ContactInfo";
import Questions from "./Questions";

const Contacts: FC = () => {
  return (
    <div>
      <Navbar />
      <ContactInfo />
      <Questions />
      <Footer />
    </div>
  );
};

export default Contacts;
