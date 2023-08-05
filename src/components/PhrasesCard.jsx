/* eslint-disable react/prop-types */

const PhrasesCard = ({phraseRandom}) => {
  return (
    <div className="card">
      <p> {phraseRandom.phrase}</p>
      </div>
  )
}

export default PhrasesCard;