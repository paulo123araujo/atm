import { User } from '@src/user';

export class ATM {
  constructor(private readonly user: User) {}

  public withdraw(value: number): void {
    this.user.withdraw(value);
  }

  public showUserBalance(): string {
    return this.user.balance.toFixed(2);
  }
}
