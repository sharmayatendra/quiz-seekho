import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calculateScore } from "../utils/helper";

const Result = () => {
  const { mcqs } = useSelector((store) => store.quiz.quiz);
  const answers = useSelector((store) => store.quiz.answers);
  const timeTaken = useSelector((store) => store.quiz.timeTaken);
  let timeString =
    timeTaken === 60
      ? "1:00"
      : timeTaken < 10
      ? "0:0" + timeTaken
      : "0:" + timeTaken;
  const { val, percent, correct, total } = calculateScore(mcqs, answers);

  return (
    <div className="w-full sm:px-4 md:px-8 lg:px-20 xl:px-24">
      <div className="flex flex-col justify-between gap-4 sm:mx-4 md:mx-8 lg:mx-20 xl:mx-24">
        <div className="flex flex-col gap-4 p-4">
          <p className="text-2xl text-gray-700 font-bold">The Physics Quiz</p>
          <div className="flex flex-col gap-2 items-center py-4 px-8 bg-white shadow-md rounded-xl">
            <p className="text-xs text-green-500 font-medium">You Scored:</p>
            <p className="text-3xl text-purple-700 font-bold">{percent}%</p>
            <p className="font-medium text-gray-600">
              {percent > 50 ? "Nice Work 😊, Keep it up" : "You can do better!"}
            </p>
          </div>
        </div>
        <div className="flex justify-between px-8">
          <div className="flex flex-col gap-1">
            <p className="text-gray-700 font-semibold">Your Score</p>
            <p className="text-3xl text-purple-700 font-bold">{`${correct}/${total}`}</p>
            <p className="text-xs font-medium text-gray-700">
              Avg: {val} marks
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray-700 font-semibold">Time Taken</p>
            <p>
              <span className="text-3xl text-purple-700 font-bold">
                {timeString}
              </span>
              <span className="text-xs font-medium text-gray-700">min</span>
            </p>
            <p className="text-xs font-medium text-gray-600">
              Avg: {timeString} mins
            </p>
          </div>
        </div>
        <div className="text-center bg-white py-8 sm:mx-4 sm:rounded-t-md">
          <button className="px-4 py-2 w-28 bg-purple-800 text-white rounded-full">
            <Link to="/answers">Answers</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
