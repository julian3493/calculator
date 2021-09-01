import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let one;
  let two;

  if (numberOne != null && numberTwo != null) {
    one = Big(numberOne);
    two = Big(numberTwo);
  }

  switch (operation) {
    case '+':
      return one.plus(two);
    case '-':
      return one.minus(two);
    case 'X':
      return one.times(two);
    case '÷':
      if (numberTwo === '0') return 'Error';
      return one.div(two);
    case '%':
      return one.div(100);
    default:
      return 'Error';
  }
};

export default operate;
