export const calculateScore = (mcqs, ans) => {
  let score = { val: 0, percent: 0, correct: 0, total: mcqs.length };
  for (let i = 0; i < mcqs.length; i++) {
    const { id, options } = mcqs[i];
    const response = ans[id]?.value;
    const correctOption = options.find((option) => option.isCorrect);
    if (correctOption.option === response) {
      score.val++;
      score.correct++;
    }
  }
  score.percent = (score.correct / score.total) * 100;
  return score;
};

// [
//     {
//         "id": "1",
//         "question": "Who invented the laws of motion?",
//         "options": [
//             {
//                 "id": "11",
//                 "option": "Einstein",
//                 "isCorrect": false
//             },
//             {
//                 "id": "12",
//                 "option": "Faraday",
//                 "isCorrect": false
//             },
//             {
//                 "id": "13",
//                 "option": "Newton",
//                 "isCorrect": true
//             },
//             {
//                 "id": "14",
//                 "option": "Tesla",
//                 "isCorrect": false
//             }
//         ]
//     },
//     {
//         "id": "2",
//         "question": "What is the S.I unit of current?",
//         "options": [
//             {
//                 "id": "21",
//                 "option": "Volt(V)",
//                 "isCorrect": false
//             },
//             {
//                 "id": "22",
//                 "option": "Ampere(A)",
//                 "isCorrect": true
//             },
//             {
//                 "id": "23",
//                 "option": "Henry(H)",
//                 "isCorrect": false
//             },
//             {
//                 "id": "24",
//                 "option": "None of the above",
//                 "isCorrect": false
//             }
//         ]
//     },
//     {
//         "id": "3",
//         "question": "Rate of change of flux in a coil is:",
//         "options": [
//             {
//                 "id": "31",
//                 "option": "emf induced",
//                 "isCorrect": true
//             },
//             {
//                 "id": "32",
//                 "option": "current induced",
//                 "isCorrect": false
//             },
//             {
//                 "id": "33",
//                 "option": "resistance induced",
//                 "isCorrect": false
//             },
//             {
//                 "id": "34",
//                 "option": "capacitance induced",
//                 "isCorrect": false
//             }
//         ]
//     },
//     {
//         "id": "4",
//         "question": "Thevenin's theorem is used to calculate equivalent:",
//         "options": [
//             {
//                 "id": "41",
//                 "option": "force",
//                 "isCorrect": false
//             },
//             {
//                 "id": "42",
//                 "option": "energy",
//                 "isCorrect": false
//             },
//             {
//                 "id": "43",
//                 "option": "volatage and resistance",
//                 "isCorrect": true
//             },
//             {
//                 "id": "44",
//                 "option": "capacitance",
//                 "isCorrect": false
//             }
//         ]
//     },
//     {
//         "id": "5",
//         "question": "Rate of change of momentum is:",
//         "options": [
//             {
//                 "id": "51",
//                 "option": "capacitance",
//                 "isCorrect": false
//             },
//             {
//                 "id": "52",
//                 "option": "energy",
//                 "isCorrect": false
//             },
//             {
//                 "id": "53",
//                 "option": "volatage",
//                 "isCorrect": false
//             },
//             {
//                 "id": "54",
//                 "option": "force",
//                 "isCorrect": true
//             }
//         ]
//     }
// ]

// {
//     "1": {
//         "id": "1",
//         "value": "Einstein"
//     },
//     "2": {
//         "id": "2",
//         "value": "Henry(H)"
//     },
//     "3": {
//         "id": "3",
//         "value": "capacitance induced"
//     },
//     "4": {
//         "id": "4",
//         "value": "capacitance"
//     },
//     "5": {
//         "id": "5",
//         "value": "energy"
//     }
// }
