import { NotEnoughCashError } from '@src/not-enough-cash-error';
export class User {
  constructor(private _balance: number) {}

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
