import { NotEnoughCashError } from '@src/not-enough-cash-error';
import { NotAllowedValueError } from '@src/not-allowed-value-error';
export class User {
  private _balance: number;

  constructor(balance: number) {
    if (balance < 0) {
      throw new NotAllowedValueError();
    }

    this._balance = balance;
  }

  public withdraw(value: number): void {
    if (value > this.balance) {
      throw new NotEnoughCashError();
    }

    this._balance -= value;
  }

  public get balance(): number {
    return this._balance;
  }
}
