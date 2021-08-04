import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const one = Big(numberOne);
  const two = Big(numberTwo);

  switch (operation) {
    case '+':
      return one.plus(two);
    case '-':
      return one.minus(two);
    case 'X':
      return one.times(two);
    case '÷':
      return one.div(two);
    case '%':
      return one.mod(two);
    default:
      return 'Error';
  }
};

export default operate;
