import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { MdBroadcastOnPersonal } from "react-icons/md";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Welcome to my Portfolio"
        icon={<MdBroadcastOnPersonal size={40} />}
      />
    </section>
  );
};

export default Portfolio;
