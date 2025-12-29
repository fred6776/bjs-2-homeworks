function getArrayParams(...arr) {
  min = Infinity;
  max = -Infinity;
  sum = 0;
  min = Math.min(...arr);
  max = Math.max(...arr);
  sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function differenceMaxMinWorker(...arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return max - min
}

function differenceEvenOddWorker(...arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else if (arr[i] % 2 !== 0) {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (i = 0; i < arrOfArr.length; i++) {
    const currentValue = func(...arrOfArr[i]);
    if (currentValue > maxWorkerResult) {
      maxWorkerResult = currentValue;
    }
  }
  return maxWorkerResult;
}