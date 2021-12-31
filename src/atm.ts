import { User } from '@src/user';

export class ATM {
  private tax = 0.5;
  constructor(private readonly user: User) {}

  public withdraw(value: number): void {
    this.user.withdraw(value + this.tax);
  }

  public showUserBalance(): string {
    return this.user.balance.toFixed(2);
  }
}
