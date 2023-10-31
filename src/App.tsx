import React from 'react';
import './App.css'; // Assuming you have styles defined in App.css
import Meme from './components/Meme';

const App: React.FC = () => {
  return (
    <div className="App">
      <Meme 
        topText="Sample Top Text"
        bottomText="Sample Bottom Text"
        randomImg="https://i.imgflip.com/1bij.jpg"
      />
    </div>
  );
}

export default App;

