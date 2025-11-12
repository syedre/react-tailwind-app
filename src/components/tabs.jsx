import React, { createContext, useContext, useState } from "react";

const TabContext = createContext();

export const Tabs = ({ children }) => {
  const [active, setActive] = useState(0);

  return (
    <TabContext.Provider value={{ active, setActive }}>
      <div>{children}</div>;
    </TabContext.Provider>
  );
};

const TabsList = ({ children }) => {
  return <div>{children}</div>;
};

const TabListData = ({ children, index }) => {
  const { active, setActive } = useContext(TabContext);
  return (
    <div
      onClick={() => setActive(index)}
      className={`${
        active === index ? "bg-amber-200 border-amber-900 border-b" : ""
      } cursor-pointer `}
    >
      {children}
    </div>
  );
};

const TabsContent = ({ children, index }) => {
  const { active } = useContext(TabContext);

  return <>{active === index ? <div>{children}</div> : null}</>;
};

Tabs.TabsList = TabsList;
Tabs.TabListData = TabListData;
Tabs.TabsContent = TabsContent;
