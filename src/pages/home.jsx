import React, { Suspense, use, useState } from "react";
import { Link } from "react-router-dom";
import Slow from "../components/example";
import { Moon, Sun } from "lucide-react";
import Counter from "../components/Reducer";
import { useSelector } from "react-redux";
import { useDebounce } from "../hooks/debounce";

function Home() {
  const [isDark, setDark] = useState(false);
  const [search, setSearch] = useState("");
  const data = useSelector((state) => state.count.value);
  const [searchData] = useDebounce(search, 3000);

  function toogle() {
    setDark(!isDark);
    document.documentElement.classList.toggle("dark", isDark === false);
  }
  return (
    <div>
      <div className="grid grid-cols-3 grid-rows-4 gap-2 min-h-screen bg-background dark:text-white">
        <div className="bg-amber-50">
          <nav className="flex gap-4 p-4 bg-gray-200">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
        <div className="bg-amber-50">
          <button
            onClick={toogle}
            className="dark:text-white dark:bg-amber-300"
          >
            toggle
          </button>
        </div>
        <div className="bg-amber-50">3</div>
        <div className="bg-amber-50">4</div>
        <div className="bg-amber-50 row-span-3">
          <Slow />
        </div>
        <div className="rounded-full ">{isDark ? <Sun /> : <Moon />}</div>
        <div className="bg-amber-50  row-start-4">{data} redux</div>
        <div className="bg-amber-50 col-start-3 row-start-4">
          <Counter />
          <input
            placeholder="search "
            className="border border-red-300"
            onChange={(e) => setSearch(e.target.value)}
          />

          {JSON.stringify(searchData)}
        </div>
      </div>
    </div>
  );
}

export default Home;
