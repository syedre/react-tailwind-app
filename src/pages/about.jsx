import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import Content from "../components/sample";
import { useDispatch } from "react-redux";
import { increment } from "../redux-slice/counter-slice";
import Question from "../components/interview";
import Example from "../components/testx";

const About = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>About</div>
      <Example />
      {/* <Question /> */}
      {/* <Content />

      <Link to="/">
        <button className="text-blue-300"> back to home</button>
      </Link>
      <button onClick={() => dispatch(increment())}>redux Add</button> */}
    </div>
  );
};

export default About;
