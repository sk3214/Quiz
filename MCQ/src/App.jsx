import { useState } from 'react'
import './App.css'
// import QuestionPage from './Components/QuestionPage'
import QuizData from './Constants/QuestionsAndAnswers';
import QuestionPage from './Components/QuestionPage';
import ResultChart from './Components/ResultChart';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === QuizData[currentQuestion].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    }

    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    } else {
      setSubmitted(true);
    }
  };

  const isNextButtonDisabled = !selectedAnswer;

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setCorrectAnswers(0);
    setSubmitted(false);
  };

  return (
    <div>
      {submitted ? (
        <div>
          <h2>Quiz Results</h2>
          <p>Correct Answers: {correctAnswers}</p>
          <p>Incorrect Answers: {QuizData.length - correctAnswers}</p>
          <ResultChart
            correctAnswers={correctAnswers}
            totalQuestions={QuizData.length} />
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <QuestionPage
            question={QuizData[currentQuestion].question}
            options={QuizData[currentQuestion].options}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
          />
          <button
            onClick={handleNextQuestion}
            disabled={isNextButtonDisabled}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default App
