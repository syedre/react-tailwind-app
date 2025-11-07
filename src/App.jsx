import { Suspense, use, useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-4 gap-2 min-h-screen bg-stone-300">
        <div className="bg-amber-50">1</div>
        <div className="bg-amber-50">2</div>
        <div className="bg-amber-50">3</div>
        <div className="bg-amber-50">4</div>
        <div className="bg-amber-50 row-span-3">
          <Suspense fallback={<div>loading .......</div>}>
            <Slow />
          </Suspense>
        </div>
        <div className="bg-amber-50 ">6</div>
        <div className="bg-amber-50  row-start-4">7</div>
        <div className="bg-amber-50 col-start-3 row-start-4">8</div>
      </div>
    </>
  );
}

async function getData() {
  await new Promise((resolve) => setTimeout(resolve("yes"), 4000));
  return "yeah";
}

function Slow() {
  const data = use(getData());
  return <div>{JSON.stringify(data)}</div>;
}

export default App;
