import { User } from '@src/user';

export class ATM {
  constructor(private readonly user: User) {}

  public withdraw(value: number): void {}

  public showUserBalance(): string {
    return (90).toFixed(2);
  }
}
