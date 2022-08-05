import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis, handleEatSushi }) {
  const [perpage, setPerpage] = useState(0)
  const renderSushi = sushis
  .slice(perpage, perpage+4)  
  .map(sushi => {
    return (
      <Sushi key={sushi.id} sushi={sushi} handleEatSushi={handleEatSushi} />
    )
  })
  return (
    <div className="belt">
      {renderSushi}
      <MoreButton onSetPerpage={setPerpage}/>
    </div>
  );
}

export default SushiContainer;
