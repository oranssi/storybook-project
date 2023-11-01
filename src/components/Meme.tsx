import React, { useRef, useState } from 'react';
import MemeData from '../data/MemeData';
import html2canvas from 'html2canvas';

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

  const memeRef = useRef<HTMLDivElement>(null);

  const handleNewImage = () => {
    setRandomImg(getRandomMemeUrl());
  };



  const handleSave = async () => {
    try {
        const canvas = await html2canvas(memeRef.current as HTMLDivElement, {
    useCORS: true
});
        const imgURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'meme.png';
        link.href = imgURL;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error("Error saving meme:", error);
    }
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white space-y-4">
      <div className="relative p-4 mb-4 bg-transparent">
        <div ref={memeRef}>
            <img src={randomImg} alt="Meme Image" crossOrigin="anonymous" className="w-auto max-w-md max-h-md mx-auto" />
            <h2 className="absolute top-0 left-0 right-0 text-center text-white font-bold text-2xl p-4">{topText}</h2>
            <h2 className="absolute bottom-0 left-0 right-0 text-center text-white font-bold text-2xl p-4">{bottomText}</h2>
        </div>
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
