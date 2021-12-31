import { ATM } from '@src/atm';
import { User } from '@src/user';

describe('success case', () => {
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

    expect(atm.showUserBalance()).toEqual('45.50');
  });
});
