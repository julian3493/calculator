const Calculate = (data, btn) => {
  let {
    total,
    next,
    operation,
  } = data;

  switch (btn) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case '.':
      total = `${total}.`;
      break;
    case '=':
      if (!total || !next || !operation) return 0;
      total = (total + operation + next).toString();
      break;
    case '+': case '-': case '*': case '/': case '%':
      total = operate(total, next, operation);
      break;
    case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
      if (!total) total = btn;
      if (total && !next) next = btn;
      break;
    default:
      total = 'Error';
  }
  return data;
};

export default Calculate;