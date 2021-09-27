getMaxNumber([12, 21, 3, 9, 76]);

function getMaxNumber(numbers) {
  if (numbers.length == 0) {
    console.error("Invalid numbers");
    return "Invalid numbers";
  }
  const maxNumber = numbers.reduce((a, b) => (a > b ? a : b));
  console.log(maxNumber);
  return maxNumber;
}
