const fizzbuzz = (number) => {
  let result = "";
  if (number % 3 === 0) {
    result += "Fizz";
  }
  if (number % 5 === 0) {
    result += "Buzz";
  }

  return (
    `${result.charAt(0).toUpperCase()}${result.slice(1).toLowerCase()}` ||
    number
  );
};

module.exports = { fizzbuzz };
