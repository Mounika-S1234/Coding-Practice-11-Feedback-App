// Write your React code here.
import React, {useState} from 'react';
import './index.css';

const Feedback = ({resources}) => {
  const [isFeedbackGiven, setIsFeedbackGiven] = useState(false);
  
  const {emojis, loveEmojiUrl} = resources;

  const onEmojiClick = () => {
    setIsFeedbackGiven(true);
  };

  return (
    <div className="feedback-container">
      {isFeedbackGiven ? (
        <div className="thank-you-container">
          <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
          <h1>Thank You</h1>
          <p>We will use your feedback to improve our customer support performance.</p>
        </div>
      ) : (
        <div className="feedback-question-container">
          <h1>How satisfied are you with our customer support performance?</h1>
          <ul className="emojis-list">
            {emojis.map(emoji => (
              <li key={emoji.id}>
                <button onClick={onEmojiClick} className="emoji-button">
                  <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Feedback;
