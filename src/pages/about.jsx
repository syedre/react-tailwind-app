import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import Content from "../components/sample";

const About = () => {
  return (
    <div>
      <div>About</div>
      <Content />
      <Link to="/">
        <button className="text-blue-300"> back to home</button>
      </Link>
    </div>
  );
};

export default About;
