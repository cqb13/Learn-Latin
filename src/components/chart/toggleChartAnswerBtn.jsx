import { useState } from "react";

const useAnswers = () => {
  const [answerBtnName, setAnswerBtnName] = useState("Show Answers");
  const [visibleAnswers, setVisibleAnswers] = useState(false);

  const toggleAnswers = () => {
    if (answerBtnName === "Hide Answers") {
      setAnswerBtnName("Show Answers");
      setVisibleAnswers(false);
    } else {
      setAnswerBtnName("Hide Answers");
      setVisibleAnswers(true);
    }
  };

  return {
    visibleAnswers,
    answerToggle: (
      <button className="Chart-Option" onClick={() => toggleAnswers()}>
        {answerBtnName}
      </button>
    ),
  };
};

export default useAnswers;
