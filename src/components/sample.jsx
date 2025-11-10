import React from "react";
import { withTheme } from "../hoc/isTheme";

function Content(props) {
  return (
    <div>
      {props.dark === "dark" ? "its quite dark" : "ites lignt"}
      {props.count}
      <button onClick={props.increment}>Add</button>
    </div>
  );
}

export default withTheme(Content);
