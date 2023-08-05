/* eslint-disable react/prop-types */
import randomElementFromArray from "../utils/randomElementFromArray"
import phrases from '../utils/phrases.json'

const ButtonPhrase = ({setPhraseRandom, setPathRandom, arrBackground}) => {

  const handleRandomPhrase = () => {
    setPhraseRandom(randomElementFromArray(phrases))
    setPathRandom(randomElementFromArray(arrBackground))
  }
  
  return (
    <div>
      <button className="app__btn" onClick={handleRandomPhrase}>Try My Luck</button>
    </div>
  )
}

export default ButtonPhrase;