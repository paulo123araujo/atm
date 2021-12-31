export class User {
  constructor(private _balance: number) {}

  public withdraw(value: number): void {
    this._balance -= value;
  }

  public get balance(): number {
    return this._balance;
  }
}
