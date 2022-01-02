export class NotAllowedValueError extends Error {
  constructor() {
    super('Not allowed value');
    this.name = 'NotAllowedValueError';
  }
}
