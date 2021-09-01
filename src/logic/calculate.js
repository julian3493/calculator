import operate from './operate';

let helper = false;

const calculate = (data, btn) => {
  let { total, next, operation } = data;

  switch (btn) {
    case 'AC':
      total = '0';
      next = '0';
      operation = null;
      helper = false;
      break;

    case '+/-':
      total *= -1;
      next = (next * -1).toString();
      helper = false;
      break;

    case '.':
      if (!next.includes('.')) {
        next = `${next}.`;
        if (!operation) total = `${total}.`;
      }
      break;

    case '=':
      if (operation) {
        total = operate(total, next, operation).toString();
        next = total;
        operation = null;
      }
      break;

    case '+': case '-': case 'X': case '÷':
      if (operation) {
        total = operate(total, next, operation).toString();
        next = total.toString();
        helper = true;
      } else {
        next = '0';
      }
      operation = btn;
      break;

    case '%':
      total = operate(total, next, btn).toString();
      next = total;
      operation = null;
      break;

    case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
      if (!total || total === '0') {
        total = btn;
        next = btn;
      } else if (!operation) {
        total += btn;
        next += btn;
      } else {
        if (helper) {
          next = '0';
          helper = false;
        }
        if (!next || next === '0') next = btn;
        else next += btn;
      }

      break;
    default:
      total = 'Error';
  }

  const result = {
    total,
    next,
    operation,
  };

  return result;
};

export default calculate;
