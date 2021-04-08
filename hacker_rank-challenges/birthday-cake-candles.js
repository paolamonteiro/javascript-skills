// You are in charge of the cake for a child's birthday. You have decided the 
// cake will have one candle for each year of their total age. They will only be 
// able to blow out the tallest of the candles. 
// Count how many candles are tallest.

const candles = [1, 4, 4, 3, 4];

const birthdayCakeCandles = (candles) => {
  let tallest = candles[0];

  candles.forEach(candle => {
    tallest = tallest < candle ? candle : tallest;
  });

  const count = candles.reduce((acc, cur) => {
    if (cur === tallest) acc += 1;
    return acc;
  }, 0);

  return count
}

console.log(birthdayCakeCandles(candles));
