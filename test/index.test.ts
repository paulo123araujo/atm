import { ATM } from '@src/atm';
import { User } from '@src/user';
import { NotEnoughCashError } from '@src/not-enough-cash-error';

describe('use cases', () => {
  test('should create a cash machine with a user', () => {
    const initialBalance = 120;
    const user = new User(initialBalance);
    const atm = new ATM(user);

    expect(atm.showUserBalance()).toEqual('120.00');
  });

  test('should withdraw half from user balance', () => {
    const initialBalance = 100;
    const user = new User(initialBalance);
    const atm = new ATM(user);

    const withdraw = 50;
    atm.withdraw(withdraw);

    expect(atm.showUserBalance()).toEqual('49.50');
  });

  test('should launch exception if try to withdraw value higher than user balance', () => {
    const initialBalance = 100;
    const user = new User(initialBalance);
    const atm = new ATM(user);

    const withdraw = 150;
    try {
      atm.withdraw(withdraw);
    } catch (e) {
      expect(e).toBeInstanceOf(NotEnoughCashError);
    }
  });
});
