import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { MdOutlineContactPhone } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<MdOutlineContactPhone size={40} />}
      />
    </section>
  );
};

export default Contact;
