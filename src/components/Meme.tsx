import React from 'react';

export interface MemeProps {
  topText: string;
  bottomText: string;
  randomImg: string;
}

const Meme: React.FC<MemeProps> = (props) => {
  return (
    <div className="meme">
      <img src={props.randomImg} alt="" />
      <h2 className="top">{props.topText}</h2>
      <h2 className="bottom">{props.bottomText}</h2>
    </div>
  );
}

export default Meme;
