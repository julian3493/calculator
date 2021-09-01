import calculate from '../logic/calculate';

describe('Calculate', () => {
  it('it test the addition of numbers using = button', () => {
    const total = calculate({ total: '8', next: '5', operation: '+' }, '=');
    expect(total).toEqual({ total: '13', next: '13', operation: null });
  });

  it('it test the substract of numbers using = button', () => {
    const total = calculate({ total: '8', next: '7', operation: '-' }, '=');
    expect(total).toEqual({ total: '1', next: '1', operation: null });
  });

  it('it test multiply the numbers using = button', () => {
    const total = calculate({ total: '2', next: '7', operation: 'X' }, '=');
    expect(total).toEqual({ total: '14', next: '14', operation: null });
  });

  it('it test the divide of numbers using = button', () => {
    const total = calculate({ total: '8', next: '2', operation: '÷' }, '=');
    expect(total).toEqual({ total: '4', next: '4', operation: null });
  });

  it('it test the addition of numbers using an operation button', () => {
    const total = calculate({ total: '8', next: '5', operation: '+' }, '+');
    expect(total).toEqual({ total: '13', next: '13', operation: '+' });
  });

  it('it test the substract of numbers using an operation button', () => {
    const total = calculate({ total: '8', next: '7', operation: '-' }, '+');
    expect(total).toEqual({ total: '1', next: '1', operation: '+' });
  });

  it('it test multiply the numbers using an operation button', () => {
    const total = calculate({ total: '2', next: '7', operation: 'X' }, '+');
    expect(total).toEqual({ total: '14', next: '14', operation: '+' });
  });

  it('it test the divide of numbers using an operation button', () => {
    const total = calculate({ total: '8', next: '2', operation: '÷' }, '+');
    expect(total).toEqual({ total: '4', next: '4', operation: '+' });
  });

  it('it converts to a negative number', () => {
    const total = calculate({ total: '10', next: '10', operation: null }, '+/-');
    expect(total).toEqual({ total: -10, next: '-10', operation: null });
  });

  it('it converts to a positive number', () => {
    const total = calculate({ total: '-2', next: '-1', operation: null }, '+/-');
    expect(total).toEqual({ total: 2, next: '1', operation: null });
  });

  it('it puts value in 0', () => {
    const total = calculate({ total: '1333', next: '1330', operation: '+' }, 'AC');
    expect(total).toEqual({ total: '0', next: '0', operation: null });
  });

  it('it convert the number into a percent number', () => {
    const total = calculate({ total: '40', next: '40', operation: null }, '%');
    expect(total).toEqual({ total: '0.4', next: '0.4', operation: null });
  });
});