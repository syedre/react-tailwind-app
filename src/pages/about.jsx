import React, { Suspense } from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div>About</div>
      <Link to="/">
        <button className="text-blue-300"> back to home</button>
      </Link>
    </div>
  );
};

export default About;
