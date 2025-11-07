import React, { Suspense, use } from "react";
import { Link } from "react-router-dom";
import Slow from "../components/example";

function Home() {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-4 gap-2 min-h-screen bg-stone-300">
        <div className="bg-amber-50">
          <nav className="flex gap-4 p-4 bg-gray-200">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
        <div className="bg-amber-50">2</div>
        <div className="bg-amber-50">3</div>
        <div className="bg-amber-50">4</div>
        <div className="bg-amber-50 row-span-3">
          <Slow />
        </div>
        <div className="bg-amber-50 ">6</div>
        <div className="bg-amber-50  row-start-4">7</div>
        <div className="bg-amber-50 col-start-3 row-start-4">8</div>
      </div>
    </>
  );
}

export default Home;
