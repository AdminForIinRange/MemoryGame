import "./singleCard.css";

import React from "react";

export default function SingleCard({ card, handleChoiceOne, flipped,  disabled}) {
    function handleClick() {

        if ( !disabled) {
            handleChoiceOne(card)

        }
       
      
        
    }


  return (
    <div className="card" >
      <div className={flipped ? "flipped" : "" }>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src="/img/cover.png" onClick={handleClick} alt="cover" />
      </div>
    </div>
  );
}
