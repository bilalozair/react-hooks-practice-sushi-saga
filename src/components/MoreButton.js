import React from "react";

let clickCounter = 0;
function MoreButton({onMoreClick}) {

 

  function handleMoreButtonClick() {
    
    onMoreClick(clickCounter+=4)
  }

  return <button onClick={handleMoreButtonClick}>More sushi!</button>;
}

export default MoreButton;
