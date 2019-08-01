import React from "react";

const WordTense = props => {
  return <div>
          <div>Tense: </div>
            <div>{props.word.tense}</div>          
          </div>;
};

export default WordTense;
