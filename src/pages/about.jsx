import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import Content from "../components/sample";
import { useDispatch } from "react-redux";
import { increment } from "../redux-slice/counter-slice";

const About = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>About</div>
      <Content />

      <Link to="/">
        <button className="text-blue-300"> back to home</button>
      </Link>
      <button onClick={() => dispatch(increment())}>redux Add</button>
    </div>
  );
};

export default About;
