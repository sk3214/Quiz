/* eslint-disable react/prop-types */

const QuestionPage = ({ question, options, selectedAnswer, onAnswerSelect } ) => {
  return (
    <div>
      <h2>{question}</h2>
      <div>
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onAnswerSelect(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionPage;
