import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import Content from "@/components/sample";
import { useDispatch } from "react-redux";
import { increment } from "@/redux-slice/counter-slice";
import { Tabs } from "@/components/tabs";

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

      <Tabs>
        <Tabs.TabsList>
          <Tabs.TabListData index={0}>🏡HOME</Tabs.TabListData>
          <Tabs.TabListData index={1}>📇contact</Tabs.TabListData>
          <Tabs.TabListData index={2}>💻 About</Tabs.TabListData>
        </Tabs.TabsList>
        <Tabs.TabsContent index={0}> Its a home</Tabs.TabsContent>
        <Tabs.TabsContent index={1}> Its a contact</Tabs.TabsContent>
        <Tabs.TabsContent index={2}> Its a About</Tabs.TabsContent>
      </Tabs>
    </div>
  );
};

export default About;
