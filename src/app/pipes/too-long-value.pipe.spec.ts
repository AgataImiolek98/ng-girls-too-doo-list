import { TooLongValuePipe } from './too-long-value.pipe';

describe('TooLongValuePipe', () => {
  it('create an instance', () => {
    const pipe = new TooLongValuePipe();
    expect(pipe).toBeTruthy();
  });
});
