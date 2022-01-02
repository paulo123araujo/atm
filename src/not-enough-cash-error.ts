export class NotEnoughCashError extends Error {
  constructor() {
    super('Not enough cash');
    this.name = 'NotEnoughCashError';
  }
}
