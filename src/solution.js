var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

function checkSum()
{
  let checkSumArray = [];
  data.forEach(numArray =>
    {
      let min = numArray[0];
      let max = min;
      numArray.forEach(num =>
          {
            if(min > num)
            {
              min = num;
            }
            if(max < num)
            {
              max = num;
            }
          });
      checkSumNum = max - min;
      checkSumArray.push(checkSumNum);
    });
  return checkSumArray;
}
