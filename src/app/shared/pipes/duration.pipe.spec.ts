import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('should show the "3h 33min"', () => {
    const pipe = new DurationPipe();
    const duration = pipe.transform(213);
    expect(duration).toBe('3h 33min');
  });
});
