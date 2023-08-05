import { useState } from 'react';
import PhrasesCard from './components/PhrasesCard';
import ButtonPhrase from './components/ButtonPhrase'
import phrases from './utils/phrases.json'
import randomElementFromArray from './utils/randomElementFromArray'
import images from '../public/images/rectangle1.svg'
import './App.css';

function App() {
  const arrBackground = [1, 2, 3, 4];

  const initialPath = randomElementFromArray(arrBackground)
  const initialRandom = randomElementFromArray(phrases)
  const [phraseRandom, setPhraseRandom] = useState(initialRandom)
  const [pathRandom, setPathRandom] = useState(initialPath) 

  const objStyle = {
    backgroundImage: `url('/images/fondo${pathRandom}.jpg')`
  }
  

  return (
    <div className='app' style={objStyle}>
      <h1 className='app__title'>Fortune cookie</h1>
      <ButtonPhrase
      setPhraseRandom={setPhraseRandom}
      setPathRandom={setPathRandom}
      arrBackground={arrBackground}
      />
      <PhrasesCard 
      phraseRandom={phraseRandom}
      randomElementFromArray={randomElementFromArray}
      images={images}
       />


    </div>
  );
}

export default App;
