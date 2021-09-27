move([1, 2, 3, 4, 5], 0, 2);

function move(array, index, offset) {
  const result = [...array];
  if (index + offset > array.length) {
    console.error("Invalid offset");
    return "Invalid offset";
  }
  if (Math.sign(offset) == -1) {
    if (-index > offset) {
      console.error("Invalid offset");
      return "Invalid offset";
    }
  }
  const element = result.splice(index, 1)[0];
  result.splice(index + offset, 0, element);
  console.log(result);
  return result;
}
