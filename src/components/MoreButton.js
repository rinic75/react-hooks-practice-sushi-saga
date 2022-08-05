import React from "react";
import Sushi from "./Sushi";

function MoreButton({onSetPerpage}) {
  function handleClick() {
    onSetPerpage(prePerpage => prePerpage +4)
  }

  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
