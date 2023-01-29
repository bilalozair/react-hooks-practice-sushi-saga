import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";


function SushiContainer({sushiList, onEatSushi}) {

  const [sushiIndex, setSushiIndex] = useState(0)
  
  
  function handleMoreButtonClick(startPoint) {
      setSushiIndex(startPoint)
      console.log(startPoint)
  }

  
  const sushiBeltDisplay = sushiList.slice(sushiIndex,sushiIndex+4).map((sushi, index) => {
   return  <Sushi key = {sushi.id} sushi = {sushi} onEatSushi = {onEatSushi} />
  })
  
  return (
    <div className="belt">
      {sushiBeltDisplay}
      <MoreButton onMoreClick = {handleMoreButtonClick}/>
    </div>
  );
}

export default SushiContainer;
