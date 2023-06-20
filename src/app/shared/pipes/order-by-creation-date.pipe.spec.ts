import { OrderByCreationDatePipe } from './order-by-creation-date.pipe';

describe('OrderByCreationDatePipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByCreationDatePipe();
    expect(pipe).toBeTruthy();
  });
});
