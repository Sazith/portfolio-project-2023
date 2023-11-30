import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { GrResume } from "react-icons/gr";
import "./style.scss";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent headerText="My Resume" icon={<GrResume size={40} />} />
      <div className="timeline"></div>
    </section>
  );
};

export default Resume;
