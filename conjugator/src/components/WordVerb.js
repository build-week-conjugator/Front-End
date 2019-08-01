import React from "react";

const WordVerb = props => {
  return <div>
            <div>Verb:</div>
            <div>{props.word.infinitive} ({props.word.infinitive_english})</div>
          </div>;
};

export default WordVerb;
