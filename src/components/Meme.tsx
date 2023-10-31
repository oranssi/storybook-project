import React, { useState } from 'react';
import MemeData from '../data/MemeData';

export interface MemeProps {
  initialImageUrl: string;
  initialTopText?: string;
  initialBottomText?: string;
}
const getRandomMemeUrl = () => {
    const randomIndex = Math.floor(Math.random() * MemeData.data.memes.length);
    return MemeData.data.memes[randomIndex].url;
  };

const Meme: React.FC = () => {
  const [randomImg, setRandomImg] = useState<string>(getRandomMemeUrl());
  const [topText, setTopText] = useState<string>('');
  const [bottomText, setBottomText] = useState<string>('');

  const handleNewImage = () => {
    setRandomImg(getRandomMemeUrl());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white space-y-4">
      <div className="relative p-4 mb-4">
        <img src={randomImg} alt="Meme Image" className="w-auto max-w-md max-h-md mx-auto" />
        <h2 className="absolute top-0 left-0 right-0 text-center text-white font-bold text-2xl p-4">{topText}</h2>
        <h2 className="absolute bottom-0 left-0 right-0 text-center text-white font-bold text-2xl p-4">{bottomText}</h2>
      </div>

      <div className="space-y-2">
        <input 
          type="text" 
          placeholder="Sample Top Text" 
          className="border rounded py-2 px-4"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Sample Bottom Text" 
          className="border rounded py-2 px-4"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
      </div>

      <button onClick={handleNewImage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Generate New Image
      </button>
    </div>
  );
}

export default Meme;
