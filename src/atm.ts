import { User } from '@src/user';
import { NotAllowedValueError } from '@src/not-allowed-value-error';

export class ATM {
  private tax = 0.5;
  constructor(private readonly user: User) {}

  public withdraw(value: number): void {
    if (value < 0) {
      throw new NotAllowedValueError();
    }

    if (value % 5 !== 0) {
      throw new NotAllowedValueError();
    }

    this.user.withdraw(value + this.tax);
  }

  public showUserBalance(): string {
    return this.user.balance.toFixed(2);
  }
}
